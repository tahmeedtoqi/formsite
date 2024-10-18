document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        // Toggle the "checked" class on the parent li when checkbox is checked/unchecked
        if (checkbox.checked) {
          checkbox.parentElement.classList.add('checked');
        } else {
          checkbox.parentElement.classList.remove('checked');
        }
      });
    });
  });