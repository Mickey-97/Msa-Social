if (self.CavalryLogger) { CavalryLogger.start_js(["4FoTa"]); }

__d('MercuryNonEmployeeTypeaheadRenderer',['cx','fbt','DOM','CompactTypeaheadRenderer'],(function a(b,c,d,e,f,g,h,i){'use strict';function j(k,l){var m=c('CompactTypeaheadRenderer')(k,l);if(k.non_employee){var n=c('DOM').create('span',{className:"_52l8 highlight"},i._("(Non-Employee)")),o=c('DOM').scry(m,'.subtext')[0];if(o){c('DOM').prependContent(o,'\u00b7');c('DOM').prependContent(o,n);}}return m;}f.exports=j;}),null);
__d('ChatTabTypeaheadRenderer',['DOM','MercuryNonEmployeeTypeaheadRenderer','MercuryTimestamp','MercuryTypeaheadConstants','MercuryThreadMetadataRawRenderer','TypeaheadFacepile'],(function a(b,c,d,e,f,g){function h(j,k){switch(j.type){case c('MercuryTypeaheadConstants').USER_TYPE:case c('MercuryTypeaheadConstants').PAGE_TYPE:return c('MercuryNonEmployeeTypeaheadRenderer')(j,k);case c('MercuryTypeaheadConstants').THREAD_TYPE:return i(j,k);default:return c('DOM').create('div');}}function i(j,k){var l=[],m=j.mercury_thread;if(m.image_src){l.push(c('DOM').create('img',{alt:'',src:m.image_src}));}else{var n=j.participants_to_render.map(function(q){return q.big_image_src||q.image_src;});if(n){if(n instanceof Array){n=c('TypeaheadFacepile').render(n);}else n=c('DOM').create('img',{alt:'',src:n});l.push(n);}}var o=m.name,p=c('MercuryThreadMetadataRawRenderer').renderRawParticipantList(m.thread_id,j.participants_to_render,m.participants.length,{names_renderer:c('MercuryThreadMetadataRawRenderer').renderShortNames});l.push(c('DOM').create('span',{className:'timestamp'},c('MercuryTimestamp').getRelativeTimestamp(m.timestamp)));l.push(c('DOM').create('span',{className:'text'},o));l.push(c('DOM').create('span',{className:'subtext'},p));return c('DOM').create('li',{className:'node'},l);}h.className='compact';f.exports=h;}),null);
__d("XAssociateGroupThreadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/groups\/messenger\/associate_group_thread\/",{});}),null);
__d("XGroupSideConversationCreateController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/groups\/side_conversation\/",{post_id:{type:"Int"}});}),null);
__d('MultiChatController',['AsyncRequest','AsyncSignal','ChatOpenTab','ChatOpenTabEventLogger','FantaTabActions','Form','MercuryConfig','MercuryDispatcher','MercuryIDs','MercuryLocalIDs','MercuryThreadIDMap','MercuryViewer','MercuryServerDispatcher','MercuryThreads','XAssociateGroupThreadController','XGroupSideConversationCreateController'],(function a(b,c,d,e,f,g){var h=c('MercuryDispatcher').get(),i=c('MercuryThreadIDMap').get(),j=c('MercuryThreads').get(),k=c('XGroupSideConversationCreateController').getURIBuilder().getURI().toString(),l=c('XAssociateGroupThreadController').getURIBuilder().getURI().toString();function m(){}Object.assign(m,{subscribe:function o(p,q){p.subscribe('confirm',function(){this.createGroupThreadFromChooserDialog(p,q);}.bind(this));},subscribeFromPost:function o(p,q){p.subscribe('confirm',function(){this.createGroupPostThreadFromChooserDialog(p,q);}.bind(this));},createGroupPostThreadFromChooserDialog:function o(p,q){var r=c('Form').serialize(p.getRoot()),s=JSON.parse(r.profileChooserItems),t=Object.keys(s).filter(function(u){return !!s[u];});m.createThreadForFBIDs(t);new (c('AsyncRequest'))().setURI(k).setData({post_id:q}).send();p.hide();},createGroupThreadFromChooserDialog:function o(p,q){var r=c('Form').serialize(p.getRoot()),s=JSON.parse(r.profileChooserItems),t=[];for(var u in s)if(s[u])t.push(u);var v=m.createThreadForFBIDs(t),w=h.subscribe('update-thread-ids',function(x,y){for(var z in y)if(y[z]==v){var aa=j.getThreadMetaNow(v),ba=i.getServerIDFromClientIDNow(v);if(aa&&!aa.is_canonical&&ba)c('MercuryServerDispatcher').trySend(l,{group_id:q,thread_id:ba});new (c('AsyncSignal'))('/ajax/groups/chat/log',{group_id:q,message_id:z}).send();h.unsubscribe(w);break;}});p.hide();},createThreadForTokens:function o(p){var q=c('MercuryViewer').getID();if(!p.length)return;p=p.filter(function(s){return s!==q;});var r;if(p.length===0){return;}else if(p.length===1){r=c('MercuryIDs').getThreadIDFromParticipantID(p[0]);if(c('MercuryConfig').FantaTabs){c('FantaTabActions').openTab(r);c('ChatOpenTabEventLogger').log('ChatTabView',r);}else c('ChatOpenTab').openThread(r,'ChatTabView');}else{r=c('MercuryLocalIDs').generateThreadID();p.unshift(q);j.createNewLocalThread(r,p);if(c('MercuryConfig').FantaTabs){c('FantaTabActions').openTab(r);c('ChatOpenTabEventLogger').log('MultiChatController',r);}else c('ChatOpenTab').openThread(r,'MultiChatController');}return r;},createThreadForFBIDs:function o(p){var q=[];for(var r=0;r<p.length;r++)q.push('fbid:'+p[r]);return m.createThreadForTokens(q);}});var n={};n[l]={mode:c('MercuryServerDispatcher').IMMEDIATE};c('MercuryServerDispatcher').registerEndpoints(n);f.exports=m;}),null);
__d('ChatAddFriendsTabSheetRawRenderer',['fbt','ChatTabTypeaheadRenderer','ContextualTypeaheadView','DOM','Event','MercuryDataSourceWrapper','MercuryTypeahead','MessengerAdminGroupUtils','ChatTabTemplates','WorkModeConfig','Keys'],(function a(b,c,d,e,f,g,h){'use strict';var i={render:function j(k,l,m,n,o,p){var q,r=p?c('ChatTabTemplates')[':fb:mercury:chat:tab-sheet:add-friends-empty-tab'].build():c('ChatTabTemplates')[':fb:mercury:chat:tab-sheet:add-friends'].build(),s=p?c('MercuryDataSourceWrapper').chat_typeahead_source:c('MercuryDataSourceWrapper').chat_add_people_source;s.setShowThreads(p);var t=new (c('MercuryTypeahead'))(s,c('ContextualTypeaheadView'));t.setViewOption('renderer',c('ChatTabTypeaheadRenderer'));t.setExcludedParticipantsFromThreadMeta(n);if(!p){var u=void 0;if(c('WorkModeConfig').is_work_user){u=h._("Add co-workers to this chat");}else if(c('MessengerAdminGroupUtils').isJoinableThread(n)){u=h._("Invite friends to this chat");}else u=h._("Add friends to this chat");t.setPlaceholder(u);}t.build();c('DOM').replace(r.getNode('participantsTypeahead'),t.getElement());c('DOM').setContent(m,r.getRoot());t.getTokenizer().adjustWidth();var v=r.getNode('participantsTypeahead').getAttribute('data-labelid'),w=c('DOM').scry(t.getElement(),'input[type="text"]')[0];if(w)if(v){w.setAttribute('aria-labelledby',v);}else w.setAttribute('aria-label',h._("To"));t.focus();c('Event').listen(t.getElement(),'keyup',function(event){if(event&&event.keyCode===c('Keys').TAB){var x=r.getNode('doneButton');if(x){x.focus();event.preventDefault();}}});if(!p)(function(){var x=function y(){var z=t.getSelectedParticipantIDs();if(z.length)o(z);l.close(k);};c('Event').listen(r.getNode('doneButton'),'click',x);t.subscribe('tokens-return',function(){if(t.getTokens().length)x();});})();return t;}};f.exports=i;}),null);
__d('ChatAddFriendsTabSheet',['ArbiterMixin','ChatAddFriendsTabSheetRawRenderer','ChatOpenTab','ChatOpenTabEventLogger','ChatTabActions','FantaTabActions','MercuryConfig','MercuryIDs','MercuryLogMessageType','MercurySourceType','MercuryThreadInfo','MercuryTypeaheadConstants','MercuryMessageActions','MercuryMessageObject','MessengerAdminGroupUtils','MultiChatController','Style','MercuryThreadActions','MercuryThreads'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryMessageActions').get(),i=c('MercuryMessageObject').get(),j=c('MercuryThreadActions').get(),k=c('MercuryThreads').get();function l(p,q,r,s){this._threadID=p;this._rootElement=q;this._sheetView=r;this._typeahead=null;this._chatTabView=s;}Object.assign(l.prototype,c('ArbiterMixin'),{render:function p(){k.getThreadMeta(this._threadID,function(q){var r=q.is_canonical_user?m:n,s=k.isNewEmptyLocalThread(this._threadID);this._typeahead=c('ChatAddFriendsTabSheetRawRenderer').render(this,this._sheetView,this._rootElement,q,r.bind(null,q),s);this._typeahead.subscribe('tokens-changed',function(){if(s)o(this,this._typeahead,this._threadID,this._chatTabView);}.bind(this));this._typeahead.subscribe('resize',function(){this._sheetView.resize();}.bind(this));this._typeahead.subscribe('esc-pressed',function(){this.inform('esc-pressed');}.bind(this));}.bind(this));},getParticipants:function p(){if(!this._typeahead)return null;return this._typeahead.getSelectedParticipantIDs();},isPermanent:function p(){return true;},isSheetWithInput:function p(){return true;},getType:function p(){return 'add_friends_type';},open:function p(){this._sheetView.open(this);},close:function p(){this._sheetView.close(this);},getHeight:function p(){return c('Style').get(this._rootElement,'height');}});function m(p,q){var r=p.participants;c('MultiChatController').createThreadForTokens(r.concat(q));}function n(p,q){var r=p.thread_id;if(c('MercuryThreadInfo').isEmptyLocalThread(p)){j.addParticipants(r,q);}else{var s=c('MessengerAdminGroupUtils').isJoinableThread(p);if(s){q.map(function(t){var u=c('MercuryIDs').getThreadIDFromParticipantID(t);h.send(i.constructUserGeneratedMessageObject(p.joinable_mode.link,c('MercurySourceType').MESSENGER_WEB,u));});}else h.send(i.constructLogMessageObject(c('MercurySourceType').CHAT_WEB,r,c('MercuryLogMessageType').SUBSCRIBE,{added_participants:q}));}if(c('MercuryConfig').FantaTabs){c('FantaTabActions').openTab(r);c('ChatOpenTabEventLogger').log('ChatAddFriendsTabSheet',r);}else c('ChatOpenTab').openThread(r,'ChatAddFriendsTabSheet');}function o(p,q,r,s){var t=q.getTypeahead().getData(),u=q.getTokens(),v=q.getTypeahead().getCore();v.getElement().removeAttribute('disabled');t.setShowThreads(u.length===0);var w=u.length==1&&u[0].getInfo().render_type===c('MercuryTypeaheadConstants').THREAD_TYPE;if(w){var x=u[0].getInfo().mercury_thread;if(x){var y=s._sharePreview,z=y&&y.getShareData();if(z)var aa=function ba(ca){return ca.loadShareFromParams(z.share_type,z.share_params);};if(c('MercuryConfig').FantaTabs){c('FantaTabActions').replaceTab(r,x.thread_fbid);}else c('ChatOpenTab').openThread(x.thread_fbid,'openGroupChat','',aa);}if(!c('MercuryConfig').FantaTabs)c('ChatTabActions').closeTab(r,'open_group_chat');}else{if(u.length==1&&u[0].getInfo().render_type===c('MercuryTypeaheadConstants').PAGE_TYPE)v.getElement().setAttribute('disabled','disabled');p.inform('chat/tokens-changed',{token_count:u.length,tokens:u});}}f.exports=l;}),null);