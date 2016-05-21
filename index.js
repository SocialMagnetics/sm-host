'use strict';

const startService = require('../sm-remoting').service;

//const service = require('../sm-services/services/hello-world');
const service = require('../sm-services/services/machine');
 
startService(service);
