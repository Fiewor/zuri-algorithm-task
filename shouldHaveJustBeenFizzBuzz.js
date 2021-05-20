let arr = [];
function checkYuGiOh(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.splice(arr.indexOf(i), 1, "yu-gi-oh");            
        } else if (i % 2 === 0 && i % 3 === 0) {
            // select array element at index i
            // use splice to replace it with text
            arr.splice(arr.indexOf(i), 1, "yu-gi");
        } else if (i % 2 === 0) {
            arr.splice(arr.indexOf(i), 1, "yu");
        } else if (i % 3 === 0) {
            arr.splice(arr.indexOf(i), 1, "gi");
        }  else if (i % 5 === 0) {
            arr.splice(arr.indexOf(i), 1, "oh");
        }
        arr.push(i);
    }
    return arr;
}

console.log(checkYuGiOh(10));