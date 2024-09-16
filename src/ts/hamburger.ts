const BtnElement = document.querySelector('.humb_btn');
const menu = document.querySelector('.navbar');

BtnElement?.addEventListener('click', toggleActiveMenu);
document?.addEventListener('click', handleClickOutsideMenu);

function toggleActiveMenu() {
  BtnElement?.classList.toggle('active');
  menu?.classList.toggle('active');
};

function closeMenu() {
  menu?.classList.remove('active');
};

function handleClickOutsideMenu(e: Event) {
  const targetElem = e.target as HTMLElement;
  if (BtnElement?.contains(targetElem) ) {
    return;
  }
  if (menu?.classList.contains('active') && !menu.contains(targetElem)) {
    closeMenu();
  }
}
