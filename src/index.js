
// Script to close and open Modal window

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'), 
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
     
      const isModalOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
      refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
      refs.modal.classList.toggle('is-hidden');
  
      const scrollLockMethod = !isModalOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body)
    }
  })();

// Script for phone auto editing 

  const isNumericInput = event => {
    const key = event.keyCode;
    return (
      (key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
    );
  };

  const isModifierKey = event => {
    const key = event.keyCode;
    return (
      event.shiftKey === true ||
      key === 35 ||
      key === 36 || // Allow Shift, Home, End
      key === 8 ||
      key === 9 ||
      key === 13 ||
      key === 46 || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      // Allow Ctrl/Command + A,C,V,X,Z
      ((event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
    );
  };

  const enforceFormat = event => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
    }
  };

  const formatToPhone = event => {
    if (isModifierKey(event)) {
      return;
    }

    const input = event.target.value.replace(/\D/g, '').substring(0, 12); // First ten digits of input only
    const areaCodeN = '+38 ';
    const areaCode = input.substring(2, 5);
    const middle = input.substring(5, 8);
    const middleN = input.substring(8, 10);
    const last = input.substring(10, 12);

    if (input.length > 10) {
      event.target.value = `${areaCodeN}(${areaCode}) ${middle}-${middleN}-${last}`;
    } else if (input.length > 8) {
      event.target.value = `${areaCodeN}(${areaCode}) ${middle}-${middleN}`;
    } else if (input.length > 5) {
      event.target.value = `${areaCodeN}(${areaCode}) ${middle}`;
    } else if (input.length > 1) {
      event.target.value = `${areaCodeN}(${areaCode}`;
    } else if (input.length > 0) {
      event.target.value = `${areaCodeN}(0${areaCode}`;
    }
  };

  const inputElement = document.getElementById('phoneNumber');
  inputElement.addEventListener('keydown', enforceFormat);
  inputElement.addEventListener('keyup', formatToPhone);