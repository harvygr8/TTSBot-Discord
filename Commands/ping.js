module.exports=
{
  name:'ping',
  description:'Ping Command(Check if the bot is online)',
  execute(msg,args,Client)
  {
    msg.channel.send('Hello There!')
  }
}
