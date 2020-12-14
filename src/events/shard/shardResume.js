const { WebhookClient } = require('discord.js')
module.exports = class {
    constructor (client) {
        this.client = client;
    }
    async run (shardID, event) {
        this.client.logger.log(`Shard ${shardID+1} reconnectée, ${event} évènements rejoués.`, "shard")
        const hook = new WebhookClient(this.client.config.shardHook.id, this.client.config.shardHook.token);
        await hook.send(`Shard ${shardID+1} reconnectée, ${event} évènements rejoués.`);

    }
}