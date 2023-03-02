const Discord = require("discord.js");

module.exports = {
	name: "github",
	description: "Meu repositório do Github!",
	aliases: ["git", "src"],
	cooldown: 5,
	execute(message) {
		const configEmbed = require("../../config/embed.json");

		const embedFooter = configEmbed.ASKED_BY.replace(
			"%user",
			message.author.tag,
		);

		const embed = new Discord.MessageEmbed()
			.setTitle("👨🏽‍💻Clique aqui para acessar meu repositório.👨🏽‍💻")
			.setURL("https://github.com/Drack112/Fujiwara-Takumi")
			.setThumbnail(
				"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
			)
			.setDescription(
				"***Não esqueça de ler a documentação que está na primeira aba. Tenho certeza que irá gostar!.***",
			)
			.setFooter(
				embedFooter,
				`${message.author.displayAvatarURL({
					size: 4096,
					dynamic: true,
				})}`,
			)
			.setTimestamp()
			.setColor("YELLOW");

		message.reply(embed);
	},
};
