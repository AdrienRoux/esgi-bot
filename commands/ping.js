module.exports = {
  name: 'ping',
  description: 'Ping!',
  args: false,
  guildOnly: false,
  cooldown: 5,
  execute(message) {
    message.channel.send('Pong.');
  },
};
