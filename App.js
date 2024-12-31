let shirt = 0;
let Pant = 0;
let Shoes = 0;
let Belt = 0;
let Glasses = 0;
let arr = [];

let count = 0;
function store() {
    let storeitems = ["T-Shirt", "Pant", "Shoes", "Belt", "Glasses"];

    let items = document.getElementById("items");
    let useritem = items.value;


    // console.log(shirt);



    let abc = document.getElementById("gen")
    for (let i = 0; i < storeitems.length; i++) {

        if (storeitems[i] == useritem) {
            ++count

            if (useritem == "T-Shirt") {
                shirt += 500;
                // console.log(shirt);

            } else if (useritem == "Pant") {
                Pant += 400
                // console.log(Pant);
            } else if (useritem == "Shoes") {
                Shoes += 600
            } else if (useritem == "Belt") {
                Belt += 250;
            } else if (useritem == "Glasses") {
                Glasses += 300;
            }
        }
    }
    let total = shirt + Pant + Shoes + Belt + Glasses;
    if (total > 3000) {
        total -= 300
        abc.innerHTML = `You Got A 10% Discount`

    }
    // if (count == 1) {
        arr.push(useritem)
        // document.getElementById("generate").innerHTML = `You Select A ${useritem}`
    // } else if (count == 2) {
    //     // document.getElementById("generate1").innerHTML = `You Select A ${useritem}`
    // } else if (count == 3) {
    //     // document.getElementById("generate2").innerHTML = `You Select A ${useritem}`
    // } else if (count == 4) {
    //     // document.getElementById("generate3").innerHTML = `You Select A ${useritem}`
    // } else if (count == 5) {
    //     // document.getElementById("generate4").innerHTML = `You Select A ${useritem}`

    // }
// console.log(arr);

    document.getElementById("generate").innerHTML = `You Select A ${arr}`
    document.getElementById("generate1").innerHTML = `Your Total Amount is  ${total}`

}



