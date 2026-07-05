require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot is alive!');
});

app.listen(port, () => {
    console.log(`Keep-alive server listening at http://localhost:${port}`);
});

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds] 
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot ping: ${client.ws.ping}ms`);
});

// To ping the API explicitly we can just output the websocket ping from discord.js
client.login(process.env.DISCORD_TOKEN);
