let State = { wa: "haha", bia: "bibibi", que: "gaogaogao" };
let bigde = ["wa", "bia", "que"];

// console.log(
bigde
  .map(value => State => {
    return State[value];
  })
  .forEach(f => console.log(f(State)));
// );
