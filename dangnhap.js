function checkName(value) {
   value = value.trim(); // bo khoang trang o 2 dau
   const nameError = document.getElementById('name-error');
   let regex = /^[a-zA-Z ]{2,30}$/; // bieu thuc chinh quy
   let check = regex.test(value); // cuc ki quan trong
   if (check == true) {
      nameError.innerText = '';
   } else {
      nameError.innerText = '* Tên tài khoản không hợp lệ';
      nameError.style.color = 'red';
      nameError.style.fontSize = '15px';
      nameError.style.fontStyle = 'italic';
   }

}


function checkNumber(value) {
   value = value.trim(); // bo khoang trang o 2 dau
   const NumberError = document.getElementById('number-error');
   let regex = /((09|03|07|08|05)+([0-9]{8})\b)/g; // bieu thuc chinh quy
   let check = regex.test(value); // cuc ki quan trong
   if (check == true) {
      NumberError.innerText = '';
   } else {
      NumberError.innerText = '* Mật khẩu không hợp lệ';
      NumberError.style.color = 'red';
      NumberError.style.fontSize = '15px';
      NumberError.style.fontStyle = 'italic';
   }

}