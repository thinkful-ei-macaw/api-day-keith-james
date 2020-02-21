import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import shoppingList from './shopping-list';
import store from './store';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();

      api.createItem(newItemName)
  .then(res => res.json())
  .then((newItem) => {
    store.addItem(newItem);
    render();
  });

      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'barbaz' });
      console.log('new name: ' + item.name);  
    });

 
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);