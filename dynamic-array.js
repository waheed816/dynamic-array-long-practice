class DynamicArray {

  constructor(defaultSize=4) {

    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);

  }

  read(index) {
    if(this.length <= index){
      return undefined;
    }
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let element = this.data[this.length - 1];
    this.length--;
    return element;
  }

  shift() {
    let element = this.data[0];
    for(let i = 0; i < this.length ; i++){
      this.data[i] = this.data[i+1];
    }
    this.length--;
    return element;
  }

  unshift(val) {
    for(let i = this.length; i > 0 ; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf (val) {
    for(let i = 0; i <= this.length -1; i++){
      if(val === this.data[i]){
        return i;
      }
    }
    return -1;
  }

  resize () {
    //this.capacity *= 2;
    for(let i = 0; i < this.length ; i++){
      
      this.data[i+this.length] = this.data[i];
    }
    //this.data.length *= 2;
  }

}


module.exports = DynamicArray;
