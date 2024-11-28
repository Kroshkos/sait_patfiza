document.querySelectorAll('.plitButton').forEach(button => {
  button.addEventListener('click', () => {
    
    button.classList.add('pressed');

    const link = button.getAttribute('data-link');

    
    setTimeout(() => {
      if (link) {
        window.location.href = link; 
      }
    }, 300); 

    
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 500); 
  });
});

  
  