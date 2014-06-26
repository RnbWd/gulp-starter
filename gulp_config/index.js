var index = {};

module.exports = index;

index.assets = require('./assets'); 
index.build = require('./build'); 
index.bundler = require('./bundler'); 
index.component = require('./component'); 
index.indexer = require('./indexer'); 
index.server = require('./server');  
index.doge = require('../doge_config/doge.js');

