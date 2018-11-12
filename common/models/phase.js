'use strict';

module.exports = function(Phase) {

    Phase.afterRemote('deleteById', function(ctx, modelInstance, next) {
        var phaseId = ctx.args.id;
        var app = Phase.app;
        var PhaseStack = app.models.PhaseStack;

        PhaseStack.find({where: {phaseId: phaseId} }, function  (err, models) {

            models.forEach( elem => {
                PhaseStack.destroyById(elem.id, function(mod){ console.log(mod) });
            });

        });

        next();
    });

};
