module.exports = 879450795572092948 => {
  const channelId = "877426805735301120";
  const rulesChannel = "877428225402347560";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `Welcome <@${
      member.id
    }> to our server! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
