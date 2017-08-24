/*! bootstrap-timepicker v0.2.5 
* http://jdewit.github.com/bootstrap-timepicker 
* Copyright (c) 2013 Joris de Wit 
* MIT License 
*/!function(t,i,e){"use strict";var s=function(i,e){this.widget="",this.$element=t(i),this.defaultTime=e.defaultTime,this.disableFocus=e.disableFocus,this.disableMousewheel=e.disableMousewheel,this.isOpen=e.isOpen,this.minuteStep=e.minuteStep,this.modalBackdrop=e.modalBackdrop,this.orientation=e.orientation,this.secondStep=e.secondStep,this.showInputs=e.showInputs,this.showMeridian=e.showMeridian,this.showSeconds=e.showSeconds,this.template=e.template,this.appendWidgetTo=e.appendWidgetTo,this.showWidgetOnAddonClick=e.showWidgetOnAddonClick,this._init()};s.prototype={constructor:s,_init:function(){var i=this;this.showWidgetOnAddonClick&&(this.$element.parent().hasClass("input-append")||this.$element.parent().hasClass("input-prepend"))?(this.$element.parent(".input-append, .input-prepend").find(".add-on").on({"click.timepicker":t.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":t.proxy(this.highlightUnit,this),"click.timepicker":t.proxy(this.highlightUnit,this),"keydown.timepicker":t.proxy(this.elementKeydown,this),"blur.timepicker":t.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":t.proxy(this.mousewheel,this)})):this.template?this.$element.on({"focus.timepicker":t.proxy(this.showWidget,this),"click.timepicker":t.proxy(this.showWidget,this),"blur.timepicker":t.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":t.proxy(this.mousewheel,this)}):this.$element.on({"focus.timepicker":t.proxy(this.highlightUnit,this),"click.timepicker":t.proxy(this.highlightUnit,this),"keydown.timepicker":t.proxy(this.elementKeydown,this),"blur.timepicker":t.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":t.proxy(this.mousewheel,this)}),this.$widget=this.template!==!1?t(this.getTemplate()).on("click",t.proxy(this.widgetClick,this)):!1,this.showInputs&&this.$widget!==!1&&this.$widget.find("input").each(function(){t(this).on({"click.timepicker":function(){t(this).select()},"keydown.timepicker":t.proxy(i.widgetKeydown,i),"keyup.timepicker":t.proxy(i.widgetKeyup,i)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=null,this.updateFromElementVal()},clear:function(){this.hour="",this.minute="",this.second="",this.meridian="",this.$element.val("")},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else this.hour<=0?this.hour=23:this.hour--},decrementMinute:function(t){var i;i=t?this.minute-t:this.minute-this.minuteStep,0>i?(this.decrementHour(),this.minute=i+60):this.minute=i},decrementSecond:function(){var t=this.second-this.secondStep;0>t?(this.decrementMinute(!0),this.second=t+60):this.second=t},elementKeydown:function(t){switch(t.keyCode){case 9:case 27:this.updateFromElementVal();break;case 37:t.preventDefault(),this.highlightPrevUnit();break;case 38:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update();break;case 39:t.preventDefault(),this.highlightNextUnit();break;case 40:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update()}},getCursorPosition:function(){var t=this.$element.get(0);if("selectionStart"in t)return t.selectionStart;if(e.selection){t.focus();var i=e.selection.createRange(),s=e.selection.createRange().text.length;return i.moveStart("character",-t.value.length),i.text.length-s}},getTemplate:function(){var t,i,e,s,n,h;switch(this.showInputs?(i='<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>',e='<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>',s='<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>',n='<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>'):(i='<span class="bootstrap-timepicker-hour"></span>',e='<span class="bootstrap-timepicker-minute"></span>',s='<span class="bootstrap-timepicker-second"></span>',n='<span class="bootstrap-timepicker-meridian"></span>'),h='<table><tr><td><a href="#" data-action="incrementHour"><i class="fa fa-angle-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="fa fa-angle-up"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="fa fa-angle-up"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="fa fa-angle-up"></i></a></td>':"")+"</tr><tr><td>"+i+'</td> <td class="separator">:</td><td>'+e+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+s+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+n+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><i class="fa fa-angle-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="fa fa-angle-down"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="fa fa-angle-down"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="fa fa-angle-down"></i></a></td>':"")+"</tr></table>",this.template){case"modal":t='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">'+h+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":t='<div class="bootstrap-timepicker-widget dropdown-menu">'+h+"</div>"}return t},getTime:function(){return""===this.hour?"":this.hour+":"+(1===this.minute.toString().length?"0"+this.minute:this.minute)+(this.showSeconds?":"+(1===this.second.toString().length?"0"+this.second:this.second):"")+(this.showMeridian?" "+this.meridian:"")},hideWidget:function(){this.isOpen!==!1&&(this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),t(e).off("mousedown.timepicker, touchend.timepicker"),this.isOpen=!1,this.$widget.detach())},highlightUnit:function(){this.position=this.getCursorPosition(),this.position>=0&&this.position<=2?this.highlightHour():this.position>=3&&this.position<=5?this.highlightMinute():this.position>=6&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():this.position>=9&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.showMeridian?this.highlightMeridian():this.showSeconds?this.highlightSecond():this.highlightMinute();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="hour",t.setSelectionRange&&setTimeout(function(){i.hour<10?t.setSelectionRange(0,1):t.setSelectionRange(0,2)},0)},highlightMinute:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="minute",t.setSelectionRange&&setTimeout(function(){i.hour<10?t.setSelectionRange(2,4):t.setSelectionRange(3,5)},0)},highlightSecond:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="second",t.setSelectionRange&&setTimeout(function(){i.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0)},highlightMeridian:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="meridian",t.setSelectionRange&&(this.showSeconds?setTimeout(function(){i.hour<10?t.setSelectionRange(8,10):t.setSelectionRange(9,11)},0):setTimeout(function(){i.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}return 23===this.hour?(this.hour=0,void 0):(this.hour++,void 0)},incrementMinute:function(t){var i;i=t?this.minute+t:this.minute+this.minuteStep-this.minute%this.minuteStep,i>59?(this.incrementHour(),this.minute=i-60):this.minute=i},incrementSecond:function(){var t=this.second+this.secondStep-this.second%this.secondStep;t>59?(this.incrementMinute(!0),this.second=t-60):this.second=t},mousewheel:function(i){if(!this.disableMousewheel){i.preventDefault(),i.stopPropagation();var e=i.originalEvent.wheelDelta||-i.originalEvent.detail,s=null;switch("mousewheel"===i.type?s=-1*i.originalEvent.wheelDelta:"DOMMouseScroll"===i.type&&(s=40*i.originalEvent.detail),s&&(i.preventDefault(),t(this).scrollTop(s+t(this).scrollTop())),this.highlightedUnit){case"minute":e>0?this.incrementMinute():this.decrementMinute(),this.highlightMinute();break;case"second":e>0?this.incrementSecond():this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian();break;default:e>0?this.incrementHour():this.decrementHour(),this.highlightHour()}return!1}},place:function(){if(!this.isInline){var e=this.$widget.outerWidth(),s=this.$widget.outerHeight(),n=10,h=t(i).width(),o=t(i).height(),a=t(i).scrollTop(),r=parseInt(this.$element.parents().filter(function(){}).first().css("z-index"),10)+10,d=this.component?this.component.parent().offset():this.$element.offset(),c=this.component?this.component.outerHeight(!0):this.$element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.$element.outerWidth(!1),u=d.left,p=d.top;this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),"auto"!==this.orientation.x?(this.picker.addClass("datepicker-orient-"+this.orientation.x),"right"===this.orientation.x&&(u-=e-l)):(this.$widget.addClass("timepicker-orient-left"),d.left<0?u-=d.left-n:d.left+e>h&&(u=h-e-n));var m,g,f=this.orientation.y;"auto"===f&&(m=-a+d.top-s,g=a+o-(d.top+c+s),f=Math.max(m,g)===g?"top":"bottom"),this.$widget.addClass("timepicker-orient-"+f),"top"===f?p+=c:p-=s+parseInt(this.$widget.css("padding-top"),10),this.$widget.css({top:p,left:u,zIndex:r})}},remove:function(){t("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(t){if(this.$element.val())this.updateFromElementVal();else if("current"===t){var i=new Date,e=i.getHours(),s=i.getMinutes(),n=i.getSeconds(),h="AM";0!==n&&(n=Math.ceil(i.getSeconds()/this.secondStep)*this.secondStep,60===n&&(s+=1,n=0)),0!==s&&(s=Math.ceil(i.getMinutes()/this.minuteStep)*this.minuteStep,60===s&&(e+=1,s=0)),this.showMeridian&&(0===e?e=12:e>=12?(e>12&&(e-=12),h="PM"):h="AM"),this.hour=e,this.minute=s,this.second=n,this.meridian=h,this.update()}else t===!1?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(t)},setTime:function(t,i){if(!t)return this.clear(),void 0;var e,s,n,h,o;"object"==typeof t&&t.getMonth?(s=t.getHours(),n=t.getMinutes(),h=t.getSeconds(),this.showMeridian&&(o="AM",s>12&&(o="PM",s%=12),12===s&&(o="PM"))):(o=null!==t.match(/p/i)?"PM":"AM",t=t.replace(/[^0-9\:]/g,""),e=t.split(":"),s=e[0]?e[0].toString():e.toString(),n=e[1]?e[1].toString():"",h=e[2]?e[2].toString():"",s.length>4&&(h=s.substr(4,2)),s.length>2&&(n=s.substr(2,2),s=s.substr(0,2)),n.length>2&&(h=n.substr(2,2),n=n.substr(0,2)),h.length>2&&(h=h.substr(2,2)),s=parseInt(s,10),n=parseInt(n,10),h=parseInt(h,10),isNaN(s)&&(s=0),isNaN(n)&&(n=0),isNaN(h)&&(h=0),this.showMeridian?1>s?s=1:s>12&&(s=12):(s>=24?s=23:0>s&&(s=0),13>s&&"PM"===o&&(s+=12)),0>n?n=0:n>=60&&(n=59),this.showSeconds&&(isNaN(h)?h=0:0>h?h=0:h>=60&&(h=59))),this.hour=s,this.minute=n,this.second=h,this.meridian=o,this.update(i)},showWidget:function(){if(!this.isOpen&&!this.$element.is(":disabled")){this.$widget.appendTo(this.appendWidgetTo);var i=this;t(e).on("mousedown.timepicker, touchend.timepicker",function(t){i.$element.parent().find(t.target).length||i.$widget.is(t.target)||i.$widget.find(t.target).length||i.hideWidget()}),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.place(),this.disableFocus&&this.$element.blur(),""===this.hour&&(this.defaultTime?this.setDefaultTime(this.defaultTime):this.setTime("0:0:0")),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",t.proxy(this.hideWidget,this)):this.isOpen===!1&&this.$widget.addClass("open"),this.isOpen=!0}},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM"},update:function(t){this.updateElement(),t||this.updateWidget(),this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}})},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){this.setTime(this.$element.val())},updateWidget:function(){if(this.$widget!==!1){var t=this.hour,i=1===this.minute.toString().length?"0"+this.minute:this.minute,e=1===this.second.toString().length?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(t),this.$widget.find("input.bootstrap-timepicker-minute").val(i),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(e),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(t),this.$widget.find("span.bootstrap-timepicker-minute").text(i),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(e),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(this.$widget!==!1){var t=this.$widget.find("input.bootstrap-timepicker-hour").val()+":"+this.$widget.find("input.bootstrap-timepicker-minute").val()+(this.showSeconds?":"+this.$widget.find("input.bootstrap-timepicker-second").val():"")+(this.showMeridian?this.$widget.find("input.bootstrap-timepicker-meridian").val():"");this.setTime(t,!0)}},widgetClick:function(i){i.stopPropagation(),i.preventDefault();var e=t(i.target),s=e.closest("a").data("action");s&&this[s](),this.update(),e.is("input")&&e.get(0).setSelectionRange(0,2)},widgetKeydown:function(i){var e=t(i.target),s=e.attr("class").replace("bootstrap-timepicker-","");switch(i.keyCode){case 9:if(this.showMeridian&&"meridian"===s||this.showSeconds&&"second"===s||!this.showMeridian&&!this.showSeconds&&"minute"===s)return this.hideWidget();break;case 27:this.hideWidget();break;case 38:switch(i.preventDefault(),s){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),e.get(0).setSelectionRange(0,2);break;case 40:switch(i.preventDefault(),s){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),e.get(0).setSelectionRange(0,2)}},widgetKeyup:function(t){(65===t.keyCode||77===t.keyCode||80===t.keyCode||46===t.keyCode||8===t.keyCode||t.keyCode>=46&&t.keyCode<=57)&&this.updateFromWidgetInputs()}},t.fn.timepicker=function(i){var e=Array.apply(null,arguments);return e.shift(),this.each(function(){var n=t(this),h=n.data("timepicker"),o="object"==typeof i&&i;h||n.data("timepicker",h=new s(this,t.extend({},t.fn.timepicker.defaults,o,t(this).data()))),"string"==typeof i&&h[i].apply(h,e)})},t.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,disableMousewheel:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,orientation:{x:"auto",y:"auto"},secondStep:15,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:"body",showWidgetOnAddonClick:!0},t.fn.timepicker.Constructor=s}(jQuery,window,document);