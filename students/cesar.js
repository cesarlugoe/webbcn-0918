var perfil = document.querySelector('section.perfil');
var experimentos = document.querySelector('section.experiments');
var buttonPerfil = document.querySelector('button.btn-1');
var buttonExperimentos = document.querySelector('button.btn-2')

buttonPerfil.addEventListener('click',function(){
  perfil.classList.toggle('hidden');
  
})

buttonExperimentos.addEventListener('click',function(){
  experimentos.classList.toggle('hidden');
  
})

