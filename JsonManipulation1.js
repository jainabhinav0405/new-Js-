let json = [
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ];

/*
[
  {
    "123": [
      {
        "name": "Tony",
        "contact": "9872276210"
      },
      {
        "name": "Bruce",
        "contact": "6776543210"
      },
      {
        "name": "Peter",
        "contact": "7666543210"
      }
    ]
  },
  {
    "231": [
      {
        "name": "Steve",
        "contact": "7876543210"
      },
      {
        "name": "Phil",
        "contact": "8896543210"
      }
    ]
  },
  {
    "321": [
      {
        "name": "Nick",
        "contact": "9876521210"
      },
      {
        "name": "Clint",
        "contact": "8954643210"
      }
    ]
  }
]

*/

let result = json.reduce((acc, curr) => {
  if (!acc[curr.batch_id]) {
    acc[curr.batch_id] = [];
  }
  acc[curr.batch_id].push({
    name: curr.name,
    contact: curr.contact
  });
  return acc;
}, {});

console
let arr = [];
arr.push(result);
console.log(result);
console.log(arr);
