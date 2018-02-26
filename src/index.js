
class Sorter {
  constructor() {
    // your implementation
    this.arr=[];
    this.comparator=(a,b)=>a-b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr
  }

  sort(indices) {
    // your implementation
    let sortedArr=[];
    for(let i=0;i<indices.length;i++){
      sortedArr.push(this.arr[indices[i]]);
    }
    sortedArr.sort(this.comparator);
    for (let i = 0; i < indices.length; i++){
        this.arr[indices[i]] = sortedArr.shift();
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator=compareFunction;
  }
}

module.exports = Sorter;