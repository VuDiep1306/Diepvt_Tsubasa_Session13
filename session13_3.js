//Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành đảo ngược các phần tử trong mảng

let str = prompt('Hãy nhập vào dãy số bất kỳ: ');
let arr = str.split('');
let arrReverse = arr.reverse();
alert(arrReverse);