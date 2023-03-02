const Discord = require("discord.js");

module.exports = {
	name: "help",
	aliases: ["ajuda", "comandos"],
	description: "Gerar a lista de comandos que eu tenho.",
	execute(message) {
		const description = require("../../config/embed.json");
		const embedFooter = description.ASKED_BY.replace(
			"%user",
			message.author.tag,
		);

		const embed = new Discord.MessageEmbed()
			.setTitle("🤖 Meus comandos 🤖")
			.setDescription(
				"Prefixo: `js!`\n\n**about**  -->  Minhas informações.\n**avatar** --> Gerar o avatar do usuário.\n**beep** --> Boop!\n**github** --> Meu repositório Git.\n**help**   --> O comando que você deu agora.\n**invite** --> Link do meu convite.\n**prune**  --> Deletar mensagens\n**ping**   --> Pong!",
			)
			.setImage("https://i.imgur.com/8lebxQY.png")
			.setFooter(embedFooter)
			.setTimestamp()
			.setColor("255, 255, 255");

		message.reply(embed);
	},
};
