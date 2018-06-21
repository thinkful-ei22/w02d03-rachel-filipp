'use strict';

/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rachel-filipp';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    
    //callback('api module works!');
  };

  const createItem = function(name, callback, errCallback) {
    const newItem = JSON.stringify({
      'name': name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback,
      'error': errCallback,
    });
  };
  const updateItem = function(id, updateData, callback, errCallback) { 
    console.log(updateData)
    $.ajax({ 
      'url': `${BASE_URL}/items/${id}`, 
      'method': 'PATCH', 
      'contentType': 'application/json', 
      'data': JSON.stringify(updateData), 
      'success': callback, 
      'error': errCallback,
    }); 
  };

  const deleteItem = function(id, callback, errCallback){
    $.ajax({
      'url': `${BASE_URL}/items/${id}`, 
      'method': 'DELETE',
      'success': callback,
      'error': errCallback,
    });
  };
  

  return {
    getItems, createItem, updateItem, deleteItem
  };
}());
