!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-table-open]"),closeModalBtn:document.querySelector("[data-modal-table-close]"),modal:document.querySelector("[data-modal-table]")};function t(){var t="true"===e.openModalBtn.getAttribute("aria-expanded")||!1;e.openModalBtn.setAttribute("aria-expanded",!t),e.modal.classList.toggle("is-hidden"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-room-open]"),closeModalBtn:document.querySelector("[data-modal-room-close]"),modal:document.querySelector("[data-modal-room]")};function t(){var t="true"===e.openModalBtn.getAttribute("aria-expanded")||!1;e.openModalBtn.setAttribute("aria-expanded",!t),e.modal.classList.toggle("is-hidden"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var e=function(e){var t=e.keyCode;return!0===e.shiftKey||35===t||36===t||8===t||9===t||13===t||46===t||t>36&&t<41||(!0===e.ctrlKey||!0===e.metaKey)&&(65===t||67===t||86===t||88===t||90===t)},t=document.getElementById("phoneNumber");t.addEventListener("keydown",(function(t){(function(e){var t=e.keyCode;return t>=48&&t<=57||t>=96&&t<=105})(t)||e(t)||t.preventDefault()})),t.addEventListener("keyup",(function(t){if(!e(t)){var o=t.target.value.replace(/\D/g,"").substring(0,12),n="+38 ",a=o.substring(2,5),c=o.substring(5,8),l=o.substring(8,10),d=o.substring(10,12);o.length>10?t.target.value="".concat(n,"(").concat(a,") ").concat(c,"-").concat(l,"-").concat(d):o.length>8?t.target.value="".concat(n,"(").concat(a,") ").concat(c,"-").concat(l):o.length>5?t.target.value="".concat(n,"(").concat(a,") ").concat(c):o.length>1?t.target.value="".concat(n,"(").concat(a):o.length>0&&(t.target.value="".concat(n,"(0").concat(a))}}))}();
//# sourceMappingURL=hotel.8ce3e9a6.js.map
