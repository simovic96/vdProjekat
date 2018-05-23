var slideIndex = 1;
		
		var curr=0;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}
		
		function nextComm() {
			curr = curr%3 + 1;
			currentSlide(curr);
			setTimeout("nextComm()",3000);
		}
		
		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides1");
		  var dots = document.getElementsByClassName("dot1");
		  if (n > slides.length) {slideIndex = 1} 
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none"; 
			}
			for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" active", "");
			}
		  slides[slideIndex-1].style.display = "block"; 
		  dots[slideIndex-1].className += " active";
		}
		