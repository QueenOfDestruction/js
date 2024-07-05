let date1 =new Date("2024-01-23T14:23-02-05:00");
console.log(`Date 1:${date1}`);

console.log(`Calendar Date: ${date1.toDateString}`);

console.log(`Locale en-Us:${date1.toLocaleDateString}('en-Us')`);
console.log(`Locale en-GB:${date1.toLocaleDateString}('en-GB')`);
console.log(`Locale ja-JA:${date1.toLocaleDateString}('ja-JA')`);

console.log(`Date Time:${date1.toLocaleDateString()}`);

console.log(`Locale en-US: ${date1.toLocaleTimeString}('en-US')`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString}('en-GB')`);
console.log(`Locale ja-JA: ${date1.toLocaleTimeString}('ja-JA')`);
let Options = {
    dataStyle: "short",
    timestyle: "short"
};
console.log(`custom Date ${date1.toLocaleString('en-US', Options)}`);
console.log(`custom Date ${date1.toLocaleString('ar-KW', Options)}`);
console.log(`custom Date ${date1.toLocaleString('ja-JA', Options)}`);

