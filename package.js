//todo: Add testing components

Package.describe({
    name: 'tigrente:accounts-hpid',
    summary: 'Login service for HP-ID accounts',
    documentation: 'README.md',
    git: 'https://github.com/tigrente/accounts-hpid',
    version: '0.1.0',
});

Package.onUse(api => {
    api.use('ecmascript@0.1.2');
    api.use('accounts-base@1.4.3', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);

    api.use('accounts-oauth@1.1.16', ['client', 'server']);
    api.use('tigrente:hpid-oauth@0.1.0');
    api.imply('tigrente:hpid-oauth');

    api.use(
        ['accounts-ui@1.3.1', 'tigrente:hpid-config-ui@0.0.3'],
        ['client', 'server'],
        { weak: true }
    );
    api.addFiles('notice.js');
    api.addFiles('hpid.js');
});