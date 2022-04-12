const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const buttonPurchase = document.querySelector('.countries-description__button');
const modalTrip = document.querySelector('#modal-show');
const modalTripclose = document.querySelector('.modal-trip__close');
const priceButton = document.querySelectorAll('.price__button');

const tabList = document.querySelectorAll('.description__tabs-link');

const tabCountry = document.querySelectorAll('.countries-description__item');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

for (let i = 0; i < buttonPurchase.length; i++) {
  buttonPurchase[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      modalTrip.classList.add('modal-trip--show');
  });
}

modalTripclose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalTrip.classList.remove('modal-trip--show');
});

for (let i = 0; i < priceButton.length; i++) {
  priceButton[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      modalTrip.classList.add('modal-trip--show');
  });
}


for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    const tabId = evt.target.getAttribute('data-id');
    for (let i = 0; i < tabCountry.length; i++) {
      tabCountry[i].classList.remove('countries-description__item--active');
    }
    for (let i = 0; i < tabList.length; i++) {
      tabList[i].classList.remove('description__tabs-link--active');
    }
    document.getElementById(tabId).classList.add('countries-description__item--active')
    evt.target.classList.add('description__tabs-link--active')
  });
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

buttonPurchase.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalTrip.classList.add('modal-trip--show');
});

modalTripclose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalTrip.classList.remove('modal-trip--show');
});

for (let i = 0; i < priceButton.length; i++) {
  priceButton[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      modalTrip.classList.add('modal-trip--show');
  });
}
/*
console.log(tabList.length)
for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    const tabId = evt.target.getAttribute('data-id');
    for (let i = 0; i < tabCountry.length; i++) {
      tabList[i].classList.remove('countries-description__item--active');
    }
    for (let i = 0; i < tabList.length; i++) {
      tabList[i].classList.remove('description__tabs-link--active');
    }
    console.log(tabId)
    console.log(document.getElementById(tabId))
    document.getElementById(tabId).classList.add('countries-description__item--active')
    evt.target.classList.add('description__tabs-link--active')

  });
}*/
