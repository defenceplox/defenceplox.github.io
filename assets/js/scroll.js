<script>
 $('.links').click(function(e){ 
	 $('html, body').animate({
   scrollTop: $( $.attr(this, 'href') ).offset().top - $('.nav').height()
	 }, 1000);
  return false;
 });
</script>