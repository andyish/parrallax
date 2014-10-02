window.requestAnimationFrame = window.requestAnimationFrame ||
							   window.mozRequestAnimationFrame ||
							   window.webkitRequestAnimationFrame ||
							   window.msRequestAnimationFrame ||
function(f) {
	setTimeout(f, 1000/60)
}

var viewPortWidth = window.innerWidth //1440
var viewPortHeight = window.innerHeight //747

$(document).ready(function() {
	console.log(viewPortWidth)
	console.log(viewPortHeight)

	//1500/150 = 10
	//750/150 = 10

	for(var x = -5; x < 5; x++) {
		for(var y = -5; y < 5; y++){

				var baseX = x * 300;
				var baseY = y * 150;
				var left = Math.floor(Math.random() * (300 - 100)) + baseX
				var top = Math.floor(Math.random() * (150 - 58)) + baseY

				var layer = "layer" + randomBetween(1, 6)

	  			$('body').append('<div class="cloud '+layer+'" style="margin-left: '+left+'px; top: '+top+'px;"></div>');
		}
	}

})

function randomBetween(from, to) {
	return Math.floor(Math.random() * (to)) + from
}

window.addEventListener('scroll', function() {
	parallaxScroller()
}, false)

function parallaxScroller() {
	var offset = window.pageYOffset

	$('.layer1').each(function(index) { this.style.left = offset * 0.02 })
	$('.layer2').each(function(index) { this.style.left = offset * 0.04 })
	$('.layer3').each(function(index) { this.style.left = offset * 0.05 })
	$('.layer4').each(function(index) { this.style.left = offset * 0.06 })
	$('.layer5').each(function(index) { this.style.left = offset * 0.08 })
	$('.layer6').each(function(index) { this.style.left = offset * 0.1 })
	$('.layer7').each(function(index) { this.style.left = offset * 0.15 })
	$('.layer8').each(function(index) { this.style.left = offset * 0.2 })
}