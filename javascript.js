window.requestAnimationFrame = window.requestAnimationFrame ||
							   window.mozRequestAnimationFrame ||
							   window.webkitRequestAnimationFrame ||
							   window.msRequestAnimationFrame ||
function(f) {
	setTimeout(f, 1000/60)
}

var viewPortWidth = window.innerWidth
var viewPortHeight = window.innerHeight

$(document).ready(function() {
	var diff = viewPortHeight - 650
	$('.layer').css("top",  diff + "px"	)
})

function randomBetween(from, to) {
	return Math.floor(Math.random() * (to)) + from
}

window.addEventListener('scroll', function() {
	parallaxScroller()
}, false)

function parallaxScroller() {
	var offset = window.pageYOffset

	$('.layer--1').each(function(index) { this.style.left = offset * -0.02 })
	$('.layer--2').each(function(index) { this.style.left = offset * -0.04 })
	$('.layer--3').each(function(index) { this.style.left = offset * -0.05 })
	$('.layer--4').each(function(index) { this.style.left = offset * -0.06 })
	$('.layer--5').each(function(index) { this.style.left = offset * -0.08 })
	$('.layer--6').each(function(index) { this.style.left = offset * -0.1 })
	$('.layer--7').each(function(index) { this.style.left = offset * -0.15 })
	$('.layer--8').each(function(index) { this.style.left = offset * -0.2 })
	$('.layer--9').each(function(index) { this.style.left = offset * -0.3 })
}