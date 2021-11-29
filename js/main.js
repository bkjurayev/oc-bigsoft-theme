const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone[iPad]iPad/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},	
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() || 
			isMobile.Windows()
		)
	}
}
if (isMobile.any()) {
	document.body.classList.add('_touch')
} else {
	document.body.classList.add('_pc')
}
// header
const burger = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
const btnConnection = document.querySelector('.connection__btn')
const connectionForm = document.querySelector('.form')
const formCancel = document.querySelector('.form__cancel')
const mdConnection = document.querySelector('.connection__btn-sm')
// footer
const footerServices = document.querySelector('.column-services')
const footerServicesTitle = document.querySelector('.column-services__title')
const footerContact = document.querySelector('.column-contact')
const footerContactTitle = document.querySelector('.column-contact__title')

// functions header
burger.addEventListener('click', () => {
	burger.classList.toggle('_active')
	menuBody.classList.toggle('_active')	
	document.querySelector('body').classList.toggle('_lock')
})

btnConnection.addEventListener('click', () => {
	connectionForm.classList.toggle('_active')
	document.querySelector('body').classList.toggle('_lock')
})
formCancel.addEventListener('click', () => {
	connectionForm.classList.remove('_active')
	connectionForm.classList.remove('_mdActive')
	document.querySelector('body').classList.remove('_lock')
})
mdConnection.addEventListener('click', () => {
	connectionForm.classList.toggle('_mdActive')
})
//functions footer
footerServicesTitle.addEventListener('click', () => {
	footerServices.classList.toggle('_show')
})
footerContactTitle.addEventListener('click', () => {
	footerContact.classList.toggle('_show')
})
