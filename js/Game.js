class Game {
  constructor () {
    this.p = 0
    this.f = 0
  }
  validate (number, rNumber) {
    this.p = 0
    this.f = 0
    number.forEach((element, index) => {
      if (rNumber.includes(element)) this.p++

      if (element === rNumber[index]) this.f++
    })
    this.p -= this.f
    return [this.p, this.f]
  }
  winner () {
    return this.f === 4
  }
}
