function createCookie(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3),r="; expires="+i.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}function getCookie(e){if(document.cookie.length>0){c_start=document.cookie.indexOf(e+"=");if(c_start!=-1)return c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),c_end==-1&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))}return undefined}function changeForLater(){value=="en"?($(".french-flag").addClass("off"),$(".english-flag").removeClass("off")):($(".french-flag").removeClass("off"),$(".english-flag").addClass("off")),$(".i18n").each(function(){$(this).html(json_data[value][this.getAttribute("i18n-key")])})}function changeLang(e,t){if(value==e)return;value=e,createCookie("lang",value,7),t?($(".to-fade").removeClass("fadein").addClass("fadeout"),$(".i18n").removeClass("fadein").addClass("fadeout"),setTimeout(changeForLater,800),setTimeout(function(){$(".to-fade").addClass("fadein").removeClass("fadeout"),$(".i18n").addClass("fadein").removeClass("fadeout")},1e3)):changeForLater()}function changProject(e){$("#page-projects .row .projects-title").addClass("fade-out-left"),setTimeout(function(){$("#page-projects .row .projects-title").addClass("hidden"),$("#page-projects .projects-desc ."+e).removeClass("hidden"),setTimeout(function(){$("#page-projects .projects-desc ."+e).removeClass("chidden")},10)},800)}function hideProject(e){$("#page-projects .projects-desc ."+e).addClass("chidden"),setTimeout(function(){$("#page-projects .projects-desc ."+e).addClass("hidden"),$("#page-projects .row .projects-title").removeClass("hidden"),setTimeout(function(){$("#page-projects .row .projects-title").removeClass("fade-out-left")},10)},800)}var value,json_data=new Object;$(document).ready(function(){$.getJSON("./dev/i18n/i18n-data.json",function(e){e.forEach(function(e){json_data[e.lang]=e});var t=getCookie("lang");t==undefined&&(t="en"),changeLang(t,!1)}),$(".i18n-language-selector").click(function(e){changeLang(this.getAttribute("value"),!0)})}),$(document).ready(function(){$(".hire-me").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1}),$("ul.nav-pills li a").click(function(){$("ul.nav-pills li.active").removeClass("active"),$(this).parent("li").addClass("active")}),$("#main-menu").onePageNav({currentClass:"active",changeHash:!1,scrollThreshold:.5,scrollSpeed:750,filter:"",easing:"swing"}),$(".magnific-popup").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",removalDelay:300,image:{verticalFit:!0},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}}),$(".control-group input, .control-group textarea").keypress(function(){$(this).removeClass("novalidate")}),$(".control-group input, .control-group textarea").change(function(){$(this).removeClass("novalidate")});var e=$("#contact-form"),t=$("#contact-button");e.on("submit",function(t){t.preventDefault(),$.ajax({url:"http://fc.isima.fr/~marquest/mail.php",type:"POST",dataType:"json",data:e.serialize(),beforeSend:function(){$("#contact-button").addClass("hidden"),$("#contact-button-sending").removeClass("hidden")},success:function(e){$("#contact-button-sending").addClass("hidden"),e.success?($(".control-group #email").val(""),$(".control-group #name").val(""),$(".control-group #subject").val(""),$(".control-group #message").val(""),$("#contact-button-success").removeClass("hidden"),setTimeout(function(){$("#contact-button-success").addClass("hidden"),$("#contact-button").removeClass("hidden")},5e3)):($("#contact-button-fail").removeClass("hidden"),setTimeout(function(){$("#contact-button-fail").addClass("hidden"),$("#contact-button").removeClass("hidden")},5e3),e.hasOwnProperty("email")&&$(".control-group #email").addClass("novalidate"),e.hasOwnProperty("name")&&$(".control-group #name").addClass("novalidate"),e.hasOwnProperty("subject")&&$(".control-group #subject").addClass("novalidate"),e.hasOwnProperty("message")&&$(".control-group #message").addClass("novalidate"))},error:function(e){$("contact-button-fail").removeClass("hidden")}})})})