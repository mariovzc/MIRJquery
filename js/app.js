let random = 0;
const number = new Number();
$(document).ready(function() {
  $('input#number').characterCounter();
  random = number.random();
  console.log(random);
  console.log('Deja de hacer trampa, aqui no esta la respuesta ;-)');

  setTimeout(function(){
    $('.buttons-container').removeClass('scale-out').addClass('scale-in');
  }, 1000);
  
});
$('#form').submit(function(e){
  e.preventDefault();
  const number = this.number.value;
});