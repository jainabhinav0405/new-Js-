function generateQuery(obj, url) {
    const queryString = Object.keys(obj)
        .map(key => `${(key)}=${(obj[key])}`)
        .join('&');
    return `${url}?${queryString}`;
}

const json = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three"
};

const url = "https://localhost:400";
const result = generateQuery(json, url);
console.log(result);
