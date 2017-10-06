let random = 0;
const number = new Number();
const game = new Game();

$(document).ready(function() {
  $('input#number').characterCounter();
  defaultValues();
});
$('form').submit(function( event ) {
  event.preventDefault();
  const nVal = this.number.value;

  if(nVal.length != 4){
    $(this.number).addClass('invalid');
    Materialize.toast('Deben ser 4 caracteres', 4000);
    return;
  }
  $(this.number).removeClass('invalid');
  game.validate( nVal.split(''), random.toString().split(''));
  const p = game.p;
  const f = game.f;

  if(f === 4){
    Materialize.toast('Tenemos un Ganador, Gracias por jugar mi amig@!!! !', 3000);    
  }
});
$('#reset').click(function(){
  defaultValues();
  Materialize.toast('El numero fue reiniciado !', 3000);  
});
function defaultValues(){
  random = number.random();
  console.log("Hola Tramposo ;-)");
  setTimeout(function(){
    $('.buttons-container').removeClass('scale-out').addClass('scale-in');
    $('#number').focus();    
  }, 1000);
}