(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(44)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(12);n(21),n(22);function o(e){return l.a.createElement("td",{className:"Block"},e.value)}function r(e){return l.a.createElement("tr",null,e.data.map(e=>l.a.createElement(o,{value:e})))}n(23);function u(e){const t=[];for(const e of"ABCDEFGHI"){const n=[];for(const t of"123456789")n.push(e+t);t.push(n)}return l.a.createElement("table",null,l.a.createElement("tbody",null,t.map(e=>l.a.createElement(r,{data:e}))))}var s=n(15),m=(n(26),n(14)),p=n.n(m);function i(e){const t=Object(a.useCallback)(async e=>{console.log(e);let t=new FormData;t.append("file",e[0]);const n=await p.a.post("https://akhilennu.pythonanywhere.com/uploader",t,{headers:{"Content-Type":"multipart/form-data"}});console.log(n)},[]),{getRootProps:n,getInputProps:c}=Object(s.a)({accept:"image/jpeg",multiple:!1,onDrop:t});return l.a.createElement("section",{className:"container"},l.a.createElement("div",{...n({className:"dropzone"})},l.a.createElement("input",{...c()}),l.a.createElement("p",null,"Drag 'n' drop a jpeg file here, or click to select files"),l.a.createElement("em",null,"(Only *.jpeg image will be accepted)")))}function d(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(u,null))}var f=()=>l.a.createElement("div",{className:"App"},l.a.createElement(d,{message:"Welcome to sudoku"}));Object(c.render)(l.a.createElement(f,null),document.getElementById("root"))}},[[16,1,2]]]);