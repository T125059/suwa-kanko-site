const themeToggleButton = document.getElementById('theme-toggle-btn');
const bodyElement = document.body;

themeToggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-theme');

  if (bodyElement.classList.contains('dark-theme')) {
    themeToggleButton.textContent = 'ライトモード';
  } else {
    themeToggleButton.textContent = 'ダークモード';
  }

});
