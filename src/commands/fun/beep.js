const axios = require("axios");

const Discord = require("discord.js");

require("dotenv").config();

module.exports = {
	name: "beep",
	description: "Boop!",
	cooldown: 5,
	execute(message) {
		axios
			.get(process.env.TENOR)
			.then(function (response) {
				const rn = require("random-number");

				const options = {
					min: 1,
					max: 20,
					integer: true,
				};

				const result = rn(options);

				const image = response.data.results[result].media[0].gif.url;

				const embed = new Discord.MessageEmbed()
					// Cor da Barra
					.setColor("BLUE")
					// Titulo
					.setTitle("Beep?")
					// Link da Imagem
					.setURL(image)
					// Titulo acima do titulo
					.setAuthor("OwO")
					// Imagem
					.setImage(image)
					// Horario
					.setTimestamp()
					// Footer
					.setFooter("Boop");

				message.channel.send(embed);
			})
			.catch(function (error) {
				console.log(error);
			});
	},
};
