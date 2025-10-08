// Bài toán yêu cầu khai báo mảng số nguyên 10 đến 20 phần tử ngẫu nhiên, thực hiện:
// Tính tổng các số lẻ và hiển thị ra màn hình bằng alert()
// Tính tổng các số chẵn và hiển thị ra màn hình alert()

const n = Math.floor(Math.random() * 11) + 10; // số phần tử ngẫu nhiên từ 10 đến 20
const numbers = [];

for (let i = 0; i < n; i++) {
  numbers.push(Math.floor(Math.random() * 101)); // số từ 0 đến 100
}

console.log("Mảng:", numbers);

let sumOdd = 0;
let sumEven = 0;
for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] % 2 === 0) {
    sumEven += numbers[j]; // số chẵn
  } else {
    sumOdd += numbers[j];  // số lẻ
  }
}
alert("Tổng các số lẻ là: " + sumOdd);
alert("Tổng các số chẵn là: " + sumEven);