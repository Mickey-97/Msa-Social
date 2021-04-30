if (self.CavalryLogger) { CavalryLogger.start_js(["yUY9T"]); }

__d('ExternalTrackingTag',['AsyncSignal','TrackingPixel','Event'],(function a(b,c,d,e,f,g){var h={listenForElementClick:function i(j,k,l,m,n){c('Event').listen(j,'click',function(){h.sendRequest(k,l,m,n);});},sendRequest:function i(j,k,l,m){if(!j)return;new (c('AsyncSignal'))('/ads/external_tracking_tag/',{href:j,tracking_tag_id:k,adgroup_id:l,ad_id:m}).send();c('TrackingPixel').loadWithNoReferrer(j);}};f.exports=h;}),null);
__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','ge','getScrollPosition'],(function a(b,c,d,e,f,g){'use strict';var h=0,i=null;function j(){if(i)return;i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){m(0);k();}),c('Event').listen(window,'resize',function(){if(!c('BlueBar').hasFixedBlueBar()){m(0);k();}}),c('Event').listen(window,'scroll',function(){if(!l())k();}));c('Run').onLeave(function(){return i&&i.release();});}function k(){i.release();i=null;}function l(){if(h<=0)return false;m(c('clamp')(c('getScrollPosition')(window).y,0,h));return h>0;}function m(p){if(p===h)return;n('leftCol',p);n('rightCol',p);h=p;}function n(p,q){var r=c('ge')(p);if(r)r.style.marginTop=q?q+'px':'';}var o={adjustVerticalWindowPosition:function p(q,r){j();m(r);window.scrollTo(q.x,q.y+h);}};f.exports=o;}),null);
__d('LitestandStream',['csx','invariant','Arbiter','CSS','EventEmitter','LitestandColumnManager','LitestandStoryInsertionStatus','Run','ViewportBounds','getElementPosition','getScrollPosition','nullthrows'],(function a(b,c,d,e,f,g,h,i){var j=void 0,k=void 0,l=void 0,m=void 0,n=new (c('EventEmitter'))(),o={init:function p(q,r,s,t){j=s;l=q;k=t;if(!m)m=c('Arbiter').subscribe('ufi/didUpdate',function(u,v){if(v.offsetY)c('LitestandColumnManager').adjustVerticalWindowPosition(c('getScrollPosition')(window),v.offsetY);});c('Run').onLeave(function(){m&&m.unsubscribe();m=null;n.removeAllListeners('ready');l=null;});n.emit('ready');},getStoriesSelector:function p(){return "._5jmm";},getStreamRoot:function p(){return l;},getSectionID:function p(){return j;},getStoryID:function p(){return k;},isStory:function p(q){return c('CSS').matchesSelector(q,"._5jmm");},canInsertNewerStories:function p(){if(c('ViewportBounds').getTop()>c('getElementPosition')(o.getStreamRoot()).y)return false;return c('LitestandStoryInsertionStatus').canInsert();},getFeedStreamID:function p(){return parseInt(c('nullthrows')(l).id.split('feed_stream_')[1],16)%1e+08;},isReady:function p(){return !!l;},addReadyListener:function p(q){o.isReady()||i(0);return n.once('ready',q);}};f.exports=o;}),null);
__d('FeedAdsClickLogger',['Arbiter','AsyncRequest','Banzai','BanzaiODS','collectDataAttributes','DataAttributeUtils','DOM','ge','LitestandMessages','LitestandStream','Parent','TrackingNodes','ExternalTrackingTag','URI','isFacebookURI'],(function a(b,c,d,e,f,g){var h='ssinfeed',i={},j=false,k=[],l;function m(){'use strict';}m.prototype.init=function(o){'use strict';l=o.use_feed_renderer;c('Arbiter').subscribe("ClickRefAction/new",this.onNewUserAction.bind(this));if(o.append_tracking_data_to_links){this.appendTrackingDataToLinks();c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this));c('Arbiter').subscribe('FeedAdsClickLogger/refreshTrackingData',this.appendTrackingDataToLinks.bind(this),c('Arbiter').SUBSCRIBE_NEW);}};m.prototype.getStories=function(){'use strict';var o=c('LitestandStream').getStreamRoot();if(o){return c('DOM').scry(o,c('LitestandStream').getStoriesSelector());}else{var p=c('ge')('home_stream');if(p)return c('DOM').scry(p,'.uiStreamStory');}return [];};m.prototype.appendTrackingDataToLinks=function(){'use strict';var o=this.getStories();for(var p=0;p<o.length;p++){var q=o[p];if(q in k)continue;var r=c('DataAttributeUtils').getDataFt(q);if(!r||r.indexOf('ei')===-1&&r.indexOf('mei')===-1)continue;var s=c('DOM').scry(q,'a');for(var t=0;t<s.length;t++){var u=s[t];if(u.getAttribute('ajaxify')!=null)continue;if(u.getAttribute('rel')!=null)continue;var v=u.getAttribute('href');if(!v||v.charAt(0)==='#')continue;var w=new (c('URI'))(u);if(c('isFacebookURI')(w)===false)continue;if(w.isLinkshimURI()===true)continue;if(l&&(w.getPath()==='/ads/about'||w.getPath()==='/about/ads'))continue;u.setAttribute('href',n(u).toString());u.setAttribute('onmousedown',"this.href = this.href.replace('__md__=0', '__md__=1');");}k.push(q);}};m.prototype.getHref=function(o){'use strict';return (o.getAttribute&&(o.getAttribute('ajaxify')||o.getAttribute('data-endpoint'))||o.action||o.href);};m.prototype.sendLogRequest=function(o,p){'use strict';var q=o.ei||o.ai;if(!q&&o.mei)q=o.mf_story_key;if(o!==null&&typeof q==="string"){var r=false;if(o.tn){var s=c('TrackingNodes').parseTrackingNodeString(o.tn);for(var t=0;t<s.length;t++){var u=s[t][0];switch(u){case c('TrackingNodes').types.LIKE_LINK:case c('TrackingNodes').types.UNLIKE_LINK:case c('TrackingNodes').types.COMMENT:case c('TrackingNodes').types.COMMENT_LINK:case c('TrackingNodes').types.ADD_COMMENT_BOX:case c('TrackingNodes').types.MULTI_ATTACHMENT_VIDEO:return;case c('TrackingNodes').types.XBUTTON:case c('TrackingNodes').types.HIDE_LINK:case c('TrackingNodes').types.REPORT_SPAM_LINK:case c('TrackingNodes').types.HIDE_ALL_LINK:case c('TrackingNodes').types.DROPDOWN_BUTTON:case c('TrackingNodes').types.UNHIDE_LINK:return;case c('TrackingNodes').types.RELATED_SHARE_ARTICLE:case c('TrackingNodes').types.RELATED_SHARE_VIDEO:return;case c('TrackingNodes').types.ATTACHMENT:case c('TrackingNodes').types.USER_MESSAGE:r=true;break;}}}var v=Date.now(),w=500;o.duplicate_click=!!i[q]&&v-i[q]<w;i[q]=v;var x=new (c('AsyncRequest'))('/ajax/ssinfeed/end/').setData(o).setAllowCrossPageTransition(true).setMethod('POST');x.send();var y=o.href;if(new (c('URI'))(y).isLinkshimURI()&&new (c('URI'))(y).getQueryData())y=new (c('URI'))(y).getQueryData().u;if(r&&!o.duplicate_click&&p!==null&&p.url&&y&&c('isFacebookURI')(new (c('URI'))(y))===false){c('ExternalTrackingTag').sendRequest(p.url,p.tag_id,p.adgroup_id);c('BanzaiODS').bumpEntityKey('external_tracking_tags','request_sent');}}};m.prototype.onNewUserAction=function(o,p){'use strict';if(!p.node)return;var q=this.getHref(p.node),r=c('Parent').byTag(p.node,'input')||c('Parent').byTag(p.node,'button');if(!q&&r&&r.type=="submit"&&r.getAttribute&&c('DataAttributeUtils').getDataFt(r))q="#";var s,t;if(q&&p.event&&(p.event.type==='click'||p.event.type==='contextmenu')){s=c('collectDataAttributes')(p.node,['ft']);s.ft.href=q;s.ft.mouse_type=p.event.type;t=c('collectDataAttributes')(p.node,['external-tracking-tags']);this.sendLogRequest(s.ft,t['external-tracking-tags']);}};function n(o){var p=new (c('URI'))(o.href),q=c('collectDataAttributes')(o,['ft']).ft,r=p.getQueryData();r.ft=q;r.__md__=0;p.setQueryData(r);return p;}f.exports={init:function o(p){if(j===false){new m().init(p);j=true;}},buildURL:n};}),null);
__d('AdsPagerConstants',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){var h=c('keyMirrorRecursive')({ADD_PAGE:'',PAGE_TRANSITION:'',REQUEST_PAGE:''}),i=c('keyMirrorRecursive')({VIEW_ACTION:'',SERVER_ACTION:''});f.exports={ActionTypes:h,PayloadSources:i};}),null);
__d('AdsPagerDispatcher',['AdsPagerConstants','Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){'use strict';var h=c('AdsPagerConstants').PayloadSources;function i(k){return function(l){this.dispatch({payloadSource:k,action:l});};}var j=Object.assign(new (c('Dispatcher_DEPRECATED'))(),{handleUpdateFromViewAction:i(h.VIEW_ACTION),handleUpdateFromServerAction:i(h.SERVER_ACTION)});f.exports=j;}),null);
__d('AdsRefreshHandler',['csx','AdsMouseStateStore','AdsPagerConstants','AdsPagerDispatcher','Animation','Arbiter','DataAttributeUtils','DOM','Event','SubscriptionsHandler','Toggler','UIPagelet','cxodecode','debounceAcrossTransitions','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h){var i=c('AdsMouseStateStore').STATES,j=600,k=c('AdsMouseStateStore').get(),l=void 0;function m(n,o,p){'use strict';if(!p.data||!p.pid)return;if(o.nonce)l=c('cxodecode')(o.nonce);this.$AdsRefreshHandler1=n;this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler3=o;this.$AdsRefreshHandler4=p;this.$AdsRefreshHandler5=0;this.$AdsRefreshHandler6=false;this.$AdsRefreshHandler7=true;this.$AdsRefreshHandler8=null;this.$AdsRefreshHandler9=c('debounceAcrossTransitions')(this.reloadAdsIfNeeded.bind(this),this.$AdsRefreshHandler3.delay);this.$AdsRefreshHandler10=new (c('SubscriptionsHandler'))();this.$AdsRefreshHandler10.addSubscriptions(c('Event').listen(this.$AdsRefreshHandler1,'mouseenter',this.setMouseOver.bind(this,true)),c('Event').listen(this.$AdsRefreshHandler1,'mouseleave',this.setMouseOver.bind(this,false)),k.addListener('change',this.onMouseStateStoreChange.bind(this)),c('Arbiter').subscribe('AdsPreferencesDialog/opened',this.stopRefreshingRHC.bind(this)),c('Arbiter').subscribe('AdsPreferencesDialog/closed',this.startRefreshingRHC.bind(this)),c('Arbiter').subscribe('VideoChannelView/opened',this.stopRefreshingRHC.bind(this)),c('Arbiter').subscribe('VideoChannelView/closed',this.startRefreshingRHC.bind(this)));this.$AdsRefreshHandler11();c('AdsPagerDispatcher').register(this.handlePageDispatch.bind(this));}m.prototype.$AdsRefreshHandler11=function(){'use strict';if(this.$AdsRefreshHandler12)this.$AdsRefreshHandler12.release();this.$AdsRefreshHandler12=new (c('SubscriptionsHandler'))();var n=c('DOM').scry(this.$AdsRefreshHandler1,'.uiToggle');for(var o=0;o<n.length;o++)this.$AdsRefreshHandler12.addSubscriptions(c('Toggler').listen('show',n[o],this.stopRefreshingRHC.bind(this)),c('Toggler').listen('hide',n[o],this.startRefreshingRHC.bind(this)));};m.prototype.handlePageDispatch=function(n){'use strict';var o=n.action||{};if(o.actionType===c('AdsPagerConstants').ActionTypes.REQUEST_PAGE)this.reloadAds();};m.prototype.setMouseOver=function(n){'use strict';this.$AdsRefreshHandler13=n;if(n&&this.$AdsRefreshHandler8!=null){this.$AdsRefreshHandler8.cancel();this.$AdsRefreshHandler8=null;}};m.prototype.subscribeDefaultEventsForRefresh=function(){'use strict';this.$AdsRefreshHandler10.addSubscriptions(c('Event').listen(window,'scroll',this.$AdsRefreshHandler9),c('Event').listen(window,'resize',this.$AdsRefreshHandler9));return this;};m.prototype.reloadWithDebounce=function(){'use strict';this.$AdsRefreshHandler9();};m.prototype.reloadWithoutDebounce=function(){'use strict';this.reloadAdsIfNeeded();};m.prototype.stopRefreshingRHC=function(n,o){'use strict';this.$AdsRefreshHandler7=false;};m.prototype.startRefreshingRHC=function(n,o){'use strict';this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler7=true;};m.prototype.forceLoadIfEnoughTimePassed=function(n){'use strict';if(Date.now()-this.$AdsRefreshHandler2>n)this.reloadAds();};m.prototype.containsPremium=function(){'use strict';var n=c('DOM').scry(this.$AdsRefreshHandler1,l||"div._4u8");return !!n.filter(function(o){return JSON.parse(c('DataAttributeUtils').getDataAttribute(o,'data-ad')).segment==='premium';}).length;};m.prototype.reloadAdsIfNeeded=function(){'use strict';if(!this.$AdsRefreshHandler1)return;c('Arbiter').inform('AdsRefreshHandler/CheckingReload');if(this.$AdsRefreshHandler3.stateRefresh){this.reloadAdsIfNeededStateBased();return;}if(this.containsPremium()||this.$AdsRefreshHandler13||!this.$AdsRefreshHandler3.interval)return;if(Date.now()-this.$AdsRefreshHandler2>=this.$AdsRefreshHandler3.interval)this.reloadAds();};m.prototype.reloadAdsIfNeededStateBased=function(){'use strict';if(Date.now()-this.$AdsRefreshHandler2<this.$AdsRefreshHandler3.interval)return;if(this.containsPremium())return;if(!this.$AdsRefreshHandler3.interval)return;this.$AdsRefreshHandler6=true;c('Arbiter').inform('AdsRefreshHandler/RefreshScheduled');this.checkScheduledRefresh();};m.prototype.getRefreshScheduled=function(){'use strict';return this.$AdsRefreshHandler6;};m.prototype.onMouseStateStoreChange=function(){'use strict';this.checkScheduledRefresh();};m.prototype.checkScheduledRefresh=function(){'use strict';if(!this.$AdsRefreshHandler6)return;if(this.$AdsRefreshHandler13)return;var n=k.getState(),o=false;switch(n){case i.HOVER:case i.NO_INTENT:o=true;break;default:break;}if(!o)return;this.$AdsRefreshHandler6=false;this.reloadAds();};m.prototype.reloadAds=function(){'use strict';if(!this.$AdsRefreshHandler1)return;this.$AdsRefreshHandler2=Date.now();if(!this.$AdsRefreshHandler7)return;var n=this.$AdsRefreshHandler4&&this.$AdsRefreshHandler4.data,o=babelHelpers['extends']({},n,{refresh_num:++this.$AdsRefreshHandler5});this.$AdsRefreshHandler8=c('UIPagelet').loadFromEndpoint('WebEgoPane',this.$AdsRefreshHandler1,{dom_id:c('getOrCreateDOMID')(this.$AdsRefreshHandler1),pid:this.$AdsRefreshHandler4.pid,data:o},{bundle:false,handler:this.onLoadHandler.bind(this)});c('Arbiter').inform('AdsRefreshHandler/AdsLoading');};m.prototype.onLoadHandler=function(){'use strict';c('Arbiter').inform('AdsRefreshHandler/AdsLoaded');this.$AdsRefreshHandler8=null;this.$AdsRefreshHandler11();if(!this.$AdsRefreshHandler3.fade)return;new (c('Animation'))(this.$AdsRefreshHandler1).from('opacity',0).to('opacity',1).duration(j).go();};m.prototype.cleanup=function(){'use strict';this.$AdsRefreshHandler1=null;this.$AdsRefreshHandler10.release();this.$AdsRefreshHandler9.reset();};f.exports=m;}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s;},getActiveInstance:function r(){return n;},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null;},registerInstance:function r(s,t){s||h(0);p[s]=t;q.setActiveInstance(t);},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null;},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k;},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode);}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t);}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t();}c('Arbiter').inform('ticker/show',{node:s,callback:t});},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send();},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s);},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s);},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w);},m);t.setAttribute('data-timeout-token',x);},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s);}).go();},'TickerController');},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s);},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s);},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j;},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback();}}};f.exports=q;}),null);
__d('TickerRightColumnController',['Arbiter','CSS','DOM','Event','NavigationMessage','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g){var h;function i(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').show(n,k);}function j(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').hide(n);}function k(){var n=c('ge')('pagelet_rhc_ticker'),o=c('DOM').scry(n,'.ticker_container')[0],p=c('DOM').scry(n,'.ticker_stream')[0],q=c('ge')('rightCol');if(!n||!o||!p||!q)return;c('Style').set(o,'height','0');var r=75,s=c('Vector').getViewportDimensions().y,t=c('Vector').getElementDimensions(q).y,u=s-t-r,v=c('Vector').getElementDimensions(p).y,w=Math.max(Math.min(u,v,h.tickerMaxHeight||425),h.tickerMinHeight||225);c('Style').set(o,'height',w+'px');}function l(n){var o=c('ge')('pagelet_reminders'),p=c('ge')('pagelet_rhc_ticker'),q=o&&c('DOM').scry(o,'div.tickerToggleWrapper')[0],r=p&&c('DOM').scry(p,'div.tickerToggleWrapper')[0];q&&c('CSS').conditionClass(q,'displayedTickerToggleWrapper',!n);r&&c('CSS').conditionClass(r,'displayedTickerToggleWrapper',n);p&&c('CSS').conditionClass(p,'hidden_rhc_ticker',!n);if(n){k();var s=c('ge')('fbTickerClosedEd');s&&c('CSS').hide(s);}}var m={init:function n(o){h=o;var p=new (c('SubscriptionsHandler'))();if(h.enableSidebar)p.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(r,s){if(s){j();}else i();}),c('Arbiter').subscribe('minisidebar/show',i),c('Arbiter').subscribe('LitestandClassicRHC/loaded',k),c('Event').listen(window,'scroll',c('throttle')(function(){var r=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],s=c('TickerController').getInstance(r);s&&s.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){i();}else if(h.enableSidebar)j();var q=function r(){p.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,q);c('Run').onLeave(q);},initRHCTickerHider:function n(o){c('Event').listen(o,'click',this.hideRHCTicker);},showRHCTicker:function n(){l(true);},hideRHCTicker:function n(){l(false);}};f.exports=m;}),null);