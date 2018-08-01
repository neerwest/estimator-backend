'use strict';

module.exports = function(Team) {

    //Team.disableRemoteMethodByName("upsert");
    T//eam.disableRemoteMethodByName("find");
    Team.disableRemoteMethodByName("replaceOrCreate");
    //Team.disableRemoteMethodByName("create");
    //Team.disableRemoteMethodByName("prototype.updateAttributes");
    Team.disableRemoteMethodByName("exists");
    Team.disableRemoteMethodByName('prototype.__get__component');
    Team.disableRemoteMethodByName('prototype.__get__component__teams');
    Team.disableRemoteMethodByName('prototype.__create__component__teams');
    Team.disableRemoteMethodByName('prototype.__delete__component__teams');
    Team.disableRemoteMethodByName('prototype.__findById__component__teams');
    Team.disableRemoteMethodByName('prototype.__updateById__component__teams');
    Team.disableRemoteMethodByName('prototype.__destroyById__component__teams');
    Team.disableRemoteMethodByName('prototype.__get__project');
    Team.disableRemoteMethodByName('prototype.__get__project__teams');
    Team.disableRemoteMethodByName('prototype.__create__project__teams');
    Team.disableRemoteMethodByName('prototype.__delete__project__teams');
    Team.disableRemoteMethodByName('prototype.__findById__project__teams');
    Team.disableRemoteMethodByName('prototype.__updateById__project__teams');
    Team.disableRemoteMethodByName('prototype.__destroyById__project__teams');
    Team.disableRemoteMethodByName("createChangeStream");
    Team.disableRemoteMethodByName("count");
    Team.disableRemoteMethodByName("findOne");
    //Team.disableRemoteMethodByName("update");
    Team.disableRemoteMethodByName("upsertWithWhere");

};
