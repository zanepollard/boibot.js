const dummySend = _ => new Promise(resolve => resolve());

module.exports = {
    author: {
        bot: false,
        send: dummySend
    },
    channel: {
        send: dummySend
    },
    guild: {
        members: {
            get: (id)=>{ return { setNickname: (value) => {}}}
        }
    },
    mentions: {
        users: {
            size: 1,
            first: ()=>{ return {username: 'dipshit'}}
        },
    },
    reply: _ => {}
}