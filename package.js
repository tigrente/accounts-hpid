Package.describe({
    name: 'tigrente:accounts-hpid',
    summary: 'Login service for HP-ID accounts',
    documentation: 'README.md',
    git: 'https://github.com/tigrente/accounts-hpid',
    version: '1.0.0',
});

Package.onUse(api => {
    api.use('ecmascript');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);

    api.use('accounts-oauth', ['client', 'server']);
    api.use('tigrente:hpid-oauth');
    api.imply('tigrente:hpid-oauth');

    api.use(
        ['accounts-ui', 'tigrente:hpid-config-ui'],
        ['client', 'server'],
        { weak: true }
    );
    api.addFiles('notice.js');
    api.addFiles('hpid.js');
});