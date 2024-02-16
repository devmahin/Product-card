let totalPrice = 0;
const allcard = document.querySelectorAll(".card-all");
for (let i = 0; i < allcard.length; i++) {
    let card = allcard[i]
    card.addEventListener("click", function (e) {
        // title
        let title = card.querySelector("h2").innerText;
        titleContainer(title);
        // price
        let price = card.querySelector("p").innerText;
        totalPrices(price);

        // coupon?
        couponFun()
    })
}

function couponFun() {
    const buttonCopoun = document.querySelector(".buttonCopoun");
    // let inputValueLow = inputValue
    if (totalPrice >= 200) {
        buttonCopoun.removeAttribute("disabled")
        buttonCopoun.classList.remove("disabled:opacity-75")
        buttonCopoun.classList.add("bg-[#E527B2]", "cursor-pointer");
        buttonCopoun.addEventListener("click", function (e) {
            const inputValueTag = document.querySelector(".input-coupon");
            let value = inputValueTag.value;
            let inputValue = value.split(" ").join("").toUpperCase()
            // console.log(inputValue)
            const copounCode = document.querySelector(".copounCode").innerText;
            const dicount = document.querySelector(".dicount");
            const payment = document.querySelector(".payment")

            if (inputValue === copounCode) {
                let dis = totalPrice * 20 / 100;
                dicount.innerText = dis;
                payment.innerText = totalPrice - dis;
                inputValueTag.value = "";
            }else{
                alert("Copoun code is not match")
            }

        })


    }



}


function titleContainer(titelValue) {
    let title = document.querySelector(".title-container");

    let li = document.createElement("li");
    li.innerText = titelValue;
    title.appendChild(li)
}

function totalPrices(productPrice) {
    let totalPriceDiv = document.querySelector(".totalPrice");
    let totalDaynamicValue = parseFloat(productPrice);
    // console.log(totalDaynamicValue)
    let price = totalPrice += totalDaynamicValue;
    totalPriceDiv.innerText = price.toFixed(2)

}