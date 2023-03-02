const fs = require("fs");
const Discord = require("discord.js");
const { prefix } = require("./config/rules.json");

require("dotenv").config();

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

console.log("Token em uso --> " + process.env.DISCORD_TOKEN);

const commandFolders = fs.readdirSync("./src/commands/");

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./src/commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
		console.log("---------------------------------------------------------");
		console.log(`Arquivo ${command.name} da pasta ${folder} carregado ✅`);
		console.log("----------------------------------------------------------");
	}
}
const sleep = require("system-sleep");
sleep(1 * 100);
console.clear();

client.once("ready", () => {
	const ascii = require("figlet");

	ascii.text(
		"Ready!",
		{
			font: "Ghost",
			horizontalLayout: "default",
			verticalLayout: "default",
			width: 80,
			whitespaceBreak: true,
		},
		function (err, data) {
			if (err) {
				console.log("Algo deu errado...");
				console.Console(err);
				return;
			} else {
				console.log(data);
			}
		},
	);
});

// Ativar o suporte de comandos
client.on("message", (message) => {
	// se o bot mandar js! --> Retornar nulo
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// js!(args)
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	// js!Comando --> js!comando
	const commandName = args.shift().toLowerCase();

	// Pegar os argumentos
	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			(cmd) => cmd.aliases && cmd.aliases.includes(commandName),
		);

	if (!command) return;

	if (command.guildOnly && message.channel.type === "dm") {
		return message.reply("não posso executar esse comando em DM's, foi mal :/");
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply(
				"ta na disney parceiro? Se não pode fazer isso não fi.",
			);
		}
	}

	if (command.args && !args.length) {
		let reply = `se não informou nada meu parceiro, da pra escrever de novo? ${message.author}!`;

		if (command.usage) {
			reply += `\nO uso correto seria --> \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 4) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(
				`por favor espere mais ${timeLeft.toFixed(1)} para usar o comando \`${
					command.name
				}\`.`,
			);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply(
			"Aconteceu alguma coisa errada ao executar esse comando, ve se ouve alguma coisa no console.",
		);
	}
});

client.login(process.env.DISCORD_TOKEN);
