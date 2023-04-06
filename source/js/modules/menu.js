const initMenu = () => {

  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    if (body.classList.contains('no-js')) {
      body.classList.remove('no-js');
    }

    let navMain = document.querySelector('.site-navigation');
    let navToggle = document.querySelector('.site-navigation__toggle');

    navMain.classList.add('site-navigation--closed');

    navMain.classList.remove('site-navigation--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('site-navigation--closed')) {
        navMain.classList.remove('site-navigation--closed');
        navMain.classList.add('site-navigation--opened');
      } else {
        navMain.classList.add('site-navigation--closed');
        navMain.classList.remove('site-navigation--opened');
      }
    });
  });
};

export {initMenu};
