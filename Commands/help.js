module.exports=
{
  name:'help',
  description:'Help Command',
  execute(msg,args,prefix,Discord)
  {
    const {commands} = msg.client;
    const CmdName=Array.from(commands.keys());
    const CmdDesc=Array.from(commands.map(command=>command.description));
    console.log(CmdName);
    console.log(CmdDesc);
    const HelpEmbed=new Discord.MessageEmbed()
    .setColor("#203344")
    .setTitle('List of Commands')
    .addFields({name:'Prefix',value:'>',inline:true})
    .addFields({name:'Example',value:'>speak Hello There!',inline:true})
    //console.log(msg.author.avatarURL());
    for(i=0;i<5;i++)
    {
      HelpEmbed.addFields({name:CmdName[i],value:CmdDesc[i]});
    }
     msg.channel.send(HelpEmbed);
  }
}
