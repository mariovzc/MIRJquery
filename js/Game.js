// las picas suman cuando tienen coincidienda en el array;
// las fijas cuando tienen coincidencia y estan en la misma posicion;
function Game(){
  let p = 0; // picas
  let f = 0; // fijas;
  this.p = function(){
    return p;
  };
  this.f = function(){
    return f;
  }
  this.validate = function(number,rNumber){
    number.forEach(function(element,index){
      if(rNumber.includes(element)) p++;

      if(element == rNumber[index]) f++;
    });
    return [p,f];
  }
}