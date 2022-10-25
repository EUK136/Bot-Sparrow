const { Client, Collection, GatewayIntentBits, Routes } = require('discord.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageReactions] })
client.rest.setToken(process.env.DISCORD_TOKEN)

client.once('ready', () => {
	console.log('Bot levantado')
})