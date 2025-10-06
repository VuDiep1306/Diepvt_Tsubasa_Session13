//Thực hiện tạo mảng và sử dụng các phương thức 
// thêm phần tử vào mảng các phần tử ngẫu nhiên 
// làm sao cho mảng đủ 10 phần tử, sau đó hiển thị mảng ra màn hình

const numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log(numbers);