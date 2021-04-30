if (self.CavalryLogger) { CavalryLogger.start_js(["A0BUX"]); }

__d('GridInputLabel.react',['cx','invariant','Grid.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('Grid.react').GridItem,m=c('React').PropTypes,n=0;function o(){return 'js_grid_input_label_'+n++;}j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;p.prototype.render=function(){'use strict';this.props.children.length===2||i(0);var q=this.props.children[0],r=this.props.children[1],s=q.type==='input';q=c('React').cloneElement(q,{className:c('joinClasses')(q.props.className,"uiGridInputLabelInput"+(s&&q.props.type==='radio'?' '+"uiInputLabelRadio":'')+(s&&q.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),id:q.props.id||o()});r=c('React').cloneElement(r,{className:c('joinClasses')(r.props.className,'uiInputLabelLabel'),htmlFor:q.props.id});var t="uiInputLabel"+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(s?' '+"uiInputLabelLegacy":'');return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,t)}),c('React').createElement(c('Grid.react'),{cols:2},c('React').createElement(l,null,q),c('React').createElement(l,null,r))));};function p(){'use strict';j.apply(this,arguments);}p.propTypes={display:m.oneOf(['block','inline'])};p.defaultProps={display:'block'};f.exports=p;}),null);
__d('XUIRadioList.react',['cx','Focus','GridInputLabel.react','InputLabel.react','Map','React','RTLKeys','XUIRadioInput.react','joinClasses','KeyStatus','VirtualCursorStatus'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m=c('KeyStatus').isKeyDown,n=c('VirtualCursorStatus').isVirtualCursorTriggered,o=c('React').PropTypes;i=babelHelpers.inherits(p,c('React').Component);j=i&&i.prototype;function p(){var q,r;'use strict';for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=j.constructor).call.apply(q,[this].concat(t)),this.$XUIRadioList4=function(v){return function(event){switch(event.keyCode){case c('RTLKeys').UP:case c('RTLKeys').getLeft():event.preventDefault();this.$XUIRadioList3(v-1);break;case c('RTLKeys').DOWN:case c('RTLKeys').getRight():event.preventDefault();this.$XUIRadioList3(v+1);break;case c('RTLKeys').SPACE:event.preventDefault();this.$XUIRadioList3(v);break;}}.bind(this);}.bind(this),r;}p.prototype.componentWillMount=function(){'use strict';this.$XUIRadioList1=new (c('Map'))();this.$XUIRadioList2=new (c('Map'))();};p.prototype.$XUIRadioList3=function(q){'use strict';if(q>=this.$XUIRadioList1.size){q=0;}else if(q<0)q=this.$XUIRadioList1.size-1;var r=this.$XUIRadioList1.get(q),s=this.$XUIRadioList2.get(q);if(!r||!s)return;if(!r.props.disabled)s.getElementsByTagName('input')[0].click();c('Focus').set(s);};p.prototype.render=function(){'use strict';var q=c('React').Children.map(this.props.children,function(t){return t?t.props.value:null;}).some(function(t){return t===this.props.selectedValue;}.bind(this)),r=c('React').Children.map(this.props.children,function(t,u){return t===null?null:c('React').cloneElement(t,{name:this.props.name,onKeyDown:this.$XUIRadioList4(u),onSelect:this.props.onValueChange,ref:function(v){this.$XUIRadioList1.set(u,v);}.bind(this),selectedValue:this.props.selectedValue,setupRadioRef:function(v){this.$XUIRadioList2.set(u,v);}.bind(this),tabIndex:this.props.selectedValue===t.props.value||!q&&u===0?0:-1});},this),s=this.props.selectedValue!==undefined&&!this.props.onValueChange;return (c('React').createElement('ul',babelHelpers['extends']({},this.props,{'aria-readonly':s,name:null,role:'radiogroup'}),r));};p.propTypes={name:o.string,onValueChange:o.func,selectedValue:o.any};p.Item=(l=k=function(){var q,r;q=babelHelpers.inherits(s,c('React').Component);r=q&&q.prototype;function s(){var t,u;'use strict';for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return u=(t=r.constructor).call.apply(t,[this].concat(w)),this.state={showFocusRing:false},this.$_class1=function(){this.setState({showFocusRing:false});}.bind(this),this.$_class2=function(){if(m()||n())this.setState({showFocusRing:true});}.bind(this),this.$_class3=function(event){this.props.onSelect&&this.props.onSelect(event.target.value);}.bind(this),u;}s.prototype.render=function(){'use strict';var t=this.props.selectedValue===this.props.value,u=!!this.props.disabled,v=this.props.centered?c('GridInputLabel.react'):c('InputLabel.react');return c('React').createElement('li',{'aria-checked':t,'aria-disabled':u,className:c('joinClasses')(this.props.className,!this.state.showFocusRing?"_1az7":''),onBlur:this.$_class1,onFocus:this.$_class2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:'radio',tabIndex:this.props.tabIndex},c('React').createElement(v,{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],'data-tooltip-content':this.props['data-tooltip-content'],'data-tooltip-position':this.props['data-tooltip-position'],display:'inline'},c('React').createElement(c('XUIRadioInput.react'),{checked:t,disabled:u,name:this.props.name,onChange:this.$_class3,tabIndex:-1,value:this.props.value}),c('React').createElement('label',null,this.props.children)));};return s;}(),k.propTypes={centered:o.bool,disabled:o.bool,name:o.string,onKeyDown:o.func,onSelect:o.func,selectedValue:o.any,setupRadioRef:o.func,tabIndex:o.number,value:o.any},l);f.exports=p;}),null);
__d('Token',['fbt','CSS','DataStore','DOM','Locale','UnicodeBidi'],(function a(b,c,d,e,f,g,h){function i(j,k){'use strict';this.info=j;this.paramName=k;}i.prototype.getInfo=function(){'use strict';return this.info;};i.prototype.getText=function(){'use strict';return this.info.text;};i.prototype.getValue=function(){'use strict';return this.info.uid;};i.prototype.isFreeform=function(){'use strict';return !!this.info.freeform;};i.prototype.setSelected=function(j){'use strict';c('CSS').conditionClass(this.getElement(),'uiTokenSelected',j);return this;};i.prototype.getElement=function(){'use strict';if(!this.element)this.setElement(this.createElement());return this.element;};i.prototype.setElement=function(j){'use strict';c('DataStore').set(j,'Token',this);this.element=j;return this;};i.prototype.isRemovable=function(){'use strict';return c('CSS').hasClass(this.element,'removable');};i.prototype.getTextDirection=function(){'use strict';var j=c('UnicodeBidi').isDirectionRTL(this.getText()),k=c('Locale').isRTL();if(j&&!k)return 'rtl';if(!j&&k)return 'ltr';return null;};i.prototype.createElement=function(j,k){'use strict';var l=this.paramName,m=this.getValue(),n=this.getText(),o=c('DOM').create('span',{className:'uiTokenText'},n),p=null;if(this.info.removable!==false)p=c('DOM').create('a',{href:'#','aria-label':h._("Remove {item}",[h.param('item',n)]),className:'remove uiCloseButton uiCloseButtonSmall'});if(j)c('CSS').addClass(p,'uiCloseButtonSmallGray');var q=c('DOM').create('input',{type:'hidden',value:m,name:l+'[]',autocomplete:'off'}),r=c('DOM').create('input',{type:'hidden',value:n,name:'text_'+l+'[]',autocomplete:'off'}),s={className:'removable uiToken'},t=this.getTextDirection();if(t!==null)s.dir=t;var u=c('DOM').create('span',s,[o,q,r,p]);if(j)c('CSS').addClass(u,'uiTokenGray');if(k){var v=c('DOM').create('i',{className:k});c('DOM').prependContent(u,v);}return u;};f.exports=i;}),null);
__d('WeakToken',['CSS','Token'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Token'));i=h&&h.prototype;j.prototype.createElement=function(){'use strict';var k=i.createElement.call(this,true,'UFIWeakReferenceIcon');c('CSS').addClass(k,'uiTokenWeakReference');return k;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('Tokenizer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMQuery','Event','Focus','Input','Keys','Parent','StickyPlaceholderInput','Style','TextMetrics','Token','UserAgent_DEPRECATED','WeakToken','createObjectFrom','emptyFunction','mixin'],(function a(b,c,d,e,f,g){var h,i,j=20;h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(l,m,n){'use strict';i.constructor.call(this);this.element=l;this.typeahead=m;this.input=m.getCore().getElement();if(n)this.init(n.tokenarea,n.param_name,n.initial_info,n.options);c('DataStore').set(this.element,'Tokenizer',this);}k.prototype.init=function(l,m,n,o){'use strict';this._handleEvents=this.handleEvents.bind(this);this.init=c('emptyFunction');this.setTokenarea(l);this.paramName=m;if(!this.placeholder)this.placeholder=this.input.getAttribute('data-placeholder')||this.input.getAttribute('placeholder')||'';Object.assign(this,o);this.initEvents();this.initTypeahead();this.reset(n);this.initBehaviors();setTimeout(this.adjustWidth.bind(this),0);c('Arbiter').inform('Tokenizer/init',this,c('Arbiter').BEHAVIOR_PERSISTENT);this.inform('init',{tokens:this.getTokens()});};k.prototype.reset=function(l){'use strict';this.tokens=[];this.unique={};if(l){this.populate(l);}else c('DOM').empty(this.tokenarea);this.updateTokenarea();};k.prototype.populate=function(l){'use strict';var m=[];this.tokens=this.getTokenElements().map(function(n,o){var p=l[o];m.push(this._tokenKey(p));return this.createToken(p,n);},this);this.unique=c('createObjectFrom')(m,this.tokens);};k.prototype.setTokenarea=function(l){'use strict';var m=!this.tokenarea;if(l!==this.tokenarea){if(this.tokenarea){c('DOM').remove(this.tokenarea);for(var n in this._tokenareaListeners)this._tokenareaListeners[n].remove();}this._tokenareaListeners=c('Event').listen(l,{click:this._handleEvents,keydown:this._handleEvents});this.tokenarea=l;}if(!m)this.reset();};k.prototype.getElement=function(){'use strict';return this.element;};k.prototype.getTypeahead=function(){'use strict';return this.typeahead;};k.prototype.getInput=function(){'use strict';return this.input;};k.prototype.initBehaviors=function(){'use strict';this.behaviors=this.behaviors||[];if(this.behaviors instanceof Array){this.behaviors.forEach(function(n){n.behavior(this,n.config);}.bind(this));}else for(var l in this.behaviors||{}){var m=window.TokenizerBehaviors&&window.TokenizerBehaviors[l];m.call(null,this,this.behaviors[l]);}};k.prototype.initTypeahead=function(){'use strict';var l=this.typeahead.getCore();l.resetOnSelect=true;l.setValueOnSelect=false;l.preventFocusChangeOnTab=true;if(this.inline){var m=this.typeahead.getView();c('CSS').addClass(m.getElement(),'uiInlineTokenizerView');}this.typeahead.subscribe('select',function(n,o){return this.handleSelect(o);}.bind(this));this.typeahead.subscribe('blur',this.handleBlur.bind(this));};k.prototype.handleBlur=function(event){'use strict';this.inform('blur',{event:event});this.updatePlaceholder();};k.prototype.handleSelect=function(l){'use strict';var m=l.selected;if('uid' in m){this.updateInput();this.addToken(this.createToken(m));}};k.prototype.initEvents=function(){'use strict';var l=c('UserAgent_DEPRECATED').firefox()<4?'keypress':'keydown';c('Event').listen(this.input,'paste',this.paste.bind(this));c('Event').listen(this.input,l,this.keydown.bind(this));};k.prototype.handleEvents=function(event){'use strict';var l=event.getTarget(),m=l&&this.getTokenElementFromTarget(l);if(!m)return;if(event.type!='keydown'||c('Event').getKeyCode(event)==c('Keys').RETURN)this.processEvents(event,l,m);};k.prototype.processEvents=function(event,l,m){'use strict';if(c('Parent').byClass(l,'remove')){var n=m.nextSibling;n=n&&c('DOMQuery').scry(m.nextSibling,'.remove')[0];var o=this.getTokenFromElement(m);o=this.addTokenData(o,l);this.removeToken(o);this.focusOnTokenRemoval(event,n);event.kill();}};k.prototype.focusOnTokenRemoval=function(event,l){'use strict';c('Focus').set(event.type=='keydown'&&l||this.input);};k.prototype.addTokenData=function(l,m){'use strict';return l;};k.prototype.keydown=function(event){'use strict';this.inform('keydown',{event:event});var l=c('Event').getKeyCode(event),m=this.input;if(this.inline&&l==c('Keys').BACKSPACE&&c('Input').isEmpty(m)){var n=this.getLastToken();if(n&&n.isRemovable())this.removeToken(n);}this.updateInput();};k.prototype.paste=function(event){'use strict';this.inform('paste',{event:event});this.updateInput(true);};k.prototype.focusInput=function(){'use strict';c('Focus').set(this.input);};k.prototype.updateInput=function(l){'use strict';if(!this.inline)return;setTimeout(function(){this.adjustWidth(this.input.value);if(l)this.input.value=this.input.value;}.bind(this),20);c('StickyPlaceholderInput').setPlaceholderText(this.input,'');this.inform('resize');};k.prototype.setPlaceholder=function(l){'use strict';this.placeholder=l;if(this.stickyPlaceholder)c('StickyPlaceholderInput').setPlaceholderText(this.input,l);this.updatePlaceholder();};k.prototype.updatePlaceholder=function(){'use strict';if(!this.inline||this.input.value)return;var l=!this.tokens.length,m='';if(l||this.stickyPlaceholder){this.adjustWidth(this.placeholder);m=this.placeholder;}else this.adjustWidth(this.input.value);c('StickyPlaceholderInput').setPlaceholderText(this.input,m);};k.prototype.adjustWidth=function(l){'use strict';if(!this.inline||!this._getIsInDOM())return;if(!l&&this.input.value==='')l=this.placeholder;var m=j;if(l!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var n=c('Style').getFloat(this.getElement(),'width'),o=this._getMetrics().measure(l);m=o.width+this._getWidthOffset()+10;m=m>=n?n:m;}c('Style').set(this.input,'width',m+'px');this.inform('resize');c('Arbiter').inform('reflow');};k.prototype.getToken=function(l){'use strict';return this.unique[l]||null;};k.prototype.getTokens=function(){'use strict';return this.tokens||[];};k.prototype.getTokenElements=function(){'use strict';return c('DOMQuery').scry(this.tokenarea,'span.uiToken');};k.prototype.getTokenElementFromTarget=function(l){'use strict';return c('Parent').byClass(l,'uiToken');};k.prototype.getTokenFromElement=function(l){'use strict';return c('DataStore').get(l,'Token');};k.prototype.getTokenValues=function(){'use strict';if(!this.tokens)return [];return this.tokens.map(function(l){return l.getValue();});};k.prototype.getFirstToken=function(){'use strict';return this.tokens[0]||null;};k.prototype.getLastToken=function(){'use strict';return this.tokens[this.tokens.length-1]||null;};k.prototype.hasMaxTokens=function(){'use strict';return this.maxTokens&&this.maxTokens<=this.tokens.length;};k.prototype.createToken=function(l,m){'use strict';var n=this.getToken(this._tokenKey(l));if(!n)n=l.weak_reference?new (c('WeakToken'))(l,this.paramName):new (c('Token'))(l,this.paramName);m&&n.setElement(m);return n;};k.prototype.addToken=function(l){'use strict';if(this.hasMaxTokens())return;var m=this._tokenKey(l.getInfo());if(m in this.unique)return;this.unique[m]=l;this.tokens.push(l);this.insertToken(l);this.updateTokenarea();this.inform('addToken',l);this.inform('changeTokens');c('Arbiter').inform('Form/change',{node:this.element});};k.prototype.insertToken=function(l){'use strict';c('DOM').appendContent(this.tokenarea,l.getElement());};k.prototype.removeToken=function(l){'use strict';if(!l)return;var m=this.tokens.indexOf(l);if(m<0)return;this.tokens.splice(this.tokens.indexOf(l),1);delete this.unique[this._tokenKey(l.getInfo())];c('DOM').remove(l.getElement());this.updateTokenarea();this.inform('removeToken',l);this.inform('changeTokens');c('Arbiter').inform('Form/change',{node:this.element});};k.prototype.removeAllTokens=function(){'use strict';this.reset();this.inform('changeTokens');this.inform('removeAllTokens');};k.prototype.updateTokenarea=function(){'use strict';var l=this.typeahead.getCore(),m=this.getTokenValues();if(this.excludeDuplicates){this._exclusions||(this._exclusions=l.getExclusions());l.setExclusions(m.concat(this._exclusions));}l.setEnabled(!this.hasMaxTokens());this.updateTokenareaVisibility();this.updatePlaceholder();this.inform('resize');c('Arbiter').inform('reflow');};k.prototype.updateTokenareaVisibility=function(){'use strict';c('CSS').conditionShow(this.tokenarea,this.tokens.length!==0);};k.prototype._tokenKey=function(l){'use strict';return l.uid+(l.freeform?':':'');};k.prototype._getWidthOffset=function(){'use strict';if(this._widthOffset===null){var l=this.input.clientWidth,m=c('Style').getFloat(this.input,'width');if(l==m){this._widthOffset=c('Style').getFloat(this.input,'paddingLeft')+c('Style').getFloat(this.input,'paddingRight');}else this._widthOffset=0;}return this._widthOffset;};k.prototype._getMetrics=function(){'use strict';if(!this._metrics)this._metrics=new (c('TextMetrics'))(this.input,this.inline);return this._metrics;};k.prototype._getIsInDOM=function(){'use strict';return this._isInDOM||(this._isInDOM=c('DOMQuery').contains(document.body,this.input));};k.getInstance=function(l){'use strict';var m=c('Parent').byClass(l,'uiTokenizer');return m?c('DataStore').get(m,'Tokenizer'):null;};k.init=function(l,m){'use strict';l.init(m.tokenarea,m.param_name,m.initial_info,m.options);};Object.assign(k.prototype,{inline:false,maxTokens:null,excludeDuplicates:true,placeholder:'',_widthOffset:null,_metrics:null});f.exports=k;}),null);
__d('ProgressBarBase',['emptyFunction','requestAnimationFrame','removeFromArray','arrayContains'],(function a(b,c,d,e,f,g){var h=[];function i(j,k){'use strict';this._min=j||0;this._max=k||100;this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=c('emptyFunction');}i.prototype.setPosition=function(j){'use strict';j=this._normalizePosition(j);this._initialPosition=j;this._position=j;this.updateMeter(this._position);this.stop();return this;};i.prototype.setCompleteHandler=function(j){'use strict';this._onComplete=j||c('emptyFunction');return this;};i.prototype.setTarget=function(j,k){'use strict';this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=j;var l=this._normalizePosition(j);this._targetTime=k;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration){this._acceleration=2*(l-this._initialPosition-this._initialVelocity*k)/(k*k);}else{this._acceleration=0;this._velocity=this._initialVelocity=(l-this._initialPosition)/k;}if(this._position>=l){this._onComplete();}else this._start();return this;};i.prototype.setNoAcceleration=function(j){'use strict';this.useAcceleration=!j;return this;};i.prototype._clearOnCompleteTimeout=function(){'use strict';b.clearTimeout(this._onCompleteTimeout);};i.prototype.stop=function(){'use strict';this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this;};i.prototype._start=function(){'use strict';this._startTime=Date.now();this._onCompleteTimeout=b.setTimeout(function(){this.setPosition(this._targetPosition);this._onComplete();}.bind(this),this._targetTime);this._startAnimating();return this;};i.prototype._loop=function(){'use strict';var j=Date.now()-this._startTime;this._position=.5*this._acceleration*j*j+this._initialVelocity*j+this._initialPosition;var k=this._velocity;this._velocity=this._acceleration*j+this._initialVelocity;var l=k<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||l){this.setPosition(this._targetPosition);this._onComplete();}else this.updateMeter(this._position);};i.prototype.updateMeter=function(j){'use strict';throw new Error("Unimplemented function: updateMeter");};i.prototype._normalizePosition=function(j){'use strict';return Math.min(Math.max((j-this._min)/(this._max-this._min),0),1);};i.prototype._startAnimating=function(){'use strict';if(!c('arrayContains')(h,this)){h.push(this);if(h.length===1)c('requestAnimationFrame')(i.prototype._requestAnimationFrameCallback);}};i.prototype._stopAnimating=function(){'use strict';c('removeFromArray')(h,this);};i.prototype._requestAnimationFrameCallback=function(){'use strict';h.forEach(function(j){j._loop();});if(h.length)c('requestAnimationFrame')(i.prototype._requestAnimationFrameCallback);};i.setPosition=function(j,k){'use strict';j.setPosition(k);};i.setTarget=function(j,k,l){'use strict';j.setTarget(k,l);};f.exports=i;}),null);
__d('ProgressBar',['cx','csx','ProgressBarBase','CSS','Style','DOM'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('ProgressBarBase'));k=j&&j.prototype;function l(m,n,o){'use strict';k.constructor.call(this,n,o);this._root=m;this._meter=c('DOM').find(m,"div._5e4k");this._meter2=c('DOM').scry(m,"div._5e2g")[0];}l.prototype.getRoot=function(){'use strict';return this._root;};l.prototype.updateMeter=function(m){'use strict';var n=Math.min(Math.max(m,0),1);c('CSS').conditionClass(this._meter,"_5e2d",n<=0);c('CSS').conditionClass(this._meter,"_5e4j",n>=1);this._root.setAttribute('aria-valuenow',n*100);n=n*100+'%';c('Style').set(this._meter,'width',n);if(this._meter2){c('Style').set(this._meter2,'left',n);c('Style').set(this._meter2,'width',n);}};l.prototype.changeLabel=function(m){'use strict';var n=c('DOM').scry(this._root,"span._5e2h");n.forEach(function(o){c('DOM').setContent(o,m);});return this;};f.exports=l;}),null);
__d('VaultBoxURI',['URI'],(function a(b,c,d,e,f,g){var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function i(j){var k=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k)&&j.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function i(j){var k=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k);},getSyncedTabURI:function i(){return new (c('URI'))('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};f.exports=h;}),null);
__d('getViewerRecordID',['RelayStore'],(function a(b,c,d,e,f,g){'use strict';var h=c('RelayStore').getStoreData();function i(){return h.getCachedStore().getDataID('viewer');}f.exports=i;}),null);