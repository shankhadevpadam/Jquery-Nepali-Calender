Jquery-Nepali-Calender
======================
<!-- This is update by Padam Shankhadev -->

First Jquery Nepali Calender

This is the first jquery nepali calender.
Use in this way
<html>
<head>
<title>Jquery Nepali Calender</title>
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
