/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';

// library.add(faPhoneAlt);
// dont add this dom.watch();

// Toggle dropdown list
// https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

let scrollpos = window.scrollY;
const header = document.getElementById('header');
const navcontent = document.getElementById('nav-content');
const toToggle = document.querySelectorAll('.toggleColour');

document.addEventListener('scroll', function () {
  // Apply classes for slide in bar
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add('bg-white');
    // Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add('text-gray-800');
      toToggle[i].classList.remove('text-white');
    }
    header.classList.add('shadow');
    navcontent.classList.remove('bg-gray-100');
    navcontent.classList.add('bg-white');
  } else {
    header.classList.remove('bg-white');
    // Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add('text-white');
      toToggle[i].classList.remove('text-gray-800');
    }

    header.classList.remove('shadow');
    navcontent.classList.remove('bg-white');
    navcontent.classList.add('bg-gray-100');
  }
});

const navMenuDiv = document.getElementById('nav-content');
const navMenu = document.getElementById('nav-toggle');

document.onclick = check;
function check(e) {
  const target = (e && e.target) || (event && event.srcElement);

  // Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains('hidden')) {
        navMenuDiv.classList.remove('hidden');
      } else {
        navMenuDiv.classList.add('hidden');
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add('hidden');
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}
