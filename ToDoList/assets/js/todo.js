/*globals $:false,
 jQuery:false    
*/

// Check of todos when done 

var ENTER_KEY = 13;
jQuery("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});


//click on 'X' to remove to do 
jQuery("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        this.remove();
    });
    
   event.stopPropagation();
});


jQuery("input[type='text']").keypress(function(event){
    if(event.which === ENTER_KEY){
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>"+$(this).val() +"</li>");
        $(this).val("Add new to do");
    }
})

jQuery("h1").on('click', ".fa-plus-square", function(){
   $("input[type='text']").fadeToggle("fast"); 
});