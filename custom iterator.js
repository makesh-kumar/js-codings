
function iterFn(arr) {
    let index = 0
    return {
        next: function() {
            return index < arr.length ? arr[index++] : null;
        },
        done: function() {
            return index >= arr.length;
        }
    }
}

const iterator = iterFn([1,2,4]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.done());
console.log(iterator.next());
console.log(iterator.done());