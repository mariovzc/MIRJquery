function Number(){
  const x = this;
  this.random = function(){
    return Math.floor(1000 + Math.random() * 9999);
  }
}