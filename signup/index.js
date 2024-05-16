const button = document.querySelector('.form-submit');
const checkbox = document.querySelector('.form-checkbox');

checkbox.addEventListener("change", function() {
    if (this.checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });