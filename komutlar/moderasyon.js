const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let prefix  = 'c!'
let yardımEmbed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(client.user.username+' - Moderasyon komutları')
.setDescription(`/rolver : Belirlediğiniz kişiye seçtiğiniz rolü alır.

/rolal : Belirlediğiniz kişiden seçtiğiniz rolü alır.

/ban  : Belirlediğiniz kişiyi sunucudan banlar.

/mute : Belirlediğiniz kişiyi belirlediğiniz süre boyunca sustur.

/uyar  : Belirlediğiniz kişiyi belirlediğiniz sebep ile uyarır.`)
if(!args[0]) message.channel.send(yardımEmbed)

if(args[0] == 'yetkili' || args[0] == 'moderasyon' || args[0] == 'kullanıcı'){
let cekategoriEmbed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(client.user.username+' - Yardım komutları')
.setDescription(client.commands.filter(codeming => codeming.help.kategori == args[0]).map(cmd => `**${prefix}${cmd.help.name}:** ${cmd.help.description || 'Açıklama yok'}`))
message.channel.send(cekategoriEmbed)
}else{
 message.channel.send('**Komutların bazıları `yapım aşamasındadır.**')   
}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['m'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Taslak',
  usage: 'Taslak'
};
