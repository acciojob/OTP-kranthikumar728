//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus on first input when page loads 
codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {

    // Allow only numbers (0-9)
    if (e.key >= 0 && e.key <= 9) {
      code.value = '';
      setTimeout(() => {
        if (index < codes.length - 1) {
          codes[index + 1].focus();
        }
      }, 10);
    }

    // Handle backspace
    if (e.key === 'Backspace') {
      if (code.value === '' && index > 0) {
        setTimeout(() => {
          codes[index - 1].focus();
        }, 10);
      }
    }
  });
});

