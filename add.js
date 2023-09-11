function resizeTextarea() {
  const textarea = document.getElementById('my-textarea');
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}
const textarea = document.getElementsByClassName('listItem');
textarea.addEventListener('input', resizeTextarea);