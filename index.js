const fs = require('fs');
const path = require('path');

/**
 * Module to make an AFK system for a Discord bot
 * @param {string} userId
 * @param {string} message
 */


const dataPath = path.join(__dirname, "../../data");

if(!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath, { recursive: true });
};

const file = path.join(dataPath, "afk.json");

if(!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify({}, null, 2));
};

function load() {
    let data = JSON.parse(fs.readFileSync(file, "utf8"));
    return data;
};

function save(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
};


function ensureUser(data, userId) {
    if(!data[userId]) {
        data[userId] = null;
    };
};


async function getAfk(userId) {
    const data = load();
    ensureUser(data, userId);
    return data[userId];
};

function setAfk(userId, message) {
    const data = load();
    ensureUser(data, userId);
    data[userId] = message;
    save(data);
};

function removeAfk(userId) {
    const data = load();
    ensureUser(data, userId);
    delete data[userId];
    save(data);
};


module.exports = {
    getAfk,
    setAfk,
    removeAfk
};