"use strict";$(document).ready(function(){function e(){if(g=m[Math.floor(Math.random()*m.length)],m.length!=p.length){for(;-1!=jQuery.inArray(g,p);)g=m[Math.floor(Math.random()*m.length)];p.push(g)}else p.length=0,g=m[Math.floor(Math.random()*m.length)],p.push(g);d.html(g),d.animate({opacity:"1"},1500),u.fadeIn(1500)}function t(e){e.map(function(t,a){var n=void 0;n="markerGreen"==e[a].marker?new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/2ecc71/"):new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/e74c3c/"),_.addMarker({lat:t.lat,lng:t.lng,title:t.name,icon:n,infoWindow:{content:t.name}}),w.addMarker({lat:t.lat,lng:t.lng,title:t.name,icon:n,infoWindow:{content:t.name}})})}function a(e){var t=void 0,a=void 0,n=void 0;e.map(function(o,i){n=".section-photos-crown__photos-all",t="markerRed"==e[i].marker?'<div class="section-more-photos__photo-box"><ul class="section-more-photos__photos clearfix"><li><div class="section-photos-crown__crown-photo_dark"><img src="images/%photo_name_x%" alt="%alt%"><h3 class="new-label"><span>%name%<br>%height%<br></span></h3></div></li></ul></div>':'<div class="section-more-photos__photo-box" id="%gallery_name%"><ul class="section-more-photos__photos clearfix %gallery_name1%">',i>13&&(n=".more-photos"),a=t.replace("%photo_name_x%",o.photos[0]),a=a.replace("%name%",o.name),a=a.replace("%height%",o.height),a=a.replace("%alt%",o.name),a=a.replace("%gallery_name%",o.tag),a=a.replace("%gallery_name1%",o.tag),$(n).append(a)})}function n(e,t){var a=void 0,n=void 0,o=void 0,i=void 0;e.map(function(e,l){i=v.crownMountains[t].tag,o="."+i,a=l==e.length?'<li><div class="section-photos-crown__crown-photo_hidden"><a href="images/%photo%" title="%name% &mdash; %date%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%alt%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%name1%<br>%date1%</div></h3></div></div></li>':0===l?'<li><div class="section-photos-crown__crown-photo"><a href="images/%photo1%" class="section-photos-crown__photo-link" title="%name% &mdash; %date%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%alt%" class="tooltip" title="Click to open gallery from %name2%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%name1%<br>%date1%</div></h3></div></div></li>':'<li><div class="section-photos-crown__crown-photo_hidden"><a href="images/%photo2%" title="%name% &mdash; %date%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%alt%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%name1%<br>%date1%</div></h3></div></div></li>',n=a.replace("%photo%",e),n=n.replace("%photo1%",e),n=n.replace("%photo2%",e),n=n.replace("%date%",v.crownMountains[t].date),n=n.replace("%date1%",v.crownMountains[t].date),n=n.replace("%name%",v.crownMountains[t].name),n=n.replace("%name1%",v.crownMountains[t].name),n=n.replace("%name2%",v.crownMountains[t].name),n=n.replace("%height%",v.crownMountains[t].height),n=n.replace("%height%",v.crownMountains[t].height),n=n.replace("%alt%",v.crownMountains[t].name),n=n.replace("%gallery_name%",v.crownMountains[t].tag),n=n.replace("%gallery_name1%",v.crownMountains[t].tag),n=n.replace("%gallery_name2%",v.crownMountains[t].tag),$(o).append(n)})}function o(e){e.map(function(e,t){if(t<f){var a=e.tag;document.getElementById(a).onclick=function(e){e=e||window.event;var t=e.target||e.srcElement,a=t.src?t.parentNode:t,n={index:a,event:e},o=this.getElementsByTagName("a");blueimp.Gallery(o,n)}}})}function i(e){e.map(function(e,t){t<f&&n(e.photos,t)})}function l(e){var t=void 0,a=void 0,n=void 0;e.map(function(e,o){o<f&&(n=".swiper-wrapper",t='<div class="swiper-slide"><img src="/images/%photo_name%" /><div class="label-mobile">%name% %height% &mdash; %date%</div></div>',a=t.replace("%photo_name%",e.tag+".jpg"),a=a.replace("%date%",e.date),a=a.replace("%name%",e.name),a=a.replace("%height%",e.height),$(n).append(a))})}function s(){t(v.crownMountains),a(v.crownMountains),i(v.crownMountains),o(v.crownMountains),l(v.crownMountains)}var r=!0;new Waypoint({element:$(".header__title")[0],handler:function(){$(".section-results").addClass("animated zoomIn"),$(".section-results__counter").each(function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:3e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})}}),new Waypoint({element:$(".section-results")[0],handler:function(e){return"down"==e?($("nav").addClass("sticky"),$("nav").removeClass("sticky-black"),r=!1):($("nav").removeClass("sticky"),r=!0)}},{offset:60});$(".header__nav-icon_mobile").click(function(){var e=$(".header__nav-list"),t=$(".header__nav-icon_mobile i");!0===r&&$(".header__nav").addClass("sticky-black"),t.hasClass("ion-navicon")?(t.addClass("ion-ios-close-empty"),t.removeClass("ion-navicon"),e.slideToggle("slow")):(t.addClass("ion-navicon"),t.removeClass("ion-ios-close-empty"),e.slideToggle("slow",function(){$(".header__nav").removeClass("sticky-black")}))}),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top-60},1e3),!1}}),$(".section-photos-crown__button_ghost_more-hide").click(function(){$(".more-photos").animate({height:"toggle"},100)}),$(".header__scroll-down").click(function(){$("html, body").animate({scrollTop:$(".section-results").offset().top-60},1e3)}),$(".logo").click(function(){$("html, body").animate({scrollTop:$(".header").offset().top-60},1e3)}),$(".more-photos").animate({height:"toggle"},100);var c=$(".section-photos-crown__button_ghost_more-hide")[0];c.addEventListener("click",function(){var e=$(".section-photos-crown")[0];c.getAttribute("data-text-swap")==c.innerHTML?(c.innerHTML=c.getAttribute("data-text-original"),e.style.height="5000 px"):(c.setAttribute("data-text-original",c.innerHTML),c.innerHTML=c.getAttribute("data-text-swap"),e.style.height="6000 px")},!1),$(".tooltip").tooltipster({theme:"tooltipster-shadow",trigger:"hover",animation:"grow",arrow:!1,distance:-100,contentAsHTML:!0,maxWidth:190,timer:500});var h="When you go to the mountains, you see them and you admire them. <br>In a sense, they give you a challenge, and you try to express that challenge by climbing them.<br><br>Edmund Hillary",m=[h,"Mountains are the beginning and the end of all natural scenery.<br><br>John Ruskin","The only Zen you can find on the tops of mountains is the Zen you bring up there.<br><br>Robert M. Pirsig"],p=[h],d=$(".section-quote__changing-quote"),g=void 0,u=$(".section-quote__sentence");window.setInterval(function(){u.fadeOut(1500),d.animate({opacity:"0"},1500),setTimeout(e,1500)},5e3);var v=void 0,_=new GMaps({div:".section-map__map",lat:50.7214316,lng:23.2134931,zoom:7}),w=new GMaps({div:".section-map__map_mobile",lat:50.568984,lng:18.8597001,zoom:7}),f=15;new Swiper(".swiper-container",{pagination:".swiper-pagination",spaceBetween:10});new Swiper(".swiper-container-mobile",{});$.getJSON("../mountains.json",function(e){v=e,s()});$(".disabled").click(function(e){e.preventDefault()})});
