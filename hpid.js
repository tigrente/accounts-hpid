Accounts.oauth.registerService('hpid');

if (Meteor.isClient) {
    const loginWithHpid = (options, callback) => {
        // support a callback without options
        if (! callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Hpid.requestCredential(options, credentialRequestCompleteCallback);
    };
    Accounts.registerClientLoginFunction('hpid', loginWithHpid);
    Meteor.loginWithHpid =
        (...args) => Accounts.applyLoginFunction('hpid', args);
} else {
    Accounts.addAutopublishFields({
        // not sure whether the hpid api can be used from the browser,
        // thus not sure if we should be sending access tokens; but we do it
        // for all other oauth2 providers, and it may come in handy.
        forLoggedInUser: ['services.hpid', ],
        forOtherUsers: ['services.hpid.username']
    });
}