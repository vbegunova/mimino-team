!function(){var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,c=(t.document||t.ownerDocument).querySelectorAll(e),n=0;c[n]&&c[n]!==t;)++n;return Boolean(c[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var c=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+c+'"]').classList.add("active"),t.classList.add("active")}))})),c.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));var t=function(e){var t=e.keyCode;return!0===e.shiftKey||35===t||36===t||8===t||9===t||13===t||46===t||t>36&&t<41||(!0===e.ctrlKey||!0===e.metaKey)&&(65===t||67===t||86===t||88===t||90===t)},c=document.getElementById("phoneNumber");c.addEventListener("keydown",(function(e){(function(e){var t=e.keyCode;return t>=48&&t<=57||t>=96&&t<=105})(e)||t(e)||e.preventDefault()})),c.addEventListener("keyup",(function(e){if(!t(e)){var c=e.target.value.replace(/\D/g,"").substring(0,12),n="+38 ",o=c.substring(2,5),a=c.substring(5,8),r=c.substring(8,10),s=c.substring(10,12);c.length>10?e.target.value="".concat(n,"(").concat(o,") ").concat(a,"-").concat(r,"-").concat(s):c.length>8?e.target.value="".concat(n,"(").concat(o,") ").concat(a,"-").concat(r):c.length>5?e.target.value="".concat(n,"(").concat(o,") ").concat(a):c.length>1?e.target.value="".concat(n,"(").concat(o):c.length>0&&(e.target.value="".concat(n,"(0").concat(o))}}))}();
//# sourceMappingURL=hotel.33471cf8.js.map