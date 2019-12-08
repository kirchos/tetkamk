// Dom Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Прикажи време
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // ам или пм
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12ч формат
  hour = hour % 12 || 12;

  //прикажи време
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// додај 0
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// позадина и поздрав
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //утро
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = 'Добро Утро';
  } else if (hour < 18) {
    //Попладне
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = 'Добар ден';
  } else {
    //Вечер
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = 'Добра Вечер';
    document.body.style.color = '#fff';
  }
}

// семи име
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = 'Име?';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//постави име
function setName(e) {
  if (e.type === 'keypress') {
    // Enter е притиснат
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// фокус
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = 'План';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//постави фокус
function setFocus(e) {
  if (e.type === 'keypress') {
    // Enter е притиснат
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
