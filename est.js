const _ = require('lodash');

function Mirror(obj) {
    return _.invertObject(obj);
}
