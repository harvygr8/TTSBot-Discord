const Discord=require('discord.js');
const fs = require('fs');
const Client=new Discord.Client();
const prefix=">"
require('dotenv').config()
Client.login(process.env.TOKEN);
Client.commands=new Discord.Collection();

const CmdFiles=fs.readdirSync('./Commands/').filter(file=>file.endsWith('.js'));
for (const file of CmdFiles) {
	const Command = require(`./Commands/${file}`);
	Client.commands.set(Command.name, Command);
}

Client.on('ready',()=>{
  console.log('READY!');
});

Client.on('message', msg =>{
  if(!msg.content.startsWith(prefix) || msg.author.bot)
  {
    return;
  }

  const args=msg.content.slice(prefix.length).split(/ +/);
  const command=args.shift().toLowerCase()
	console.log(Client.commands.get(command));
  console.log(args);

  if(command==="ping")
  {
    Client.commands.get('ping').execute(msg,args,Client);
  }
  if(command==="clear")
  {
    Client.commands.get('clear').execute(msg,args);
  }
	if(command==="speak")
	{
		Client.commands.get('speak').execute(msg,args);
	}
	if(command==="help")
	{
		Client.commands.get('help').execute(msg,args,prefix,Discord);
	}
	if(command==="leave")
	{
		Client.commands.get('leave').execute(msg,args);
	}
});
