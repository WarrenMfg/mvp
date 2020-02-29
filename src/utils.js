require('regenerator-runtime');

const uniqueIds = function*() {
  let id = 0;
  while (true) {
    yield id++;
  }
};

const newId = uniqueIds();

module.exports = {
  newId
};
