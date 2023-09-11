var markWeight1 = 78; // Khối lượng của Mark (kg)
var markHeight1 = 1.69; // Chiều cao của Mark (m)

var johnWeight1 = 92; // Khối lượng của John (kg)
var johnHeight1 = 1.95; // Chiều cao của John (m)

// Dữ liệu 2
var markWeight2 = 95; // Khối lượng của Mark (kg)
var markHeight2 = 1.88; // Chiều cao của Mark (m)

var johnWeight2 = 85; // Khối lượng của John (kg)
var johnHeight2 = 1.76; // Chiều cao của John (m)

// Tính chỉ số BMI cho cả Mark và John cho Dữ liệu 1
var markBMI1 = markWeight1 / (markHeight1 * markHeight1);
var johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// Tính chỉ số BMI cho cả Mark và John cho Dữ liệu 2
var markBMI2 = markWeight2 / (markHeight2 * markHeight2);
var johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// So sánh chỉ số BMI và tạo thông điệp
var message1 = `Mark BMI (${markBMI1.toFixed(1)}) `;
var message2 = `John BMI (${johnBMI1.toFixed(1)}) `;
var message3 = `Mark BMI (${markBMI2.toFixed(1)}) `;
var message4 = `John BMI (${johnBMI2.toFixed(1)}) `;

if (markBMI1 > johnBMI1) {
    message1 += "cao hơn John!";
    message2 += "thấp hơn Mark!";
} else if (markBMI1 < johnBMI1) {
    message1 += "thấp hơn John!";
    message2 += "cao hơn Mark!";
} else {
    message1 += "bằng John!";
    message2 += "bằng Mark!";
}

if (markBMI2 > johnBMI2) {
    message3 += "cao hơn John!";
    message4 += "thấp hơn Mark!";
} else if (markBMI2 < johnBMI2) {
    message3 += "thấp hơn John!";
    message4 += "cao hơn Mark!";
} else {
    message3 += "bằng John!";
    message4 += "bằng Mark!";
}

// In kết quả ra bảng điều khiển
console.log("Dữ liệu 1:");
console.log(`${message1}`);
console.log(`${message2}`);

console.log("\nDữ liệu 2:");
console.log(`${message3}`);
console.log(`${message4}`);