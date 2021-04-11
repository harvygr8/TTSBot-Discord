const say = require('say');
module.exports=
{
  speak:function (speech)
  {
    say.export(speech,'Microsoft David Desktop', 0.75, 'Commands/output.wav', (err) => {
      if (err) {
        return console.error(err)
      }

      console.log('TTS stored in output.wav.')
    });
  }
}
