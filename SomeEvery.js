function hasOddNumber(arr){
    let result = arr.some(function(val){
        return val % 2 == 1;
    })
    return result;
}

function hasAZero(num){
    const Arr = num.toString().split('');
    let result = Arr.some(function(val){
        return val.indexOf(0) !== -1;
    })
    return result;
}

function hasOnlyOddNumbers(arr){
    let result = arr.every(function(val){
        return val % 2 == 1;
    })
    return result;
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    })
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val.hasOwnProperty(key);
    })
}