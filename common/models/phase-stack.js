'use strict';

module.exports = function(Phasestack) {
    Phasestack.updateArray = function(data, cb) {

        data.forEach( elem => {
            Phasestack.upsert(elem);
        });

        cb(null, 'All data was updated!');
    }
};
