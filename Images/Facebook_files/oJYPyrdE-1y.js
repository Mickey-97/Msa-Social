if (self.CavalryLogger) { CavalryLogger.start_js(["9j18R"]); }

__d('NYE2017Dispatcher',['Bootloader','Event'],(function a(b,c,d,e,f,g){var h={registerPostElem:function i(j){c('Event').listen(j,'click',h.playPostAnimation);},registerCommentElem:function i(j){c('Event').listen(j,'click',h.playCommentAnimation);},playPostAnimation:function i(){c('Bootloader').loadModules(["NYE2017Animation"],function(j){j.playPostAnimation();},'NYE2017Dispatcher');},playCommentAnimation:function i(){c('Bootloader').loadModules(["NYE2017Animation"],function(j){j.playCommentAnimation();},'NYE2017Dispatcher');}};f.exports=h;}),null);