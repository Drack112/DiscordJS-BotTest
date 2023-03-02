const Discord = require("discord.js");

module.exports = {
	name: "about",
	description: "Informações sobre eu.",
	aliases: ["info"],
	cooldown: 5,
	execute(message) {
		const configEmbed = require("../../config/embed.json");

		const embedFooter = configEmbed.ASKED_BY.replace(
			"%user",
			message.author.tag,
		);

		const embed = new Discord.MessageEmbed()
			.setTitle("Você sabe quem sou eu?")
			.setColor("BLACk")
			.setDescription(
				"Olá pequeno ser humano, me chame de **Fujiwara Takumi** um bot com funcionalidades simples e...é, só isso mesmo.\n Não tem muito o que falar até porque eu só tenho os comandos básicos como...ah sei la nem eu lembro, da um `js!help` ae que tu encontra.\nDesenvolvido em Javascript e não se esqueça, meu prefixo é `js!`. Se quiser mais informações ou até mesmo meu código fonte apenas digite `js!github.`",
			)
			.setImage("https://i.imgur.com/8lebxQY.png")
			.setFooter(
				embedFooter,
				`${message.author.displayAvatarURL({
					size: 4096,
					dynamic: true,
				})}`,
			);

		message.reply(embed);
	},
};
