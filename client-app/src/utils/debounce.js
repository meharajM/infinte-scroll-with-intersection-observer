function debounce(fn, interval) {
    let lastCalled = 0;
    return function (...args) {
        const now = new Date().getTime();
        if(now - lastCalled > interval) {
            lastCalled = now;
            return fn(...args);
        }
    }
}
export default debounce;