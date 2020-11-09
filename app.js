function inputInsideOtpInput(el) {
            if (el.value.length > 1){
                el.value = el.value[el.value.length - 1];
            }
            try {
                if(el.value == null || el.value == ""){
                    this.foucusOnInput(el.previousElementSibling);
                }else {
                    this.foucusOnInput(el.nextElementSibling);
                }
            }catch (e) {
                console.log(e);
            }
        }

       function foucusOnInput(ele){
           ele.focus();
           let val = ele.value;
           ele.value = "";
           // ele.value = val;
           setTimeout(()=>{
               ele.value = val;
           })
       }

       
     
       
       
    	  var slideIndex = 0;
    	  showSlides();

    	  function showSlides() {
    	    var i;
    	    var slides = document.getElementsByClassName("mySlides");
    	    for (i = 0; i < slides.length; i++) {
    	      slides[i].style.display = "none";
    	    }
    	    slideIndex++;
    	    if (slideIndex > slides.length) {slideIndex = 1}
    	    slides[slideIndex-1].style.display = "block";
    	    setTimeout(showSlides, 2000); // Change image every 2 seconds
    	  }

       