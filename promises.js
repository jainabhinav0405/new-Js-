class MyPromise {
    constructor() {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.fullFilled = [];
        this.rejected = [];
    }
    then(onFulfilled, onRejected) {
        if (this.status === 'fulfilled') {
            this.fullFilled.push(onFulfilled);
            this.resolve(this.value);
        } else if (this.status === 'rejected') {
            this.rejected.push(onRejected);
            this.reject(this.reason);
        } else {
            this.fullFilled.push(onFulfilled);
            this.rejected.push(onRejected);
        }
    }
    static resolve(value) {
        if (this.status === 'pending') {
            this.status = 'fulfilled';
            this.value = value;
            this.fullFilled.forEach(callback => callback(this.value));
        }
    }
    static reject(reason) {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.reason = reason;
            this.rejected.forEach(callback => callback(this.reason));
        }
    }
}

