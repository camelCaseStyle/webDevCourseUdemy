var list = document.querySelectorAll('li');

for(var i = 0; i < list.length; i++){
    list[i].addEventListener('mouseover', function(){
        this.classList.toggle("red");
    });
    list[i].addEventListener('mouseout', function(){
        this.classList.toggle("black");
    });
    
    list[i].addEventListener('click', function(){
        this.classList.toggle("done");
    });
}

