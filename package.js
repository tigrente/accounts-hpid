Package.describe({
    summary: 'Login service for HP-ID accounts',
    version: '0.0.9',
});

Package.onUse(api => {
    api.use('ecmascript');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);

    api.use('accounts-oauth', ['client', 'server']);
    api.use('hpid-oauth');
    api.imply('hpid-oauth');

    api.use(
        ['accounts-ui', 'hpid-config-ui'],
        ['client', 'server'],
        { weak: true }
    );
    api.addFiles('notice.js');
    api.addFiles('hpid.js');
});