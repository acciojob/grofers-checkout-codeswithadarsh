const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.getElementsByTagName("table")[0];

const getSum = () => {
    let sum = 0;
    let priceArr = document.querySelectorAll(".price");

    priceArr.forEach((singleEle) => {
        sum += Number(singleEle.innerText);
    })

    let totalTR = document.createElement("tr");
    totalTR.setAttribute("id", "ans");
    totalTR.innerText = sum;

    table.appendChild(totalTR);
};

getSumBtn.addEventListener("click", getSum);