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

    Component.afterRemote('replaceById', function(ctx, modelInstance, next) {

        var app = Component.app;
        var csResult = [];
        var ComponentStack = app.models.ComponentStack;

        ComponentStack.find({where: {componentId: ctx.args.id} }, function  (err, models) {

            csResult = models;

            csResult.forEach(function (item) {
                item.name = ctx.args.data.name;
            })

            csResult.forEach( elem => {
                ComponentStack.upsert(elem);
            });

        });

        next();
    });

    Component.afterRemote('deleteById', function(ctx, modelInstance, next) {
        var componentId = ctx.args.id;
        var app = Component.app;
        var ComponentStack = app.models.ComponentStack;

        ComponentStack.find({where: {componentId: componentId} }, function  (err, models) {

            models.forEach( elem => {
                ComponentStack.destroyById(elem.id, function(mod){ console.log(mod) });
            });

        });

        next();
    });

};
