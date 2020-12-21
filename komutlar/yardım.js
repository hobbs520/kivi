const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let prefix  = 'c!'
let yardımEmbed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(client.user.username+' - Yardım komutları')
.setDescription(`/kullanıcı : Yakında.

/moderasyon : Moderasyon Komutlarını listeler.

/eğlence  : Yakında.

/yetkili : Yakında.`)
if(!args[0]) message.channel.send(yardımEmbed)

if(args[0] == 'yetkili' || args[0] == 'moderasyon' || args[0] == 'kullanıcı'){
let cekategoriEmbed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(client.user.username+' - Yardım komutları')
.setDescription(client.commands.filter(codeming => codeming.help.kategori == args[0]).map(cmd => `**${prefix}${cmd.help.name}:** ${cmd.help.description || 'Açıklama yok'}`))
message.channel.send(cekategoriEmbed)
}else{
 message.channel.send('**Komutların bazıları ``YAPIM`` aşamasındadır.**')   
}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Taslak',
  usage: 'Taslak'
};
