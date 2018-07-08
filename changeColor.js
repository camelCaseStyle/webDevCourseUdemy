var clickedButton = document.querySelector('button');

clickedButton.addEventListener('click', function(){
	
	if(document.body.style.backgroundColor =='white' || document.body.style.backgroundColor === ''){
		document.body.style.backgroundColor ='purple';
	}else{
		document.body.style.backgroundColor ='white';
	}
	
});