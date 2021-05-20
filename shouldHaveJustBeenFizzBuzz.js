let arr = [];
function checkYuGiOh(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.push("yu-gi-oh");
        } else if (i % 2 === 0 && i % 5 === 0) {
            arr.push("yu-oh");
        } else if (i % 2 === 0 && i % 3 === 0) {
            arr.push("yu-gi");
        } else if (i % 2 === 0) {
            arr.push("yu");
        } else if (i % 3 === 0) {
            arr.push("gi");
        }  else if (i % 5 === 0) {
            arr.push("oh");
        } else if (typeof i === 'string') {
            return i;
        } else {
            arr.push(i);
        }
    }
    return arr;
}
// select array element at index i
// use splice to replace it with text
//arr.splice(arr.indexOf(i), 1, "yu-gi");

console.log(checkYuGiOh("fizzbuzz is meh"));