module.exports = {
  name: "ban",
  description: "Bans a user from a server",
  args: true,
  guildOnly: true,
  cooldown: 15,
  execute(message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('you aren\'t an admin !');

    const member = message.mentions.members.first();
    if(!member) return message.reply("Please mention a valid member of this server");
    if(!member.bannable) return message.reply("I cannot ban this user ! Do they have a higher role ? Do I have ban permissions ?");

    const reason = args.slice(1).join(' ');
    if(!reason) return message.reply("Please indicate a reason for the ban!");

    member.ban({ reason });
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);

  },
};
