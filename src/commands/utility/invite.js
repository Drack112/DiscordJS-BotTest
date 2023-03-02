const Discord = require("discord.js");

module.exports = {
	name: "invite",
	description: "Me convide pro seu servidor!",
	aliases: ["convite"],
	cooldown: 5,
	execute(message) {
		const configEmbed = require("../../config/embed.json");

		const embedFooter = configEmbed.ASKED_BY.replace(
			"%user",
			message.author.tag,
		);

		const embed = new Discord.MessageEmbed()
			.setTitle("⭐ Clique aqui para me chamar pro seu servidor")
			.setURL(
				"https://discord.com/api/oauth2/authorize?client_id=867169972261355521&permissions=4294967287&scope=bot",
			)
			.setColor("BLACK")
			.setFooter(
				embedFooter,
				`${message.author.displayAvatarURL({
					size: 4096,
					dynamic: true,
				})}`,
			)
			.setTimestamp();

		message.reply(embed);
	},
};
