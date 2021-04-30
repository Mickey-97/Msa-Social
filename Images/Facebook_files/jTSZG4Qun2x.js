if (self.CavalryLogger) { CavalryLogger.start_js(["Wigwd"]); }

__d('StarsInput.react',['cx','fbt','invariant','React','TooltipLink.react','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m={CUMULATIVE:'CUMULATIVE',SINGLE:'SINGLE'},n={STAR:'STAR',BOX:'BOX'};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(p){l.constructor.call(this,p);if(p.initialStars)Number.isInteger(p.initialStars)||j(0);this.state={starRating:p.initialStars!=undefined?p.initialStars:p.count,starsShown:p.initialStars!=undefined?p.initialStars:p.count,canUpdate:true};}o.prototype.onMouseEnter=function(p,event){if(this.state.canUpdate){this.setState({starsShown:p});this.props.onMouseEnter&&this.props.onMouseEnter(p);}};o.prototype.onMouseLeave=function(p,event){if(this.state.canUpdate){var q=this.state.starRating;this.setState({starsShown:q});this.props.onMouseLeave&&this.props.onMouseLeave(p);}};o.prototype.onClick=function(p,event){if(this.state.canUpdate){this.setState({starRating:p,starsShown:p,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(p);}};o.prototype.$StarsInput1=function(p,q,r){if(this.props.displayMode==m.SINGLE){return r?p+1==q:true;}else return r?p<q:p>=q;};o.prototype.$StarsInput2=function(p,q){var r="mls"+(' '+"_22mm")+(!this.state.canUpdate?' '+"_1g87":'');if(this.props.shape==n.BOX){var s="_5fx1"+(this.$StarsInput1(p,q,false)?' '+"_5fx2":'')+(this.$StarsInput1(p,q,true)?' '+"_5fx3":'');return c('joinClasses')(r,s);}else{var t=(this.props.large?"_1vr2":'')+(this.$StarsInput1(p,q,false)?' '+"_22mn":'')+(this.$StarsInput1(p,q,true)?' '+"_22mo":'');return c('joinClasses')(r,t);}};o.prototype.getStars=function(){if(!this.props.starLabels)return [];var p=this.props.starLabels.length,q=[],r=this.state.starsShown?this.state.starsShown:0;for(var s=0;s<p;s++){var t=s+1;q.push(c('React').createElement(c('TooltipLink.react'),{className:this.$StarsInput2(s,r),key:s,tooltip:this.props.starLabels&&this.props.starLabels[s],onMouseEnter:this.onMouseEnter.bind(this,t),onMouseLeave:this.onMouseLeave.bind(this,t),onClick:this.onClick.bind(this,t),position:'above',alignH:'center'}));}return q;};o.prototype.render=function(){return (c('React').createElement('div',{className:this.props.className},this.getStars()));};o.defaultProps={allowMultipleSubmissions:false,count:0,large:false,starLabels:[i._("Poor"),i._("Fair"),i._("Good"),i._("Very Good"),i._("Excellent")],displayMode:m.CUMULATIVE,shape:n.STAR,className:undefined,initialStars:undefined,onMouseEnter:undefined,onMouseLeave:undefined};f.exports=o;}),null);
__d('VideoCallTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:VideoCallLoggerConfig',this.$VideoCallTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:VideoCallLoggerConfig',this.$VideoCallTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$VideoCallTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$VideoCallTypedLogger1=babelHelpers['extends']({},this.$VideoCallTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$VideoCallTypedLogger1.event=j;return this;};h.prototype.setMessage=function(j){this.$VideoCallTypedLogger1.message=j;return this;};var i={event:true,message:true};f.exports=h;}),null);
__d("MultiwayTypes",[],(function a(b,c,d,e,f,g){var h={OK:200,BAD_REQUEST:400,UNAUTHORIZED:401,NOT_FOUND:404,METHOD_NOT_ALLOWED:406,CONDITIONAL_REQUEST_FAILED:412,BUSY_HERE:486,SERVER_INTERNAL_ERROR:500,SERVICE_UNAVAILABLE:503,PRECONDITION_FAILURE:580},i={JOIN:0,SERVER_MEDIA_UPDATE:1,HANGUP:2,ICE_CANDIDATE:3,RING:4,DISMISS:5,CONFERENCE_STATE:6,ADD_PARTICIPANTS:7,SUBSCRIPTION:8,CLIENT_MEDIA_UPDATE:9,DATA_MESSAGE:10,REMOVE_PARTICIPANTS:11,EXPERIMENT:12},j={AUDIO:0,VIDEO:1,DATA:2},k={IGNORE_CALL:0,HANGUP_CALL:1,NO_ANSWER_TIMEOUT:2,CLIENT_ERROR:3,IN_ANOTHER_CALL:4,CLIENT_INTERRUPTED:5},l={CALL_ENDED:0,ANSWERED_ON_ANOTHER_DEVICE:1,IN_ANOTHER_CALL:2,CONNECTION_DROPPED:3,REJECTED_ON_ANOTHER_DEVICE:4,REMOVED_BY_PARTICIPANT:5,REJECTED_BY_CALLEE:6,INTERNAL_ERROR:7},m={SUPPORT_AUDIO:0,SUPPORT_VIDEO:1},n={GROUP_AUDIO_CALL:0,PEER_VIDEO_CALL:1,PEER_AUDIO_CALL:2,GROUP_VIDEO_CALL:3,LIVE_STREAM:4},o={OK:0,NOT_SUPPORTED:1,IN_ANOTHER_CALL:10},p={UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,CONNECTING:8,CONNECTED:9,PARTICIPANT_LIMIT_REACHED:10,IN_ANOTHER_CALL:11};f.exports={RtcResponseStatusCode:h,MessageType:i,MediaType:j,RingType:n,HangupReason:k,DismissReason:l,Capability:m,DeviceStatus:o,ParticipantCallState:p};}),null);
__d('RTCEndCallReason',['fbt','FBRTCConstants','MultiwayTypes'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('FBRTCConstants').CallEndReason,j=c('FBRTCConstants').CollabCallEndSubreason,k=c('MultiwayTypes').DismissReason,l=c('MultiwayTypes').HangupReason,m=c('MultiwayTypes').RtcResponseStatusCode;function n(o){this.$RTCEndCallReason1=-1;this.$RTCEndCallReason3='local';this.$RTCEndCallReason4=false;if(typeof o==='string'||o instanceof String){this.$RTCEndCallReason1=i.strNames.indexOf(o);}else this.$RTCEndCallReason1=o;}n.prototype.setSubreason=function(o){this.$RTCEndCallReason2=o;return this;};n.prototype.getSubreason=function(){return this.$RTCEndCallReason2;};n.prototype.setRemoteEnded=function(o){this.$RTCEndCallReason3=o?'remote':'local';return this;};n.prototype.toStrName=function(){var o=arguments.length<=0||arguments[0]===undefined?true:arguments[0];return o?this.$RTCEndCallReason5()+'_'+this.$RTCEndCallReason3:this.$RTCEndCallReason5();};n.prototype.$RTCEndCallReason5=function(){if(this.$RTCEndCallReason1<0||this.$RTCEndCallReason1>i.strNames.length)return 'Unknown';return i.strNames[this.$RTCEndCallReason1];};n.prototype.getReasonID=function(){return this.$RTCEndCallReason1;};n.prototype.toString=function(){var o=arguments.length<=0||arguments[0]===undefined?false:arguments[0],p=(this.$RTCEndCallReason6()||'').toString();return o?p+' '+this.$RTCEndCallReason7():p;};n.prototype.$RTCEndCallReason6=function(){switch(this.$RTCEndCallReason1){case i.NO_ANSWER_TIMEOUT:case i.IGNORE_CALL:return h._("No Answer");case i.OTHER_NOT_CAPABLE:if(this.$RTCEndCallReason2===j.MCU_INVALID_STREAM_CONFIGURATION)return h._("Too many clients connected to the room");case i.INCOMING_TIMEOUT:case i.NO_PERMISSION:case i.OTHER_CARRIER_BLOCKED:return h._("Not Reachable");case i.SIGNALING_MESSAGE_FAILED:case i.WEBRTC_ERROR:case i.NO_UI_ERROR:case i.CALLER_NOT_VISIBLE:case i.CLIENT_ERROR:return h._("Call Failed");case i.UNSUPPORTED_VERSION:return h._("Can't Connect Call");case i.IN_ANOTHER_CALL:return h._("In Another Call");case i.CARRIER_BLOCKED:return h._("Switch to Wi-Fi to complete your call");case i.CLIENT_INTERRUPTED:return h._("Call Interrupted");case i.HANGUP_CALL:case i.ACCEPT_AFTER_HANGUP:return h._("Call Ended");case i.CONNECTION_DROPPED:return h._("Connection Lost");case i.OTHER_INSTANCE_HANDLED:return null;default:return null;}};n.prototype.$RTCEndCallReason7=function(){if(this.$RTCEndCallReason1!==i.OTHER_NOT_CAPABLE&&this.$RTCEndCallReason1!==i.SIGNALING_MESSAGE_FAILED)return '';switch(this.$RTCEndCallReason2){case j.REMOTE_PEER_HANGUP:case j.REMOTE_PEER_REJECT:return '';case j.CLOSED_BY_MCU:return '- Call expired';case j.CLOSED_AS_STALE:return '- Server failed, call is stale';case j.CALL_INITIALIZATION_FAILED:return '- Call initialization to room failed';case j.SIP_CONNECTION_INITIALIZATION_FAILED:return 'or No Answer';case j.LOST_MCU_CONNECTION:return '- MCU Media connection failed';case j.LOST_MCU_THRIFT_CONNECTION:return '- MCU infrastructure dropped connection';case j.LOST_SIP_ADAPTER_CONNECTION:return '- SIP infrastructure dropped connection';case j.MCU_NO_AUDIO_STREAM:return '- Invalid audio stream';case j.MCU_INVALID_STREAM_CONFIGURATION:return '- Invalid stream configuration';case j.UNKNOWN:default:return '- Unexpected call failure: '+(this.$RTCEndCallReason2||'null');}};n.fromHangupReason=function(o){switch(o){case l.IGNORE_CALL:return new n(i.IGNORE_CALL);case l.NO_ANSWER_TIMEOUT:return new n(i.NO_ANSWER_TIMEOUT);case l.HANGUP_CALL:return new n(i.HANGUP_CALL);case l.CLIENT_ERROR:return new n(i.CLIENT_ERROR);case l.IN_ANOTHER_CALL:return new n(i.IN_ANOTHER_CALL);case l.CLIENT_INTERRUPTED:return new n(i.CLIENT_INTERRUPTED);default:return new n(i.HANGUP_CALL);}};n.fromDismissRequest=function(o){if(!o)return new n(i.HANGUP_CALL);switch(o.reason){case k.ANSWERED_ON_ANOTHER_DEVICE:case k.REJECTED_ON_ANOTHER_DEVICE:return new n(i.OTHER_INSTANCE_HANDLED);case k.CALL_ENDED:return new n(i.HANGUP_CALL);case k.IN_ANOTHER_CALL:return new n(i.IN_ANOTHER_CALL);case k.CONNECTION_DROPPED:return new n(i.CONNECTION_DROPPED);case k.REMOVED_BY_PARTICIPANT:return new n(i.HANGUP_CALL);case k.REJECTED_BY_CALLEE:return new n(i.IGNORE_CALL);case k.INTERNAL_ERROR:return new n(i.SIGNALING_MESSAGE_FAILED);default:return new n(i.HANGUP_CALL);}};n.fromResponseStatusCode=function(o){switch(o){case m.PRECONDITION_FAILURE:case m.METHOD_NOT_ALLOWED:case m.UNAUTHORIZED:return new n(i.NO_PERMISSION);case m.SERVICE_UNAVAILABLE:return new n(i.SIGNALING_MESSAGE_FAILED);case m.SERVER_INTERNAL_ERROR:case m.BAD_REQUEST:case m.BUSY_HERE:case m.CONDITIONAL_REQUEST_FAILED:case m.NOT_FOUND:return new n(i.CLIENT_ERROR);default:return new n(i.HANGUP_CALL);}};f.exports=n;}),null);
__d('RTCUserMediaConstraints',['FBRTCConstants','RTCConfig'],(function a(b,c,d,e,f,g){'use strict';var h={width:1920,height:1080,frameRate:30},i={width:1280,height:720,frameRate:30},j={width:854,height:480,frameRate:30},k={width:320,height:180,frameRate:15},l={audio:function q(r){return r?{deviceId:r}:true;},video:function q(r,s){var t=arguments.length<=2||arguments[2]===undefined?c('RTCConfig').CollaborationCallQuality.videoToRoom:arguments[2],u=s?{deviceId:s}:null;if(r===c('FBRTCConstants').VideoQuality.CUSTOM_VIDEO)return babelHelpers['extends']({},t,u);var v=m(r,t);if(!v)return false;return babelHelpers['extends']({width:n(v,'width'),height:n(v,'height'),frameRate:n(v,'frameRate')},u);},chromeMediaSource:function q(r,s){var t=r.video,u=l.chromify(t);if(typeof u!=='object')return {audio:false,video:Boolean(u)};var v=u.mandatory,w=u.optional,x=w===undefined?[]:w;return {audio:false,video:{mandatory:babelHelpers['extends']({},v,{chromeMediaSource:'desktop',chromeMediaSourceId:s}),optional:[{googTemporalLayeredScreencast:true}].concat(x)}};},chromify:function q(r){if(!r||typeof r!=='object')return Boolean(r);if(!p(r))return r;var s=r.mandatory,t=s===undefined?{}:s,u=r.optional,v=u===undefined?[]:u;for(var w=Object.entries(r),x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var z;if(x){if(y>=w.length)break;z=w[y++];}else{y=w.next();if(y.done)break;z=y.value;}var aa=z,ba=aa[0],ca=aa[1];if(ba==='require'||ba==='advanced'||ba==='mediaSource')continue;var da=ca&&typeof ca==='object'?ca:{ideal:ca};if(Number.isFinite(da.exact)){da.min=da.exact;da.max=da.exact;}var ea=da.ideal,fa=da.exact;if(ea!==undefined)if(Number.isFinite(ea)){var ga,ha;v.push((ga={},ga[o(ba,'min')]=ea,ga),(ha={},ha[o(ba,'max')]=ea,ha));}else{var ia;v.push((ia={},ia[o(ba)]=ea,ia));}if(fa!==undefined&&!Number.isFinite(fa)){t[o(ba)]=fa;}else{var ja=['min','max'];for(var ka=0;ka<ja.length;ka++){var la=ja[ka];if(Number.isFinite(da[la]))t[o(ba,la)]=da[la];}}}if(r.advanced)v.push.apply(v,r.advanced);var ma={};if(Object.keys(t).length>0)ma.mandatory=t;if(v.length>0)ma.optional=v;return ma;}};function m(q,r){switch(q){case c('FBRTCConstants').VideoQuality.FHD_VIDEO:return h;case c('FBRTCConstants').VideoQuality.HD_VIDEO:return i;case c('FBRTCConstants').VideoQuality.LQ_VIDEO:return k;case c('FBRTCConstants').VideoQuality.SD_VIDEO:return j;case c('FBRTCConstants').VideoQuality.NO_VIDEO:default:return null;}}function n(q,r){var s=q[r];return {min:Math.min(k[r],s),max:Math.max(h[r],s),ideal:s};}function o(q,r){if(r)return ''+r+q.charAt(0).toUpperCase()+q.slice(1);return q==='deviceId'?'sourceId':q;}function p(q){return Object.keys(q).some(function(r){return r!=='mandatory'&&r!=='optional';});}f.exports=l;}),null);
__d('RTCUtils',['Promise','FBRTCConstants','RTCEndCallReason','RTCConfig','RTCScreenSharing','RTCUserMediaConstraints','UserAgent','randomInt'],(function a(b,c,d,e,f,g){'use strict';var h=c('FBRTCConstants').VideoQuality,i={generateRandomInt:function j(){return c('randomInt')(0,4294967294)+1;},createRequestHeader:function j(k,l,m){var n={type:k,transactionId:i.generateRandomInt().toString(),retryCount:0,conferenceName:l};if(m)n.serverInfoData=m;return n;},createResponseHeader:function j(k,l){var m={type:k.type,transactionId:k.transactionId,retryCount:0,conferenceName:k.conferenceName,responseStatusCode:l};if(k.serverInfoData)m.serverInfoData=k.serverInfoData;return m;},getUserMedia:function j(k){var l=navigator,m=l.mediaDevices;if(typeof k.video==='object'&&k.video.mediaSource)return c('RTCScreenSharing').getUserMedia(k);var n=this._parseConstraints(k);if(m&&typeof m.getUserMedia==='function')return c('Promise').resolve(m.getUserMedia(n));return new (c('Promise'))(function(o,p){if(navigator.getUserMedia){navigator.getUserMedia(n,o,p);}else if(navigator.webkitGetUserMedia){navigator.webkitGetUserMedia(n,o,p);}else if(navigator.mozGetUserMedia){navigator.mozGetUserMedia(n,o,p);}else if(navigator.msGetUserMedia){navigator.msGetUserMedia(n,o,p);}else p('getUserMedia not supported');});},_parseConstraints:function j(k){if(c('UserAgent').isBrowser('Chrome')||c('UserAgent').isBrowser('Opera')){var l=k.audio,m=k.video,n={};if(l!=undefined)n.audio=c('RTCUserMediaConstraints').chromify(l);if(m!=undefined)n.video=c('RTCUserMediaConstraints').chromify(m);return n;}return k;},initLocalStream:function j(k){return i.getUserMedia({audio:c('RTCUserMediaConstraints').audio(),video:c('RTCUserMediaConstraints').video(k?h.HD_VIDEO:h.NO_VIDEO)});},initLocalScreenStream:function j(){var k=arguments.length<=0||arguments[0]===undefined?'screen':arguments[0];return i.getUserMedia({audio:false,video:babelHelpers['extends']({},c('RTCConfig').CollaborationCallQuality.screen_v2||c('RTCConfig').CollaborationCallQuality.screen,{mediaSource:k})});},isFullScreen:function j(){return !!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement);},requestFullScreen:function j(){var k=arguments.length<=0||arguments[0]===undefined?document.documentElement:arguments[0];if(typeof k.requestFullscreen==='function'){k.requestFullscreen();}else if(typeof k.msRequestFullscreen==='function'){k.msRequestFullscreen();}else if(typeof k.mozRequestFullScreen==='function'){k.mozRequestFullScreen();}else if(typeof k.webkitRequestFullscreen==='function')k.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);},exitFullScreen:function j(){if(typeof document.exitFullscreen==='function'){document.exitFullscreen();}else if(typeof document.msExitFullscreen==='function'){document.msExitFullscreen();}else if(typeof document.mozCancelFullScreen==='function'){document.mozCancelFullScreen();}else if(typeof document.webkitExitFullscreen==='function')document.webkitExitFullscreen();},toggleFullScreen:function j(){if(this.isFullScreen()){this.exitFullScreen();}else this.requestFullScreen();},endCallReasonFromHangupReason:function j(k){return c('RTCEndCallReason').fromHangupReason(k).getReasonID();},endCallReasonFromDismissRequest:function j(k){return c('RTCEndCallReason').fromDismissRequest(k).getReasonID();},endCallReasonFromResponseStatusCode:function j(k){return c('RTCEndCallReason').fromResponseStatusCode(k).getReasonID();},stopMediaStream:function j(k){if(!k.active&&'active' in k)return;for(var l=k.getTracks(),m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;if(p.readyState==='live')p.stop();}}};f.exports=i;}),null);
__d('ChatVideoCallButton.react',['cx','fbt','invariant','Bootloader','FBID','FBRTCCallSummary','FBRTCCallUIWrapper','FBRTCCallabilityStore','FBRTCCore','Keys','LayerFadeOnHide','Link.react','MercuryIDs','MercuryParticipants','MercuryThreadIDMap','ReactComponentWithPureRenderMixin','React','RTCUtils','StoreAndPropBasedStateMixin','TrackingNodes','VideoCallTypedLogger','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k=c('MercuryThreadIDMap').get(),l=c('React').PropTypes,m={isCallable:false,shown:false,user:null},n=c('React').createClass({displayName:'ChatVideoCallButton',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('FBRTCCallabilityStore'),c('MercuryParticipants'))],propTypes:{isAudio:l.bool,isGroupChat:l.bool,onRTCNuxCloseButtonClick:l.func.isRequired,rtcNuxShown:l.bool.isRequired,threadID:l.string,viewer:l.string.isRequired,shown:l.bool,rtcCallData:l.object.isRequired},getDefaultProps:function o(){return {shown:true,rtcCallData:{call_state:'NO_ONGOING_CALL'}};},statics:{calculateState:function o(p){if(!p.threadID)return babelHelpers['extends']({},m);if(p.isGroupChat)return {isCallable:true,shown:p.shown,user:null};var q=c('MercuryIDs').getUserIDFromThreadID(p.threadID);if(q===p.viewer||!c('FBID').isUser(q))return babelHelpers['extends']({},m);q&&c('FBID').isUser(q)||j(0);var r=c('MercuryIDs').getParticipantIDFromUserID(q),s=c('MercuryParticipants').getOrFetch(r);return {isCallable:c('FBRTCCallabilityStore').isCallable(q),shown:p.shown,user:s};}},getTooltipLabel:function o(){var p=this.state.user;if(!p)return undefined;return this.props.isAudio?c('FBRTCCallabilityStore').voiceCallButtonTooltip(p.fbid,p.short_name):c('FBRTCCallabilityStore').callButtonTooltip(p.fbid,p.short_name);},render:function o(){if(!this.state.shown)return null;var p=c('TrackingNodes').getTrackingInfo(this.props.isAudio?c('TrackingNodes').types.VIDEOCHAT:c('TrackingNodes').types.VOICECHAT),q=JSON.stringify({videochat:'call_clicked_bhat_tab'});return (c('React').createElement('div',null,c('React').createElement(c('Link.react'),{'aria-label':this.getTooltipLabel(),className:"button"+(' '+"_3olv")+(this.props.isAudio?' '+"_2fpc":'')+(!this.props.isAudio?' '+"_2fpd":'')+(this.state.isCallable?' '+"enabled":''),'data-ft':p,'data-gt':q,'data-hover':'tooltip','data-tooltip-content':this.getTooltipLabel(),'data-tooltip-position':'above',onClick:this._handleClick,onKeyUp:this._handleKeyUp,ref:'button'}),c('React').createElement(c('XUIAmbientNUX.react'),{alignment:'right',behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},contextRef:function(){return this.refs.button;}.bind(this),onCloseButtonClick:this.props.onRTCNuxCloseButtonClick,shown:this.props.rtcNuxShown,width:'auto'},i._("You can now make a group call."))));},_handleClick:function o(p){p.preventDefault();if(!this.state.isCallable)return;this.props.onRTCNuxCloseButtonClick();this._initiateCall();},_handleKeyUp:function o(p){p.preventDefault();if(p.keyCode!==c('Keys').RETURN||!this.state.isCallable)return;if(p.target){p.target instanceof HTMLElement||j(0);p.target.blur();}this._initiateCall();},_initiateCall:function o(){var p=this.props,q=p.isAudio,r=p.isGroupChat,s=p.threadID;!!s||j(0);var t=q?'chat_tab_voice_icon':'chat_tab_icon';if(r){if(c('MercuryIDs').isLocalThread(s)){k.getServerIDFromClientID(s,function(u){return this._initiateGroupCall(u,t);}.bind(this));}else this._initiateGroupCall(c('MercuryIDs').getThreadFBIDFromThreadID(s),t);}else{c('FBRTCCore').startOutgoingCall(this.state.user.fbid,t,q);new (c('VideoCallTypedLogger'))().setEvent('chat_tab_call_click').log();}},_initiateGroupCall:function o(p,q){c('Bootloader').loadModules(["FBRTCSupport","MessengerRTCGroupCallUnsupportedBrowserDialogController","MessengerRTCGroupCallParticipantsPickerDialogController","RTCGroupCallUtils"],function(r,s,t,u){if(!r.isGroupCallWebtrcSupported()){s.render();return;}if(this.props.rtcCallData.call_state!=='NO_ONGOING_CALL'&&this.props.rtcCallData.server_info_data){var v=c('RTCUtils').generateRandomInt(),w=new (c('FBRTCCallSummary'))({peerID:-1,callID:v,isCaller:false}),x='Join ongoing call button';if(this.props.rtcCallData.call_state==='AUDIO_GROUP_CALL'){x=!this.props.isAudio?'Join ongoing audio call with video button':'Join ongoing audio call without video button';}else if(this.props.rtcCallData.call_state==='VIDEO_GROUP_CALL')x=!this.props.isAudio?'Join ongoing video call with video button':'Join ongoing video call without video button';c('FBRTCCallUIWrapper').openGroupCallURI('GROUP:'+p,v,!this.props.isAudio,this.props.rtcCallData.server_info_data,x,w);return;}u.getThread(p,function(y,z){t.render({participants:z['delete'](c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer)),thread:y,viewerID:this.props.viewer,clickSource:'multiway_'+q,conferenceName:'GROUP:'+p,hasVideo:!this.props.isAudio});}.bind(this));}.bind(this),'ChatVideoCallButton.react');}});f.exports=n;}),null);