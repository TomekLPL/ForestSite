const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__link')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
const navItems = document.querySelectorAll('.nav__link-desktop-item')
const scrollSpySections = document.querySelectorAll('.section')

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile--active')

	navBtnBars.classList.add('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()

	footerYear.innerText = year
}

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 105) {
				sections.push(section)

				const activeSection = document.querySelector(`a[class*="nav__link-desktop-item"][href*="${sections[0].id}"]`)

				navItems.forEach(item => item.classList.remove('nav__link-desktop-item--active'))

				activeSection.classList.add('nav__link-desktop-item--active')
			}
		})
	}
}

const subpageSpy = () => {
	if (document.body.classList.contains('offer-subpage')) {
		navItems.forEach(item => item.classList.remove('nav__link-desktop-item--active'))

		navItems.forEach(function (navItems) {
			if (navItems.textContent.includes('Oferta')) {
				navItems.classList.add('nav__link-desktop-item--active')
			}
		})
	}

	if (document.body.classList.contains('contact-subpage')) {
		navItems.forEach(item => item.classList.remove('nav__link-desktop-item--active'))

		navItems.forEach(function (navItems) {
			if (navItems.textContent.includes('Kontakt')) {
				navItems.classList.add('nav__link-desktop-item--active')
			}
		})
	}
}

handleCurrentYear()
subpageSpy()
window.addEventListener('scroll', handleObserver)
window.addEventListener('scroll', handleScrollSpy)
