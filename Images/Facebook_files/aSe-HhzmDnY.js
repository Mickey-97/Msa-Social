if (self.CavalryLogger) { CavalryLogger.start_js(["nPQZG"]); }

__d('PluginConnectButtonWrapIconButton',['Arbiter','DOM','Event','Focus','FormSubmit','PlatformWidgetEndpoint','Plugin','PluginOptin','URI'],(function a(b,c,d,e,f,g){var h={_connected:false,_form:HTMLElement,_href:String,_button:Object,_plugin:String,_submitRequest:Object,initializeButton:function i(j,k,l,m,n,o,p,q,r,s){this._connected=l;this._form=j;this._href=o;this._button=k;this._plugin=p;this._submitRequest=null;this._connecttip=r;this._disconnecttip=s;if(m){c('Event').listen(j,'click',function(t){t.preventDefault();this.submit();}.bind(this));if(n)setTimeout(function(){this.submit();this._button.toggleButton();}.bind(this),0);c('Arbiter').subscribe(c('Plugin').CONNECT,this._updatePlugin.bind(this));c('Arbiter').subscribe(c('Plugin').DISCONNECT,this._updatePlugin.bind(this));c('Arbiter').subscribe(c('Plugin').ERROR,function(t,u){return this._handleError(u);}.bind(this));}else c('Event').listen(this._form,'click',function(t){t.preventDefault();new (c('PluginOptin'))(p,c('URI').getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:q}).start();});},submit:function i(){if(this._submitRequest!==null){this._submitRequest.clearStatusIndicator();this._submitRequest.abort();}this._submitRequest=c('FormSubmit').send(this._form);if(this._connected){c('Plugin').disconnect(this._href);}else c('Plugin').connect(this._href);},_updatePlugin:function i(j,k){if(k.identifier!==this._href)return;var l=j===c('Plugin').CONNECT;if(l!==this._button.isActivated())this._button.toggleButton();this._connected=l;this._toggleFormAction();this._button.setTitle(l?this._disconnecttip:this._connecttip);},_toggleFormAction:function i(){var j=c('PlatformWidgetEndpoint').plugins(this._plugin)+'/'+(this._connected?'disconnect':'connect');this._form.setAttribute('action',j);this._form.setAttribute('ajaxify',j);},_handleError:function i(j){c('DOM').setContent(this._form,j.content);var k=c('DOM').scry(this._form,'.confirmButton');if(k.length===1)c('Focus').set(k[0]);}};f.exports=h;}),null);
__d('intlNumUtils',['NumberFormatConfig','escapeRegex'],(function a(b,c,d,e,f,g){var h=/(\d)(\d\d\d)($|\D)/,i={'\u060C':'.','\u0660':'0','\u0661':'1','\u0662':'2','\u0663':'3','\u0664':'4','\u0665':'5','\u0666':'6','\u0667':'7','\u0668':'8','\u0669':'9','\u066B':'.','\u06F0':'0','\u06F1':'1','\u06F2':'2','\u06F3':'3','\u06F4':'4','\u06F5':'5','\u06F6':'6','\u06F7':'7','\u06F8':'8','\u06F9':'9'},j=['\u0433\u0440\u043d.','\u0434\u0435\u043d.','\u043b\u0432.','\u043c\u0430\u043d.','\u0564\u0580.','\u062c.\u0645.','\u062f.\u0625.','\u062f.\u0627.','\u062f.\u0628.','\u062f.\u062a.','\u062f.\u062c.','\u062f.\u0639.','\u062f.\u0643.','\u062f.\u0644.','\u062f.\u0645.','\u0631.\u0633.','\u0631.\u0639.','\u0631.\u0642.','\u0631.\u064a.','\u0644.\u0633.','\u0644.\u0644.','\u0783.','B/.','Bs.','Fr.','kr.','L.','p.','S/.'],k={};function l(aa){if(!k[aa])k[aa]=new RegExp(aa,'i');return k[aa];}var m=l(j.reduce(function(aa,ba,ca){return aa+(ca?'|':'')+'('+c('escapeRegex')(ba)+')';},''));function n(aa,ba,ca,da,ea){ca=ca||'';da=da||'.';ea=ea||0;if(ba===undefined||ba===null){aa=aa.toString();}else if(typeof aa==='string'){aa=t(aa,ba);}else aa=r(aa,ba);var fa=aa.split('.'),ga=fa[0],ha=fa[1];if(Math.abs(parseInt(ga,10)).toString().length>=ea){var ia='',ja='$1'+ca+'$2$3';while((ia=ga.replace(h,ja))!=ga)ga=ia;}var ka=ga;if(ha)ka+=da+ha;return ka;}function o(aa,ba){return n(aa,ba,'',c('NumberFormatConfig').decimalSeparator,c('NumberFormatConfig').minDigitsForThousandsSeparator);}function p(aa,ba){return n(aa,ba,c('NumberFormatConfig').numberDelimiter,c('NumberFormatConfig').decimalSeparator,c('NumberFormatConfig').minDigitsForThousandsSeparator);}function q(aa,ba,ca){var da=Math.floor(Math.log(aa)/Math.LN10),ea=aa;if(da<ca)ea=aa*Math.pow(10,-da+ca);var fa=Math.pow(10,Math.floor(Math.log(ea)/Math.LN10)-ca+1),ga=Math.round(ea/fa)*fa;if(da<ca)ga/=Math.pow(10,-da+ca);return p(ga,ba);}function r(aa,ba){var ca=ba==null?0:ba,da=Math.pow(10,ca),ea=aa;ea=Math.round(ea*da)/da;ea=ea+'';if(!ca)return ea;var fa=ea.indexOf('.'),ga=0;if(fa==-1){ea+='.';ga=ca;}else ga=ca-(ea.length-fa-1);for(var ha=0,ia=ga;ha<ia;ha++)ea+='0';return ea;}var s=function aa(ba,ca){for(var da=0;da<ca;da++)ba+='0';return ba;};function t(aa,ba){var ca=aa.indexOf('.'),da=ca===-1?aa:aa.slice(0,ca),ea=ca===-1?'':aa.slice(ca+1);return ba?da+'.'+s(ea.slice(0,ba),ba-ea.length):da;}var u={},v=function aa(ba){if(!u[ba])u[ba]=new RegExp('([^\\/p]|^)'+c('escapeRegex')(ba)+'(\\d*).*','i');return u[ba];};function w(aa,ba,ca){aa=aa.split('').map(function(ja){return (i.hasOwnProperty(ja)?i[ja]:ja);}).join('').trim();aa=aa.replace(/^[^\d]*\-/,'\u0002');aa=aa.replace(m,'');ca=ca||'';var da=c('escapeRegex')(ba),ea=c('escapeRegex')(ca),fa=l('^[^\\d]*\\d.*'+da+'.*\\d[^\\d]*$');if(!fa.test(aa)){var ga=l('(^[^\\d]*)'+da+'(\\d*[^\\d]*$)');if(ga.test(aa)){aa=aa.replace(ga,'$1\u0001$2');return x(aa);}var ha=l('^[^\\d]*[\\d '+c('escapeRegex')(ea)+']*[^\\d]*$');if(!ha.test(aa))aa='';return x(aa);}var ia=l('(^[^\\d]*[\\d '+ea+']*)'+da+'(\\d*[^\\d]*$)');aa=ia.test(aa)?aa.replace(ia,'$1\u0001$2'):'';return x(aa);}function x(aa){aa=aa.replace(/[^0-9\u0001\u0002]/g,'').replace('\u0001','.').replace('\u0002','-');var ba=Number(aa);return aa===''||isNaN(ba)?null:ba;}function y(aa){return w(aa,c('NumberFormatConfig').decimalSeparator||'.',c('NumberFormatConfig').numberDelimiter);}var z={formatNumber:o,formatNumberRaw:n,formatNumberWithThousandDelimiters:p,formatNumberWithLimitedSigFig:q,parseNumber:y,parseNumberRaw:w,getFloatString:function aa(ba,ca,da){var ea=String(ba),fa=ea.split('.'),ga=z.getIntegerString(fa[0],ca);if(fa.length===1)return ga;return ga+da+fa[1];},getIntegerString:function aa(ba,ca){var da=String(ba),ea=/(\d+)(\d{3})/;while(ea.test(da))da=da.replace(ea,'$1'+ca+'$2');return da;}};f.exports=z;}),null);
__d('formatNumber',['intlNumUtils'],(function a(b,c,d,e,f,g){function h(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];return c('intlNumUtils').formatNumber.apply(c('intlNumUtils'),j);}h.withThousandDelimiters=c('intlNumUtils').formatNumberWithThousandDelimiters;f.exports=h;}),null);
__d('intlSummarizeNumber',['fbt','formatNumber'],(function a(b,c,d,e,f,g,h){function i(j){var k=arguments.length<=1||arguments[1]===undefined?0:arguments[1];j=parseFloat(j.toFixed(k));if(Math.abs(j)<1000)return c('formatNumber')(j,k);j=parseFloat((j/1000).toFixed(k||1));if(Math.abs(j)<1000)return String(h._("{number}K",[h.param('number',c('formatNumber')(j,k||j%1&&1))]));j=parseFloat((j/1000).toFixed(k||1));if(Math.abs(j)<1000)return String(h._("{number}M",[h.param('number',c('formatNumber')(j,k||j%1&&1))]));j=parseFloat((j/1000).toFixed(k||1));return String(h._("{number}B",[h.param('number',c('formatNumber')(j,k||j%1&&1))]));}f.exports=i;}),null);
__d('PluginIconButton',['invariant','fbt','CSS','DOM','Event','intlSummarizeNumber'],(function a(b,c,d,e,f,g,h,i){function j(k,l,m,n,o){'use strict';n===null||m!==null||h(0);this.$PluginIconButton1=k;this.$PluginIconButton2=m;this.$PluginIconButton3=n;this.$PluginIconButton4=o;if(l===false){c('Event').listen(k,'click',function(){return this.toggleButton();}.bind(this));c('Event').listen(k,'toggle',function(){return this.toggleButton();}.bind(this));if(this.$PluginIconButton4)c('Event').listen(k,'mouseout',function(){return c('CSS').removeClass(this.$PluginIconButton1,'stop_hoverx');}.bind(this));}}j.prototype.toggleButton=function(){'use strict';if(c('CSS').hasClass(this.$PluginIconButton1,'active')===false){c('CSS').addClass(this.$PluginIconButton1,'active');if(this.$PluginIconButton4)c('CSS').addClass(this.$PluginIconButton1,'stop_hoverx');this.$PluginIconButton5(true);c('CSS').addClass(this.$PluginIconButton1,'is_animating');setTimeout(function(){return c('CSS').removeClass(this.$PluginIconButton1,'is_animating');}.bind(this),240);}else{c('CSS').removeClass(this.$PluginIconButton1,'active');this.$PluginIconButton5(false);}};j.prototype.setTitle=function(k){'use strict';this.$PluginIconButton1.setAttribute('title',k);};j.prototype.$PluginIconButton5=function(k){'use strict';var l=function m(n){return i._("{count}",[i.param('count',c('intlSummarizeNumber')(n,0))]);};if(this.$PluginIconButton3!=null&&this.$PluginIconButton3<1000){this.$PluginIconButton3=k?this.$PluginIconButton3+1:this.$PluginIconButton3-1;c('DOM').setContent(this.$PluginIconButton2,l(this.$PluginIconButton3));}};j.prototype.isActivated=function(){'use strict';return c('CSS').hasClass(this.$PluginIconButton1,'active');};f.exports=j;}),null);