let random = 0
const number = new Number()
const game = new Game()

let app = new Vue ({
  el: '#app',
  data:{
    text: 'Hello world'
  }
})

$(document).ready(function() {
  $('input#number').characterCounter();
  defaultValues();
});
$('form').submit(function( event ) {
  event.preventDefault();
  const nVal = this.number.value;
  if(number.isInValid(nVal.split(''))){
    $(this.number).addClass('invalid');
    Materialize.toast('No pueden haber caracteres repetidos', 4000);
    return;
  }
  if(nVal.length != 4){
    $(this.number).addClass('invalid');
    Materialize.toast('Deben ser 4 caracteres', 4000);
    return;
  }
  $(this.number).removeClass('invalid');
  game.validate(nVal.split(''), random.toString().split(''));
  if(game.winner()){
    Materialize.toast('Tenemos un Ganador, Gracias por jugar mi amig@!!!, el juego se reiniciara automanticamente Gracias por jugar!! ',
                      4000, 
                      '', 
                      function(){
                        defaultValues();
                      });
  }else{
    $('table  tbody').append('<tr><td>'+ nVal +'</td><td>' + game.p() + '</td><td>' + game.f() + '</td></tr>');
  }

});
$('#reset').click(function(){
  defaultValues();
  Materialize.toast('El numero fue reiniciado !', 3000);  
});
function defaultValues(){
  random = number.random();
  console.poo("Hola Tramposo ;-)");
  setTimeout(function(){
    $('.buttons-container').removeClass('scale-out').addClass('scale-in');
    $('#number').focus();    
  }, 1000);
  $('table  tbody').html('');
}