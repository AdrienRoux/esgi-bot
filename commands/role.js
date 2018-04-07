module.exports = {
  name: 'role',
  description: 'Give a role to a user',
  args: true,
  guildOnly: true,
  usage: '<add/del> <role> <@user>',
  execute(message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('you aren\'t an admin !');

    const usage = '<add/del> <role> <@user>';

    const type = args[0];

    if (args.length == 3) {
      const role = args[1];
      const role_name = message.guild.roles.find("name", `${role}`);

      if (type != 'del' && type != 'add') {
        return message.reply(`this is the proper usage : ${usage}`);
      }

      if (role_name) {
        console.log(`Role ${role} found !`);
      }
      else {
        return message.reply('the role you entered does not exist!\n ***This command is case-sensitive***');
      }

      const member = message.mentions.members.first();
      if(!member) return message.reply("Please mention a valid member of this server");

      if (type == 'add') {
        if(message.member.roles.has(role_name)) return message.reply("That member already have that role");

        member.addRole(role_name).catch(console.error);

        return message.channel.send(`${member} has now the role : ${role_name}`);
      }
      if (type == 'del') {
        if(!message.member.roles.has(role_name)) return message.reply("That member does not have that role");

        member.removeRole(role_name).catch(console.error);

        return message.channel.send(`${member} has not the ${role_name} anymore`);
      }
    }
    else {
      return message.reply(`this is the proper usage : ${usage}`);
    }
  },
};
