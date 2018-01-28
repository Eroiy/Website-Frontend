
document.querySelector('.navigation-burger').addEventListener('click', e => {
	let nav = document.querySelector('.navigation')
	if(nav.classList.contains('navigation-open'))
		nav.classList.remove('navigation-open')
	else
		nav.classList.add('navigation-open')
})

