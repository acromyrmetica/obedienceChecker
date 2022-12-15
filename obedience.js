// POKEMON OBEDIENCE

// GLOBALS -------------
var allObey = "Your Pokemon will obey regardless of level or badge achieved.";
var incomplete = "Obedience data coming soon.";

// Yes/No Question - Enforce Answer
var yesOrNo = ['y', 'n'];
function askYN(questionYN, acceptableAnswersYN) {
    var answerYN;
    while(!acceptableAnswersYN.includes(answerYN)) {
        if(answerYN !== undefined) {
            alert('Please choose one of the following:\n' + acceptableAnswersYN.join('\n'))
        }
        answerYN = prompt(questionYN);
    }
    return answerYN;
}

// Level Cap
var capList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 35, 65];


// TRADED -------------- 
// Outsider Question
function outsider () {
    var traded = askYN("Is your pokemon a traded Pokemon (Y or N)", yesOrNo);
    if(traded === 'y') {
        askVersion(level);
    } else {
        alert(allObey); 
    }
}


// VERSION -------------
var versionList = [
    // Indigo League - 1st Generation (RBYG)
    "red", 
    "blue", 
    "yellow", 
    "green", 
    // Indigo League - 3rd Generation (FR/LG)
    "fire red", 
    "leaf green", 
    //Indigo League - 8th Generation (P/E)
    "let's go pikachu", 
    "let's go eevee", 
    // Johto League - 2nd Generation (GSC)
    "gold", 
    "silver", 
    "crystal", 
    // Johto League - 4th Generation (HG/SS)
    "heart gold", 
    "soul silver", 
    // Hoenn League - 3rd Generaiton (RSE)
    "ruby", 
    "sapphire", 
    "emerald",
    // Hoenn League - 6th Generation (OR/AS)
    "omega ruby", 
    "alpha sapphire", 
    // Sinnoh League - 4th Generation (DPP)
    "diamond", 
    "pearl", 
    "platinum",
    // Sinnoh League - 8th Generation (BD/SP)
    "brilliant diamond", 
    "shining pearl", 
    // Unova League - 5th Generation (BW/B2W2)
    "black", 
    "white", 
    "black 2", 
    "white 2", 
    // Kalos League - 6th Generation (XY)
    "x", 
    "y", 
    // Alola League - 7th Generation (SM/USUM)
    "sun", 
    "moon", 
    "ultra sun", 
    "ultra moon", 
    // Galar League - 8th Generation (SwSh)
    "sword", 
    "shield", 
    // Hisui - 8th Generation (PLA)
    "pokemon legends: arceus", 
    // Paldea League - 9th Generation (SV)
    "scarlet", 
    "violet" 
];
// Generation Split - Versions
var indigo = versionList.slice(0, 6);
var indigoPE = versionList.slice(6, 8);
var johto = versionList.slice(8, 11);
var johto2 = versionList.slice(11, 13); //<--- HG/SS
var hoenn = versionList.slice(13, 16);
var hoenn2 = versionList.slice(17, 18); //<--- OR/AS
var sinnoh = versionList.slice(18, 23);
var unova = versionList.slice(23, 25); 
var unova2 = versionList.slice(25, 27); //<--- B2/W2
var kalos = versionList.slice(27, 29); 
var alola = versionList.slice(29, 33); 
var galar = versionList.slice(33, 35); 
var hisui = versionList.slice(35, 36);
var paldea = versionList.slice(36, 38);

// Version Question 
function askVersion (level) {
    var cap;
    var version = handleVersion("Which version are you playing?", versionList);
    if (indigoPE.includes(version) || (sinnoh.includes(version))) {
        cap = numberaskBadge();
    } else if (alola.includes(version)) {
       cap = stampQ(level);
    } else if (paldea.includes(version) || hisui.includes(version)) {
        alert(incomplete);
    } else {
        cap = askBadge(version);
    }
    return cap;
}
// Version Question - Enforce Answer
function handleVersion (questionVersion, acceptableAnswersVersion) {
    var answerVersion; 
    while(!acceptableAnswersVersion.includes(answerVersion)) {
        if(answerVersion !== undefined) {
            alert('Please choose from one of the following:\n' + acceptableAnswersVersion.join('\n'))
        }
        answerVersion = prompt(questionVersion);
    }
    return answerVersion;
}



