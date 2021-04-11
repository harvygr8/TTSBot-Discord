module.exports=
{
  name:'clear',
  description:'Clear Messages',
  async execute(msg,args)
  {
    if(!args[0] || isNaN(args[0]))
    {
      return msg.reply('Specify an Integer Amount');
    }
    if(args[0]>50 || args[0]<0)
    {
      return msg.reply('Specify a Valid Amount');
    }

    await msg.channel.messages.fetch({limit:args[0]}).then(messages=>
    {
      msg.channel.bulkDelete(messages);
    }).catch(err=>
    {
      console.log(err);
    });
  }
}
