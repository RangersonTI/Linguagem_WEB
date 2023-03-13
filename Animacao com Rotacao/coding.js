const elementoComAnimacao = document.querySelector('.image_with_animation');

elementoComAnimacao.addEventListener('click', function() {
  if (this.classList.contains('image_with_animation')) {
    this.classList.remove('image_with_animation');
  } else {
    this.classList.add('image_with_animation');
  }
});