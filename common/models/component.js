'use strict';

module.exports = function(Component) {

    Component.bulkInsert = function (data, cb) {
        
        Component.create(data)

        cb(null, 'All data inserted!')
    }

    Component.updateArray = function(data, cb) {

        data.forEach( elem => {
            Component.upsert(elem);
        });

        cb(null, 'All data was updated!');
    }

};
