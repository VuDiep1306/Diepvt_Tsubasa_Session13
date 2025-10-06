//Tạo mảng có sẵn với các phần tử số. 
// Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
//Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
//Nếu số đó không có trong mảng cho sẵn thì alert(“Chúc bạn may mắn lần sau”)
 let arr = [1, 2, 3, 6, 5, 11, 30, 41, 55, 63, 71]; 
 let number = Number(prompt("Mời nhập số bất kỳ:"));
 let random = false;
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
        random = true;
    }
 }
 if (random) {
        alert ("Bingo");
  } else {
        alert ("Chúc bạn may mắn lần sau");
    }
 