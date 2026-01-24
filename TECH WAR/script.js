// Range inputs
const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const time = document.getElementById("time");

// Right side text
const rightParas = document.querySelectorAll(".right p");
const principalText = rightParas[0];
const interestText = rightParas[1];
const emiText = rightParas[2];

const totalAmountText = document.querySelector(".circle h3:nth-child(3)");

// Range setup
amount.min = 20000;
amount.max = 1000000;
amount.step = 1000;
amount.value = 20000;

rate.min = 1;
rate.max = 20;
rate.step = 0.1;
rate.value = 10;

time.min = 1;
time.max = 30;
time.step = 1;
time.value = 5;

// EMI Function
function calculateEMI() {
    let P = Number(amount.value);
    let R = Number(rate.value) / 12 / 100;
    let N = Number(time.value) * 12;

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    EMI = Math.round(EMI);

    let totalPayment = EMI * N;
    let interestPayable = totalPayment - P;

    // Update UI
    principalText.innerText = `Principal Amount: ₹${P.toLocaleString()}`;
    interestText.innerText = `Interest Payable: ₹${interestPayable.toLocaleString()}`;
    emiText.innerText = `⏹️ Monthly EMI: ₹${EMI.toLocaleString()}`;
    totalAmountText.innerText = `₹${totalPayment.toLocaleString()}`;
}

// Events
amount.addEventListener("input", calculateEMI);
rate.addEventListener("input", calculateEMI);
time.addEventListener("input", calculateEMI);

// Initial call
calculateEMI();
