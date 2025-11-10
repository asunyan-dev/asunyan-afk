# asunyan-afk

Simple module to make an AFK system on your Discord bot using discord.js

## Installation

```bash
$ npm install asunyan-afk
```


## Usage

### Properties
- `userId` - The ID of the user to set the AFK for
- `message` - The AFK message the user will set

### Set the AFK of a user
```js
const { setAfk } = require('asunyan-afk');

setAfk(userId, message);
```

### Get the AFK status of a user
```js
const { getAfk } = require('asunyan-afk');

const afkStatus = await getAfk(userId);
```
This will return either a `string` or a `null` value.

### Remove the AFK of a user
```js
const { removeAfk } = require('asunyan-afk');

removeAfk(userId);
```


### Example of full usage

```js

const { getAfk, setAfk, removeAfk } = require('asunyan-afk');

client.on('messageCreate', async(message) => {

    const afkStatus = await getAfk(message.author.id);
    if(afkStatus) {
        removeAfk(message.author.id);
        message.reply("Welcome back! I removed your AFK status!");
    };

    if(message.mentions.users.size > 0) {
        message.mentions.users.forEach(user => {
            const status = await getAfk(user.id);
            if(status) message.reply(`${user.username} is AFK! Message: ${status}`)
        })
    };

    let messageArray = message.content.split(" ");

    if(message.content.startsWith("!afk")) {
        const message = messageArray.slice(1).join(" ");
        setAfk(message.author.id, message);

        message.reply("I set your AFK status!\nYour message: " + message);
    }
});
```

### Questions and requests

Please contact me on Discord: @mimi.mrow or join my [server](https://mimicord.com/)
