function calculateNetsalary(basicSalary, benefits){

    let grossSalary = basicSalary + benefits;
    console.log('Gross Salary:', grossSalary)

let taxBrackets = [
    { limit: 24000, rate: 0.1 },  // 10% for 0 - 24,000
    { limit: 8333, rate: 0.25 },  // 25% for 24,001 - 32,333
    { limit: 46667, rate: 0.3 },  // 30% for 32,334 - 79,000
    { limit: 50000, rate: 0.325 },// 32.5% for 79,001 - 129,000
    { limit: Infinity, rate: 0.35 } // 35% for 129,001 and above
];

let remainingSalary = grossSalary;
let payeTax = 0;

for (let bracket of taxBrackets) {
    if (remainingSalary > 0) {
        let taxableAmount = Math.min(remainingSalary, bracket.limit);
        payeTax += taxableAmount * bracket.rate;
        remainingSalary -= taxableAmount;
    } else {
        break;
    }
}




function calculateNHIF(grossSalary) {
    let nhifRates = [
        { limit: 5999, deduction: 150 },
        { limit: 7999, deduction: 300 },
        { limit: 11999, deduction: 400 },
        { limit: 14999, deduction: 500 },
        { limit: 19999, deduction: 600 },
        { limit: 24999, deduction: 750 },
        { limit: 29999, deduction: 850 },
        { limit: 34999, deduction: 900 },
        { limit: 39999, deduction: 950 },
        { limit: 44999, deduction: 1000 },
        { limit: 49999, deduction: 1100 },
        { limit: 59999, deduction: 1200 },
        { limit: 69999, deduction: 1300 },
        { limit: 79999, deduction: 1400 },
        { limit: 89999, deduction: 1500 },
        { limit: 99999, deduction: 1600 },
        { limit: Infinity, deduction: 1700 }
    ];

    for (let rate of nhifRates) {
        if (grossSalary <= rate.limit) {
            return rate.deduction;
        }
    }
}
let nhifDeduction = calculateNHIF(grossSalary);

// NSSF Deduction (6% of Gross Salary, capped at 2,160)
let nssfDeduction = Math.min(grossSalary * 0.06, 2160);

// Net Salary Calculation
let netSalary = grossSalary - (payeTax + nhifDeduction + nssfDeduction);

console.log("Gross Salary:", grossSalary);
console.log("PAYE Tax:", payeTax);
console.log("NHIF Deduction:", nhifDeduction);
console.log("NSSF Deduction:", nssfDeduction);
console.log("Net Salary:", netSalary);
}
// Example Test
calculateNetsalary(50000, 10000);
