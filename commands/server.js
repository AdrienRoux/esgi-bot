module.exports = {
  name: 'server',
  description: 'Gives informations about the server',
  args: false,
  guildOnly: true,
  execute(message) {
      message.channel.send(`This server name is: ${message.guild.name}\n Total members: ${message.guild.memberCount}`);
  },
};
