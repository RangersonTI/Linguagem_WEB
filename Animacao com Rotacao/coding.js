<<<<<<< Updated upstream
const elementoComAnimacao = document.querySelector('.image_with_animation');

elementoComAnimacao.addEventListener('click', function() {
  if (this.classList.contains('image_with_animation')) {
    this.classList.remove('image_with_animation');
  } else {
    this.classList.add('image_with_animation');
  }
});
=======
/*const ler = document.querySelector("#image_with_animation")
ler.classList.add("image_with_animation")
ler.style.transform = "rotate(infinite)"
ler.style.position = "relative"
ler.style.animation = "loading 3s linear infinite"*/


/*document.getElementById('#image_with_animation').addEventListener('click', function(){
    this.style.animation = 'none';
    this.style.webkitAnimation = 'none'; // adicionado para compatibilidade com alguns navegadores
    this.style.mozAnimation = 'none'; // adicionado para compatibilidade com alguns navegadores
    this.style.msAnimation = 'none'; // adicionado para compatibilidade com alguns navegadores
    this.style.oAnimation = 'none'; // adicionado para compatibilidade com alguns navegadores
    this.style.animation = 'none'; // adicionado por último para garantir que seja aplicado em todos os navegadores
    this.style.animationPlayState = 'paused'; // adicionado para pausar a animação em vez de interrompê-la abruptamente
});*/

  
const ler = document.querySelector("#image_with_animation")
ler.classList.add("#image_with_animation")
ler.style.transform = "rotate(infinite)"
ler.style.position = "relative"
ler.style.animation = "loading 3s linear infinite"
(ler).click(function(){
    ler.stop().css('animation','none');
});
>>>>>>> Stashed changes
