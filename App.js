let shirt = 0;
let Pant = 0;
let Shoes = 0;
let Belt = 0;
let Glasses = 0;

let count = 0;
function store() {
    let storeitems = ["tshirt", "pant", "shoes", "belt", "glasses"];
    let items = prompt("Enter Your Items").toLowerCase();
    let useritem = items;


    // console.log(shirt);



    for (let i = 0; i < storeitems.length; i++) {

        if (storeitems[i] == useritem) {
            ++count

            if (useritem == "tshirt") {
                shirt += 500;
                console.log(shirt);

            } else if (useritem == "pant") {
                Pant += 400
                console.log(Pant);
            } else if (useritem == "shoes") {
                Shoes += 300
            } else if (useritem == "belt") {
                Belt += 200;
            } else if (useritem == "glasses") {
                Glasses += 100;
            }
        }
    }

    let total = shirt + Pant + Shoes + Belt + Glasses;
    if (total > 3000) {
        total -= 100
    }

    if (count == 1) {
        document.getElementById("generate").innerHTML = `You Select A ${useritem}`
    } else if (count == 2) {
        document.getElementById("generate1").innerHTML = `You Select A ${useritem}`
    } else if (count == 3) {
        document.getElementById("generate2").innerHTML = `You Select A ${useritem}`
    } else if (count == 4) {
        document.getElementById("generate3").innerHTML = `You Select A ${useritem}`
    } else if (count == 5) {
        document.getElementById("generate4").innerHTML = `You Select A ${useritem}`
        
    }
    
    document.getElementById("generate5").innerHTML = `Your Total Amount is  ${total}`

}



