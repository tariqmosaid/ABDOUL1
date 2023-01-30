/*! bootstrap-timepicker v0.2.3 
* http://jdewit.github.com/bootstrap-timepicker 
* Copyright (c) 2014 Joris de Wit 
* MIT License 
*/!function(a,b,c,d){"use strict";var e=function(b,c){this.widget="",this.$element=a(b),this.defaultTime=c.defaultTime,this.disableFocus=c.disableFocus,this.isOpen=c.isOpen,this.minuteStep=c.minuteStep,this.modalBackdrop=c.modalBackdrop,this.secondStep=c.secondStep,this.showInputs=c.showInputs,this.showMeridian=c.showMeridian,this.showSeconds=c.showSeconds,this.template=c.template,this.appendWidgetTo=c.appendWidgetTo,this.upArrowStyle=c.upArrowStyle,this.downArrowStyle=c.downArrowStyle,this.containerClass=c.containerClass,this._init()};e.prototype={constructor:e,_init:function(){var b=this;this.$element.parent().hasClass("input-group")?(this.$element.parent(".input-group").find(".input-group-addon").length?this.$element.parent(".input-group").find(".input-group-addon").on({"click.timepicker":a.proxy(this.showWidget,this)}):this.$element.closest(this.containerClass).find(".input-group-addon").on({"click.timepicker":a.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":a.proxy(this.highlightUnit,this),"click.timepicker":a.proxy(this.highlightUnit,this),"keydown.timepicker":a.proxy(this.elementKeydown,this),"blur.timepicker":a.proxy(this.blurElement,this)})):this.$element.on(this.template?{"focus.timepicker":a.proxy(this.showWidget,this),"click.timepicker":a.proxy(this.showWidget,this),"blur.timepicker":a.proxy(this.blurElement,this)}:{"focus.timepicker":a.proxy(this.highlightUnit,this),"click.timepicker":a.proxy(this.highlightUnit,this),"keydown.timepicker":a.proxy(this.elementKeydown,this),"blur.timepicker":a.proxy(this.blurElement,this)}),this.$widget=this.template!==!1?a(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click",a.proxy(this.widgetClick,this)):!1,this.showInputs&&this.$widget!==!1&&this.$widget.find("input").each(function(){a(this).on({"click.timepicker":function(){a(this).select()},"keydown.timepicker":a.proxy(b.widgetKeydown,b)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=d,this.updateFromElementVal()},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else 0===this.hour?this.hour=23:this.hour--;this.update()},decrementMinute:function(a){var b;b=a?this.minute-a:this.minute-this.minuteStep,0>b?(this.decrementHour(),this.minute=b+60):this.minute=b,this.update()},decrementSecond:function(){var a=this.second-this.secondStep;0>a?(this.decrementMinute(!0),this.second=a+60):this.second=a,this.update()},elementKeydown:function(a){switch(a.keyCode){case 9:switch(this.updateFromElementVal(),this.highlightedUnit){case"hour":a.preventDefault(),this.highlightNextUnit();break;case"minute":(this.showMeridian||this.showSeconds)&&(a.preventDefault(),this.highlightNextUnit());break;case"second":this.showMeridian&&(a.preventDefault(),this.highlightNextUnit())}break;case 27:this.updateFromElementVal();break;case 37:a.preventDefault(),this.highlightPrevUnit(),this.updateFromElementVal();break;case 38:switch(a.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}break;case 39:a.preventDefault(),this.updateFromElementVal(),this.highlightNextUnit();break;case 40:switch(a.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}}},formatTime:function(a,b,c,d){return a=10>a?"0"+a:a,b=10>b?"0"+b:b,c=10>c?"0"+c:c,a+":"+b+(this.showSeconds?":"+c:"")+(this.showMeridian?" "+d:"")},getCursorPosition:function(){var a=this.$element.get(0);if("selectionStart"in a)return a.selectionStart;if(c.selection){a.focus();var b=c.selection.createRange(),d=c.selection.createRange().text.length;return b.moveStart("character",-a.value.length),b.text.length-d}},getTemplate:function(){var a,b,c,d,e,f;switch(this.showInputs?(b='<input type="text" name="hour" class="bootstrap-timepicker-hour form-control" maxlength="2"/>',c='<input type="text" name="minute" class="bootstrap-timepicker-minute form-control" maxlength="2"/>',d='<input type="text" name="second" class="bootstrap-timepicker-second form-control" maxlength="2"/>',e='<input type="text" name="meridian" class="bootstrap-timepicker-meridian form-control" maxlength="2"/>'):(b='<span class="bootstrap-timepicker-hour"></span>',c='<span class="bootstrap-timepicker-minute"></span>',d='<span class="bootstrap-timepicker-second"></span>',e='<span class="bootstrap-timepicker-meridian"></span>'),f='<table><tr><td><a href="#" data-action="incrementHour"><i class="'+this.upArrowStyle+'"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="'+this.upArrowStyle+'"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="'+this.upArrowStyle+'"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="'+this.upArrowStyle+'"></i></a></td>':"")+"</tr><tr><td>"+b+'</td> <td class="separator">:</td><td>'+c+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+d+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+e+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><i class="'+this.downArrowStyle+'"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="'+this.downArrowStyle+'"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="'+this.downArrowStyle+'"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="'+this.downArrowStyle+'"></i></a></td>':"")+"</tr></table>",this.template){case"modal":a='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">'+f+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":a='<div class="bootstrap-timepicker-widget dropdown-menu">'+f+"</div>"}return a},getTime:function(){return this.formatTime(this.hour,this.minute,this.second,this.meridian)},hideWidget:function(){this.isOpen!==!1&&(this.showInputs&&this.updateFromWidgetInputs(),this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),a(c).off("mousedown.timepicker"),this.isOpen=!1)},highlightUnit:function(){this.position=this.getCursorPosition(),this.position>=0&&this.position<=2?this.highlightHour():this.position>=3&&this.position<=5?this.highlightMinute():this.position>=6&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():this.position>=9&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMeridian();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var a=this.$element.get(0);this.highlightedUnit="hour",a.setSelectionRange&&setTimeout(function(){a.setSelectionRange(0,2)},0)},highlightMinute:function(){var a=this.$element.get(0);this.highlightedUnit="minute",a.setSelectionRange&&setTimeout(function(){a.setSelectionRange(3,5)},0)},highlightSecond:function(){var a=this.$element.get(0);this.highlightedUnit="second",a.setSelectionRange&&setTimeout(function(){a.setSelectionRange(6,8)},0)},highlightMeridian:function(){var a=this.$element.get(0);this.highlightedUnit="meridian",a.setSelectionRange&&(this.showSeconds?setTimeout(function(){a.setSelectionRange(9,11)},0):setTimeout(function(){a.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}return 23===this.hour?void(this.hour=0):(this.hour++,void this.update())},incrementMinute:function(a){var b;b=a?this.minute+a:this.minute+this.minuteStep-this.minute%this.minuteStep,b>59?(this.incrementHour(),this.minute=b-60):this.minute=b,this.update()},incrementSecond:function(){var a=this.second+this.secondStep-this.second%this.secondStep;a>59?(this.incrementMinute(!0),this.second=a-60):this.second=a,this.update()},remove:function(){a("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(a){if(this.$element.val())this.updateFromElementVal();else if("current"===a){var b=new Date,c=b.getHours(),d=Math.floor(b.getMinutes()/this.minuteStep)*this.minuteStep,e=Math.floor(b.getSeconds()/this.secondStep)*this.secondStep,f="AM";this.showMeridian&&(0===c?c=12:c>=12?(c>12&&(c-=12),f="PM"):f="AM"),this.hour=c,this.minute=d,this.second=e,this.meridian=f,this.update()}else a===!1?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(a)},setTime:function(a){var b,c;this.showMeridian?(b=a.split(" "),c=b[0].split(":"),this.meridian=b[1]):c=a.split(":"),this.hour=parseInt(c[0],10),this.minute=parseInt(c[1],10),this.second=parseInt(c[2],10),isNaN(this.hour)&&(this.hour=0),isNaN(this.minute)&&(this.minute=0),this.showMeridian?(this.hour>12?this.hour=12:this.hour<1&&(this.hour=12),"am"===this.meridian||"a"===this.meridian?this.meridian="AM":("pm"===this.meridian||"p"===this.meridian)&&(this.meridian="PM"),"AM"!==this.meridian&&"PM"!==this.meridian&&(this.meridian="AM")):this.hour>=24?this.hour=23:this.hour<0&&(this.hour=0),this.minute<0?this.minute=0:this.minute>=60&&(this.minute=59),this.showSeconds&&(isNaN(this.second)?this.second=0:this.second<0?this.second=0:this.second>=60&&(this.second=59)),this.update()},showWidget:function(){if(!this.isOpen&&!this.$element.is(":disabled")){var b=this;a(c).on("mousedown.timepicker",function(c){0===a(c.target).closest(".bootstrap-timepicker-widget").length&&b.hideWidget()}),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.disableFocus&&this.$element.blur(),this.updateFromElementVal(),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",a.proxy(this.hideWidget,this)):this.isOpen===!1&&this.$widget.addClass("open"),this.isOpen=!0}},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM",this.update()},update:function(){this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.updateElement(),this.updateWidget()},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){var a=this.$element.val();a&&this.setTime(a)},updateWidget:function(){if(this.$widget!==!1){var a=this.hour<10?"0"+this.hour:this.hour,b=this.minute<10?"0"+this.minute:this.minute,c=this.second<10?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(a),this.$widget.find("input.bootstrap-timepicker-minute").val(b),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(c),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(a),this.$widget.find("span.bootstrap-timepicker-minute").text(b),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(c),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(this.$widget!==!1){var b=a("input.bootstrap-timepicker-hour",this.$widget).val()+":"+a("input.bootstrap-timepicker-minute",this.$widget).val()+(this.showSeconds?":"+a("input.bootstrap-timepicker-second",this.$widget).val():"")+(this.showMeridian?" "+a("input.bootstrap-timepicker-meridian",this.$widget).val():"");this.setTime(b)}},widgetClick:function(b){b.stopPropagation(),b.preventDefault();var c=a(b.target).closest("a").data("action");c&&this[c]()},widgetKeydown:function(b){var c=a(b.target).closest("input"),d=c.attr("name");switch(b.keyCode){case 9:if(this.showMeridian){if("meridian"===d)return this.hideWidget()}else if(this.showSeconds){if("second"===d)return this.hideWidget()}else if("minute"===d)return this.hideWidget();this.updateFromWidgetInputs();break;case 27:this.hideWidget();break;case 38:switch(b.preventDefault(),d){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}break;case 40:switch(b.preventDefault(),d){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}}}},a.fn.timepicker=function(b){var c=Array.apply(null,arguments);return c.shift(),this.each(function(){var d=a(this),f=d.data("timepicker"),g="object"==typeof b&&b;f||d.data("timepicker",f=new e(this,a.extend({},a.fn.timepicker.defaults,g,a(this).data()))),"string"==typeof b&&f[b].apply(f,c)})},a.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,secondStep:15,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:".bootstrap-timepicker",upArrowStyle:"glyphicon glyphicon-chevron-up",downArrowStyle:"glyphicon glyphicon-chevron-down",containerClass:"bootstrap-timepicker"},a.fn.timepicker.Constructor=e}(jQuery,window,document);
