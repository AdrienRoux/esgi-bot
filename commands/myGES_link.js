module.exports = {
  name : 'myges',
  description : 'MyGES link.',
  args : false,
  guildOnly : false,
  execute(message) {
    message.channel.send({ embed: {
      color: 0x4acaed,
      title: 'MyGES',
      url: "http://myges.fr",
      description: "Voici le lien de MyGES !",
    } });
  },
};
