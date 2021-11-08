/**
 * Created by arobert on 06/11/21.
 */

const path = require('path');
const express = require('express');

class Clipboard {
  constructor() {
    this.app = express();
    this.app.use(express.static(path.join(__dirname, '../clipboard/build')));

    // If there the file is not found, redirect to home page
    this.app.get('*', function (req, res) {
      res.redirect('/');
    });
  }

  start() {
    const port = process.env.PORT || 8080;

    this.app.listen(port, function () {
      console.log(`Server running on ${port}...`);
    });
  }
}

let clipboard = new Clipboard();
clipboard.start();
