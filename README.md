# Ollamacord
Ollamacord is a Discord bot that uses Ollama to generate responses and replies to the user in Discord!. 

## Setup

1. clone our project with 

```bash
git clone --depth 1 https://github.com/s1codes/ollamacord 
\ cd ollamacord
```

2. install dependencies
```bash
npm install
``` 

3. Edit config.json and add the required inforamtion:

`model`: Provide which ollama model to use that you have already installed

`api`: Usually you dont have to edit this if you are running this app on the same device where you also installed Ollama. If you have hosted Ollama in a server and configured it there, You may need to change this accordingly

`token`: Create an Application in [Discord Developer Portal](https://discord.com/developers), Then go to the **Bot** section and click *Reset Token* and then copy the new token and paste it in the value section. Also dont forget to invite it to your Discord Server

`channel_id`: Copy the channel id in your discord guild by enabling Developer Mode, Go to User Settings click the gear icon, Then Under App settings > click Advanced and toggle *Developer Mode*. Then go to your discord server, Create a channel for the bot and right click the created channel and copy id. Then paste it in the value

And last but not the least run 
```bash 
node .
``` 
in your terminal again to run the bot!


The bot should come online. Start talking with it in the channel you created for the bot!
