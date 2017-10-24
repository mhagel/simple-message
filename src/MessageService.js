
const contacts = {
   "users" : [
        { "name" :    "Edward   Lathem" ,    "total" :    10 ,    "id" :    5 },
        { "name" :    "Lester   Bohannon" ,    "total" :    5 ,    "id" :    22 },
        { "name" :    "Jacqueline   T.   Elias" ,    "total" :    11 ,    "id" :    34 },
        { "name" :    "Julie   Gamez" ,  "total" :    33 ,    "id" :    103 }
    ]
};

const messages = {
    "messages" :   [
        { "date" :    "2017-01-01   10:10" ,    "text" :  "5   Lorem   ipsum   dolor   sit   amet,   consectetur   adipiscing   elit, sed   do   eiusmod   tempor   incididunt   ut   labore   et   dolore   magna   aliqua.",   "sender_user":   5},
        { "date" :    "2017-01-01   10:11" ,    "text" :  "22   Ut   enim   ad   minim   veniam,   quis   nostrud   exercitation ullamco   laboris   nisi   ut   aliquip   ex   ea   commodo   consequat.",   "sender_user":   22},
        { "date" :    "2017-01-01   10:12" ,    "text" :  "34   Ut   enim   ad   minim   veniam,   quis   nostrud   exercitation ullamco   laboris   nisi   ut   aliquip   ex   ea   commodo   consequat.",   "sender_user":   34},
        { "date" :    "2017-01-01   10:13" ,    "text" :  "WWW   Ut   enim   ad   minim   veniam,   quis   nostrud   exercitation ullamco   laboris   nisi   ut   aliquip   ex   ea   commodo   consequat.",   "sender_user":   103},
   ]
};


const getContacts = () => {
    return new Promise((resolve, reject) => {
        resolve(contacts);
    });
};

const getMessagesWith = (sender_user) => {
    let messagesWithSender = messages.messages.filter(msg => {
        return msg.sender_user === sender_user;
    })

    return new Promise((resolve, reject) => {
        resolve(messagesWithSender);
    });
};

const postMessage = (message) => {
    return new Promise((resolve, reject) => {
        resolve({"status": "success"});
    });
};

export {getContacts, getMessagesWith, postMessage};