// BADGES --------------
var badgeList = [
    // Level Cap - 10 (capList[0])
    "no badges", 
    "boulder",
    "zephyr", 
    "stone", 
    // Level Cap - 20 (capList[1])
    "trio",
    "basic",
    // Level Cap - 30 (capList[2])
    "cascade",
    "thunder",
    "hive",
    "plain",
    "knuckle",
    "toxic",
    "bug",
    "grass",
    // Level Cap - 40 (capList[3])
    "soul",
    "dynamo",
    "insect",
    "cliff",
    "water",
    // Level Cap - 50 (capList[4])
    "rainbow", 
    "fog",
    "heat",
    "bolt",
    "rumble",
    "fire",   
    // Level Cap - 60 (capList[5])
    "storm",
    "balance",
    "quake",
    "plant",
    "fighting", 
    "ghost",
    // Level Cap - 70 (capList[6])
    "marsh", 
    "volcano",
    "mineral",
    "glacier", 
    "feather",
    "jet",
    "voltage",
    // Fairy Badge (Duplicate Badge Name)
    "fairy", 
    // Level Cap - 80 (capList[7])
    "mind",
    "freeze",
    "rock", 
    "ice", 
    //Level Cap - 90 (capList[8])
    "psychic",
    "dark",
    //Level Cap - allObey
    "earth",
    "rising",
    "rain",
    "legend",
    "wave", 
    "iceberg",     
    "dragon"                     
]

// Badges by Cap Level
var cap10 = badgeList.slice(0, 4);
var cap20 = badgeList.slice(4, 6);
var cap30 = badgeList.slice(6, 14);
var cap40 = badgeList.slice(14, 19);
var cap50 = badgeList.slice(19, 25);
var cap60 = badgeList.slice(25, 31);
var cap70 = badgeList.slice(31, 38);
var fairyBadge = badgeList.slice(38, 39);
var cap80 = badgeList.slice(39, 43);
var cap90 = badgeList.slice(43, 45); 
var capAllObey = badgeList.slice(45, 52); 

// Valid Badge Answers
var gen1Badges = ['boulder', 'cascade', 'thunder', 'rainbow', 'soul', 'marsh', 'volcano', 'earth'];
var gen2Badges = ['zephyr', 'hive', 'plain', 'fog', 'storm', 'mineral', 'glacier', 'rising'];
var gen3Badges = ['stone', 'knuckle', 'dynamo', 'heat', 'balance', 'feather', 'mind', 'rain'];
var gen5Badges = ['trio', 'basic', 'insect', 'bolt', 'quake', 'jet', 'freeze', 'legend'];
var gen5Badges2 = ['basic', 'toxic', 'insect', 'bolt', 'quake', 'jet', 'legend', 'wave'];
var gen6Badges = ['bug', 'cliff', 'rumble', 'plant', 'voltage', 'fairy', 'psychic', 'iceberg'];
var gen8BadgesSw = ['grass', 'water', 'fire', 'fighting', 'fairy', 'rock', 'dark', 'dragon'];
var gen8BadgesSh = ['grass', 'water', 'fire', 'ghost', 'fairy', 'ice', 'dark', 'dragon'];
var badgeTable = {
    'red' : gen1Badges,
    'blue' : gen1Badges,
    'yellow' : gen1Badges,
    'green' : gen1Badges,
    'fire red' : gen1Badges, 
    'leaf green' : gen1Badges,
    'silver' : gen2Badges,
    'gold' : gen2Badges,
    'crystal' : gen2Badges, 
    'heart gold' : gen2Badges, 
    'soul silver' : gen2Badges, 
    'ruby' : gen3Badges, 
    'sapphire' : gen3Badges, 
    'omega ruby' : gen3Badges, 
    'alpha sapphire' : gen3Badges, 
    'black' : gen5Badges, 
    'white' : gen5Badges, 
    'black 2' : gen5Badges2, 
    'white 2' : gen5Badges2,
    'x' : gen6Badges, 
    'y' : gen6Badges, 
    'sword' : gen8BadgesSw, 
    'shield' : gen8BadgesSh
}

