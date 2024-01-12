const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const listItemsMarkup = createListItemsMarkup(tech);
refs.list.innerHTML = listItemsMarkup;
function createListItemsMarkup(list) {
  return list.map(item => `<li>${item.label}</li>`).join('');
}

refs.input.addEventListener('input', _.debounce(onFilterInput, 300));

function onFilterInput(e) {
  const filter = e.target.value.toLowerCase();
  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  refs.list.innerHTML = createListItemsMarkup(filteredItems);
}
