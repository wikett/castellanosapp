angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Tita menchu',
    lastText: 'The best english teacher',
    face: 'img/tita.jpg',
    cumple: '18 de Diciembre',
    direccion: 'Calle Brasil nº1, 13610, Campo de Criptana, Ciudad Real'
  }, {
    id: 1,
    name: 'Tía Ana',
    lastText: 'La jefa',
    face: 'img/ana.jpg',
    cumple: '24 de Noviembre',
    direccion: 'Plaza Pozo Hondo 29, 13610, Campo de Criptana, Ciudad Real'
  }, {
    id: 2,
    name: 'Teresa',
    lastText: 'Pelirroja mayor',
    face: 'img/teresa.jpg',
    cumple: '12 de Mayo',
    direccion: 'Avenida de Denia 45, Bloque 9-4, 10 D, 03013, Alicante'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
