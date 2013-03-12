Jquery-Nepali-Calender
======================

First Jquery Nepali Calender

This is the first jquery nepali calender.
Use in this way

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Nepali Calender</title>
<script type="text/javascript" src="jquery-1.9.0.min.js"></script>
<script type="text/javascript" src="npcalendar.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $('.npdate').npCalendar({color:'#f00',font:'15px Arial, Helvetica, sans-serif'});
	$('.npdatea').npCalendar();
});
</script>

</head>

<body>
<div class="npdate"></div>
<div class="npdatea"></div>
</body>
</html>
