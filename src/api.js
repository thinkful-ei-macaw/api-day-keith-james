const BASE_URL = 'https://thinkful-list-api.herokuapp.com/james-moua';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};

function updateItem(id, updateData) {
  fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'applicaton/json'
    },
    body: JSON.stringify(updateData)
  });
}


export default {
  getItems,
  createItem
};