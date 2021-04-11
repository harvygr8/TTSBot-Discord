const sm=require('./Implementation/SpeechMain.js')
const fs=require('fs')
module.exports=
{
  name:'speak',
  description:'Join Voice Channel and Speak Argument',
  async execute(msg,args)
  {
    if(!msg.guild)
    {
      return;
    }
    if(msg.member.voice.channel)
    {
      const connection = await msg.member.voice.channel.join().then((connection)=>{
        let i;
        let text="";
        for (i = 0;i<args.length;i++)
        {
          text += args[i] + "-";
        }
        console.log(text);
        sm.speak(msg.author.username+"-"+"says"+"-"+text);
        msg.react("👍");
        setTimeout(play, 1000);
        function play()
        {
          const dispatcher=connection.play(require("path").join(__dirname,'./output.wav'));
          dispatcher.on('finish', () => {
            console.log('Finished playing!');
          });
        }
      }).catch(err=>
      {
        console.log(err);
      });
    }
    else
    {
      msg.reply("Join a Voice Channel First!")
    }
  }
}
