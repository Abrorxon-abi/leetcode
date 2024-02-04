var MyQueue = function () {
    this.stack1 = []; // For pushing elements
    this.stack2 = []; // For popping and peeking elements
};

/** 
 * @param {number} x
 * @return {void}
 */

MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.transferElements = function () {
    // Transfer elements from stack1 to stack2
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
};

MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        this.transferElements();
    }
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        this.transferElements();
    }
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */