if (self.CavalryLogger) { CavalryLogger.start_js(["wPIxV"]); }

__d("OzConstants",[],(function a(b,c,d,e,f,g){f.exports={AUTHOR_TYPES:{BOT:"bot",TRAINER:"trainer",USER:"user"},ATTS:{COMMAND:"\u0040COMMAND",IMAGE:"image",SUGG:"\u0040SUGG",TEMPLATE:"template",SURVEY:"survey",QUICK_REPLIES:"\u0040QUICK_REPLIES",OPENTABLEQR:"opentableQuickReply"},SESSION_INFO_EVENT:"iframenonce_fb_session_info",TOKENS:{USER_FIRST_NAME:"user-first-name"},REMINDERS:{RANGE_IN_YEARS:5},M_FBIDS:{M:"881263441913087",M_DEV:"1579802578966277",P:"506060876211905"}};}),null);
__d('ChatOpenTabImpl',['Promise','Arbiter','Bootloader','ChatApp','ChatOpenTab','ChatOpenTabEventLogger','ChatWelcomeMessage','MercuryEmployeeDualityPreferences','LogHistory','MercuryIDs','MercuryParticipants','MercuryViewer','MercuryThreadActions','MercuryThreadIDMap','MercuryThreads','WorkFocusModeController','WorkModeConfig','WorkDualityDismissWarning','requireWeak'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryThreadActions').get(),i=c('MercuryThreadIDMap').get(),j=c('MercuryThreads').get(),k=c('WorkFocusModeController').WorkFocusMode,l=null;c('requireWeak')('ChatTabModel',function(n){return l=n;});var m={canOpenTab:function n(){return !!(c('ChatApp')&&!c('ChatApp').isHidden());},openEmptyTab:function n(o,p,q){if(this.canOpenTab()&&l){var r=l.getEmptyTab();this._openClientTab(r,null);this._logChatOpenTabEvent(p,r,null,q);this._closeJewelFlyout();}},openThreadTab:function n(o,p,q,r,s){if(!c('MercuryIDs').isValid(o)){i.getClientIDFromServerID(o,function(t){m.openThreadTabImpl(t,p,q,r,s);});}else m.openThreadTabImpl(o,p,q,r,s);},openThreadTabImpl:function n(o,p,q,r,s){k&&k.addBypassFocusModeForThread(o);var t=new (c('Promise'))(function(v,w){j.getThreadMeta(o,function(x){v(x);});}),u=new (c('Promise'))(function(v,w){c('Bootloader').loadModules(["MercuryBlockedParticipants","GroupChatMessageBlockAlert"],function(x,y){v({MercuryBlockedParticipants:x.get(),GroupChatMessageBlockAlert:y});},'ChatOpenTabImpl');});c('Promise').all([u,t]).then(this._whenThreadLoaded.bind(this,o,p,q,r,s),this._whenThreadNotLoaded.bind(this,{thread_id:o})).done();},_whenThreadLoaded:function n(o,p,q,r,s,t){var u=t[0],v=u.MercuryBlockedParticipants,w=u.GroupChatMessageBlockAlert,x=t[1];if(v.isPresentInGroupThread(x)){w.show(v.inGroupThread(x),function(){this.openClientTab(o,p,q,r,s);}.bind(this),function(){h.leaveGroup(o);});}else this.openClientTab(o,p,q,r,s);},_whenThreadNotLoaded:function n(o,p){c('LogHistory').getInstance('mercury').error('Unable to load modules and/or get thread meta',p);},openClientTab:function n(o,p,q,r,s){this._openClientTab(o,r,s);this._logChatOpenTabEvent(p,o,null,q);this._closeJewelFlyout();},openUserTab:function n(o,p,q){var r=c('MercuryIDs').getThreadIDFromUserID(o);this._openClientTab(r);this._logChatOpenTabEvent(p,r,o,q);},openPageTab:function n(o,p,q){var r=c('MercuryIDs').getThreadIDFromUserID(p);j.getThreadMeta(r,function(s){if(o&&o.length>0){var t=(Date.now()-s.timestamp)/1000,u=t/3600;if(s.message_count===0||u>24)c('ChatWelcomeMessage').setWelcomeMessage(r,c('MercuryIDs').getParticipantIDFromUserID(p),o);}});this._openClientTab(r);this._logChatOpenTabEvent(q,r,p);},_closeJewelFlyout:function n(){c('Arbiter').inform('jewel/hide');},_openClientTab:function n(o,p,q){j.getThreadMeta(o,function(r){if(!this.canOpenTab())c('LogHistory').getInstance('mercury').error('Unable to open chat tab',o);k&&k.addBypassFocusModeForThread(o);var s=c('WorkModeConfig').has_work_user;if(s||!c('MercuryEmployeeDualityPreferences').duality_warning_gk_check){c('ChatApp').tabController.openTab(o,c('ChatApp').tabsViewport,p,!!q);}else c('MercuryParticipants').get(c('MercuryViewer').getID(),function(t){var u,v=t.employee;if(!v){c('ChatApp').tabController.openTab(o,c('ChatApp').tabsViewport,p,!!q);}else (function(){var w=c('MercuryIDs').getUserIDFromThreadID(r.thread_id);c('MercuryParticipants').getMulti(r.participants,function(x){var y=false,z=o;for(var aa in x)if(x[aa].personal_id&&w===x[aa].personal_id&&x[aa].work_id&&x[aa].employee&&!x[aa].is_friend&&!c('WorkDualityDismissWarning').isWarningAcknowledged(z)){o=c('MercuryIDs').getThreadIDFromUserID(x[aa].work_id);c('WorkDualityDismissWarning').setHijackedThread(o);y=true;break;}if(y){c('ChatOpenTab').openThread(o);}else c('ChatApp').tabController.openTab(o,c('ChatApp').tabsViewport,p,!!q);});})();});}.bind(this));},_logChatOpenTabEvent:function n(o,p,q,r){c('ChatOpenTabEventLogger').log(o,p,q,r);}};f.exports=m;}),null);
__d('ChatNewMessageHandler',['ChatActivity','ChatMentionsNotifications','ChatTabModel','ChatTabViewInstances','JSLogger','MercuryAssert','MercuryBrowserAlerts','UserActivity','MercuryConfig','MercuryThreadlistConstants'],(function a(b,c,d,e,f,g){var h=c('JSLogger').create('chat_new_message'),i={_notify:function j(k,l,m){if(c('MercuryConfig').DesktopNotificationsGK)c('ChatMentionsNotifications').notifyIfMessageToMe(l);var n=c('ChatTabViewInstances').get(k);m.view_is_visible=n&&n.isVisible();m.view_is_focused=n&&n.isFocused();if(!m.view_is_visible)h.log('message_to_hidden');m.is_active=c('ChatActivity').isActive();c('MercuryBrowserAlerts').messageReceived(l);},newMessage:function j(k,l){c('MercuryAssert').isThreadID(k);var m=c('ChatTabModel').getTab(k),n={thread_id:k,message_id:l.message_id,to_new_tab:!m,to_raised_tab:m?!!m.raised:true};this._notify(k,l,n);h.log('message',n);}};c('MercuryBrowserAlerts').subscribe('before-alert',function(j,event){var k=event.threadID,l=c('ChatTabViewInstances').get(k),m=c('ChatTabModel').getTab(k),n=c('MercuryThreadlistConstants').MESSAGE_NOTICE_INACTIVITY_THRESHOLD;if(m&&m.raised&&l&&l.isVisible()&&l.isFocused()&&c('UserActivity').isActive(n)){l.tryMarkAsRead();event.cancelAlert();}});f.exports=i;}),null);
__d('ChatTabLRUManager',['ChatTabViewInstances','ChatTabModel','InitialServerTime','MercuryThreads'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryThreads').get(),i={getLRUVisibleTab:function j(k){if(k.hasRoomForRaisedTab())return undefined;var l=Object.keys(k.getTabsToShow()||{}),m=1*60,n=null,o=Infinity;for(var p=0;p<l.length;p++){var q=l[p],r=h.getThreadMetaNow(q);if(c('ChatTabModel').isTabPromoted(q))continue;var s=c('ChatTabViewInstances').get(q);if(!(s&&s.hasEmptyInput())||!r)continue;var t=(c('InitialServerTime').serverTime-r.timestamp)/1000;if(!r.timestamp||r.timestamp&&r.timestamp<o&&t>m){n=r.thread_id;o=r.timestamp;}}return n;}};f.exports=i;}),null);
__d('ChatTabPresence',['AvailableList','ChatTabModel','MercuryIDs'],(function a(b,c,d,e,f,g){var h={};function i(j){var k=c('MercuryIDs').getUserIDFromThreadID(j);if(k)c('AvailableList').updateForID(k);}c('ChatTabModel').addListener(function(){var j=c('ChatTabModel').get();j.tabs.forEach(function(k){if(k.raised&&!h[k.id])i(k.id);});h={};j.tabs.forEach(function(k){if(k.raised)h[k.id]=true;});});f.exports={};}),null);
__d('ChatTabViewSelector',['Arbiter','ArbiterMixin','ChatTabActions','CSS','CurrentUser','DataStore','DOM','Event','FantaTabActions','MenuDeprecated','MercuryConfig','MercuryThreadInformer','MercuryThreads','MercuryThreadTitle.react','NubController','React','ReactDOM','ChatTabTemplates','Toggler'],(function a(b,c,d,e,f,g){var h=c('MercuryThreadInformer').get(),i=c('MercuryThreads').get();function j(k){var l=c('ChatTabTemplates')[':fb:chat:tab:selector'].build(),m=l.getRoot(),n=l.getNode('menu'),o=c('DOM').find(n,'.uiMenuInner'),p={},q=new (c('NubController'))().init(m);c('CSS').hide(m);c('DOM').insertBefore(k,m);function r(u){var v=0;for(var w in p){var x=p[w],y=i.getThreadMetaNow(w),z=x.getNode('unreadCount'),aa=y&&y.unread_count||0;v+=aa;if(aa>9)aa='+';c('CSS').conditionClass(z,'invisible_elem',!aa);c('DOM').setContent(z,aa);}var ba=l.getNode('numMessages');c('CSS').conditionShow(ba,v);c('DOM').setContent(ba,v);}this.setTabData=function(u){var v=p;p={};if(u.length<1){c('CSS').hide(m);return;}c('CSS').show(m);c('DOM').empty(o);u.forEach(function(y){var z=c('ChatTabTemplates')[':fb:chat:tab:selector:item'].build(),aa=z.getNode('content');p[y.id]=z;i.getThreadMeta(y.id,function(ca){c('ReactDOM').render(c('React').createElement(c('MercuryThreadTitle.react'),{thread:ca,useAndSeparator:true,viewer:c('CurrentUser').getID()}),aa);});c('DOM').prependContent(o,z.getRoot());c('DataStore').set(z.getRoot(),'threadID',y.id);var ba=z.getNode('closeButton');c('Event').listen(ba,'click',function(event){if(c('MercuryConfig').FantaTabs){c('FantaTabActions').closeTab(y.id);}else c('ChatTabActions').closeTab(y.id,'selector/close-tab');event.kill();});});for(var w in v)if(v.hasOwnProperty(w)){var x=v[w].getNode('content');x&&c('ReactDOM').unmountComponentAtNode(x);}q.flyoutContentChanged();r();};function s(event,u){if(u.menu!=n)return;var v=c('DataStore').get(u.item,'threadID');j.inform('selected',v);c('Toggler').hide(m);}function t(event,u){c('MenuDeprecated').register(n);}c('MenuDeprecated').subscribe('select',s.bind(this));c('Toggler').listen('show',m,function(){c('Arbiter').inform('layer_shown',{type:'ChatTabSelector'});t();});c('Toggler').listen('hide',m,function(){c('Arbiter').inform('layer_hidden',{type:'ChatTabSelector'});});h.subscribe('threads-updated',r);}Object.assign(j,c('ArbiterMixin'));f.exports=j;}),null);
__d('ChatTabPolicy',['ChatBehavior','JSLogger','MercuryActionType','MercuryLogMessageType','MercuryAssert','MercuryBlockedParticipants','MercuryConfig','MercuryGroupThreadMentions','MercuryIDs','MercuryParticipantTypes','MercurySourceType','MercuryThreadActions','MercuryThreadInfo','MercuryViewer','MessagingTag','OzConstants','PresencePrivacy','Set','ShortProfiles','WorkModeConfig','isInFocusMode'],(function a(b,c,d,e,f,g){var h=c('MercuryBlockedParticipants').get(),i=c('MercuryThreadActions').get(),j=c('OzConstants').M_FBIDS,k=j.M_DEV,l=j.M,m=j.P,n=new (c('Set'))([k,l,m]),o=c('JSLogger').create('tab_policy');f.exports={messageIsAllowed:function p(q,r,s){var t=q.thread_id,u=r.message_id;c('MercuryAssert').isThreadID(t);c('MercuryAssert').isParticipantID(r.author);var v;if(c('MercuryThreadInfo').isMuted(q)){v={thread_id:t,message_id:u,mute_until:q.mute_until};o.log('message_thread_muted',v);if(c('MercuryConfig').GroupChatMentionsGK)c('MercuryGroupThreadMentions').messageMentionsViewer(r,function(y){if(y)s();});return;}if(c('isInFocusMode')(t)){v={thread_id:t,message_id:u,availability_mode:'focus'};o.log('message_thread_focus_mode',v);return;}if(q.read_only){v={thread_id:t,message_id:u,mode:q.mode};o.log('message_read_only',v);return;}if(r.source==c('MercurySourceType').EMAIL||r.source==c('MercurySourceType').TITAN_EMAIL_REPLY){v={thread_id:t,message_id:u,source:r.source};o.log('message_source_not_allowed',v);return;}var w=c('MercuryIDs').getUserIDFromParticipantID(r.author);if(!w){o.log('message_bad_author',{thread_id:t,message_id:u,user:w});return;}if(r.action_type!=c('MercuryActionType').USER_GENERATED_MESSAGE&&!this._messageIsNewlyCreatedGroup(r,q)){v={thread_id:t,message_id:u,type:r.action_type};o.log('message_non_user_generated',v);return;}if(q.is_canonical_user&&!c('ChatBehavior').notifiesUserMessages()){o.log('message_jabber',{thread_id:t,message_id:u});i.markSeen(t,true);return;}if(q.is_canonical&&!q.other_user_fbid){o.log('message_canonical_contact',{thread_id:t,message_id:u});return;}if(q.folder!=c('MessagingTag').INBOX){o.log('message_folder',{thread_id:t,message_id:u,folder:q.folder});return;}if(h.isPresentInGroupThread(q)){v={thread_id:t,message_id:u};o.log('message_blocked_participants',v);return;}var x=c('MercuryIDs').getUserIDFromParticipantID(c('MercuryViewer').getID());c('ShortProfiles').getMulti([w,x],function(y){if(!c('PresencePrivacy').allows(w)){o.log('message_privacy',{thread_id:t,message_id:u,user:w});return;}var z=y[w].employee&&y[x].employee,aa=c('WorkModeConfig').is_work_user;if(!z&&!aa&&!y[w].isCommercePage&&!n.has(w)&&y[w].type!==c('MercuryParticipantTypes').FRIEND&&y[w].type!==c('MercuryParticipantTypes').PAGE){o.log('message_non_friend',{thread_id:t,message_id:u,user:w});return;}s();});},_messageIsNewlyCreatedGroup:function p(q,r){return q.action_type===c('MercuryActionType').LOG_MESSAGE&&q.log_message_type===c('MercuryLogMessageType').THREAD_NAME&&r.message_count===1;}};}),null);
__d('FantaMercuryThreadEvents',['ChatTabPolicy','MercuryThreadInformer','MercuryThreads','MercuryViewer'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryThreadInformer').get(),i=c('MercuryThreads').get(),j={onMessagesReceived:function k(l){h.subscribe('messages-received',function(m,n){var o,p=function r(s){var t,u=n[s],v=function x(y){var z=u[y];if(z.author!=c('MercuryViewer').getID()){if(!z.is_unread)return 'continue';i.getThreadMeta(s,function(aa){c('ChatTabPolicy').messageIsAllowed(aa,z,function(){l(s,z);});});}};for(var w=0;w<u.length;w++){var t=v(w);if(t==='continue')continue;}};for(var q in n)p(q);});}};f.exports=j;}),null);
__d('ChatTabController',['ChatTabPresence','Arbiter','ChatActivity','ChatConfig','ChatNewMessageHandler','ChatTabActions','ChatTabLazyFocus','ChatTabLRUManager','ChatTabModel','ChatTabViewEvents','ChatTabViewInstances','ChatTabViewSelector','FantaMercuryThreadEvents','JSLogger','MercuryThreadActions','MercuryThreadInformer','MercuryThreads'],(function a(b,c,d,e,f,g){c('ChatTabPresence');var h=c('MercuryThreadActions').get(),i=c('MercuryThreadInformer').get(),j=c('MercuryThreads').get(),k=c('ChatConfig').get('tab_auto_close_timeout')||7200000,l=c('JSLogger').create('tab_controller');function m(s,t,u){var v=c('ChatTabModel').get().tabs,w=v[s];if(!u&&v.length<2)return false;var x=v.slice(s+1),y=v.slice(0,s),z=x.concat(y);if(!t)z.reverse();if(w)z.push(w);for(var aa=0;aa<z.length;aa++){var ba=z[aa],ca=c('ChatTabViewInstances').get(ba.id),da=ba.raised||!u;if(ca&&ca.isVisible()&&da){ca.focus();return true;}}return false;}function n(s,t){var u=t&&t.getRightmostHiddenTab();if(u===s)return null;return u;}function o(){return Math.floor(Math.random()*2147483648).toString(16);}function p(s,t,u,v){c('ChatTabActions').raiseTab(s,true,u);var w=t&&t.getLeftmostVisibleTab(),x=t&&t.getTabsToShow();if(x&&!x[s]&&w){c('ChatTabModel').promoteThreadInPlaceOfThread(s,w,n(s,t),true);}else c('ChatTabActions').promoteTab(s);if(v)return;var y=c('ChatTabViewInstances').get(s);if(y){y.focus();}else c('ChatTabLazyFocus').set(s);}function q(s,t){if(!c('ChatTabModel').getTab(s))c('ChatTabActions').raiseTab(s,false);var u=t&&c('ChatTabLRUManager').getLRUVisibleTab(t),v=t&&t.getTabsToShow();if(v&&!v[s]&&u)c('ChatTabModel').promoteThreadInPlaceOfThread(s,u,n(s,t));}function r(s){c('ChatTabViewSelector').subscribe('selected',function(t,u){p(u,s);});c('Arbiter').subscribe('page_transition',function(t,u){c('ChatTabActions').closeFragileTabs();});c('Arbiter').subscribe('chat-visibility/go-offline',function(){c('ChatTabActions').closeAllTabs();});c('ChatActivity').subscribe('idle',function(t,u){if(u>k){var v=c('ChatTabModel').get().tabs;v.forEach(function(w){var x=w.id;j.getThreadMeta(x,function(y){if(!y.unread_count){l.log('autoclose_idle_seen',{thread_id:x,idleness:u});c('ChatTabActions').closeTab(x,'autoclose_idle_seen');}});});}});c('ChatTabViewEvents').subscribe('nub-activated',function(t,u){p(u,s);});c('ChatTabViewEvents').subscribe('focus-tab',function(t,u){var v=c('ChatTabModel').getTab(u);if(v&&v.raised)p(u,s,v.signatureID,false);});c('ChatTabViewEvents').subscribe('interaction-with-tab',function(t,u){var v=c('ChatTabModel').getTab(u);v&&v.raised&&h.markSeen(u);});c('ChatTabViewEvents').subscribe('esc-pressed',function(t,u){l.log('close_esc',{thread_id:u});var v=c('ChatTabModel').indexOf(u);c('ChatTabActions').closeTab(u,'close_esc');setTimeout(function(){m(v-1,true,true);},0);});c('FantaMercuryThreadEvents').onMessagesReceived(function(t,u){q(t,s);c('ChatNewMessageHandler').newMessage(t,u);});i.subscribe('thread-read-changed',function(t,u){for(var v in u)if(!u[v].mark_as_read){l.log('autoclose_marked_unread',{thread_id:v});c('ChatTabActions').closeTab(v,'autoclose_marked_unread');}});c('ChatTabViewEvents').subscribe('tab-pressed',function(t,u){return !m(c('ChatTabModel').indexOf(u.id),u.shiftPressed);});c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(t,u){u.chat_controller={auto_close_timeout:k};});this.openTab=function(t,u,v,w){p(t,u,o(),w);if(v)v(c('ChatTabViewInstances').get(t));};}f.exports=r;}),null);
__d('ChatTabViewCoordinator',['Arbiter','Bootloader','ChatTabModel','ChatTabViewSelector','CSS','ErrorUtils','FBRTCSupport','LogHistory','MercuryIDs'],(function a(b,c,d,e,f,g){'use strict';var h=c('LogHistory').getInstance('chat_tab_coordinator');function i(j,k){var l=new (c('ChatTabViewSelector'))(j),m={},n=false;function o(){var s=c('ChatTabModel').get(),t={};s.tabs.forEach(function(v){t[v.id]=1;});h.log('process_tab_changed',{model_tabs:Object.keys(t),view_tabs:Object.keys(m)});for(var u in m)if(!t[u]){h.log('remove_tab',{tab_id:u});m[u].destroy();delete m[u];}p(s,function(){q(s);if(s.tabNeedsFocus&&!s.tabNeedsFocus.isFocused())s.tabNeedsFocus.focus();});}function p(s,t){if(!s.tabs.length){t();return;}c('Bootloader').loadModules(["ChatTabView"],function(u){var v=null,w=s.tabs.find(function(x){var y=x.id;return c('MercuryIDs').isGroupChat(y);});s.tabs.forEach(function(x){var y=x.id,z=false;if(!m[y]){h.log('add_tab',{tab_id:y});m[y]=new u(y,x.server_id,x.signatureID,j,v,x===w);z=true;}else{m[y].updateSignatureID(x.signatureID);m[y].updateIsLastTab(x===w);}if(m[y].isFocused())s.tabNeedsFocus=m[y];if(!z&&!m[y].nextTabIs(v)){var aa=m[y].getScrollTop();if(v){try{m[y].insertBefore(v);}catch(ba){h.log('insertBeforeFailed','{}');m[y].appendTo(j);c('ErrorUtils').reportError(ba);}}else m[y].appendTo(j);if(aa)m[y].setScrollTop(aa);}v=m[y];});t();},'ChatTabViewCoordinator');}function q(s){var t=k.getTabsToShow(s),u=[],v=false;s.tabs.forEach(function(w){if(!t[w.id]){m[w.id].setVisibleState(false,w.raised);u.push(w);}});s.tabs.forEach(function(w){if(t[w.id]){m[w.id].setVisibleState(true,w.raised);v|=w.raised;}});l.setTabData(u);r(v);}function r(s){if(!s&&n){c('Arbiter').inform('layer_hidden',{type:'ChatTab'});n=false;}else if(s&&!n){c('Arbiter').inform('layer_shown',{type:'ChatTab'});n=true;}}if(c('FBRTCSupport').isSendWebrtcSupported())c('CSS').addClass(j,'videoCallEnabled');k.subscribe('tabs-changed',o);o();}f.exports=i;}),null);
__d('TabsViewport',['Arbiter','ArbiterMixin','ChatTabModel','DockTabsViewportCalculator','DockTabsViewportChatTabUtils','areJSONRepresentationsEqual'],(function a(b,c,d,e,f,g){'use strict';var h=c('DockTabsViewportChatTabUtils').getLoweredChatTabWidth,i=c('DockTabsViewportChatTabUtils').getRaisedChatTabWidth,j=c('DockTabsViewportChatTabUtils').getChatTabsViewState;function k(){return c('ChatTabModel').get();}function l(m){this._root=m;this._dockCalculator=c('DockTabsViewportCalculator').getInstance(m);this._dockCalculator&&this._dockCalculator.registerChatTabCallbacks({chatTabModelStateGetter:function n(){return k();},onAvailableWidthChanged:function(n){this._onAvailableWidthChanged(n);}.bind(this),onAvailableWidthChangedWithForcedTabRecalc:function(n){this._onAvailableWidthChangedWithForcedTabRecalc(n);}.bind(this)});c('ChatTabModel').addListener(function(){this._dockCalculator&&this._dockCalculator.forceRecalculateChatTabs();}.bind(this));this._forceRecalculateDockWidth();this._initialized=true;}Object.assign(l.prototype,c('ArbiterMixin'),{_root:null,_initialized:false,_dockCalculator:null,_availableWidth:0,_maxShown:1,_viewState:null,_onAvailableWidthChanged:function m(n){this._onAvailableWidthChangedImpl(n,false);},_onAvailableWidthChangedWithForcedTabRecalc:function m(n){this._onAvailableWidthChangedImpl(n,true);},_onAvailableWidthChangedImpl:function m(n,o){var p=Math.max(1,Math.floor(n/i())),q=p!=this._maxShown;if(!this._viewState||q||n<=this._viewState.usedWidth||n>this._viewState.widthToShowNext||o){this._availableWidth=n;this._maxShown=p;this._viewState=null;this._recalculateTabsViewState(q||o);}},_onTabsChanged:function m(){if(this._initialized){this.inform('tabs-changed');this.inform('max-to-show-changed',this._maxShown);this.inform('max-to-show-change-completed');}},_recalculateTabsViewState:function m(n){var o=l._getTabsToShow(k(),this._availableWidth);if(n||!c('areJSONRepresentationsEqual')(this._viewState,o)){this._viewState=o;this._onTabsChanged();}},getMaxTabsToShow:function m(){return this._maxShown;},_forceRecalculateDockWidth:function m(){this._dockCalculator&&this._dockCalculator.forceRecalculateFBDockWidth();},checkWidth:function m(){this._forceRecalculateDockWidth();},hasRoomForRaisedTab:function m(){return (this._availableWidth-this._viewState.usedWidth>i());},getTabsToShow:function m(){return JSON.parse(JSON.stringify(this._viewState.tabsToShow));},getShowingTabsOrder:function m(){var n=k(),o=this._viewState.tabsToShow;return n.tabs.filter(function(p){return o[p.id];});},getRightmostHiddenTab:function m(){var n=k(),o=this._viewState.tabsToShow,p=n.tabs.filter(function(r){return !o[r.id];}),q=p.shift();return q?q.id:null;},getLeftmostVisibleTab:function m(){var n=this.getShowingTabsOrder(),o=n.pop();return o?o.id:null;},getRaisedVisibleTabs:function m(){var n=[],o=this.getShowingTabsOrder(),p=o.length;for(var q=0;q<p;q++)if(c('ChatTabModel').getTab(o[q].id).raised)n.push(o[q].id);return n;},shouldPromoteOnRaise:function m(n){if(!this._viewState.tabsToShow[n])return true;if(this._viewState.nextToHide!=n)return false;var o=c('ChatTabModel').getTab(n),p=o&&o.raised;return !p&&this._availableWidth-this._viewState.usedWidth<i()-h();},getAvailableWidth_FOR_TEST_ONLY:function m(){if(this._dockCalculator)return this._dockCalculator.getChatTabAvailableDockWidth_FOR_TEST_ONLY();return 0;}});Object.assign(l,{_getTabsToShow:function m(n,o){return j(n,o);}});f.exports=l;}),null);
__d('ChatApp',['ChatAppActions','ChatAppStore','ChatPerfInstrumentation','CSS','JSLogger','TimeSlice'],(function a(b,c,d,e,f,g){'use strict';var h={chatOpenTabImpl:undefined,tabsViewport:undefined,tabViewCoordinator:undefined,tabController:undefined,init:function n(o,p,q){if(this.isInitialized()){c('JSLogger').create('chat_app').error('repeated_init');return;}this._rootElem=o;var r=c('ChatAppStore').addListener(function(){var s=c('ChatAppStore').getPreviousState(),t=c('ChatAppStore').getState();if(s.initialDisplayDone===false&&t.initialDisplayDone===true){m(this._rootElem);r.remove();}}.bind(this));c('ChatPerfInstrumentation').init();c('TimeSlice').guard(function(){return i();},'ChatApp stores',{isContinuation:true})();c('TimeSlice').guard(function(){return j(q);},'ChatApp data',{isContinuation:true})();c('TimeSlice').guard(function(){return k(p,o);},'ChatApp UI',{isContinuation:true})();c('TimeSlice').guard(function(){return l();},'ChatApp Hotlike sound',{isContinuation:true})();c('TimeSlice').guard(function(){c('ChatAppActions').tti();c('ChatPerfInstrumentation').logTTI();},'ChatApp TTI',{isContinuation:true})();},isInitialized:function n(){return !!c('ChatAppStore').getState().isInitialized;},isHidden:function n(){var o=c('ChatAppStore').getState();return !!(!o.isInitialized||o.isHidden);},hide:function n(){if(this.isHidden())return;c('CSS').hide(this._rootElem);c('ChatAppActions').hide();},unhide:function n(){var o=c('ChatAppStore').getState();if(o.isInitialized){if(o.isHidden){c('CSS').show(this._rootElem);this.tabsViewport&&this.tabsViewport.checkWidth();e(['Dock'],function(p){p.resizeAllFlyouts();});c('ChatAppActions').unhide();}}else if(!o.isLoaded){e(['UIPagelet'],function(p){p.loadFromEndpoint('ChatTabsPagelet','ChatTabsPagelet');p.loadFromEndpoint('BuddylistPagelet','BuddylistPagelet');});c('ChatAppActions').load();}}};function i(){e(['MercuryBlockedParticipants','MercuryChannelHandlerDEPRECATED','MercuryDelayedRoger','MercuryDeliveryReceipts','MercuryDeliveryState','MercuryParticipants','MercuryThreads','MercuryUnreadState','MercuryUnseenState','MercurySyncEnvironment','P2PSendMoneyDialogStore','OmniMStore'],function(n,o,p,q,r,s,t,u,v,w,x,y){n.get();o.get().turnOn();p.get();q.get();r.get();s;t.get();v.get();u.get();w.setUp();y.setUp();c('ChatPerfInstrumentation').logInitStores();});}function j(n){e(['MercuryServerPayloadPreprocessor'],function(o){o.get().handleUpdate(n);c('ChatPerfInstrumentation').logInitData();});}function k(n,o){e(['ChatDispatcher','ChatOpenTabImpl','ChatTabController','ChatTabModel','ChatTabViewCoordinator','FBRTCMessageHandler','MercuryBrowserAlerts','TabsViewport'],function(p,q,r,s,t,u,v,w){u.init();v.init();p.explicitlyRegisterStore(s);h.tabsViewport=new w(n);h.tabViewCoordinator=new t(n,h.tabsViewport);h.tabController=new r(h.tabsViewport);h.chatOpenTabImpl=q;c('ChatPerfInstrumentation').logInitUI();if(s.get().tabs.length===0)c('ChatPerfInstrumentation').logDisplayDone();});}function l(){e(['HotLikeSound','ChatOptions'],function(n,o){n.setCheckSoundEnabledFunc(function(){return o.getSetting('sound');});c('ChatPerfInstrumentation').logInitSound();});}function m(n){c('ChatPerfInstrumentation').logDisplayDone();}f.exports=h;}),null);