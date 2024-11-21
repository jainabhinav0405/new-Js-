class EventEmitter {

    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(element => element(...args));
        }
    }

    off(event, listener) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(element => element !== listener);
    }
}

// Example usage
const greet = (name) => console.log(`Hello, ${name}`);

const emitter = new EventEmitter();
emitter.on('greet', greet);
emitter.emit('greet', 'Alice'); // Output: Hello, Alice
emitter.off('greet', greet);
emitter.emit('greet', 'Bob'); // No output
