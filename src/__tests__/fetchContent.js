const $ = require('jquery');

function parseJSON(item) {
  return {
    fullName: item.fullName,
  };
}

function fetchContent(callback) {
  return $.ajax({
    success: item => callback(parseJSON(item)),
    type: 'GET',
    url: 'https://www.healthcare.gov/api/topics.json',
  });
}

module.exports = fetchContent;
