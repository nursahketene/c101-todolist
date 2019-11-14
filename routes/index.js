const {getDB} = require('../models/todos');

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      return h.view("index", {});
    }
  },
  {
    method: "GET",
    path: "/asset_files/{file*}",
    handler: {
      directory: {
        path: "assets/",
        listing: true
      }
    }
  }
];
