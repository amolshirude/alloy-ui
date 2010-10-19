/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("event-delegate",function(G){var D=G.Array,B=G.Lang,A=B.isString,F=G.Selector.test,C=G.Env.evt.handles;function E(Q,S,J,I){var O=D(arguments,0,true),P=A(J)?J:null,N=Q.split(/\|/),L,H,K,R,M;if(N.length>1){R=N.shift();Q=N.shift();}L=G.Node.DOM_EVENTS[Q];if(B.isObject(L)&&L.delegate){M=L.delegate.apply(L,arguments);}if(!M){if(!Q||!S||!J||!I){return;}H=(P)?G.Selector.query(P,null,true):J;if(!H&&A(J)){M=G.on("available",function(){G.mix(M,G.delegate.apply(G,O),true);},J);}if(!M&&H){O.splice(2,2,H);M=G.Event._attach(O,{facade:false});M.sub.filter=I;M.sub._notify=E.notifySub;}}if(M&&R){K=C[R]||(C[R]={});K=K[Q]||(K[Q]=[]);K.push(M);}return M;}E.notifySub=function(O,J,N){J=J.slice();if(this.args){J.push.apply(J,this.args);}var M=E._applyFilter(this.filter,J,N),L,K,H,I;if(M){M=D(M);L=J[0]=new G.DOMEventFacade(J[0],N.el,N);L.container=G.one(N.el);for(K=0,H=M.length;K<H&&!L.stopped;++K){L.currentTarget=G.one(M[K]);I=this.fn.apply(this.context||L.currentTarget,J);if(I===false){break;}}return I;}};E.compileFilter=G.cached(function(H){return function(J,I){return F(J._node,H,I.currentTarget._node);};});E._applyFilter=function(K,J,N){var M=J[0],H=N.el,L=M.target||M.srcElement,I=[];if(L.nodeType===3){L=L.parentNode;}J.unshift(L);if(A(K)){while(L&&L!==H){if(F(L,K,H)){I.push(L);}L=L.parentNode;}}else{J[0]=G.one(L);J[1]=new G.DOMEventFacade(M,H,N);while(L&&L!==H){if(K.apply(J[0],J)){I.push(L);}L=L.parentNode;J[0]=G.one(L);}J[1]=M;}if(I.length<=1){I=I[0];}J.shift();return I;};G.delegate=G.Event.delegate=E;},"3.2.0",{requires:["node-base"]});