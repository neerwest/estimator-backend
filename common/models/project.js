'use strict';

module.exports = function(Project) {
    Project.disableRemoteMethodByName("upsert");
    Project.disableRemoteMethodByName("find");
    Project.disableRemoteMethodByName("replaceOrCreate");
    Project.disableRemoteMethodByName("create");
    Project.disableRemoteMethodByName("prototype.updateAttributes");
    Project.disableRemoteMethodByName("exists");    
    Project.disableRemoteMethodByName('prototype.__get__client');
    Project.disableRemoteMethodByName('prototype.__get__client__projects');
    Project.disableRemoteMethodByName('prototype.__create__client__projects');
    Project.disableRemoteMethodByName('prototype.__delete__client__projects');
};
