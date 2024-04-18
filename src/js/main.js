const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__link');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');
const navItems = document.querySelectorAll('.nav__link-desktop-item');
const scrollSpySections = document.querySelectorAll('.section');

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile--active');

	navBtnBars.classList.add('black-bars-color');

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color');
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.innerText = year;
};

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach(section => {
			// console.log(window.scrollY);
			// console.log(section.offsetTop);
			// console.log(section.offsetHeight);

			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
				sections.push(section);

				const activeSection = document.querySelector(`a[class*="nav__link-desktop-item"][href*="${sections[0].id}"]`);

				console.log(activeSection);

				navItems.forEach(item => item.classList.remove('nav__link-desktop-item--active'));

				activeSection.classList.add('nav__link-desktop-item--active');
			}
		});
	}
};
handleCurrentYear();
window.addEventListener('scroll', handleObserver);
window.addEventListener('scroll', handleScrollSpy);
