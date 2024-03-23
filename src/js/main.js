const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__link');
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile--active');
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleObserver = () => {
	const currentSection = window.scrollY; 
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
