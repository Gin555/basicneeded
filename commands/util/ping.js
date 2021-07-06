module.exports = {
    name: 'ping',
    description: 'sample command',
    aliases: [],
    cooldown: 0,
    execute(client, message, args, cmd){
        message.channel.send('pong!')
    }
}