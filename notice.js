if (Package['accounts-ui']
    && !Package['service-configuration']
    && !Object.prototype.hasOwnProperty.call(Package, 'hpid-config-ui')) {
    console.warn(
        "Note: You're using accounts-ui and accounts-hpid,\n" +
        "but didn't install the configuration UI for the HP-ID\n" +
        "OAuth. You can install it with:\n" +
        "\n" +
        "    meteor add hpid-config-ui" +
        "\n"
    );
}