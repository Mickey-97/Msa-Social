if (self.CavalryLogger) { CavalryLogger.start_js(["pxUXG"]); }

__d("StarsRatableComposerCloseResetBehaviorEnum",[],(function a(b,c,d,e,f,g){f.exports={NONE:"none",RESET_TO_EMPTY:"reset_to_empty",RESET_TO_PREVIOUS:"reset_to_previous"};}),null);
__d('StarsRatableBase',['Event','Arbiter','CSS','DOM','Parent','Run','StarsRatableComposerCloseResetBehaviorEnum'],(function a(b,c,d,e,f,g){function h(i,j,k,l){this.root=i;this.freezeOnClick=j;this.stars=c('DOM').scry(i,'a');this.listeners=[c('Event').listen(this.root,'click',this._onClick.bind(this)),c('Event').listen(this.root,'mousemove',this._onMouseMove.bind(this)),c('Event').listen(this.root,'mouseout',this._onMouseOut.bind(this))];this.holdMouseMove=false;this.setRating(k);this.defaultRating=k;this.composerHideResetBehavior=l;this.composerArbiters=[];c('Run').onLeave(this.destroyListeners.bind(this));}h.init=function(i,j,k,l){return new h(i,j,k,l);};Object.assign(h.prototype,{_onClick:function i(event){this.layerHides=0;var j=this._getStarIndexFromEvent(event);if(!j)return;this.setRating(j);if(this.freezeOnClick){this.freeze();}else this.holdMouseMove=true;if(this.composerHideResetBehavior!==c('StarsRatableComposerCloseResetBehaviorEnum').NONE)this.composerArbiters=[c('Arbiter').subscribe('saving_rating_from_composer',function(k,l){this.defaultRating=l;this.setRating(this.composerHideResetBehavior===c('StarsRatableComposerCloseResetBehaviorEnum').RESET_TO_EMPTY?0:l);this._unsubscribeComposerArbiters();}.bind(this)),c('Arbiter').subscribe('canceling_from_composer',function(){this.setRating(this.composerHideResetBehavior===c('StarsRatableComposerCloseResetBehaviorEnum').RESET_TO_EMPTY?0:this.defaultRating);this._unsubscribeComposerArbiters();}.bind(this))];event.prevent();},_unsubscribeComposerArbiters:function i(){for(var j=0;j<this.composerArbiters.length;++j)c('Arbiter').unsubscribe(this.composerArbiters[j]);this.composerArbiters=[];},_onMouseMove:function i(event){if(this.holdMouseMove)return;var j=this._getStarIndexFromEvent(event);if(!j)return;this.setStars(j,true);},_onMouseOut:function i(event){this.holdMouseMove=false;this.updateStars();},_getStarIndexFromEvent:function i(event){var j=c('Parent').byTag(event.getTarget(),'a');if(j)return this.stars.indexOf(j)+1;return 0;},setRating:function i(j){this._rating=j;this.updateStars();},updateStars:function i(){this.setStars(this._rating);},setStars:function i(j,k){var l=k?'hoverStar':'fullStar',m=k?'fullStar':'hoverStar';for(var n=0;n<this.stars.length;++n){c('CSS').removeClass(this.stars[n],m);var o=n>=j;c('CSS').conditionClass(this.stars[n],l,!o);c('CSS').conditionClass(this.stars[n],'emptyStar',o);}},freeze:function i(){c('CSS').addClass(this.root,'uiStarsRated');this.destroyListeners();},destroyListeners:function i(){this.listeners.forEach(function(j){j&&j.remove();});this.listeners=[];}});b.StarsRatableBase=f.exports=h;}),null);
__d("XReviewsTabUpdateHistogramController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/pages\/review\/update_histogram\/",{page_id:{type:"Int"}});}),null);
__d('ReviewsController',['csx','fbt','ix','Arbiter','AsyncRequest','DOM','Dialog','Event','Image.react','React','ReactDOM','Run','XReviewsTabUpdateHistogramController','ge'],(function a(b,c,d,e,f,g,h,i,j){var k={},l={},m={},n={},o={},p={registerRevealProfanity:function q(r,s,t){c('Event').listen(s,'click',function(){r.style.display='none';t.style.display='inline';});},registerButton:function q(r,s){k[s]=k[s]||[];k[s].push(r);},registerViewerReview:function q(r,s){l[s]=l[s]||[];l[s].push(r);},registerComposer:function q(r,s){m[s]=m[s]||[];m[s].push(r);},registerToggle:function q(r,s,t,u){n[r]=n[r]||[];n[r].push([s,t,u]);},registerStoryDeleteListener:function q(r){c('Arbiter').subscribe('Story/delete',function(s,t){this._updateToggles(r,false);new (c('AsyncRequest'))(c('XReviewsTabUpdateHistogramController').getURIBuilder().setInt('page_id',r).getURI()).setMethod('GET').setReadOnly(true).send();}.bind(this));},addUserReview:function q(r,s,t,u,v,w,x,y,z,aa,ba){this._updateState(true,r,s,t,u,v,w,x,y,z,aa,ba);},deleteUserReview:function q(r,s,t,u,v,w){this._updateState(false,r,null,null,null,s,t,u,w,null,null);if(v){var x=document.getElementById(v),y=x.parentNode.parentNode;y.parentNode.removeChild(y);}},_updateState:function q(r,s,t,u,v,w,x,y,z,aa,ba,ca){var da;if(aa){var ea=c('ge')('own_review_container');if(ea)c('DOM').setContent(ea,aa);}else if(z){var fa=c('ge')('viewer_own_review_tab');if(fa)c('DOM').replace(fa,z);}else if(r){var ga=c('ge')('page_reviews_tab_list');if(ga)c('DOM').prependContent(ga,u);var ha="div._yj3",ia=c('DOM').scry(document,ha)[0];if(ia)ia.parentNode.removeChild(ia);}var ja=l[s]||[];for(da=0;da<ja.length;da++)c('DOM').remove(ja[da]);this._updateToggles(s,r);var ka=m[s]||[];for(da=0;da<ka.length;da++){var la=ka[da];if(r){la.hide();}else{la.clear();la.show();}}var ma=k[s]||[];for(da=0;da<ma.length;da++){var na=ma[da],oa=c('DOM').find(na,'.uiButtonText'),pa=c('DOM').find(na,'i'),qa,ra;if(r){qa=j('/images/icons/buttons/check.png');ra=i._("Reviewed");}else{qa=j('/images/icons/buttons/feature.png');ra=i._("Review");}var sa=c('DOM').create('span');c('ReactDOM').render(c('React').createElement('div',null,ra),oa);c('ReactDOM').render(c('React').createElement(c('Image.react'),{src:qa,style:{paddingRight:'5px'}}),sa);c('DOM').replace(pa,sa);}if(r){var ta=c('DOM').scry(document,'#page_recommendations_browse_list')[0];if(ta)c('DOM').prependContent(ta,t);}if(w){var ua=c('ge')('page_reviews_pill_and_histogram');if(ua)c('DOM').replace(ua,w);}if(x){var va=c('ge')('pages_inline_rating_summary');if(va)c('DOM').replace(va,x);}if(y){var wa=c('ge')('pages_review_needy_place_card');if(wa)c('DOM').replace(wa,y);}if(ba){var xa=c('ge')('spotlight_reviews_card_list');if(xa)c('DOM').prependContent(xa,ba);}if(ca){var ya=c('ge')('review_composer_container');c('DOM').insertAfter(ya,ca);}},registerPhotoUpload:function q(r,s){c('Arbiter').subscribe('multi-upload/images-upload-completed/'+s,function(){o[s]=false;});c('Arbiter').subscribe('multi-upload/images-upload-start/'+s,function(){o[s]=true;});c('Event').listen(r,'submit',function(){if(o[s]){new (c('Dialog'))().setTitle(i._("Photos Are Uploading")).setSemiModal(true).setButtons(c('Dialog').OK).setBody(i._("Please wait until photo is uploaded before posting.")).show();return false;}return true;}.bind(this));},_updateToggles:function q(r,s){var t=n[r]||[];for(var u=0;u<t.length;u++){var v=t[u],w=v[s?1:2];c('DOM').setContent(v[0],w);}}};c('Run').onLeave(function(){k={};l={};m={};n={};o={};});f.exports=p;}),null);
__d('CovercardArrow',['csx','cx','ContextualDialogArrow','CSS','DOMQuery','Locale','Style'],(function a(b,c,d,e,f,g,h,i){var j=-45,k=45,l=9;if(c('Locale').isRTL()){j=-j;k=-k;}function m(o){'use strict';this._layer=o;}m.prototype.enable=function(){'use strict';this._layer.enableBehavior(c('ContextualDialogArrow'));var o=this._layer.getContentRoot();this._arrowWrapper=c('DOMQuery').scry(o,"._ttk")[0];if(!this._arrowWrapper)return;this._arrowShadow=c('DOMQuery').scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var p=null;if(n(this._arrowWrapper))p=this._renderArrowWithRotate.bind(this);if(!p)return;if(c('Locale').isRTL())c('CSS').addClass(o,"_7lf");this._subscription=this._layer.subscribe('reposition',function(q,r){var s=r.getPosition()=='below';c('CSS').conditionClass(o,"_53ih",s);s&&p(r);});};m.prototype.disable=function(){'use strict';this._subscription&&this._subscription.unsubscribe();this._subscription=null;};m.prototype._calculateArrowOffset=function(o){'use strict';var p=c('ContextualDialogArrow').getOffsetPercent(o),q=c('ContextualDialogArrow').getOffset(o,p,this._layer),r=c('Style').get(this._layer.getContentRoot(),'width');return parseInt(r,10)*(p/100)+q;};m.prototype._renderArrowWithRotate=function(o){'use strict';var p=c('DOMQuery').scry(this._arrowWrapper,"._7lj")[0];if(!p){var q=this._layer.getContentRoot();c('CSS').addClass(q,"_2uy0");}var r=c('DOMQuery').scry(this._arrowWrapper,"._1ubp")[0];if(!r)return;var s=n(this._arrowWrapper);if(!s)return;var t=this._calculateArrowOffset(o),u=l+t,v=-l;if(c('Locale').isRTL()){u=-u;v=-v;}this._arrowWrapper.style[s]='translate('+u+'px, -'+l+'px) '+'rotate('+k+'deg)';if(p)p.style[s]='rotate('+j+'deg) '+'translate('+ -u+'px, '+(l-12)+'px)';r.style[s]='rotate('+j+'deg) '+'translate('+v+'px, 0)';};function n(o){if(!o)o=document.body;var p=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],q;while(q=p.shift())if(o.style[q]!==undefined)return q;return null;}f.exports=m;}),null);
__d('Hovercard',['csx','cx','fbt','AccessibleLayer','Arbiter','AsyncRequest','ContextualDialog','ContextualDialogXUITheme','ContextualThing','DOM','Event','JSXDOM','LayerAutoFocus','LayerRefocusOnHide','Parent','Style','Vector','clickRefAction','getInlineBoundingRect'],(function a(b,c,d,e,f,g,h,i,j){var k={},l={},m=null,n=null,o=null,p=null,q=150,r=700,s=1000,t=250,u=50,v=null,w=null,x=null,y=null;function z(oa){n=oa;if(!aa(oa)){var pa;if(!oa||!(pa=ba(oa))||la(oa)){l.moveToken&&l.moveToken.remove();l={};return false;}if(l.node!=oa){l.moveToken&&l.moveToken.remove();l={node:oa,endpoint:pa,pos:null};}}return true;}function aa(oa){return oa&&m&&l.node==oa;}function ba(oa){return oa.getAttribute('data-hovercard');}function ca(oa){var pa=c('DOM').scry(oa,"^._5jmm ._2orz").length;if(pa)return;if(!oa.leaveToken){var qa=c('Event').listen(oa,'mouseleave',function(){clearTimeout(v);clearTimeout(w);qa.remove();oa.leaveToken=null;n=null;if(!na.contains(oa))na.hide();});oa.leaveToken=qa;}if(!l.moveToken)l.moveToken=c('Event').listen(oa,'mousemove',function(event){l.pos=c('Vector').getEventPosition(event);});clearTimeout(v);clearTimeout(w);clearTimeout(y);y=null;var ra=q,sa=m?t:r;if(oa.getAttribute('data-hovercard-instant'))ra=sa=u;v=setTimeout(ga.bind(null,oa),ra);w=setTimeout(da.bind(null,oa),sa);}function da(oa,pa){if(l.node!=oa)return;var qa=k[ba(oa)];if(qa){fa(qa);}else if(pa){fa(ja());}else{var ra=m?t:r;x=setTimeout(da.bind(null,oa,true),s-ra);}}function ea(){na.hide(true);clearTimeout(w);}function fa(oa){var pa=l.node,qa=m,ra=qa!=pa,sa=pa.getAttribute('data-hovercard-position');sa&&oa.setPosition(sa);var ta=pa.getAttribute('data-hovercard-prefer-more-content-show');ta&&oa.getOrientation().setPreferMoreContentShownRect(true);if(p){var ua=p.getContentRoot();if(!c('ContextualThing').containsIncludingLayers(ua,pa))p.hide();}if(!c('DOM').contains(document.body,pa)){na.hide(true);return;}m=pa;p=oa;oa.setContextWithBounds(pa,c('getInlineBoundingRect')(pa,l.pos)).show();c('Arbiter').inform('Hovercard/show');if(ra)setTimeout(function(){c('clickRefAction')('himp',m,null,'FORCE',{ft:{evt:39}});},0);}function ga(oa){if(oa.id&&k[oa.id]!=null)return;var pa=ba(oa);if(k[pa]!=null)return;ha(pa);var qa=function ra(){na.dirty(pa);ea();};new (c('AsyncRequest'))(pa).setData({endpoint:pa}).setMethod('GET').setReadOnly(true).setErrorHandler(qa).setTransportErrorHandler(qa).send();}function ha(oa){k[oa]=false;}function ia(oa){var pa=l.node.getAttribute('data-hovercard-offset-x')||0;oa.setOffsetX(parseInt(pa,10));var qa=l.node.getAttribute('data-hovercard-offset-y')||0;oa.setOffsetY(parseInt(qa,10));}var ja=function oa(){if(!o){o=new (c('ContextualDialog'))({width:275,theme:c('ContextualDialogXUITheme')},c('JSXDOM').div({className:"_7lk"},j._("Loading...")));o.disableBehavior(c('AccessibleLayer')).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide'));ka(o);}var pa=l.node.getAttribute('data-hovercard-position');o.setPosition(pa);ia(o);return o;};function ka(oa){var pa=[oa.subscribe('mouseenter',function(){clearTimeout(y);y=null;n=l.node;}),oa.subscribe('mouseleave',function(){na.hide(true);n=null;}),oa.subscribe('destroy',function(){while(pa.length)pa.pop().unsubscribe();pa=null;})];}function la(oa){return c('Parent').bySelector(oa,"._7lu")!==null;}var ma=true,na={hide:function oa(pa){if(!m)return;if(pa){clearTimeout(y);y=null;if(p)p.hide();n=null;m=null;p=null;}else{var qa=l.node.getAttribute('data-hovercard-instant')?u:t;if(y===null)y=setTimeout(na.hide.bind(null,true),qa);}},setDialog:function oa(pa,qa){qa.disableBehavior(c('AccessibleLayer')).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide'));k[pa]=qa;ka(qa);if(l.endpoint==pa&&n==l.node){ja().hide();ia(qa);fa(qa);}},getDialog:function oa(pa){return k[pa];},contains:function oa(pa){if(p)return c('ContextualThing').containsIncludingLayers(p.getContentRoot(),pa);return false;},dirty:function oa(pa){var qa=k[pa];if(qa){qa.destroy();delete k[pa];}},dirtyAll:function oa(){for(var pa in k){var qa=k[pa];qa&&na.dirty(pa);}c('Arbiter').inform('Hovercard/dirty');},processNode:function oa(pa){if(pa&&z(pa)){ca(pa);return true;}return false;},setDirtyAllOnPageTransition:function oa(pa){ma=pa;},getLoadingDelay:function oa(){return s;},getHideDelay:function oa(){return t;}};(function(){c('Event').listen(window,'scroll',function(){if(m&&c('Style').isFixed(m))na.hide(true);});c('Arbiter').subscribe('page_transition',function(){ea();ma&&na.dirtyAll();},c('Arbiter').SUBSCRIBE_NEW);})();f.exports=na;}),null);
__d('LocalContentClickLogger',['BanzaiLogger','EventListener'],(function a(b,c,d,e,f,g){h.prototype.initClickThroughLogging=function(i,j,k){'use strict';c('EventListener').listen(i,'click',function(){return this.sendLoggingRequest(j,k);}.bind(this));};h.prototype.initMenuClickLogging=function(i,j,k,l){'use strict';i.subscribe('itemclick',function(m,n){if(n.item.getValue()==j)this.sendLoggingRequest(k,l);}.bind(this));};h.prototype.initPrivacyMenuClickLogging=function(i,j,k){'use strict';c('EventListener').listen(i,'click',function(event){j.button_text=event.target.textContent;this.sendLoggingRequest(j,k);}.bind(this));};h.prototype.sendLoggingRequest=function(i,j){'use strict';if(j=='reviews'){c('BanzaiLogger').log('ReviewConsumptionLoggerConfig',i);}else if(j=='review_production'){c('BanzaiLogger').log('ReviewProductionLoggerConfig',i);}else if(j=='menus')c('BanzaiLogger').log('MenuConsumptionLoggerConfig',i);};function h(){'use strict';}f.exports=new h();}),null);