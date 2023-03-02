const Discord = require("discord.js");

module.exports = {
	name: "ping",
	description: "Pong!",
	cooldown: 5,
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setTitle("Pong!")
			.setColor("RED")
			.setDescription(
				`🏓Tempo de resposta: ${Date.now() - message.createdTimestamp}ms`,
			)
			.setTimestamp();

		message.channel.send(embed);
	},
};
