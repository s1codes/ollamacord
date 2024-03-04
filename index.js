const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");
const {api, channel_id, model, token} = require("./config.json");
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();


const status = "your chats";
const status_type = "WATCHING";

if (model === "") {
    new Error("You need to provide which Ollama model to use")
}
if (token === "") {
    new Error("You need to provide your Bot Token")
}
if (channel_id === "") {
    new Error("You need to provide your channel id")
}
if (api === "") {
    new Error("You need to provide your API link")
}




const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences] });
client.on('ready', () => {
    client.user.setPresence({ activities: [{ name: 'Your Chats!', type: ActivityType.Watching }], status: 'dnd' });
    db.run("CREATE TABLE IF NOT EXISTS convo (username TEXT, data TEXT)");
    console.log(`Bot online! User: ${client.user.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;

    try {
        if (message.channel.id != channel_id) return;

        let response = await fetch(api,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": model,
                    "prompt": message.cleanContent,
                    "stream": false
                })
            });

        const data = await response.json();

        if (data.response != null || data.response != "") {
            message.reply(data.response);
        }

    } catch {
        console.error("PRX Something went wrong");
    }
});



client.login(token);
