module.exports = {
	name: "prune",
	description: "Limpar 99 mensagens do servidor",
	guildOnly: true,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply("você não colocou nenhum valor no comando.");
		} else if (amount <= 1 || amount > 100) {
			return message.reply("você precisa colocar um numero de 0 a 100");
		}

		message.channel.bulkDelete(amount, true).catch((err) => {
			console.log(err);
			message.reply("Houve um erro em tentar limpar as mensagens desse canal.");
		});
		message.reply(`${amount} mensagens foram apagadas desse canal.`);
	},
};
