module.exports = {
  name: 'args-info',
  description: 'Information about the arguments provided.',
  args: true,
  guildOnly: false,
  execute(message, args) {
    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
};
