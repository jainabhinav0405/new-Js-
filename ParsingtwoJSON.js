function assertObjectsEqual(obj1, obj2, str){
    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            console.log(`FAILED Expected ${JSON.stringify(obj2)}, but got ${JSON.stringify(obj1)}`);
            return str;
        }
    }
    console.log(`PASSED`);
    return  str;
}

var expected = {foo: 6, bar: 6};
var actual = {foo: 5, bar: 6}
console.log(assertObjectsEqual(actual, expected, "detects that two objects are equal"));