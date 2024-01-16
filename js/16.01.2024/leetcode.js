
var RandomizedSet = function () {
    this.elements = [];
    this.elementIndices = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (val in this.elementIndices) {
        return false;
    }
    this.elements.push(val);
    this.elementIndices[val] = this.elements.length - 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!(val in this.elementIndices)) {
        return false;
    }
    const index = this.elementIndices[val];
    const lastElement = this.elements[this.elements.length - 1];
    this.elements[index] = lastElement;
    this.elementIndices[lastElement] = index;
    this.elements.pop();
    delete this.elementIndices[val];
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */