(()=>{const e={openModalBtn:document.querySelector("[data-modal-table-open]"),closeModalBtn:document.querySelector("[data-modal-table-close]"),modal:document.querySelector("[data-modal-table]")};function t(){const t="true"===e.openModalBtn.getAttribute("aria-expanded")||!1;e.openModalBtn.setAttribute("aria-expanded",!t),e.modal.classList.toggle("is-hidden");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-room-open]"),closeModalBtn:document.querySelector("[data-modal-room-close]"),modal:document.querySelector("[data-modal-room]")};function t(){const t="true"===e.openModalBtn.getAttribute("aria-expanded")||!1;e.openModalBtn.setAttribute("aria-expanded",!t),e.modal.classList.toggle("is-hidden");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const e=e=>{const t=e.keyCode;return!0===e.shiftKey||35===t||36===t||8===t||9===t||13===t||46===t||t>36&&t<41||(!0===e.ctrlKey||!0===e.metaKey)&&(65===t||67===t||86===t||88===t||90===t)},t=document.getElementById("phoneNumber");t.addEventListener("keydown",(t=>{(e=>{const t=e.keyCode;return t>=48&&t<=57||t>=96&&t<=105})(t)||e(t)||t.preventDefault()})),t.addEventListener("keyup",(t=>{if(e(t))return;const o=t.target.value.replace(/\D/g,"").substring(0,12),n=o.substring(2,5),a=o.substring(5,8),l=o.substring(8,10),d=o.substring(10,12);o.length>10?t.target.value=`+38 (${n}) ${a}-${l}-${d}`:o.length>8?t.target.value=`+38 (${n}) ${a}-${l}`:o.length>5?t.target.value=`+38 (${n}) ${a}`:o.length>1?t.target.value=`+38 (${n}`:o.length>0&&(t.target.value=`+38 (0${n}`)}));
//# sourceMappingURL=hotel.b1a9a76d.js.map