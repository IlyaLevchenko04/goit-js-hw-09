!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=null,n=document.querySelector("body");e.setAttribute("disabled","true"),t.addEventListener("click",(function(){t.setAttribute("disabled","true"),r=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.3f42cda9.js.map
