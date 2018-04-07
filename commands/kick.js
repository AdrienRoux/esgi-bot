module.exports = {
  name: "kick",
  description: "Kicks a user from a server",
  args: true,
  guildOnly: true,
  execute(message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('you aren\'t an admin !');

    const member = message.mentions.members.first();
    if(!member) return message.reply("Please mention a valid member of this server");
    if(!member.kickable) return message.reply("I cannot kick this user ! Do they have a higher role ? Do I have kick permissions ?");

    const reason = args.slice(1).join(' ');
    if(!reason) return message.reply("Please indicate a reason for the kick !");

    member.kick({ reason });
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  },
};
