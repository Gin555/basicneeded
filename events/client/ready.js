const client = require("../../index").client

module.exports = () =>{
    console.log('Bot is online!');
    const arrayofStatus = [
        `"Status you want!"`,
        `Status you want!`,
        `Status you want!`
    ]
    let index = 0
    setInterval(() => {
        if(index === arrayofStatus.length) index = 0;
        const status = arrayofStatus[index];

        client.user.setActivity(status, {type : 'PLAYING'}).catch(console.error)
        index++
    }, 5000)
}