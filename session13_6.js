//Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử, 
// thực hiện nhập vào một số nguyên để kiểm tra (k),
//  thực hiện đếm số lần xuất hiện của k trong mảng. 
// và hiển thị ra màn hình

const n = Math.floor(Math.random() * 11) + 10;
const numbers = [];

for (let i = 0; i < n; i++) {
  numbers.push(Math.floor(Math.random() * 51)); // giá trị 0–50
}

console.log("Mảng ban đầu:", numbers);


const k = parseInt(prompt("Nhập vào một số nguyên cần kiểm tra:"), 10);


let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === k) {
    count++;
  }
}

alert("Số " + k + " xuất hiện " + count + " lần trong mảng.");
