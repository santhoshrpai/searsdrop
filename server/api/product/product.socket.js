/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./product.model');

exports.register = function(socket) {
  product.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  product.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('product:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('product:remove', doc);
}