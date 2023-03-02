const Discord = require("discord.js");
const configEmbed = require("../../config/embed.json");

module.exports = {
	name: "avatar",
	description: "Olha a fotinho!",
	aliases: ["icon", "foto", "fotinho"],
	cooldown: 5,
	execute(message) {
		let target = message.mentions.users.first();

		if (!target) target = message.author;

		const avatarURL = target.displayAvatarURL({
			size: 4096,
			dynamic: true,
		});

		const embedFooter = configEmbed.ASKED_BY.replace(
			"%user",
			message.author.tag,
		);

		const embed = new Discord.MessageEmbed()
			.setTitle("🖼️")
			.setURL(avatarURL)
			.setColor("RANDOM")
			.setImage(avatarURL)
			.setFooter(
				embedFooter,
				`${message.author.displayAvatarURL({
					size: 4096,
					dynamic: true,
				})}`,
			);

		message.channel.send(embed);
	},
};
