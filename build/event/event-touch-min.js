/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("event-touch",function(D){var C="scale",A="rotation",B="identifier";D.DOMEventFacade.prototype._touch=function(K,J,L){var F,E,G,I,H;if(K.touches){this.touches=[];H={};for(F=0,E=K.touches.length;F<E;++F){I=K.touches[F];H[D.stamp(I)]=this.touches[F]=new D.DOMEventFacade(I,J,L);}}if(K.targetTouches){this.targetTouches=[];for(F=0,E=K.targetTouches.length;F<E;++F){I=K.targetTouches[F];G=H&&H[D.stamp(I,true)];this.targetTouches[F]=G||new D.DOMEventFacade(I,J,L);}}if(K.changedTouches){this.changedTouches=[];for(F=0,E=K.changedTouches.length;F<E;++F){I=K.changedTouches[F];G=H&&H[D.stamp(I,true)];this.changedTouches[F]=G||new D.DOMEventFacade(I,J,L);}}if(C in K){this[C]=K[C];}if(A in K){this[A]=K[A];}if(B in K){this[B]=K[B];}};if(D.Node.DOM_EVENTS){D.mix(D.Node.DOM_EVENTS,{touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,gestureend:1});}},"3.2.0",{requires:["node-base"]});