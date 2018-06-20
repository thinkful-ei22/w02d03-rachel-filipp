'use strict';

/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rachel-filipp';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    
    //callback('api module works!');
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({
      'name': name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback,
    });
  };
  const updateItem = function(id, updateData, callback) { 
    $.ajax({ 
      'url': `${BASE_URL}/items/${id}`, 
      'method': 'PATCH', 
      'contentType': 'application/json', 
      'data': JSON.stringify(updateData), 
      'success': callback, }); 
  };

  return {
    getItems, createItem, updateItem
  };
}());

