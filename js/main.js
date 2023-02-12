const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

const onTagContainerclick = (evt) => {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
};

tagsContainer.addEventListener('click', onTagContainerclick);
