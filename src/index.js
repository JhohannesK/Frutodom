const btn = document.querySelector('.btn');
const hide = document.querySelector('.hide-links');

btn.addEventListener('click', function () {
	hide.classList.toggle('hidden');
});

$(function () {
	$(window).resize(function () {
		if ($(this).width() < 750) {
			$('#ss').css('background-image', "url('./images/bg1.jpg')");
		} else {
			// default setting for desktop here...
			$('#ss').css('background-image', "url('./images/bg2.jpg')");
		}
	});
});

console.log(window.innerWidth);
