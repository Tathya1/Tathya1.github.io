const Toggle = document.getElementById('theme-toggle');

Toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