// Badge Question
function askBadge (version) {
    var cap;
    var validBadges = badgeTable[version];
    var badge = handleBadge("Which badge do you have?", validBadges ?? ['backup']); 
    if (cap10.includes(badge)) {
        if (!kalos.includes(version) 
           || !galar.includes(version)
           || !johto2.includes(version)
           || !hoenn2.includes(version)) {   
            cap = capList[0];
        } else {
            cap = capList[1];
        }
    } else if (cap20.includes(badge)) {
        if (!unova2.includes(version)) {
            cap = capList[1];
        } else {
            cap = capList[2];
        }
    } else if (cap30.includes(badge)) {
        cap = capList[2];
    } else if (cap40.includes(badge)) {
        if (hoenn.includes(version)) {
            cap = capList[2];
        } else {
            cap = capList[3];
        }
    } else if (cap50.includes(badge)) {
        cap = capList[4];
    } else if (cap60.includes(badge)) {
        if (johto.includes(version)) {
            cap = capList[6];
        } else if (hoenn.includes(version)) {
            cap = capList[4]; 
        } else {
            cap = capList[5];
        }
    } else if (cap70.includes(badge)) {
        cap = capList[6];
    } else if (fairyBadge.includes(badge)) {
        if (kalos.includes(version)) {
            cap = capList[7];
        } else {
            cap = capList[6]
        }
    } else if (cap80.includes(badge)) {
        if (hoenn.includes(version)) {
            cap = capList[6];
        } else {
            cap = capList[7];
        }
    } else if (cap90.includes(badge)) {
        cap = capList[8];
    } else if (capAllObey.includes(badge)) {
        if (unova2.includes(version)) {
            cap = capList[8];
        } else {
            alert(allObey);
        }
    }
    return cap;
}
// Badge Question - Enforce Answer
function handleBadge (questionBadge, acceptableAnswerBadge) {
    var answerBadge;
    while(!acceptableAnswerBadge.includes(answerBadge)) {
        if(answerBadge !== undefined) {
            alert('Please choose from one of the following:\n' + acceptableAnswerBadge.join(', '))
        }
        answerBadge = prompt(questionBadge);
    }
    return answerBadge;
}


// BADGE NUMBER ------------------
// Badge Number Question
var numberBadgeList = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
function numberaskBadge () {
    var numberBadges = askNumberBadges("How many badges do you have?", numberBadgeList); 
    if(numberBadges === '0' && gen1PE.includes(version) || numberBadges === '0' && gen4.includes(version)) {
        cap = capList[0];
    } else if (numberBadges === '1' && gen1PE.includes(version)) {
        cap = capList[1];
    } else if (numberBadges === '2' && gen1PE.includes(version) || numberBadges === '2' && gen4.includes(version)) {
        cap = capList[2];
    } else if (numberBadges === '3' && gen1PE.includes(version)) {
        cap = capList[3];
    } else if (numberBadges === '4' && gen1PE.includes(version) || numberBadges === '4' && gen4.includes(version)) {
        cap = capList[4];
    } else if (numberBadges === '5' && gen1PE.includes(version)) {
        cap = capList[5];
    } else if (numberBadges === '6' && gen1PE.includes(version) || numberBadges === '6' && gen4.includes(version)) {
        cap = capList[6];
    } else if (numberBadges === '7') {
        cap = capList[7];
    } else {
        alert(allObey);
    }
    return cap;
}
// Badge Number Question - Enforce Answer
function askNumberBadges (questionNumberBadges, acceptableAnswersNumberBadges) {
    var answerNumberBadges; 
    while(!acceptableAnswersNumberBadges.includes(answerNumberBadges)) {
        if(answerNumberBadges !== undefined) {
            alert('Please choose from one of the following:\n' + acceptableAnswersNumberBadges.join(', '))
        }
        answerNumberBadges = prompt(questionNumberBadges);
    }
    return answerNumberBadges;
}


