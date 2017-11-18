let random = 0
const numbers = new GameNumber()
const game = new Game()

let app = new Vue({
  el: '#app',
  data () {
    return {
      results: [],
      number: '',
      isInvalid: false,
      scaleIn: false
    }
  },
  methods: {
    reset () {
      this.defaultValues()
      Materialize.toast('El numero fue reiniciado !', 3000)
    },
    defaultValues () {
      random = numbers.random()
      console.poo('Hola Tramposo -)')
      let self = this
      setTimeout(function () {
        self.scaleIn = !self.scaleIn
      }, 1000)
      this.number = ''
      this.values = []
    },
    submit () {
      if (numbers.isInvalid(this.number.split(''))) {
        this.isInvalid = true
        Materialize.toast('No pueden haber caracteres repetidos', 4000)
      } else if (this.number.length !== 4) {
        this.isInvalid = true
        Materialize.toast('Deben ser 4 caracteres', 4000)
      } else {
        $(this.number).removeClass('invalid')
        game.validate(this.number.split(''), random.toString().split(''))
        if (game.winner()) {
          Materialize.toast(
            'Tenemos un Ganador, Gracias por jugar mi amig@!!!, el juego se reiniciara automanticamente Gracias por jugar!! ',
            4000,
            '',
            () => {
              app.defaultValues()
            }
          )
        } else {
          this.results.push({ // push the value inside the ARRAY
            last_number: this.number,
            last_p: game.p,
            last_f: game.f
          })
          this.number = ''
        }
      }
    }
  },
  mounted () {
    this.defaultValues()
  }
})
