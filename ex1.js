// Data 1
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // meters

const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Tính chỉ số BMI
const markBMI1 = markWeight1 / (markHeight1 ** 2);
const johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// So sánh chỉ số BMI
const markHigherBMI1 = markBMI1 > johnBMI1;

// Data 2
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // meters

const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Tính chỉ số BMI
const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// So sánh chỉ số BMI
const markHigherBMI2 = markBMI2 > johnBMI2;

// In kết quả
console.log("Dữ liệu 1:");
console.log(`BMI của Mark: ${markBMI1.toFixed(2)}`);
console.log(`BMI của John: ${johnBMI1.toFixed(2)}`);
console.log(`Mark có chỉ số BMI cao hơn John trong Dữ liệu 1 không? ${markHigherBMI1}`);

console.log("\nDữ liệu 2:");
console.log(`BMI của Mark: ${markBMI2.toFixed(2)}`);
console.log(`BMI của John: ${johnBMI2.toFixed(2)}`);
console.log(`Mark có chỉ số BMI cao hơn John trong Dữ liệu 2 không? ${markHigherBMI2}`);