let buttonScroll = document.querySelector('.scroll_down');
let currentCoordinate;
let timer;

buttonScroll.addEventListener('click', (event) => {
	event.preventDefault();
	currentCoordinate = window.pageYOffset;
	scrollDown();
})

function scrollDown(){
	if (currentCoordinate < 800){
		window.scroll(0, currentCoordinate);
		currentCoordinate = currentCoordinate + 10;
		timer = setTimeout(scrollDown, 10);
	}
}

