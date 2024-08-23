/**
 * You have a large array with most of the elements as zero.
 * Use a more space-efficient data structure, SparseArray, that implements the same interface:
 * init(arr, size): initialize with the original large array and size.
 * set(i, val): updates index at i with val.
 * get(i): gets the value at index i.
 */

class SparseArray {
  size;
  data = {};
  constructor(size) {
    this.size = size || 0;
  }

  init(arr, size) {
    this.size = size;
    arr.map((val, i) => {
      if (val !== 0) this.data[i] = val;
    });
  }

  set = (i, val) => {
    this.data[i] = val;
  };

  get = (i) => {
    return this.data[i];
  };

  print = () => {
    const keys = Object.keys(this.data);
    const values = Object.values(this.data);
    console.log(keys, values);
  };
}

const array = [0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
const sparseArray = new SparseArray();
sparseArray.init(array, array.length);
sparseArray.print();
