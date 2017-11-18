class Number {
  random () {
    return Math.floor(1000 + Math.random() * 9000)
  }
  countInArray (arr, number) {
    let count = 0
    arr.forEach((element) => {
      if (element === number) {
        count++
      }
    })
    return count
  }
  isInvalid (arr) {
    let inValid = false
    arr.forEach((element) => {
      if ((this.countInArray(arr, element)) >= 2) {
        inValid = true
      }
    })
    return inValid
  }
}
/**
function Number(){
  const x = this;

  this.random = function(){
    return Math.floor(1000 + Math.random() * 9000);
  };
  this.isInValid = function (arr){
    let inValid = false;
    arr.forEach(function(element){
      if((this.countInArray(arr,element)) >= 2){
        inValid = true;
      }
    })
    return inValid;
  };
  this.countInArray = function (arr,number){
    let count = 0;
    arr.forEach(function(element){
      if (element === number) {
        count++;
      }
    });
    return count;
  };
}
*/
