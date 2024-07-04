let num1 = 5.618348;

console.log(`Round${Math.round(num1)}`);
console.log(`Ceilling:${Math.ceil(num1)}`);
console.log(`Floor:${Math.floor(num1)}`);

let fixed = num1.toFixed(3);
console.log(`Fixed type: ${typeof(fixed)} Fixed Value: ${fixed}`)
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString(`en-Us`)}`);
console.log(`Greece: ${num2.toLocaleString(`el-EL`)}`);
console.log(`Bangladesh: ${num2.toLocaleString(`bg-BG`)}`);
console.log(`Punjab: ${num2.toLocaleString(`pa-PA`)}`);
let salary = 20000;
let monthlysalary = salary / 12;
console.log(`monthly salary: ${monthlysalary.toFixed(2)}`);
let formatter1 = new Intl.NumberFormat(`en-US`, { style: `currency`, currency: `USD`});
console.log(`US Dollars: ${formatter1.format(monthlysalary)}`);
let formatter2 = new Intl.NumberFormat(`de-DE`, { style: `currency`, currency: `EUR`});
console.log(`Euros: ${formatter2.format(monthlysalary)}`);
let formatter3 = new Intl.NumberFormat(`ja-JA`, { style: `currency`, currency: `JPY`});
console.log(`Yen: ${formatter3.format(monthlysalary)}`);
let formatter4 = new Intl.NumberFormat(`zh-HK`, { style: `currency`, currency: `HKD`});
console.log(`Hong Kong Dollars: ${formatter4.format(monthlysalary)}`);``