module.exports=
{
  name:'leave',
  description:'Leave Voice Channel',
  async execute(msg,args)
  {
    if(!msg.guild)
    {
      return;
    }
    if(msg.member.voice.channel)
    {
      const connection = await msg.member.voice.channel.leave();
    }
    else
    {
      msg.reply("Join a Voice Channel First!")
    }
  }
}
