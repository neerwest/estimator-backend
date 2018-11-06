'use strict';

module.exports = function(Componentstack) {
    Componentstack.updateArray = function(data, cb) {

        data.forEach( elem => {
            Componentstack.upsert(elem);
        });

        cb(null, 'All data was updated!');
    }
};
