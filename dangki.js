
// Bat loi nhap ho ten
// bieu thuc chinh quy
function checkName(value) {
  value = value.trim(); // bo khoang trang o 2 dau
  const nameError = document.getElementById('name-error');
  let regex = /^[a-zA-Z ]{2,30}$/; // bieu thuc chinh quy
  let check = regex.test(value); // cuc ki quan trong
  if (check == true) {
    nameError.innerText = '';
  } else {
    nameError.innerText = '* Ho ten khong hop le';
    nameError.style.color = 'red';
    nameError.style.fontSize = '15px';
    nameError.style.fontStyle = 'italic';
  }

}



//Bat loi tuoi
function checkAge(value) {
  value = value.trim(); // bo khoang trang o 2 dau
  const ageError = document.getElementById('age-error');
  let regex = /^1[8-9]$|^[2-9][0-9]$|^[100]$/; // bieu thuc chinh quy
  let check = regex.test(value); // cuc ki quan trong
  if (check == true) {
    ageError.innerText = '';
  } else {
    ageError.innerText = '* Tuoi khong hop le';
    ageError.style.color = 'red';
    ageError.style.fontSize = '15px';
    ageError.style.fontStyle = 'italic';
  }
}

// bat loi dia chi
function checkAddress(value) {
  value = value.trim(); // bo khoang trang o 2 dau
  const AddressError = document.getElementById('address-error');
  let regex = /^[a-zA-Z ]{2,30}$/; // bieu thuc chinh quy
  let check = regex.test(value); // cuc ki quan trong
  if (check == true) {
    AddressError.innerText = '';
  } else {
    AddressError.innerText = '* Dia chi khong hop le';
    AddressError.style.color = 'red';
    AddressError.style.fontSize = '15px';
    AddressError.style.fontStyle = 'italic';
  }
}

//bat loi sdt

function checkNumber(value) {
  value = value.trim(); // bo khoang trang o 2 dau
  const NumberError = document.getElementById('number-error');
  let regex = /((09|03|07|08|05)+([0-9]{8})\b)/g; // bieu thuc chinh quy
  let check = regex.test(value); // cuc ki quan trong
  if (check == true) {
    NumberError.innerText = '';
  } else {
    NumberError.innerText = '* So dien thoai khong hop le';
    NumberError.style.color = 'red';
    NumberError.style.fontSize = '15px';
    NumberError.style.fontStyle = 'italic';
  }

}

function checkEmail(value) {
  value = value.trim(); // bo khoang trang o 2 dau
  const EmailError = document.getElementById('email-error');
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/; // bieu thuc chinh quy
  let check = regex.test(value); // cuc ki quan trong
  if (check == true) {
    EmailError.innerText = '';
  } else {
    EmailError.innerText = '* Email khong hop le';
    EmailError.style.color = 'red';
    EmailError.style.fontSize = '15px';
    EmailError.style.fontStyle = 'italic';
  }

}