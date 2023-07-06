// завдання 1

// const user = {

//     hobby: "dvdbfbfb",
//     premium: true,

// }
// user.hobby = "skydiving";

// user.mood = "happy";

// user.premium = false;

// for(const i of Object.keys(user)){
//     
// console.log(`${i}: ${user[user]}`)
// }

// завдання 2
// const countProps = object => Object.keys(object);




// завдання 4

// function countTotalSalary(employees){

//     let totalSalary = 0

//     for(const worker in workerss){
//         totalSalary += workerss[worker]
//     }
//     return totalSalary;
// }
// const employee = {
//     Jon: 1000,

//     Alina: 1500,

//     Max: 1200,

//     Nastya: 2000
//   };

//   console.log(countTotalSalary(employee));



// завдання 5

function getAllPropValues(arr, prop) {

  const Values = [];

  for (const object of arr) {

  console.log(object[prop]);

    
  }
  return Values;
}

const watter = [
  { name: "Morshynska", price: 23 },
  { name: "Morshynska", price: 23 },
  { name: "Morshynska", price: 23 },
  { name: "Morshynska", price: 23 },
];

console.log(getAllPropValues(watter, `price`));


// завдання6

//  function calculateTotalPrice(allProdcuts, productName){
//         let Price = 0;

//         for(const product of allProdcuts){
        
//             if(product.name === productName){

//                 Price = product.price * product.sprat;
//             }
//         }
//         return Price;
//     }
    
//     const products = [
//         { name: 'watter', price: 23, sprat: 10 },
//         { name: 'banana', price: 48, sprat: 2  },
//         { name: 'pasta', price: 74, sprat: 3  },
//         { name: 'cheese', price: 125, sprat: 4  }
//       ];
    
//     console.log(calculateTotalPrice(products, 'cheese'));
//     console.log(calculateTotalPrice(products, 'watter'));
//     console.log(calculateTotalPrice(products, 'banana'));
//     console.log(calculateTotalPrice(products, 'pasta'));