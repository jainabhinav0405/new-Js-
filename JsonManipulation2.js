function result(obj, sum = '') {
  return Object.keys(obj).reduce((acc, key) => {
      const newKey = sum ? `${sum}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          Object.assign(acc, result(obj[key], newKey));
      } else {
          acc[newKey] = obj[key];
      }
      return acc;
  }, {});
}

const json = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
          "keyCOne": "key C one value",
          "keyCTwo": "key C two value",
          "keyCThree": 1234
      }
  }
};


console.log(result(json));
