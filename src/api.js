const BASE_URL = 'https://thinkful-list-api.herokuapp.com/james-moua';

function getItems() {
  return Promise.resolve('A successful response!');
  fetch(`${BASE URL}./items`)
  .then(items => items.json());
};

export default {
  getItems
};