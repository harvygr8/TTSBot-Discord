module.exports=
{
  name:'ping',
  description:'Ping Command',
  execute(msg,args,Client)
  {
    msg.channel.send('Hello There!')
  }
}
