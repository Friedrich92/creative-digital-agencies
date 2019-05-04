let burgerButton = document.querySelector('.burger-menu_link');
let burgerNav = document.querySelector('.burger-menu_nav');

burgerButton.addEventListener('click', (event) => {
	event.preventDefault();
	burgerButton.classList.toggle('burger_active');	
 	burgerNav.classList.toggle('visible');
})

burgerNav.addEventListener('click', (event) => {
	if (event){
		burgerNav.classList.toggle('visible');
		burgerButton.classList.toggle('burger_active');
	}
})


