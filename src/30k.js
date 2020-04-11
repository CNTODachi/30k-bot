require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const Nightlords = '697015353313722419';
const Salamanders = '697015430824329218';
const DeathGuard = '697015511094919168';
const WorldEaters = '697015585435025471';
const RavenGuard = '697015795187843092';
const WordBearers = '697015952180772875';
const ThousandSons = '697060837218713730';
const DarkAngels = '697016223468224522';
const IronWarriors = '697023052734529576';
const IronHands = '697023070422171698';
const SonsofHorus = '697023275766644836';
const AlphaLegion = '697023396797480960';
const UltraMarines = '697023452384591953';
const BloodAngels = '697060798337515590';
const ImperialFists = '697066192086630451';
const EmperorsChildren = '697066681092145172';
const Custodians = '697070014376968256';
const Sisters = '697083360526204958';
const Mech = '697015898606927903';
const Scars = '697798585093324811';
const Wolves = '697856557664305273';
const Auxilia = '698095353492406343';
const Excertus = '698143883439374356';
const Dae = '698459450247217193';


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;
    channel.send(`Welcome ${member}, The universe has many horrors yet to throw at us. This is not the end of our struggle. This is just the beginning of our crusade to save Humanity. Be faithful! Be strong! Be vigilant!
    
But most of all say hello in the <#697008604162687028> channel and type in your legion as seen below in this channel,
(individual messages if multiple legions/factions)

Night Lords             Salamanders             Death Guard
World Eaters            Raven Guard             Word Bearers
Thousand Sons           Dark Angels             Iron Warriors
Iron Hands              Sons of Horus           Alpha Legion
Ultramarines            Blood Angels            Imperial Fists
Emperors Children       White Scars             Space Wolves
Custodes                Sisters of Silence      Mechanicum
Imperialis Auxilia      Excertus Imperialis     Daemons`);

});

//Code that is running on  server live
client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('night')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Ave Dominus Nox! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(Nightlords);
    }

    else if(msg.includes ('Scars')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Into the fires of battle, unto the anvil of war! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Scars);
    }

    else if(msg.includes ('salamanders')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Into the fires of battle, unto the anvil of war! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Salamanders);
    }

    else if(msg.includes ('death')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> You are my unbroken blades. You are the Death Guard! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(DeathGuard);
    }

    else if(msg.includes ('eaters')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Blood for the Primarch! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(WorldEaters);
    }

    else if(msg.includes ('raven')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Victorus Aut Mortis! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(RavenGuard);
    }

    else if(msg.includes ('bearers')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> From the fires of betrayal unto the blood of revenge we bring the name of Lorgar, the Bearer of the Word! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(WordBearers);
    }

    else if(msg.includes ('thousand')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> All is dust! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(ThousandSons);
    }

    else if(msg.includes ('dark')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Repent! For tomorrow you die! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(DarkAngels);
    }

    else if(msg.includes ('warriors')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Iron Within! Iron Without! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(IronWarriors);
    }

    else if(msg.includes ('hands')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Flesh is weak! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(IronHands);
    }

    else if(msg.includes ('horus')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For the Warmaster! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(SonsofHorus);
    }

    else if(msg.includes ('alpha')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Hydra Dominatus! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(AlphaLegion);
    }

    else if(msg.includes ('ultra')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Courage and Honour! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(UltraMarines);
    }

    else if(msg.includes ('blood')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> By the blood of Sanguineous! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(BloodAngels);
    }

    else if(msg.includes ('fists')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Primarch-Progenitor, to your glory and the glory of him on earth! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(ImperialFists);
    }

    else if(msg.includes ('children')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Children of the Emperor! Death to his foes! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(EmperorsChildren);
    }

    else if(msg.includes ('custodes')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Only in Death does Duty End! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Custodians);
    }

    else if(msg.includes ('sisters')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Daughters of the emperor! Use <#697008604162687028> to say hello and welcome my daughters.`);
        message.member.roles.add(Sisters);
    }
    
    else if(msg.includes ('mechanicum')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> There is no truth in flesh, only betrayal. There is no strength in flesh, only weakness. There is no constancy in flesh, only decay. There is no certainty in flesh but death. Use <#697008604162687028> to say hello and welcome my friends.`);
        message.member.roles.add(Mech);
    }

    else if(msg.includes ('wolves')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For Russ and the Allfather! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Wolves);
    }

    else if(msg.includes ('auxilia')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For the Emperor! Use <#697008604162687028> to say hello and welcome my friends.`);
        message.member.roles.add(Auxilia);
    }

    else if(msg.includes ('excertus')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For the Emperor! Use <#697008604162687028> to say hello and welcome my friends.`);
        message.member.roles.add(Excertus);
    }

    else if(msg.includes ('daemons')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Death to all! Use <#697008604162687028> to say hello. Now begone Daemons from this channel your prescence will not be tolerated.`);
        message.member.roles.add(Dae);
    }

});


client.login(process.env.BOT_TOKEN);