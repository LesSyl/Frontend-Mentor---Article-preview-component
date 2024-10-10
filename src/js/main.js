const btn = document.querySelector('.button')
const activeButton = document.querySelector('.active__button')
const author = document.querySelector('.author')
const act = document.querySelector('.active')
const bubble = document.querySelector('.bubble')
const btnBubble = document.querySelector('.bubble__button')

const showShare = () => {
	if (!author.classList.contains('active')) {
		author.classList.add('active')
		btn.style.display = 'none'
		act.style.display = 'flex'
	} else if (author.classList.contains('active')) {
		author.classList.remove('active')
		act.style.display = 'none'
		btn.style.display = 'flex'
	}
}

const showBubblesShare = () => {
	if (window.innerWidth >= 768) {
		bubble.classList.add('bubble--desktop')
		btnBubble.style.display = 'flex'
		author.classList.remove('active')
		act.style.display = 'none'
	}
}

const hideBubbleShare = () => {
	bubble.classList.remove('bubble--desktop')
	btnBubble.style.display = 'none'
	btn.style.display = 'flex'
}

btn.addEventListener('click', showShare)
btn.addEventListener('click', showBubblesShare)
btnBubble.addEventListener('click', hideBubbleShare)
activeButton.addEventListener('click', showShare)
