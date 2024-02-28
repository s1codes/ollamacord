const { Client, Events, GatewayIntentBits } = require("discord.js");
const {model, token, channel_id, api} = require("./config.json");

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


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
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