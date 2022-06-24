const btn = document.querySelector('.btn');
const hide = document.querySelector('.hide-links');

btn.addEventListener('click', function () {
	hide.classList.toggle('hide-links');
});

const ww = window.innerWidth;
if (ww < 768) {
	document.getElementById('ss').style.backgroundImage =
		url('./images/bg1.jpg');
}
console.log(ww);
