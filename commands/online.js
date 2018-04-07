module.exports = {
  name: 'online',
  description: 'Makes an \'online\' GIF',
  args: false,
  guildOnly: true,
  execute(message) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('you aren\'t an admin !');

    message.channel.send('@everyone', {
      files: [
        "deku-online.gif",
      ],
    });
  },
};
