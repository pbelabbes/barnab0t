const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'BARNAB0T',
    password: 'oauth:f639n1g2ddcmse2zihfe0xz1aru5ns'
  },
  channels: [
    'barnab0t'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    console.log(target,context,msg,self);
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  

  // If the command is known, let's execute it
  
  if (commandName.startsWith('!? ')) {
    // const num = rollDice();
    // client.say(target, `${context["display-name"]} rolled a ${num}`);
    const question = commandName.substring(2);
    console.log(`* ${context['display-name']} asks : ${question}`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}
// Function called when the "dice" command is issued
// function rollDice () {
//   const sides = 6;
//   return Math.floor(Math.random() * sides) + 1;
// }
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}