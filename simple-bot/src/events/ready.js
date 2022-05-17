module.exports = {
    name: "ready",
    type: "once",
    handler: (client) => {
        console.log(`Bot logged in to ${client.user.tag}`);

        client.user.setActivity("With your mom!", { type: "PLAYING" })
    }
}