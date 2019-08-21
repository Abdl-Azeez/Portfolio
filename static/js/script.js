
// Select all links with hashes
// $('a[href*="#"]')
// 	.not('[href="#"]')
// 	.not('[href="#0"]')
// 	.click(function(event) {
// 		if (
// 			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
// 			&& 
// 			location.hostname == this.hostname
// 		) {
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				event.preventDefault();
// 				$('html, body').animate({
// 					scrollTop: target.offset().top
// 				}, 1000, function() {
// 					var $target = $(target);
// 					$target.focus();
// 					if ($target.is(":focus")) { 
// 						return false;
// 					} else {
// 						$target.attr('tabindex','-1'); 
// 						$target.focus(); 
// 					}
// 				});
// 			}
// 		}
// 	});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

AOS.init({
  disable: 'mobile'
}); 





// document.onmousemove = animateCircles;
// var colors = ['#b49882','#451e1f','#b49882','#451e1f']

// function animateCircles (event) {
    
//     var circle = document.createElement("div");
//     circle.setAttribute("class", "circle");
//     // document.getElementsByTagName('section').appendChild(circle);
//     // document.getElementById("section").appendChild(circle);
//     document.body.appendChild(circle);
    
//     // $('section').append(circle);
    
//     circle.style.left = event.clientX + 'px';
//     circle.style.top = event.clientY + 'px';
    
//     var color = colors[Math.floor(Math.random() * colors.length)];
    
//     circle.style.borderColor = color;
    
//     circle.style.transition = "all 0.5s linear 0s";
    
//     circle.style.left = circle.offsetLeft - 20 + 'px';
//     circle.style.top = circle.offsetTop - 20 + 'px';
    
//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderWidth = "5px";
//     circle.style.opacity = "0";

// }














