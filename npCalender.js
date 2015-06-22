/*
Name:Jquery Nepali Calendar
Author:Padam Shankhadev
Creadted Date: 2012-6-17
Updated Date: 2015-6-22
*/
(function($){ 
var bs = {
  0:[2000,30,32,31,32,31,30,30,30,29,30,29,31],
	1:[2001,31,31,32,31,31,31,30,29,30,29,30,30],
	2:[2002,31,31,32,32,31,30,30,29,30,29,30,30],
	3:[2003,31,32,31,32,31,30,30,30,29,29,30,31],
	4:[2004,30,32,31,32,31,30,30,30,29,30,29,31],
	5:[2005,31,31,32,31,31,31,30,29,30,29,30,30],
	6:[2006,31,31,32,32,31,30,30,29,30,29,30,30],
	7:[2007,31,32,31,32,31,30,30,30,29,29,30,31],
	8:[2008,31,31,31,32,31,31,29,30,30,29,29,31],
	9:[2009,31,31,32,31,31,31,30,29,30,29,30,30],
	10:[2010,31,31,32,32,31,30,30,29,30,29,30,30],
	11:[2011,31,32,31,32,31,30,30,30,29,29,30,31],
	12:[2012,31,31,31,32,31,31,29,30,30,29,30,30],
	13:[2013,31,31,32,31,31,31,30,29,30,29,30,30],
	14:[2014,31,31,32,32,31,30,30,29,30,29,30,30],
	15:[2015,31,32,31,32,31,30,30,30,29,29,30,31],
	16:[2016,31,31,31,32,31,31,29,30,30,29,30,30],
	17:[2017,31,31,32,31,31,31,30,29,30,29,30,30],
	18:[2018,31,32,31,32,31,30,30,29,30,29,30,30],
	19:[2019,31,32,31,32,31,30,30,30,29,30,29,31],
	20:[2020,31,31,31,32,31,31,30,29,30,29,30,30],
	21:[2021,31,31,32,31,31,31,30,29,30,29,30,30],
	22:[2022,31,32,31,32,31,30,30,30,29,29,30,30],
	23:[2023,31,32,31,32,31,30,30,30,29,30,29,31],
	24:[2024,31,31,31,32,31,31,30,29,30,29,30,30],
	25:[2025,31,31,32,31,31,31,30,29,30,29,30,30],
	26:[2026,31,32,31,32,31,30,30,30,29,29,30,31],
	27:[2027,30,32,31,32,31,30,30,30,29,30,29,31],
	28:[2028,31,31,32,31,31,31,30,29,30,29,30,30],
	29:[2029,31,31,32,31,32,30,30,29,30,29,30,30],
	30:[2030,31,32,31,32,31,30,30,30,29,29,30,31],
	31:[2031,30,32,31,32,31,30,30,30,29,30,29,31],
	32:[2032,31,31,32,31,31,31,30,29,30,29,30,30],
	33:[2033,31,31,32,32,31,30,30,29,30,29,30,30],
	34:[2034,31,32,31,32,31,30,30,30,29,29,30,31], 
	35:[2035,30,32,31,32,31,31,29,30,30,29,29,31],
	36:[2036,31,31,32,31,31,31,30,29,30,29,30,30],
	37:[2037,31,31,32,32,31,30,30,29,30,29,30,30],
	38:[2038,31,32,31,32,31,30,30,30,29,29,30,31],
	39:[2039,31,31,31,32,31,31,29,30,30,29,30,30],
	40:[2040,31,31,32,31,31,31,30,29,30,29,30,30],
	41:[2041,31,31,32,32,31,30,30,29,30,29,30,30],
	42:[2042,31,32,31,32,31,30,30,30,29,29,30,31],
	43:[2043,31,31,31,32,31,31,29,30,30,29,30,30],
	44:[2044,31,31,32,31,31,31,30,29,30,29,30,30],
	45:[2045,31,32,31,32,31,30,30,29,30,29,30,30],
	46:[2046,31,32,31,32,31,30,30,30,29,29,30,31],
	47:[2047,31,31,31,32,31,31,30,29,30,29,30,30],
	48:[2048,31,31,32,31,31,31,30,29,30,29,30,30],
	49:[2049,31,32,31,32,31,30,30,30,29,29,30,30],
	50:[2050,31,32,31,32,31,30,30,30,29,30,29,31],
	51:[2051,31,31,31,32,31,31,30,29,30,29,30,30],
	52:[2052,31,31,32,31,31,31,30,29,30,29,30,30],
	53:[2053,31,32,31,32,31,30,30,30,29,29,30,30],
	54:[2054,31,32,31,32,31,30,30,30,29,30,29,31],
	55:[2055,31,31,32,31,31,31,30,29,30,29,30,30],
	56:[2056,31,31,32,31,32,30,30,29,30,29,30,30],
	57:[2057,31,32,31,32,31,30,30,30,29,29,30,31],
	58:[2058,30,32,31,32,31,30,30,30,29,30,29,31],
	59:[2059,31,31,32,31,31,31,30,29,30,29,30,30],
	60:[2060,31,31,32,32,31,30,30,29,30,29,30,30],
	61:[2061,31,32,31,32,31,30,30,30,29,29,30,31],
	62:[2062,30,32,31,32,31,31,29,30,29,30,29,31],
	63:[2063,31,31,32,31,31,31,30,29,30,29,30,30],
	64:[2064,31,31,32,32,31,30,30,29,30,29,30,30],
	65:[2065,31,32,31,32,31,30,30,30,29,29,30,31],
	66:[2066,31,31,31,32,31,31,29,30,30,29,29,31],
	67:[2067,31,31,32,31,31,31,30,29,30,29,30,30],
	68:[2068,31,31,32,32,31,30,30,29,30,29,30,30],
	69:[2069,31,32,31,32,31,30,30,30,29,29,30,31],
	70:[2070,31,31,31,32,31,31,29,30,30,29,30,30],
	71:[2071,31,31,32,31,31,31,30,29,30,29,30,30],
	72:[2072,31,32,31,32,31,30,30,29,30,29,30,30],
	73:[2073,31,32,31,32,31,30,30,30,29,29,30,31],
	74:[2074,31,31,31,32,31,31,30,29,30,29,30,30],
	75:[2075,31,31,32,31,31,31,30,29,30,29,30,30],
	76:[2076,31,32,31,32,31,30,30,30,29,29,30,30],
	77:[2077,31,32,31,32,31,30,30,30,29,30,29,31],
	78:[2078,31,31,31,32,31,31,30,29,30,29,30,30],
	79:[2079,31,31,32,31,31,31,30,29,30,29,30,30],
	80:[2080,31,32,31,32,31,30,30,30,29,29,30,30],
	81:[2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	82:[2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	83:[2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
	84:[2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
	85:[2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
	86:[2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	87:[2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
	88:[2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
	89:[2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	90:[2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
};
	
	
	$.fn.npCalendar = function(options){
		
		var date = new Date();
		var np_year = date.getUTCFullYear();
		var np_month = parseInt(date.getUTCMonth()+1);
		var np_day = date.getUTCDate();
		
		var defaults = {
			color:'#000',
			font:'10px Arial, Helvetica, sans-serif'
		};
		
		var option = $.extend({},defaults,options);
		$(this).each(function(){
			var nep_date = $.eng_to_nep(np_year,np_month,np_day);
			$(this).append('<span style="color:'+option.color+ '; font:'+option.font+'">'+nep_date+'</span>');
		});
	};
	
	$.is_leap_year = function(year){
		var a = year;
		if (a%100==0)
		{
			if(a%400==0)
			{
				return true;
			} else {
				return false;
		}
			
		} else { 
			if (a%4==0)
			{
				return true;
			} else {
				return false;
			}
		}
	};
	
	
	$.get_nepali_month = function(m){
		var n_month = false;
			
			switch(m){
				case 1:
					n_month = "बैशाख"; //Baisakh
					break;
					
				case 2:
					n_month = "जेष्ठ"; //Jestha
					break;
					
				case 3:
					n_month = "असार"; //Ashad
					break;
					
				case 4:
					n_month = "श्रावण"; //Shrawn
					break;
					
				case 5:
					n_month = "भाद्र"; //Bhadra
					break;
				
				case 6:
					n_month = "आश्विन"; //Ashoj
					break;
				
				case 7:
					n_month = "कार्तिक"; //kartik
					break;
				
				case 8:
					n_month = "मंसिर"; //Mangshir
					break;
				
				case 9:
					n_month = "पुष"; //Poush
					break;
				
				case 10:
					n_month = "माघ"; //Magh
					break;
				
				case 11:
					n_month = "फाल्गुन"; //Falgun
					break;
				
				case 12:
					n_month = "चैत्र"; //Chaitra
					break;
			}	
			return  n_month;
	};
	
	$.get_day_of_week = function(day){
		switch(day){
				case 1:
					day = "आईतवार"; //Sunday
					break;
					
				case 2:
					day = "सोमबार"; //Monday
					break;
					
				case 3:
					day = "मंगलवार"; //Tuesday
					break;
				
				case 4:
					day = "बुधबार"; //Wednesday
					break;
				
				case 5:
					day = "बिहीबार"; //Thursday
					break;
				
				case 6:
					day = "शुक्रबार"; //Friday
					break;
				
				case 7:
					day = "शनिबार "; //Saturday
					break;
			}
			return day;
	};
	
	$.is_range_eng = function(yy, mm, dd){
		if(yy<1944 || yy>2033){
				debug_info = "Supported only between 1944-2022";
				return false;
			}
				
			if(mm<1 || mm >12){
				debug_info = "Error! value 1-12 only";
				return false;
			}
				
			if(dd<1 || dd >31){
				debug_info = "Error! value 1-31 only";			
				return false;
			}	
			
			return true;
	};
	
	$.eng_to_nep = function(yy,mm,dd){
		if ($.is_range_eng(yy, mm, dd) == false){
				return false;
			} else {
				// english month data.
			 	month = [31,28,31,30,31,30,31,31,30,31,30,31];
			 	lmonth = [31,29,31,30,31,30,31,31,30,31,30,31];
				
				def_eyy = 1944;									//spear head english date...
				def_nyy = 2000; def_nmm = 9; def_ndd = 17-1;		//spear head nepali date...
				total_eDays=0; total_nDays=0; a=0; day=7-1;		//all the initializations...
				m = 0; y = 0; i =0; j = 0;
				numDay=0;
				
				// count total no. of days in-terms of year
				for(i=0; i<(yy-def_eyy); i++){	//total days for month calculation...(english)
					if($.is_leap_year(def_eyy+i)==1)
						for(j=0; j<12; j++)
							total_eDays += lmonth[j];
					else
						for(j=0; j<12; j++)
							total_eDays += month[j];
				}
				
				// count total no. of days in-terms of month					
				for(i=0; i<(mm-1); i++){		
					if($.is_leap_year(yy)==1)
						total_eDays += lmonth[i];
					else
						total_eDays += month[i];
				}
				
				// count total no. of days in-terms of date
				total_eDays += dd;
				
				
				i = 0; j = def_nmm;					
				total_nDays = def_ndd;
				m = def_nmm;
				y = def_nyy;
				
				//alert(m+':'+y+':'+j+':'+day)
				//alert(bs[69][10]);
				// count nepali date from array
				
				while(total_eDays!=0) {
			        a = bs[i][j];
					total_nDays++;						//count the days
					day++;								//count the days interms of 7 days
					if(total_nDays > a){
						m++;
						total_nDays=1;
						j++;
					}
					if(day > 7)
						day = 1;
					if(m > 12){
						y++;
						m = 1;
					}
				    if(j > 12){
						j = 1; i++;
					}
					total_eDays--;
				}
				numDay=day;
				
				String.prototype.replaceArray = function(find, replace) {
				var replaceString = this;
				var regex; 
				for (var i = 0; i < find.length; i++) {
					regex = new RegExp(find[i], "g");
					replaceString = replaceString.replace(regex, replace[i]);
				  }
				  return replaceString;
				};
				var find = new Array('0','1','2','3','4','5','6','7','8','9');
				var replace = new Array('०','१','२','३','४','५','६','७','८','९');
				np_year = String(y).replaceArray(find,replace);
				np_month = $.get_nepali_month(m);
				np_day = $.get_day_of_week(day);
				np_date = String(total_nDays).replaceArray(find,replace);
				
				return np_day+','+np_year+' '+np_month+' '+np_date;
			}
	};
})(jQuery);
