//Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng
//  và thực hiện in ra màn hình bằng alert()
let str = prompt('Hãy nhập vào dãy số bất kỳ: ');
let arr = str.split(" ");
let max = Number(arr[0]);
for (let i = 1; i < arr.length; i++) {
     if (max < Number(arr[i])) {
        max = Number(arr[i]);
     }
}
alert("Giá trị lớn nhất là: " + max);