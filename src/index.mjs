// mapやfilter
const nameArr = ["附田", "康平"]

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目${name}`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "康平") {
    return name
  } else {
    return `${name}さん`
  }
})
console.log(newNameArr);