(this["webpackJsonpdraft-slate-comparison-playground"]=this["webpackJsonpdraft-slate-comparison-playground"]||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n.n(c),o=n(45),i=n.n(o),l=(n(125),n(126),n(59)),u=n(12),j=n(2),d=n(6);n(38);var s=n(10),b=n(1);var h=n(4),O=n(26),f={b:{fontWeight:"bold"},i:{fontStyle:"italic"},u:{textDecoration:"underline"}};var p=n(8),y=n.n(p),x=n(40),v=n(5);function m(e){return g.apply(this,arguments)}function g(){return(g=Object(x.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new FileReader;r.addEventListener("loadend",(function(){e(r.result)})),r.readAsDataURL(t),r.addEventListener("abort",n),r.addEventListener("error",n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){var t=e.block,n=e.contentState,c=t.getEntityAt(0),a=n.getEntity(c).getData();return a.src?Object(r.jsx)("div",{children:Object(r.jsx)("img",{alt:a.name,src:a.src})}):Object(r.jsxs)("div",{contentEditable:!1,children:["Loading ",a.name]})}var S=n(17),C=n(30),E=n(119),R=n(31);function T(){var e=Object(C.a)(["\n            display: block;\n            max-width: 100%;\n            max-height: 20em;\n            box-shadow: ",";\n          "]);return T=function(){return e},e}var D=function(e){var t=e.attributes,n=e.children;switch(e.element.type){case"image":return Object(r.jsx)(w,Object(h.a)({},e));default:return Object(r.jsx)("p",Object(h.a)(Object(h.a)({},t),{},{children:n}))}},w=function(e){var t=e.attributes,n=e.children,c=e.element,a=e.imageStore,o=Object(s.f)(),i=Object(s.e)(),l=a[c.entity];return l?Object(r.jsxs)("div",Object(h.a)(Object(h.a)({},t),{},{children:[Object(r.jsx)("div",{contentEditable:!1,children:Object(r.jsx)("img",{alt:"Cat",src:l,className:Object(R.a)(T(),o&&i?"0 0 0 3px #B4D5FF":"none")})}),n]})):Object(r.jsxs)("div",Object(h.a)(Object(h.a)({},t),{},{children:[Object(r.jsx)("div",{contentEditable:!1,children:"Loading"}),n]}))};var M=function(e,t){return{handleKeyCommand:function(e,n){var r=d.RichUtils.handleKeyCommand(n,e);return r?(t(r),"handled"):"not-handled"}}};var B={b:{fontWeight:"bold"},i:{fontStyle:"italic"},u:{textDecoration:"underline"}},F=function(e){return{renderLeaf:function(e){var t=e.leaf,n=(t.text,Object(O.a)(t,["text"])),c=Object.keys(n).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),B[t])}),{});return Object(r.jsx)("span",Object(h.a)(Object(h.a)({},e.attributes),{},{style:c,children:e.children}))},onKeyDown:function(t){var n=t.key,r=t.metaKey,c=b.a.marks(e)||{};null!=r&&null!=B[n]&&(null!=c[n]?b.a.removeMark(e,n):b.a.addMark(e,n,!0))}}};function K(e){var t=Object(c.useCallback)((function(t){var n,c=Object(v.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;if(null!=a.renderElement){var o=a.renderElement(t);if(null!=o)return o}}}catch(u){c.e(u)}finally{c.f()}var i=t.children,l=Object(O.a)(t,["children"]);return Object(r.jsx)("p",Object(h.a)(Object(h.a)({},l),{},{children:i}))}),[e]),n=Object(c.useCallback)((function(t){var n,c=Object(v.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;if(null!=a.renderLeaf){var o=a.renderLeaf(t);if(null!=o)return o}}}catch(u){c.e(u)}finally{c.f()}var i=t.attributes,l=t.children;return Object(r.jsx)("span",Object(h.a)(Object(h.a)({},i),{},{children:l}))}),[e]),a=Object(c.useCallback)((function(t){var n,r=Object(v.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;null!=c.onBeforeInput&&c.onBeforeInput(t)}}catch(a){r.e(a)}finally{r.f()}}),[e]);return{renderElement:t,renderLeaf:n,onKeyDown:Object(c.useCallback)((function(t){var n,r=Object(v.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;null!=c.onKeyDown&&c.onKeyDown(t)}}catch(a){r.e(a)}finally{r.f()}}),[e]),onBeforeInput:a}}function H(){var e=Object(C.a)(["\n        "]);return H=function(){return e},e}function L(){var e=Object(C.a)(["\n      position: relative;\n      align-items: center;\n      display: flex;\n    "]);return L=function(){return e},e}var W=["h1","h2","h3","unstyled"],P=Object(c.memo)((function(e){var t=Object(c.useContext)(U),n=t.editorState,a=t.setEditorState;return Object(r.jsx)("select",{value:e.block.getType(),onMouseDown:function(e){console.log("onMouseDown"),e.stopPropagation()},onClick:function(e){console.log("on click"),e.stopPropagation()},onMouseUp:function(e){console.log("on click"),e.stopPropagation()},onChange:function(e){a(d.EditorState.push(n,d.Modifier.setBlockType(n.getCurrentContent(),n.getSelection(),e.target.value),"change-block-type")),e.preventDefault()},children:W.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})})),N=function(){var e={blockRendererFn:function(e){return"h1"===e.getType()?{component:function(e){return Object(r.jsx)("h1",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}}:"h2"===e.getType()?{component:function(e){return Object(r.jsx)("h2",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}}:"h3"===e.getType()?{component:function(e){return Object(r.jsx)("h3",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}}:void 0}}.blockRendererFn;function t(t){var n=e(t.block),c=Object(r.jsx)(d.EditorBlock,Object(h.a)({},t));return(null===n||void 0===n?void 0:n.component)&&(c=Object(r.jsx)(n.component,Object(h.a)({},t))),Object(r.jsxs)("div",{className:Object(R.a)(L()),children:[Object(r.jsx)("div",{contentEditable:!1,onMouseDown:function(e){return e.stopPropagation()},className:Object(R.a)(H()),children:Object(r.jsx)(P,{block:t.block})}),c]})}return{blockRendererFn:Object(c.useCallback)((function(){return{component:t}}),[])}},U=a.a.createContext({editorState:d.EditorState.createEmpty(),setEditorState:function(e){},getEditorState:function(){return d.EditorState.createEmpty()}});function A(){var e=Object(c.useContext)(U),t=e.editorState,n=e.setEditorState;return Object(r.jsx)(d.Editor,Object(h.a)(Object(h.a)(Object(h.a)({},function(){var e=Object(c.useContext)(U).setEditorState;return{handleKeyCommand:function(t,n){var r=d.RichUtils.handleKeyCommand(n,t);return r?(e(r),"handled"):"not-handled"}}}()),N()),{editorState:t,onChange:n}))}var I={b:{fontWeight:"bold"},i:{fontStyle:"italic"},u:{textDecoration:"underline"}};function J(){var e=Object(C.a)(["\n          "]);return J=function(){return e},e}function q(){var e=Object(C.a)(["\n        position: relative;\n        align-items: center;\n        display: flex;\n      "]);return q=function(){return e},e}var z=["h1","h2","h3","p"],G=function(){var e=Object(s.d)(),t={renderElement:function(e){return"h1"===e.element.type?Object(r.jsx)("h1",Object(h.a)(Object(h.a)({},e.attributes),{},{children:e.children})):"h2"===e.element.type?Object(r.jsx)("h2",Object(h.a)(Object(h.a)({},e.attributes),{},{children:e.children})):"h3"===e.element.type?Object(r.jsx)("h3",Object(h.a)(Object(h.a)({},e.attributes),{},{children:e.children})):Object(r.jsx)("p",{children:e.children})}}.renderElement;return{renderElement:function(n){var c=t(n),a=s.b.findPath(e,n.element);return Object(r.jsxs)("div",{className:Object(R.a)(q()),children:[Object(r.jsx)("div",{contentEditable:!1,className:Object(R.a)(J()),children:Object(r.jsx)("select",{value:n.element.type,onChange:function(t){b.h.setNodes(e,{type:t.target.value},{at:a})},children:z.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})}),c]})}}};function Q(){return Object(r.jsx)(s.a,Object(h.a)(Object(h.a)({},G()),function(){var e=Object(s.d)();return{renderLeaf:function(e){var t=e.leaf,n=(t.text,Object(O.a)(t,["text"])),c=Object.keys(n).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),I[t])}),{});return Object(r.jsx)("span",Object(h.a)(Object(h.a)({},e.attributes),{},{style:c,children:e.children}))},onKeyDown:function(t){var n=t.key,r=t.metaKey,c=b.a.marks(e)||{};null!=r&&null!=I[n]&&(null!=c[n]?b.a.removeMark(e,n):b.a.addMark(e,n,!0))}}}()))}var V=[function(){var e=a.a.useState((function(){return d.EditorState.createWithContent(d.ContentState.createFromText("Hello Draft"))})),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(r.jsx)(d.Editor,{editorState:n,onChange:c})},function(){var e=a.a.useState((function(){return d.EditorState.createWithContent(d.ContentState.createFromText("Hello World"))})),t=Object(j.a)(e,2),n=t[0],o=t[1],i=Object(c.useCallback)((function(e,t){var n=d.RichUtils.handleKeyCommand(t,e);return n?(o(n),"handled"):"not-handled"}),[]);return Object(r.jsx)(d.Editor,{handleKeyCommand:i,editorState:n,onChange:o})},function(){var e=a.a.useState((function(){return d.EditorState.createWithContent(d.ContentState.createFromText("Hello World"))})),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){var e=n.getSelection().getAnchorKey(),t=n.getCurrentContent().getBlockForKey(e);c(d.EditorState.push(n,d.Modifier.setBlockType(n.getCurrentContent(),n.getSelection(),"h1"===t.getType()?"unstyled":"h1"),"change-block-type"))},children:"h1"}),Object(r.jsx)(d.Editor,{blockRendererFn:function(e){if(console.log("hello",e.getType()),"h1"===e.getType())return{component:function(e){return Object(r.jsx)("h1",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}};console.log(e.getType())},editorState:n,onChange:c})]})},function(){var e=a.a.useState((function(){return d.EditorState.createWithContent(d.ContentState.createFromText("Hello there\nDrop an image please"))})),t=Object(j.a)(e,2),n=t[0],o=t[1],i=Object(c.useCallback)((function(e,t){if(null!=t&&t.length>0){var r,c=Object(v.a)(t);try{var a=function(){var e=r.value,t=n.getCurrentContent(),c=(t=t.createEntity("image","IMMUTABLE",{name:e.name,src:null})).getLastCreatedEntityKey();o(d.AtomicBlockUtils.insertAtomicBlock(d.EditorState.push(n,t,"apply-entity"),c," ")),setTimeout(Object(x.a)(y.a.mark((function n(){var r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m(e);case 2:r=n.sent,t.mergeEntityData(c,{src:r});case 4:case"end":return n.stop()}}),n)}))),2e3)};for(c.s();!(r=c.n()).done;)a()}catch(i){c.e(i)}finally{c.f()}return"handled"}return"not-handled"}),[n]),l=Object(c.useCallback)((function(e){if("atomic"===e.getType())return{component:k}}),[]);return console.log(Object(d.convertToRaw)(n.getCurrentContent())),Object(r.jsx)(d.Editor,{handleDroppedFiles:i,blockRendererFn:l,editorState:n,onChange:o})},function(){var e={blocks:[{key:"1",text:"Header One",type:"h1",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"2",text:"Header Two",type:"h2",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"3",text:"Header Three",type:"h3",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"4",text:"Plain Text",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}],entityMap:{}},t=a.a.useState((function(){return d.EditorState.createWithContent(Object(d.convertFromRaw)(e))})),n=Object(j.a)(t,2),c=n[0],o=n[1];return Object(r.jsx)(d.Editor,Object(h.a)({},function(e){var t,n=e.editorState,r=e.setEditorState,c=e.plugins,a=d.DefaultDraftBlockRenderMap,o=Object(v.a)(c);try{for(o.s();!(t=o.n()).done;){var i=t.value;null!=i.blockRenderMap&&a.merge(i.blockRenderMap)}}catch(l){o.e(l)}finally{o.f()}return{editorState:n,blockRenderMap:a,onChange:function(e){var t,n=e,a=Object(v.a)(c);try{for(a.s();!(t=a.n()).done;){var o=t.value;null!=o.onChange&&(n=o.onChange(n))}}catch(l){a.e(l)}finally{a.f()}r(n)},handleKeyCommand:function(){var e,t=Object(v.a)(c);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(null!=n.handleKeyCommand)if("handled"===n.handleKeyCommand.apply(n,arguments))return"handled"}}catch(l){t.e(l)}finally{t.f()}return"not-handled"},blockRendererFn:function(){var e,t=Object(v.a)(c);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(null!=n.blockRendererFn){var r=n.blockRendererFn.apply(n,arguments);if(null!=r)return r}}}catch(l){t.e(l)}finally{t.f()}}}}({editorState:c,setEditorState:o,plugins:[M(0,o),{blockRendererFn:function(e){return console.log("hello",e.getType()),"h1"===e.getType()?{component:function(e){return Object(r.jsx)("h1",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}}:"h2"===e.getType()?{component:function(e){return Object(r.jsx)("h2",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}}:"h3"===e.getType()?{component:function(e){return Object(r.jsx)("h3",{children:Object(r.jsx)(d.EditorBlock,Object(h.a)({},e))})}}:void 0}}]})))},function(){var e={blocks:[{key:"1",text:"Header One",type:"h1",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"2",text:"Header Two",type:"h2",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"3",text:"Header Three",type:"h3",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"4",text:"Plain Text",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}],entityMap:{}},t=a.a.useState((function(){return d.EditorState.createWithContent(Object(d.convertFromRaw)(e))})),n=Object(j.a)(t,2),c=n[0],o=n[1];return Object(r.jsx)(U.Provider,{value:{editorState:c,setEditorState:o,getEditorState:function(){return c}},children:Object(r.jsx)(A,{})})}],X=[function(){var e=Object(c.useMemo)((function(){return Object(s.g)(Object(b.i)())}),[]),t=Object(c.useState)([{children:[{text:"Hello Slate"}]}]),n=Object(j.a)(t,2),a=n[0],o=n[1];return Object(r.jsx)(s.c,{editor:e,value:a,onChange:function(e){return o(e)},children:Object(r.jsx)(s.a,{})})},function(){var e=Object(c.useMemo)((function(){return Object(s.g)(Object(b.i)())}),[]),t=Object(c.useState)([{children:[{text:"Hello Slate"}]}]),n=Object(j.a)(t,2),a=n[0],o=n[1],i=Object(c.useCallback)((function(t){var n=t.key,r=t.metaKey,c=b.a.marks(e)||{};null!=r&&null!=f[n]&&(null!=c[n]?b.a.removeMark(e,n):b.a.addMark(e,n,!0))}),[e]),l=Object(c.useCallback)((function(e){var t=e.leaf,n=(t.text,Object(O.a)(t,["text"])),c=Object.keys(n).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),f[t])}),{});return Object(r.jsx)("span",Object(h.a)(Object(h.a)({},e.attributes),{},{style:c,children:e.children}))}),[]);return console.log({value:a}),Object(r.jsx)(s.c,{editor:e,value:a,onChange:function(e){return o(e)},children:Object(r.jsx)(s.a,{onKeyDown:i,renderLeaf:l})})},function(){var e=Object(c.useMemo)((function(){return Object(s.g)(Object(b.i)())}),[]),t=Object(c.useState)([{children:[{text:"Hello Slate"}]}]),n=Object(j.a)(t,2),a=n[0],o=n[1],i=Object(c.useCallback)((function(e){var t=e.element,n=e.children,c=Object(O.a)(e,["element","children"]);return"h1"===t.type||"h2"===t.type?Object(r.jsx)("h1",Object(h.a)(Object(h.a)({},c),{},{children:n})):Object(r.jsx)("p",Object(h.a)(Object(h.a)({},c),{},{children:n}))}),[]);return Object(r.jsxs)(s.c,{editor:e,value:a,onChange:function(e){return o(e)},children:[Object(r.jsx)("button",{onClick:function(){b.h.setNodes(e,{type:"h1"})},children:"h1"}),Object(r.jsx)(s.a,{renderElement:i})]})},function(){var e=Object(c.useMemo)((function(){return Object(s.g)(Object(E.a)(Object(b.i)()))}),[]),t=Object(c.useState)({}),n=Object(j.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)([{children:[{text:"Hello there"}]},{children:[{text:"Drop an image here please"}]}]),l=Object(j.a)(i,2),u=l[0],d=l[1];return e.insertData=function(t){var n=t.files;if(n&&n.length>0){var r,c=Object(v.a)(n);try{var i=function(){var t=r.value;o(Object(h.a)(Object(h.a)({},a),{},Object(S.a)({},t.name,null))),function(e,t){var n={type:"image",entity:t,children:[{text:""}]};b.h.insertNodes(e,n)}(e,t.name),setTimeout(Object(x.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:n=e.sent,o(Object(h.a)(Object(h.a)({},a),{},Object(S.a)({},t.name,n)));case 4:case"end":return e.stop()}}),e)}))),3e3)};for(c.s();!(r=c.n()).done;)i()}catch(l){c.e(l)}finally{c.f()}}},Object(r.jsx)(s.c,{editor:e,value:u,onChange:function(e){return d(e)},children:Object(r.jsx)(s.a,{onDrop:function(e){return[console.log(e)]},renderElement:function(e){return Object(r.jsx)(D,Object(h.a)(Object(h.a)({},e),{},{imageStore:a}))}})})},function(){var e=Object(c.useMemo)((function(){return Object(s.g)(Object(b.i)())}),[]),t=Object(c.useState)([{type:"h1",children:[{text:"header one"}]},{type:"h2",children:[{text:"header two"}]},{type:"h3",children:[{text:"header three"}]},{type:"paragraph",children:[{text:"Just body text"}]}]),n=Object(j.a)(t,2),a=n[0],o=n[1],i=[{renderElement:function(e){return"h1"===e.element.type?Object(r.jsx)("h1",Object(h.a)(Object(h.a)({},e.attributes),{},{children:e.children})):"h2"===e.element.type?Object(r.jsx)("h2",Object(h.a)(Object(h.a)({},e.attributes),{},{children:e.children})):"h3"===e.element.type?Object(r.jsx)("h3",Object(h.a)(Object(h.a)({},e.attributes),{},{children:e.children})):void 0}},F(e)];return Object(r.jsx)(s.c,{editor:e,value:a,onChange:function(e){return o(e)},children:Object(r.jsx)(s.a,Object(h.a)({},K(i)))})},function(){var e=Object(c.useMemo)((function(){return Object(s.g)(Object(b.i)())}),[]),t=Object(c.useState)([{type:"h1",children:[{text:"header one"}]},{type:"h2",children:[{text:"header two"}]},{type:"h3",children:[{text:"header three"}]},{type:"paragraph",children:[{text:"Just body text"}]}]),n=Object(j.a)(t,2),a=n[0],o=n[1];return Object(r.jsx)(s.c,{editor:e,value:a,onChange:function(e){return o(e)},children:Object(r.jsx)(Q,{})})}],Y=["Basic","Basic Text Formatting","Block Formatting","Transient State","Plugin Implementation","Hooks"];function Z(){return Object(r.jsx)(l.a,{basename:"/draft-slate-comparison-playground",children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("th",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:"Slate"}),Object(r.jsx)("td",{children:"Draft"})]})}),Object(r.jsx)("tbody",{children:Y.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e}),Object(r.jsx)("td",{children:Object(r.jsx)(l.b,{to:"/D".concat(t+1),children:"Draft js"})}),Object(r.jsx)("td",{children:Object(r.jsx)(l.b,{to:"/S".concat(t+1),children:"Slate js"})})]})}))})]}),Object(r.jsxs)(u.c,{children:[V.map((function(e,t){return Object(r.jsx)(u.a,{path:"/D".concat(t+1),children:Object(r.jsx)(e,{})},"/D".concat(t+1))})),X.map((function(e,t){return Object(r.jsx)(u.a,{path:"/S".concat(t+1),children:Object(r.jsx)(e,{})},"/S".concat(t+1))}))]})]})})}i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.62e706ed.chunk.js.map