class Counter {
    constructor() {
        if (typeof Counter.instance === 'Object') return Counter.instance;
        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }
    increaseCount() {
        return this.count++;
    }
}

const count1 = new Counter();
const count2 = new Counter();

count1.increaseCount();
count1.increaseCount();
count2.increaseCount();
count2.increaseCount();

count1.getCount(); // 4
count2.getCount(); // 4