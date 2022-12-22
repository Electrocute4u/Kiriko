const Cluster = require('discord-hybrid-sharding');

// import and require .env reference
require('dotenv').config();
const { publicToken, devToken } = process.env;

const fs = require("fs")
const config = JSON.parse(fs.readFileSync(`./config.json`, 'utf8'))

// Set token based on public or dev environment
let token = config.dev == false ? publicToken : devToken

// Deleting and reacquiring functions file
delete require.cache[require.resolve("../../utils/functions")];
const { CustomLog } = require("./utils/functions")

// Creating the Shard Manager
const manager = new Cluster.Manager(`${__dirname}/bot.js`, {
    totalShards: `auto`,
    shardsPerClusters: 2,
    // totalClusters: 7,
    mode: 'process',
    token: token,
});

manager.on('clusterCreate', cluster => CustomLog(`Deployed Cluster #${cluster.id}`, "Info"));
manager.spawn({ timeout: -1 });