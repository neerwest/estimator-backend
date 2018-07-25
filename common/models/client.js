'use strict';

module.exports = function(Client) {

    Client.disableRemoteMethodByName("upsert");
    Client.disableRemoteMethodByName("find");
    Client.disableRemoteMethodByName("replaceOrCreate");
    Client.disableRemoteMethodByName("prototype.updateAttributes");
    Client.disableRemoteMethodByName("exists");
    Client.disableRemoteMethodByName('prototype.__get__accessTokens');
    Client.disableRemoteMethodByName('prototype.__create__accessTokens');
    Client.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Client.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Client.disableRemoteMethodByName('prototype.__updateById__accessTokens');
    Client.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Client.disableRemoteMethodByName('prototype.__count__accessTokens');
    Client.disableRemoteMethodByName('prototype.__findById__projects');
    Client.disableRemoteMethodByName('prototype.__updateById__projects');
    Client.disableRemoteMethodByName('prototype.__destroyById__projects');
    Client.disableRemoteMethodByName('prototype.__count__projects');
    Client.disableRemoteMethodByName("prototype.verify");
    Client.disableRemoteMethodByName("changePassword");
    Client.disableRemoteMethodByName("createChangeStream");
    Client.disableRemoteMethodByName("confirm");
    Client.disableRemoteMethodByName("count");
    Client.disableRemoteMethodByName("findOne");
    Client.disableRemoteMethodByName("resetPassword");
    Client.disableRemoteMethodByName("update");
    Client.disableRemoteMethodByName("upsertWithWhere"); 

};