// STAMPS ----------------
// Stamp Question
var numberStampList = ['0', '1', '2', '3', '4'];
function stampQ(level) {
    var numberStamps = askNumberStamps("How many grand trials have you completed?", numberStampList);
    if (numberStamps === '0') {
        cap = capList[1];
    } else if (numberStamps === '1') {
        cap = capList[9];
    } else if (numberStamps === '2') {
        cap = capList[4]; 
    } else if (numberStamps === '3') {
        cap = capList[10];
    } else if (numberStamps === '4') {
        if (level > cap) {
            cap = islandChallenge();
        } else {
            cap = capList[7];
        }
    }
    return cap; 
}
// Stamp Number Question - Enforce Answer
function askNumberStamps (questionNumberStamps, acceptableAnswersNumberStamps) {
    var answerNumberStamps; 
    while(!acceptableAnswersNumberStamps.includes(answerNumberStamps)) {
        if(answerNumberStamps !== undefined) {
            alert('Please choose from one of the following:\n' + acceptableAnswersNumberStamps.join(', '))
        }
        answerNumberStamps = prompt(questionNumberStamps);
    }
    return answerNumberStamps;
}

// Island Challenge Question
function islandChallenge () {
    var islandLeague = askYN("Have you defeated the Pokemon League? (Y or N)", yesOrNo);
    if (islandLeague === 'n') {
        cap = capList[7];
    } else {
        alert(allObey);
    }
    return cap;
}


// RANDOM INTEGER R1 GENERATOR -----------
function random () {
    var r1 = Math.random();
    r1 = r1 * 255;
    r1 = Math.floor(r1)+1;
    return r1;
}


// OBEDIENCE CHECK FORMULA --------------- 
function obedienceCheck () {
    var level = parseInt(prompt("What level is your Pokemon?"));
    var cap = askVersion(level);
    if (level <= cap) {
        alert(allObey);
    } else {
        var arr = []
        for(var i = 0; i < 10000; i++) {
            var r1 = random();
            var obey = 0; 
            var disobey = 1;
            var obedienceCheck = ((level + cap) * r1)/256;
            if (obedienceCheck > cap) {
                arr.push(disobey);
            } else {
                arr.push(obey);
        }
    } 
    var avg = Math.floor((arr.reduce((a, b) => (a + b)) / arr.length) * 100);
    var r_max = (256 * cap) / (cap + level);
    var percent = Math.floor(100 * (255 - r_max) / 256);
    console.log(`analytical result: ${percent}`);
    return ("The odds that your Pokemon will disobey is " + avg + "%.");
    }
}





// // RANDOM INTEGER R0 GENERATOR -----------
// function randomO () {
//     var r0 = Math.random();
//     r0 = r0 * t;
//     r0 = Math.floor(r0);
//     return r0;
// }

// // GENERATIONS I & II - PROBABILITY
// function checkOld () {
//     var t = level + cap - 1
//     var arr0 = [];
//     var obey0 = 0; 
//     var disobey0 = 1; 
//     for(var i0 = 0; i0 < 10000; i0++) {
//         var r0 = random0();
//         if (r0 >= cap) {
//             arr0.push(disobey0); 
//         } else {
//             arr0.push(obey0);
//         }
//     }
//     var avg0 = Math.floor((arr0.reduce((a, b) => (a + b)) / arr0.length) * 100);
//     var r_max0 = (256 * cap) / (cap + level);
//     var percent0 = Math.floor(100 * (255 - r_max0) / 256);
//     console.log(`analytical result: ${percent0}`);
//     return ("The odds that your Pokemon will disobey is " + avg0 + "%.");
// }


// // GENERATIONS III & IV - PROBABILITY
// function checkNew (level, cap) {
//     var arr = []
//     for(var i = 0; i < 10000; i++) {
//         var r1 = random();
//         var obey = 0; 
//         var disobey = 1;
//         var obedienceCheck = ((level + cap) * r1)/256;
//         if (obedienceCheck > cap) {
//             arr.push(disobey);
//         } else {
//             arr.push(obey);
//         }
//     } 
//     var avg = Math.floor((arr.reduce((a, b) => (a + b)) / arr.length) * 100);
//     var r_max = (256 * cap) / (cap + level);
//     var percent = Math.floor(100 * (255 - r_max) / 256);
//     console.log(`analytical result: ${percent}`);
//     return ("The odds that your Pokemon will disobey is " + avg + "%.");
// }

