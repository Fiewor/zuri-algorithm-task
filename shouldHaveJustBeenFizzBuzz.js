let arr = [];
function checkYuGiOh(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            i = "yu";
        } else if (i % 3 === 0) {
            i = "gi";
        }  else if (i % 5 === 0) {
            i = "oh";
        } else {
            i;
        }
        arr.push(i);
    }
}

console.log(checkYuGiOh(5));