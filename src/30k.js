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
    client.user.setStatus('online');
    client.user.setActivity('In the Warp');
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;
    channel.send(`Welcome ${member}, The universe has many horrors yet to throw at us. This is not the end of our struggle. This is just the beginning of our crusade to save Humanity. Be faithful! Be strong! Be vigilant!
    
But most of all say hello in the <#697008604162687028> channel and type in your legion in all lower case as seen below in this channel.
(individual messages if multiple legions/factions)

night lords             salamanders             death guard
world eaters            raven guard             word bearers
thousand sons           dark angels             iron warriors
iron hands              sons of horus           alpha legion
ultramarines            blood angels            imperial fists
emperors children       white scars             space wolves
custodes                sisters of silence      mechanicum
imperialis auxilia      excertus imperialis     daemons`);

});

//Code that is running on  server live
client.on('message', function(message) {
    if(message.author.bot) return;
    if(msg.content === 'night lords') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Ave Dominus Nox! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(Nightlords);
    }

    else if(msg.content === 'white scars') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Into the fires of battle, unto the anvil of war! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Scars);
    }

    else if(msg.content === 'salamanders') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Into the fires of battle, unto the anvil of war! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Salamanders);
    }

    else if(msg.content === 'death guard') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> You are my unbroken blades. You are the Death Guard! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(DeathGuard);
    }

    else if(msg.content === 'world eaters') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Blood for the Primarch! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(WorldEaters);
    }

    else if(msg.content === 'raven guard') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Victorus Aut Mortis! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(RavenGuard);
    }

    else if(msg.content === 'word bearers') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> From the fires of betrayal unto the blood of revenge we bring the name of Lorgar, the Bearer of the Word! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(WordBearers);
    }

    else if(msg.content === 'thousand sons') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> All is dust! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(ThousandSons);
    }

    else if(msg.content === 'dark angels') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Repent! For tomorrow you die! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(DarkAngels);
    }

    else if(msg.content === 'iron warriors') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Iron Within! Iron Without! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(IronWarriors);
    }

    else if(msg.content === 'iron hands') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Flesh is weak! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(IronHands);
    }

    else if(msg.content === 'sons of horus') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For the Warmaster! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(SonsofHorus);
    }

    else if(msg.content === 'alpha legion') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Hydra Dominatus! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(AlphaLegion);
    }

    else if(msg.content === 'ultramarines') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Courage and Honour! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(UltraMarines);
    }

    else if(msg.content === 'blood angels') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> By the blood of Sanguineous! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(BloodAngels);
    }

    else if(msg.content === 'imperial fists') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Primarch-Progenitor, to your glory and the glory of him on earth! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(ImperialFists);
    }

    else if(msg.content === 'emperors children') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Children of the Emperor! Death to his foes! Use <#697008604162687028> to say hello. Now begone traitors.`);
        message.member.roles.add(EmperorsChildren);
    }

    else if(msg.content === 'custodes') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Only in Death does Duty End! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Custodians);
    }

    else if(msg.content === 'sisters of silence') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Daughters of the emperor! Use <#697008604162687028> to say hello and welcome my daughters.`);
        message.member.roles.add(Sisters);
    }
    
    else if(msg.content === 'mechanicum') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> There is no truth in flesh, only betrayal. There is no strength in flesh, only weakness. There is no constancy in flesh, only decay. There is no certainty in flesh but death. Use <#697008604162687028> to say hello and welcome my friends.`);
        message.member.roles.add(Mech);
    }

    else if(msg.content === 'space wolves') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For Russ and the Allfather! Use <#697008604162687028> to say hello and welcome my sons.`);
        message.member.roles.add(Wolves);
    }

    else if(msg.content === 'imperialis auxilia') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For the Emperor! Use <#697008604162687028> to say hello and welcome my friends.`);
        message.member.roles.add(Auxilia);
    }

    else if(msg.content === 'excertus imperialis') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> For the Emperor! Use <#697008604162687028> to say hello and welcome my friends.`);
        message.member.roles.add(Excertus);
    }

    else if(msg.content === 'daemons') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Death to all! Use <#697008604162687028> to say hello. Now begone Daemons from this channel your prescence will not be tolerated.`);
        message.member.roles.add(Dae);
    }

    else if(msg.content === 'remove night lords') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Nightlords);
    }

    else if(msg.content === 'remove white scars') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Scars);
    }

    else if(msg.content === 'remove salamanders') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Salamanders);
    }

    else if(msg.content === 'remove death guard') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(DeathGuard);
    }

    else if(msg.content === 'remove world eaters') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(WorldEaters);
    }

    else if(msg.content === 'remove raven guard') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(RavenGuard);
    }

    else if(msg.content === 'remove word bearers') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(WordBearers);
    }

    else if(msg.content === 'remove thousand sons') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(ThousandSons);
    }

    else if(msg.content === 'remove dark angels') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(DarkAngels);
    }

    else if(msg.content === 'remove iron warriors') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(IronWarriors);
    }

    else if(msg.content === 'remove iron hands') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(IronHands);
    }

    else if(msg.content === 'remove sons of horus') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(SonsofHorus);
    }

    else if(msg.content === 'remove alpha legion') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(AlphaLegion);
    }

    else if(msg.content === 'remove ultramarines') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(UltraMarines);
    }

    else if(msg.content === 'remove blood angels') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(BloodAngels);
    }

    else if(msg.content === 'remove imperial fists') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(ImperialFists);
    }

    else if(msg.content === 'remove emperors children') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(EmperorsChildren);
    }

    else if(msg.content === 'remove custodes') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Custodians);
    }

    else if(msg.content === 'remove sisters of silence') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Sisters);
    }
    
    else if(msg.content === 'remove mechanicum') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Mech);
    }

    else if(msg.content === 'remove space wolves') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Wolves);
    }

    else if(msg.content === 'remove imperialis auxilia') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Auxilia);
    }

    else if(msg.content === 'remove excertus imperialis') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Excertus);
    }

    else if(msg.content === 'remove daemons') {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('697220115774701660');
        arrivalswelcome.send(`<@${user.id}> Role removed.`);
        message.member.roles.remove(Dae);
    }

});


client.login(process.env.BOT_TOKEN);

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));