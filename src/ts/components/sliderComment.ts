const sliderElem = document.querySelector('.slider__list') as HTMLLIElement;
const sliderItems = sliderElem?.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.slider_prev-btn') as HTMLButtonElement;
const nextBtn = document.querySelector('.slider_next-btn') as HTMLButtonElement;
const sliderStatusBar = document.querySelector('.slider__status');
const statusItems = sliderStatusBar?.children;

let currentItem = 0;

nextBtn?.addEventListener('click', handleClickNext);
prevBtn?.addEventListener('click', handleClickPrev);

function handleClickNext() {
  const stepTransform = sliderItems![0].clientWidth;
  currentItem += 1;
  if (currentItem > sliderItems.length) {
    return;
  }

  if (currentItem === sliderItems.length - 1) {
    nextBtn.classList.remove('active');
    nextBtn.setAttribute('disabled', 'true');
  }

  if (currentItem > 0) {
    prevBtn.classList.add('active');
    prevBtn.removeAttribute('disabled');
  }
  handleChangeListItem(currentItem);
  sliderElem.style.transform = `translateX(-${stepTransform * currentItem}px)`;
};

function handleClickPrev() {
  const stepTransform = sliderItems![0].clientWidth;
  currentItem -= 1;

  if (currentItem === 0) {
    prevBtn.classList.remove('active');
    prevBtn.setAttribute('disabled', 'true');
    sliderElem.style.transform = `translateX(0px)`;
    handleChangeListItem(currentItem);
    return;
  }

  if (currentItem >= 0) {
    nextBtn.classList.add('active');
    nextBtn.removeAttribute('disabled');
  }

  sliderElem.style.transform = `translateX(-${stepTransform * currentItem}px)`;
  handleChangeListItem(currentItem);
}

const handleChangeListItem = (index: number) => {
  for (let i = 0; i < statusItems!.length; i += 1) {

    const statusItem = (statusItems![i] as HTMLElement);
    if (i === index) {
      statusItem.classList.add('active');
    } else {
      statusItem.classList.remove('active');
    }
  }
};