function tune(arr) {
    const defaultArr = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    var tunedArr = [];
    let i = 0;

    for (const number of arr) {
        if (number === defaultArr[i]) {
            tunedArr.push("OK")
        } else if (number === 0) {
            tunedArr.push(" - ")
        } else if (number > defaultArr[i] && number < defaultArr[i]*1.03) {
            tunedArr.push("•<")
        } else if (number > defaultArr[i]*1.03) {
            tunedArr.push("•<<")
        } else if (number < defaultArr[i] && number > defaultArr[i]*0.97) {
            tunedArr.push(">•")
        } else if (number < defaultArr[i]*0.97) {
            tunedArr.push(">>•")
        }
        i += 1;
    }

    return tunedArr;
}

console.log(tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41]));