	 function slide(id)
   {
      var img = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
	  var i = document.getElementById("ima");
	  i.src = img[id];
	  id++;
	  if(id >= 4)
	  {
	     id = 0;
	  }
	  setTimeout("slide("+id+")",1000);
   }
	   		
		    function pic(arg)
	 {
	     var img1=['images/pic8.jpg','images/pic9.jpg','images/pic10.jpg'];
		 document.getElementById("image1").src=img1[arg];
	 }
	 function pic1(arg)
	 {
	     var img1=['images/pic9.jpg','images/pic12.jpg','images/pic15.jpg'];
		 document.getElementById("image2").src=img1[arg];
	 }
	 function pic2(arg)
	 {
	     var img1=['images/pic10.jpg','images/pic13.jpg','images/pic11.jpg'];
		 document.getElementById("image3").src=img1[arg];
	 }
	 function pic3(arg)
	 {
	     var img1=['images/pic11.jpg','images/pic15.jpg','images/pic8.jpg'];
		 document.getElementById("image4").src=img1[arg];
	 }
	 function pic4(arg)
	 {
	     var img1=['images/pic12.jpg','images/pic8.jpg','images/pic13.jpg'];
		 document.getElementById("image5").src=img1[arg];
	 }
	 function pic5(arg)
	 {
	     var img1=['images/pic13.jpg','images/pic11.jpg','images/pic15.jpg'];
		 document.getElementById("image6").src=img1[arg];
	 }
	 function pic6(arg)
	 {
	     var img1=['images/pic14.jpg','images/pic8.jpg','images/pic10.jpg'];
		 document.getElementById("image7").src=img1[arg];
	 }
	 function pic7(arg)
	 {
	     var img1=['images/pic15.jpg','images/pic14.jpg','images/pic12.jpg'];
		 document.getElementById("image8").src=img1[arg];
	 }
	 function multi(arg)
	 {
		 var img1=['images/pic.jpg','images/pic1.jpg','images/pic2.jpg'];
		 document.getElementById("im").src=img1[arg];
	 }
	 function multi1(arg)
	 {
		 var img1=['images/pic1.jpg','images/pic2.jpg','images/pic.jpg'];
		 document.getElementById("im1").src=img1[arg];
	 }
	 function multi2(arg)
	 {
		 var img1=['images/pic2.jpg','images/pic.jpg','images/pic1.jpg'];
		 document.getElementById("im2").src=img1[arg];
	 }