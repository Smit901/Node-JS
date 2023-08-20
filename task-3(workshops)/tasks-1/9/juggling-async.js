const http = require('http');

const urls = process.argv.slice(2); 
const results = [];

function fetchData(url, callback) {
  http.get(url, function (response) {
    let data = '';

    response.on('data', function(chunk) {
      data += chunk;
    });

    response.on('end', function() {
      callback(null, data); 
    });

    response.on('error', function(error) {
      callback(error);
    });
  }).on('error', function(error) {
    callback(error); 
  });
}

function fetchAllData(urls, index) {
  if (index >= urls.length) {
    results.forEach(data => {
      console.log(data);
    });
    return;
  }

  fetchData(urls[index], function(error, data) {
    if (error) {
      console.error('Error:', error.message);
    } else {
      results.push(data);
    }

    fetchAllData(urls, index + 1); 
  });
}

fetchAllData(urls, 0);
