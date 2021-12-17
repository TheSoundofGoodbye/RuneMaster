//Clickable Rune Array
const runeContainer = document.querySelector(".runeContainer");
let runeDiv = '';
for (let i = 1; i < 34; i++) {
  runeDiv += 
  `
  <div class="rune">
    <input type="checkbox" id="rune${i}" class="runeBox" />
    <img src="img/rune${i}.png" id="runeImg${i}" class="runeImg" />
   </div>
   `;
}
runeContainer.innerHTML = runeDiv;

//Rune table
const text = document.querySelectorAll("td");
text.forEach(item => {
  for (var i = 0; i < 34; i++) {
    item.innerHTML = item.innerHTML.replace(new RegExp("\\b"+"runeImg" + i+"\\b"),
      `<img src='img/rune${i}.png' class='runeImgSmall${i} runeImgSmall' />`)
  }
});

//Runeword Description
const wordDetail = document.querySelector("#wordDetail");
const runewordDetail = new Map();
runewordDetail.set('word0',`
  <div class="word" id="word0">
        <h3 class="wordTitle" id="wordTitle0">MissingNo</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc0">
        +10 To All SKills<br>
        +100% Faster Run/Walk<br>
        +1 To Teleport<br>
        50% Faster Cast Rate<br>
    </b>
    </div>
    `);
    runewordDetail.set('word1',`
    </div>
    <div class="word" id="word1">
        <h3 class="wordTitle" id="wordTitle1">Leaf</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc1">
        +3 to Fire Skills
        Adds 5-30 Fire Damage
        +3 to Inferno (Sorceress Only)
        +3 to Warmth (Sorceress Only)
        +3 to Fire Bolt (Sorceress Only)
        +[2-198] Defense (+2 per Character Level)
        Cold Resist +33%
        +2 to Mana after each Kill        
        </b>
    </div>
    `);
    runewordDetail.set('word2',`
    </div>
    <div class="word" id="word2">
        <h3 class="wordTitle" id="wordTitle2">Lore</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc2">
        +1 to All Skills
        +[5-10] to Energy (varies)
        Lightning Resist +30%
        Physical Damage Taken Reduced by 7
        +1 to Mana after each Kill
        +2 to Light Radius
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word3',`
    </div>
    <div class="word" id="word3">
        <h3 class="wordTitle" id="wordTitle3">Nadir</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc3">
        +50% Enhanced Defense
        +10 Defense
        +30 Defense vs. Missile
        +5 Strength
        +[3-5] to Mana after each Kill (varies)
        -33% Extra Gold from Monsters
        -3 to Light Radius
        Level 13 Cloak of Shadows (9 Charges)
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word4',`
    </div>
    <div class="word" id="word4">
        <h3 class="wordTitle" id="wordTitle4">Rhyme</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc4">
        +40% Faster Block Rate
        20% Increased Chance of Blocking
        Regenerate Mana 15%
        All Resistances +25
        Cannot Be Frozen
        50% Extra Gold from Monsters
        25% Better Chance of Getting Magic Items
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word5',`
    </div>
    <div class="word" id="word5">
        <h3 class="wordTitle" id="wordTitle5">Smoke</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc5">
        +20% Faster Hit Recovery
        +75% Enhanced Defense
        +280 Defense vs. Missile
        +10 to Energy
        All Resistances +[30-50] (varies)
        -1 to Light Radius
        Level 6 Weaken (18 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word6',`
    </div>
    <div class="word" id="word6">
        <h3 class="wordTitle" id="wordTitle6">Stealth</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc6">
        +10% Faster Run/Walk
        +20% Faster Cast Rate
        +20% Faster Hit Recovery
        +6 to Dexterity
        Regenerate Mana 15%
        +15 Maximum Stamina
        Poison Resist +30%
        Magic Damage Taken Reduced by 3        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word7',`
    </div>
    <div class="word" id="word7">
        <h3 class="wordTitle" id="wordTitle7">Steel</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc7">
        +25% Increased Attack Speed
        +20% Enhanced Damage
        +3 to Minimum Damage
        +3 to Maximum Damage
        +50 to Attack Rating
        50% Chance of Open Wounds
        +2 to Mana after each Kill
        +1 to Light Radius        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word8',`
    </div>
    <div class="word" id="word8">
        <h3 class="wordTitle" id="wordTitle8">Strength</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc8">
        +[65-95]% Enhanced Damage (varies)
        7% Life Stolen per Hit
        25% Chance of Crushing Blow
        +20 to Strength
        +10 to Vitality
        +2 to Mana after each Kill        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word9',`
    </div>
    <div class="word" id="word9">
        <h3 class="wordTitle" id="wordTitle9">White</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc9">
        +1 to Poison and Bone Skills (Necromancer Only)
        +20% Faster Cast Rate
        Removed
        +4 to Skeleton Mastery (Necromancer Only)
        +[2-3] to Bone Armor (Necromancer Only) (varies)
        +25% Enhanced Damage
        +10 to Vitality
        +13 to Mana
        Magic Damage Taken Reduced by 4        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word10',`
    </div>
    <div class="word" id="word10">
        <h3 class="wordTitle" id="wordTitle10">Zephyr</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc10">
        7% Chance to Cast Level 1 Twister when Struck
        +25% Faster Run/Walk
        +25% Increased Attack Speed
        +[33-66]% Enhanced Damage (varies)
        -25% Target Defense
        +66 to Attack Rating
        Adds 1-50 Lightning Damage
        +25 Defense        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word11',`
    </div>
    <div class="word" id="word11">
        <h3 class="wordTitle" id="wordTitle11">Prudence</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc11">
        +30% Faster Cast Rate
        +25% Faster Hit Recovery
        +[140-170]% Enhanced Defense (varies)
        All Resistances +[25-35] (varies)
        Physical Damage Taken Reduced by [5-13] (varies)
        Magic Damage Taken Reduced by [13-17] (varies)
        +2 to Mana after each Kill
        Repairs 1 Durability in 4 Seconds 
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word12',`
    </div>
    <div class="word" id="word12">
        <h3 class="wordTitle" id="wordTitle12">Splendor</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc12">
        +1 to All Skills
        +[20-35]% Faster Cast Rate (varies)
        +20% Faster Block Rate
        +[60-100]% Enhanced Defense (varies)
        +10 to Energy
        Regenerate Mana 15%
        50% Extra Gold from Monsters
        [20-30]% Better Chance of Getting Magic Items (varies)
        +3 to Light Radius
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word13',`
    </div>
    <div class="word" id="word13">
        <h3 class="wordTitle" id="wordTitle13">Ancient's Pledge</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc13">
        +50% Enhanced Defense
        Cold Resist +43%
        Lightning Resist +48%
        Fire Resist +48%
        Poison Resist +48%
        10% Damage Taken Gained as Mana when Hit
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word14',`
    </div>
    <div class="word" id="word14">
        <h3 class="wordTitle" id="wordTitle14">Black</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc14">
        +15% Increased Attack Speed
        +120% Enhanced Damage
        +200 to Attack Rating
        Adds 3-14 Cold Damage
        40% Chance of Crushing Blow
        Knockback
        +10 to Vitality
        Magic Damage Taken Reduced by 2
        Level 4 Corpse Explosion (12 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word15',`
    </div>
    <div class="word" id="word15">
        <h3 class="wordTitle" id="wordTitle15">Fury</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc15">
        Indestructible
        +40% Increased Attack Speed
        +[239-299]% Enhanced Damage (varies)
        Ignore Target's Defense
        -25% Target Defense
        20% Bonus to Attack Rating
        6% Life Stolen per Hit
        [33-66]% Deadly Strike (varies)
        [33-66]% Chance of Open Wounds (varies)
        +5 to Frenzy (Barbarian Only)       
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word16',`
    </div>
    <div class="word" id="word16">
        <h3 class="wordTitle" id="wordTitle16">King's Grace</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc16">
        +100% Enhanced Damage
        +150 to Attack Rating
        +100% Damage to Demons
        +100 to Attack Rating against Demons
        +50% Damage to Undead
        +100 to Attack Rating against Undead
        Adds 5-30 Fire Damage
        Adds 3-14 Cold Damage
        7% Life Stolen per Hit        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word17',`
    </div>
    <div class="word" id="word17">
        <h3 class="wordTitle" id="wordTitle17">Lionheart</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc17">
        +[80-110]% Enhanced Damage (varies)
        +[10-25] to Strength (varies)
        +[10-15] to Dexterity (varies)
        +[10-20] to Vitality (varies)
        +10 to Energy
        +50 to Life
        All Resistances +[20-30] (varies)
        Requirements -15%        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word18',`
    </div>
    <div class="word" id="word18">
        <h3 class="wordTitle" id="wordTitle18">Malice</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc18">
        +33% Enhanced Damage
        +9 to Maximum Damage
        -25% Target Defense
        +50 to Attack Rating
        100% Chance of Open Wounds
        Prevent Monster Heal
        -100 to Monster Defense per Hit
        Drain Life -5
        +2 Life after each Hit     
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word19',`
    </div>
    <div class="word" id="word19">
        <h3 class="wordTitle" id="wordTitle19">Melody</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc19">
        +3 to Bow and Crossbow Skills (Amazon Only)
        +20% Increased Attack Speed
        +[100-150]% Enhanced Damage (varies)
        +300% Damage to Undead
        +3 to Slow Movement (Amazon Only)
        +3 to Dodge (Amazon Only)
        +3 to Critical Strike (Amazon Only)
        Knockback
        +10 to Dexterity     
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word20',`
    </div>
    <div class="word" id="word20">
        <h3 class="wordTitle" id="wordTitle02">Radiance</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc20">
        +[20-40]% Enhanced Damage (varies)
        +75% Enhanced Defense
        +30 Defense vs. Missile
        +10 to Vitality
        +10 to Energy
        +33 to Mana
        Physical Damage Taken Reduced by 7
        15% Damage Taken Gained as Mana when Hit
        +5 to Light Radius
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word21',`
    </div>
    <div class="word" id="word21">
        <h3 class="wordTitle" id="wordTitle21">Venom</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc21">
        Ignore Target's Defense
        +75 Poison Damage over 5 Seconds
        7% Mana Stolen per Hit
        -[10-30]% to Enemy Poison Resistance (varies)
        Prevent Monster Heal
        +25% Enhanced Damage
        +[2-3] to Poison Strike (varies)
        20% Chance to Cast Level 23 Poison Nova when you Kill an Enemy
        Level 15 Desecrate (27 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word22',`
    </div>
    <div class="word" id="word22">
        <h3 class="wordTitle" id="wordTitle22">Wealth</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc22">
        +10 to Dexterity
        +4 to Mana after each Kill
        300% Extra Gold from Monsters
        100% Better Chance of Getting Magic Items      
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word23',`
    </div>
    <div class="word" id="word23">
        <h3 class="wordTitle" id="wordTitle23">Chaos</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc23">
        18% Chance to Cast Level 21 Frozen Orb on Striking
        14% Chance to Cast Level 29 Charged Bolt on Striking
        Indestructible
        +[290-340]% Enhanced Damage (varies)
        Adds 216-471 Magic Damage
        25% Chance of Open Wounds
        +5 to Whirlwind
        +10 to Strength
        +15 Life after each Demon Kill
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word24',`
    </div>
    <div class="word" id="word24">
        <h3 class="wordTitle" id="wordTitle24">Crescent Moon</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc24">
        10% Chance to Cast Level 27 Lightning on Striking
        12% Chance to Cast Level 13 Static Field on Striking (Axes/Swords/Claws Only)
        24% Chance to Cast Level 13 Static Field on Striking (Polearms/Spears Only)
        +20% Increased Attack Speed
        +[180-220]% Enhanced Damage (varies)
        Ignore Target's Defense
        -[5-15]% to Enemy Lightning Resistance (varies)
        25% Chance of Open Wounds
        +[3-5] Magic Absorb (varies)
        +2 to Mana after each Kill
        Level 18 Summon Spirit Wolf (30 Charges)       
        </b>
        </div>
    </div>
    `);
        runewordDetail.set('word25',`
    </div>
    <div class="word" id="word25">
        <h3 class="wordTitle" id="wordTitle25">Delirium</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc25">
        11% Chance to Cast Level 18 Confuse on Striking
        6% Chance to Cast Level 14 Mind Blast when Struck
        14% Chance to Cast Level 13 Terror when Struck
        +2 to All Skills
        +261 Defense
        +10 to Vitality
        50% Extra Gold from Monsters
        25% Better Chance of Getting Magic Items
        Level 17 Attract (60 Charges)
        </b>
        </div>
    </div>
    `);
        runewordDetail.set('word26',`
    </div>
    <div class="word" id="word26">
        <h3 class="wordTitle" id="wordTitle26">Duress</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc26">
        +40% Faster Hit Recovery
        +[40-80]% Enhanced Damage (varies)
        Adds 37-133 Cold Damage
        15% Chance of Crushing Blow
        33% Chance of Open Wounds
        +[150-200]% Enhanced Defense (varies)
        -20% Slower Stamina Drain
        Cold Resist +45%
        Lightning Resist +15%
        Fire Resist +15%
        Poison Resist +15%        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word27',`
    </div>
    <div class="word" id="word27">
        <h3 class="wordTitle" id="wordTitle27">Enigma</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc27">
        +2 to All Skills
        +25% Faster Run/Walk
        Level 1 Blink* (5/5 Charges)
        Replenish 1 Charge in 3 Seconds
        +[500-775] Defense (varies)
        +[0-74] to Strength (+[0.5-0.75] per Character Level) (varies)
        Increase Maximum Life 5%
        Physical Damage Taken Reduced by 4%
        15% Damage Taken Gained as Mana when Hit
        [0-74]% Better Chance of Getting Magic Items ([0.5-0.75]% per Character Level) (varies)
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word28',`
    </div>
    <div class="word" id="word28">
        <h3 class="wordTitle" id="wordTitle28">Gloom</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc28">
        15% Chance to Cast Level 9 Dim Vision when Struck
        +[20-40]% Faster Hit Recovery (varies)
        +[200-260]% Enhanced Defense (varies)
        +10 to Strength
        All Resistances +45
        Magic Damage Taken Reduced by [4-10] (varies)
        Half Freeze Duration
        5% Damage Taken Gained as Mana when Hit        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word29',`
    </div>
    <div class="word" id="word29">
        <h3 class="wordTitle" id="wordTitle29">Sanctuary</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc29">
        +20% Faster Hit Recovery
        +20% Faster Block Rate
        20% Increased Chance of Blocking
        +[130-160]% Enhanced Defense (varies)
        +20 to Dexterity
        All Resistances +[35-50] (varies)
        Magic Damage Taken Reduced by 7
        Cannot Be Frozen
        Level 12 Slow Movement (60 Charges)
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word30',`
    </div>
    <div class="word" id="word30">
        <h3 class="wordTitle" id="wordTitle30">Wind</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc30">
        18% Chance to Cast Level 29 Tornado on Striking
        +[20-30]% Faster Run/Walk (varies)
        +40% Increased Attack Speed
        5% Chance to Cast Level 9 Cyclone Armor when Struck
        +[420-480]% Enhanced Damage (varies)
        -50% Target Defense
        +50 to Attack Rating
        +4 Life after each Kill
        +1 to Light Radius
        18% Chance to Cast Level 25 Twister on Striking        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word31',`
    </div>
    <div class="word" id="word31">
        <h3 class="wordTitle" id="wordTitle31">Dragon</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc31">
        You May Summon 1 Additional Hydra
        12% Chance to Cast Level 28 Hydra on Striking
        20% Chance to Cast Level 18 Venom when Struck
        Level 12 Holy Fire Aura when Equipped
        +360 Defense
        +230 Defense vs. Missile
        +[0-37] to Strength (+0.375 per Character Level)
        +50 to Mana (Shield Only)
        Increase Maximum Mana 5% (Armor Only)
        +4% to Maximum Lightning Resist
        Physical Damage Taken Reduced by 7
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word32',`
    </div>
    <div class="word" id="word32">
        <h3 class="wordTitle" id="wordTitle32">Dream</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc32">
        10% Chance to Cast Level 15 Confuse when Struck
        Level 13 Holy Shock Aura when Equipped
        +[20-30]% Faster Hit Recovery (varies)
        +30% Enhanced Defense
        +[150-220] Defense (varies)
        +10 to Vitality
        Increase Maximum Life 5%
        +[0-61] to Mana (+0.625 per Character Level)
        All Resistances +[10-20] (varies)
        [15-30]% Better Chance of Getting Magic Items (varies)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word33',`
    </div>
    <div class="word" id="word33">
        <h3 class="wordTitle" id="wordTitle33">Edge</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc33">
        Level 15 Thorns Aura when Equipped
        +35% Increased Attack Speed
        +[320-380]% Damage to Demons (varies)
        +280% Damage to Undead
        +75 Poison Damage over 5 Seconds
        7% Life Stolen per Hit
        Prevent Monster Heal
        +[5-10] to All Attributes (varies)
        +2 to Mana after each Kill
        Reduces All Vendor Prices 15%        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word34',`
    </div>
    <div class="word" id="word34">
        <h3 class="wordTitle" id="wordTitle34">Lawbringer</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc34">
        20% Chance to Cast Level 15 Amplify Damage on Striking
        Level [16-18] Sanctuary Aura when Equipped (varies)
        -50% Target Defense
        Adds 150-210 Fire Damage
        Adds 130-180 Cold Damage
        7% Life Stolen per Hit
        Slain Monsters Rest in Peace
        +[200-250] Defense vs. Missile (varies)
        +10 to Dexterity
        75% Extra Gold from Monsters        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word35',`
    </div>
    <div class="word" id="word35">
        <h3 class="wordTitle" id="wordTitle35">Bone</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc35">
        30% Chance to Cast Level 25 Bone Spear on Striking
        10% Chance to Cast Level 15 Bone Armor when Struck
        +2 to Necromancer Skill Levels
        +[100-150] to Mana (varies)
        All Resistances +30
        Physical Damage Taken Reduced by 7        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word36',`
    </div>
    <div class="word" id="word36">
        <h3 class="wordTitle" id="wordTitle36">Enlightenment</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc36">
        5% Chance to Cast Level 15 Fire Ball on Striking
        20% Chance to Cast Level 25 Blaze when Struck
        +2 to Sorceress Skill Levels
        +20% Faster Cast Rate
        +[1-3] to Warmth (varies)
        +30% Enhanced Defense
        Fire Resist +30%
        Physical Damage Taken Reduced by 7        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word37',`
    </div>
    <div class="word" id="word37">
        <h3 class="wordTitle" id="wordTitle37">Myth</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc37">
        10% Chance to Cast Level 1 Taunt on Striking
        3% Chance to Cast Level 1 Howl when Struck
        +[1-2] to Barbarian Skill Levels (varies)
        +30 Defense vs. Missile
        Replenish Life +10
        +[1-3] to Mana after each Kill (varies)
        Attacker Takes Damage of 14
        Attacker Takes Damage of [2-297] ([2-3] per Character Level) (varies)
        Requirements -15%        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word38',`
    </div>
    <div class="word" id="word38">
        <h3 class="wordTitle" id="wordTitle38">Peace</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc38">
        You May Summon 1 Additional Valkyrie
        8% Chance to Cast Level 12 Slow Movement when Struck
        +2 to Amazon Skill Levels
        +20% Faster Hit Recovery
        +2 to Critical Strike
        Cold Resist +30%
        Attacker Takes Damage of 14        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word39',`
    </div>
    <div class="word" id="word39">
        <h3 class="wordTitle" id="wordTitle39">Principle</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc39">
        50% Chance to Cast Level 25 Holy Bolt on Striking
        +2 to Paladin Skill Levels
        +[50-80]% Damage to Demons (varies)
        +[50-80]% Damage to Undead (varies)
        +[50-100] to Life (varies)
        15% Slower Stamina Drain
        +4% to Maximum Poison Resist
        Fire Resist +30%        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word40',`
    </div>
    <div class="word" id="word40">
        <h3 class="wordTitle" id="wordTitle40">Rain</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc40">
        5% Chance to Cast Level 15 Twister on Striking
        5% Chance to Cast Level 15 Cyclone Armor when Struck
        +1 to Summoning Skills (Druid Only)
        +[1-2] to Druid Skill Levels (varies)
        +[100-150] to Mana (varies)
        Lightning Resist +30%
        Magic Damage Taken Reduced by 7
        15% Damage Taken Gained as Mana when Hit        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word41',`
    </div>
    <div class="word" id="word41">
        <h3 class="wordTitle" id="wordTitle41">Treachery</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc41">
        25% Chance to Cast Level 15 Venom on Striking
        35% Chance to Cast Level 25 Psychic Hammer when Struck
        +2 to Assassin Skills
        +45% Increased Attack Speed
        +20% Faster Hit Recovery
        Cold Resist +30%
        50% Extra Gold from Monsters        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word42',`
    </div>
    <div class="word" id="word42">
        <h3 class="wordTitle" id="wordTitle42">Pattern</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc42">
        +30% Faster Block Rate
        +[80-120]% Enhanced Damage (varies)
        10% Bonus to Attack Rating
        Adds 12-32 Fire Damage
        Adds 1-50 Lightning Damage
        +75 Poison Damage over 5 Seconds
        +6 to Strength
        +6 to Dexterity
        All Resistances +15
        +2 to Mana after each Kill        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word43',`
    </div>
    <div class="word" id="word43">
        <h3 class="wordTitle" id="wordTitle43">Plague</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc43">
        25% Chance to Cast Level 15 Poison Nova on Striking
        20% Chance to Cast Level 12 Lower Resist when Struck
        Level [13-17] Cleansing Aura when Equipped (varies)
        +[1-2] to All Skills
        +20% Faster Cast Rate
        +[260-380]% Damage to Demons (varies)
        -20% to Enemy Poison Resistance
        [0-37]% Deadly Strike (0.375% per Character Level)
        25% Chance of Open Wounds
        Freezes Target +3
        +10 to Strength        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word44',`
    </div>
    <div class="word" id="word44">
        <h3 class="wordTitle" id="wordTitle44">Holy Thunder</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc44">
        +60% Enhanced Damage
        +10 to Maximum Damage
        -25% Target Defense
        Adds 5-30 Fire Damage
        Adds 21-110 Lightning Damage
        +75 Poison Damage over 5 Seconds
        +3 to Holy Shock (Paladin Only)
        +5% to Maximum Lightning Resist
        Lightning Resist +60%
        Level 7 Chain Lightning (60 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word45',`
    </div>
    <div class="word" id="word45">
        <h3 class="wordTitle" id="wordTitle45">Memory</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc45">
        +3 to Sorceress Skill Levels
        +33% Faster Cast Rate
        +9 to Minimum Damage
        -25% Target Defense
        +3 to Energy Shield (Sorceress Only)
        +2 to Static Field (Sorceress Only)
        +50% Enhanced Defense
        +10 to Vitality
        +10 to Energy
        Increase Maximum Mana [20-40]% (varies)
        Magic Damage Taken Reduced by 7        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word46',`
    </div>
    <div class="word" id="word46">
        <h3 class="wordTitle" id="wordTitle46">Bramble</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc46">
        Level [15-21] Thorns Aura when Equipped (varies)
        +50% Faster Hit Recovery
        +[30-50]% to Poison Skill Damage (varies)
        +300 Defense
        Increase Maximum Mana 5%
        Regenerate Mana 15%
        +4% to Maximum Cold Resist
        Fire Resist +30%
        Poison Resist +100%
        +[5-10] Life after each Kill (varies)
        Level 13 Spirit of Barbs (33 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word47',`
    </div>
    <div class="word" id="word47">
        <h3 class="wordTitle" id="wordTitle47">Chains of Honor</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc47">
        +2 to All Skills
        +200% Damage to Demons
        +100% Damage to Undead
        8% Life Stolen per Hit
        +70% Enhanced Defense
        +20 to Strength
        Replenish Life +10
        All Resistances +[50-60] (varies)
        Physical Damage Taken Reduced by 4%
        25% Better Chance of Getting Magic Items        
        </b>
        </div>
    </div>
    `);
        runewordDetail.set('word48',`
    </div>
    <div class="word" id="word48">
        <h3 class="wordTitle" id="wordTitle48">Exile</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc48">
        25% Chance to Cast level 18 Amplify Damage on Striking
        Level [13-16] Defiance Aura when Equipped (varies)
        +2 to Offensive Auras (Paladin Only)
        +30% Faster Block Rate
        Freezes Target
        +[220-260]% Enhanced Defense (varies)
        Replenish Life +10
        +4% to Maximum Cold Resist
        +4% to Maximum Fire Resist
        25% Better Chance of Getting Magic Items
        Repairs 1 Durability Every 4 Seconds
        </b>
        </div>
    </div>
    `);
        runewordDetail.set('word49',`
    </div>
    <div class="word" id="word49">
        <h3 class="wordTitle" id="wordTitle49">Famine</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc49">
        Indestructible
        +30% Increased Attack Speed
        +[320-370]% Enhanced Damage (varies)
        Ignore Target's Defense
        Adds 150-300 Fire Damage
        Adds 151-350 Lightning Damage
        Adds 150-300 Cold Damage
        -[10-20]% to Enemy Fire Resistance (varies)
        -[10-20]% to Enemy Lightning Resistance (varies)
        -[10-20]% to Enemy Cold Resistance (varies)
        +10 to Strength        
        </b>
        </div>
    </div>
    `);
        runewordDetail.set('word50',`
    </div>
    <div class="word" id="word50">
        <h3 class="wordTitle" id="wordTitle50">Hand of Justice</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc50">
        100% Chance to Cast Level 36 Blaze when you Level-Up
        100% Chance to Cast Level 48 Meteor when you Die
        Level 12 Holy Fire Aura when Equipped
        +33% Increased Attack Speed
        +[280-330]% Enhanced Damage (varies)
        Ignore Target's Defense
        7% Life Stolen per Hit
        -20% to Enemy Fire Resistance
        20% Deadly Strike
        +4 Life after each Kill
        Freezes Target +3        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word51',`
    </div>
    <div class="word" id="word51">
        <h3 class="wordTitle" id="wordTitle51">Heart of the Oak</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc51">
        +3 to All Skills
        +30% Faster Cast Rate
        +75% Damage to Demons
        +100 to Attack Rating against Demons
        Adds 3-14 Cold Damage
        7% Mana Stolen per Hit
        +10 to Dexterity
        Replenish Life +20
        Increase Maximum Mana 15%
        All Resistances +[20-30] (varies)
        Level 4 Oak Sage (25 Charges)
        Level 14 Raven (60 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word52',`
    </div>
    <div class="word" id="word52">
        <h3 class="wordTitle" id="wordTitle52">Kingslayer</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc52">
        +30% Increased Attack Speed
        +[230-270]% Enhanced Damage (varies)
        -25% Target Defense
        20% Bonus to Attack Rating
        33% Chance of Crushing Blow
        50% Chance of Open Wounds
        Prevent Monster Heal
        +10 to Vengeance
        +10 to Strength
        Repairs 1 Durability in 10 Seconds        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word53',`
    </div>
    <div class="word" id="word53">
        <h3 class="wordTitle" id="wordTitle53">Passion</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc53">
        +25% Increased Attack Speed
        +[185-235]% Enhanced Damage (varies)
        [50-80]% Bonus to Attack Rating (varies)
        +75% Damage to Undead
        +50 to Attack Rating against Undead
        Adds 1-50 Lightning Damage
        +1 to Concentrate
        +1 to Zeal
        Hit Blinds Target +10
        75% Extra Gold from Monsters
        Level 8 Heart of Wolverine (36 Charges)     
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word54',`
    </div>
    <div class="word" id="word54">
        <h3 class="wordTitle" id="wordTitle54">Stone</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc54">
        Indestructible
        +1 to All Skills
        +60% Faster Hit Recovery
        +[230-320]% Enhanced Defense (varies)
        +[10-16] to Strength (varies)
        +[10-16] to Vitality (varies)
        +10 to Energy
        All Resistances +15
        Level 16 Clay Golem (36 Charges)    
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word55',`
    </div>
    <div class="word" id="word55">
        <h3 class="wordTitle" id="wordTitle55">Brand</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc55">
        50% Chance to Cast Level 50 Bone Spear on Striking
        65% Chance to Cast Level 20 Amplify Damage when Struck
        Fires Explosive Arrows or Bolts (Level 15)
        +[260-340]% Enhanced Damage (varies)
        Ignore Target's Defense
        20% Bonus to Attack Rating
        +[280-330]% Damage to Demons (varies)
        20% Deadly Strike
        Prevent Monster Heal
        Knockback        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word56',`
    </div>
    <div class="word" id="word56">
        <h3 class="wordTitle" id="wordTitle56">Faith</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc56">
        Level [12-15] Fanaticism Aura when Equipped (varies)
        +[250-300]% Enhanced Damage (varies)
        Ignore Target's Defense
        300% Bonus to Attack Rating
        +75% Damage to Undead
        +50 to Attack Rating against Undead
        +120 Fire Damage
        All Resistances +15
        [6-8]% Reanimate As: Returned (varies)
        75% Extra Gold from Monsters        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word57',`
    </div>
    <div class="word" id="word57">
        <h3 class="wordTitle" id="wordTitle57">Fortitude</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc57">
        +25% Faster Cast Rate
        +[250-300]% Enhanced Damage (varies)
        +200% Enhanced Defense
        +15 Defense
        +[1-148] to Life (+[1-1.5] per Character Level) (varies)
        Replenish Life +10
        +4% to Maximum Lightning Resist
        All Resistances +[25-30] (varies)
        Physical Damage Taken Reduced by 7
        12% Damage Taken Gained as Mana when Hit
        +1 to Light Radius        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word58',`
    </div>
    <div class="word" id="word58">
        <h3 class="wordTitle" id="wordTitle58">Harmony</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc58">
        Level 10 Vigor Aura when Equipped
        +[200-275]% Enhanced Damage (varies)
        +9 to Minimum Damage
        +9 to Maximum Damage
        Adds 55-160 Fire Damage
        Adds 55-160 Lightning Damage
        Adds 55-160 Cold Damage
        +10 to Dexterity
        Regenerate Mana 20%
        +2 to Mana after each Kill
        +2 to Light Radius
        Level 20 Revive (25 Charges)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word59',`
    </div>
    <div class="word" id="word59">
        <h3 class="wordTitle" id="wordTitle59">Ice</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc59">
        20% Chance to Cast Level 32 Frost Nova on Striking
        100% Chance to Cast Level 40 Blizzard when you Level-Up
        Level 18 Holy Freeze Aura when Equipped
        +20% Increased Attack Speed
        +[140-210]% Enhanced Damage (varies)
        Ignore Target's Defense
        7% Life Stolen per Hit
        +[25-30]% to Cold Skill Damage (varies)
        -20% to Enemy Cold Resistance
        20% Deadly Strike
        [3-309]% Extra Gold from Monsters (3.125 per Character Level)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word60',`
    </div>
    <div class="word" id="word60">
        <h3 class="wordTitle" id="wordTitle60">Infinity</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc60">
        50% Chance to Cast Level 20 Lightning when you Kill an Enemy
        Level 12 Conviction Aura when Equipped
        +35% Faster Run/Walk
        +35% Faster Cast Rate (Staves Only)
        +[255-325]% Enhanced Damage (varies)
        -[45-55]% to Enemy Lightning Resistance (varies)
        40% Chance of Crushing Blow
        Prevent Monster Heal
        +[0-49] to Vitality (+0.5 per Character Level)
        30% Better Chance of Getting Magic Items
        +3 to Cyclone Armor        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word61',`
    </div>
    <div class="word" id="word61">
        <h3 class="wordTitle" id="wordTitle2">Insight</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc2">
        Level [12-17] Meditation Aura when Equipped (varies)
        +35% Faster Cast Rate
        +[120-180]% Enhanced Damage (varies)
        +9 to Minimum Damage
        [180-250]% Bonus to Attack Rating (varies)
        Adds 5-30 Fire Damage
        +75 Poison Damage over 5 Seconds
        +[1-6] to Critical Strike (varies)
        +[10-20] to All Attributes (varies)
        +2 to Mana after each Kill
        23% Better Chance of Getting Magic Items        
        </b>
        </div>
    </div>
    `);
        runewordDetail.set('word62',`
    </div>
    <div class="word" id="word62">
        <h3 class="wordTitle" id="wordTitle62">Oath</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc62">
        30% Chance to Cast Level 20 Bone Spirit on Striking
        Indestructible
        +50% Increased Attack Speed
        +[210-340]% Enhanced Damage (varies)
        +75% Damage to Demons
        +100 to Attack Rating against Demons
        Prevent Monster Heal
        +10 to Energy
        +[10-15] Magic Absorb (varies)
        +8 to Heart of Wolverine        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word63',`
    </div>
    <div class="word" id="word63">
        <h3 class="wordTitle" id="wordTitle63">Phoenix</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc63">
        20% Chance to Cast Level 22 Fire Ball on Striking
        100% Chance to Cast Level 40 Blaze when you Level-Up
        Level [10-15] Redemption Aura when Equipped (varies)
        +[400-450]% Enhanced Damage (varies)
        -28% to Enemy Fire Resistance
        +[350-400] Defense vs. Missile (varies)
        +[15-21] Fire Absorb (varies)  
        Ignore Target's Defense (Weapon Only)
        14% Mana Stolen per Hit (Weapon Only)
        20% Deadly Strike (Weapon Only)
        +50 to Life (Shield Only)
        +4% to Maximum Lightning Resist (Shield Only)
        +8% to Maximum Fire Resist (Shield Only)
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word64',`
    </div>
    <div class="word" id="word64">
        <h3 class="wordTitle" id="wordTitle64">Pride</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc64">
        25% Chance to Cast Level 17 Fire Wall when Struck
        Level [16-20] Concentration Aura when Equipped (varies)
        [260-300]% Bonus to Attack Rating (varies)
        +[4-396]% Enhanced Maximum Damage (+4% per Character Level)
        Adds 50-280 Lightning Damage
        20% Deadly Strike
        +4 Life after each Kill
        Freezes Target +3
        +10 to Vitality
        Replenish Life +8
        [1-185]% Extra Gold from Monsters (1.875% per Character Level)        
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word65',`
    </div>
    <div class="word" id="word65">
        <h3 class="wordTitle" id="wordTitle65">Rift</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc65">
        20% Chance to Cast Level 21 Tornado on Striking
        16% Chance to Cast Level 21 Frozen Orb on Attack
        20% Bonus to Attack Rating
        Adds 160-250 Magic Damage
        Adds 60-180 Fire Damage
        +[15-20] to Strength (varies)
        +[25-30] to Dexterity (varies)
        +[15-20] to Vitality (varies)
        +[15-20] to Energy (varies)
        38% Damage Taken Gained as Mana when Hit
        75% Extra Gold from Monsters
        Level 15 Iron Maiden (40 Charges)
        Requirements -20%                
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word66',`
    </div>
    <div class="word" id="word66">
        <h3 class="wordTitle" id="wordTitle66">Spirit</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc66">
        +2 to All Skills (Staves Only)
        +1 to All Skills (Swords Only)
        +[25-35]% Faster Cast Rate (varies)
        +25% Faster Hit Recovery
        Adds 1-50 Lightning Damage
        Adds 3-14 Cold Damage
        +75 Poison Damage over 5 Seconds
        7% Life Stolen per Hit
        Requirements -15%
        +[11-22] to Vitality (varies)
        +[59-82] to Mana (varies)
        +[3-8] Magic Absorb (varies)       
        
        +1 to All Skills
        +[25-35]% Faster Cast Rate (varies)
        +25% Faster Hit Recovery
        Requirements -15%
        +[11-22] to Vitality (varies)
        +[59-82] to Mana (varies)
        Cold Resist +35%
        Lightning Resist +35%
        Poison Resist +35%
        +[3-8] Magic Absorb (varies)
        Attacker Takes Damage of 14
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word67',`
    </div>
    <div class="word" id="word67">
        <h3 class="wordTitle" id="wordTitle67">Voice of Reason</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc67">
        15% Chance to Cast Level 16 Frozen Orb on Striking
        18% Chance to Cast Level 20 Ice Blast on Striking
        +50 to Attack Rating
        +[170-300]% Damage to Demons (varies)
        +[205-325]% Damage to Undead (varies)
        +50 to Attack Rating against Undead
        Adds 200-320 Cold Damage
        -24% to Enemy Cold Resistance
        +10 to Dexterity
        Cannot Be Frozen
        75% Extra Gold from Monsters
        +1 to Light Radius               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word68',`
    </div>
    <div class="word" id="word68">
        <h3 class="wordTitle" id="wordTitle68">Wrath</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc68">
        60% Chance to Cast Level 18 Amplify Damage on Striking
        +[30-45]% Increased Attack Speed (varies)
        +375% Damage to Demons
        +100 to Attack Rating against Demons
        +[250-300]% Damage to Undead (varies)
        Adds 85-120 Magic Damage
        Adds 41-240 Lightning Damage
        20% Chance of Crushing Blow
        Prevent Monster Heal
        +10 to Energy
        Cannot Be Frozen              
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word69',`
    </div>
    <div class="word" id="word69">
        <h3 class="wordTitle" id="wordTitle69">Honor</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc69">
        +1 to All Skills
        +160% Enhanced Damage
        +9 to Minimum Damage
        +9 to Maximum Damage
        +250 to Attack Rating
        7% Life Stolen per Hit
        25% Deadly Strike
        +10 to Strength
        Replenish Life +10
        +2 to Mana after each Kill
        +1 to Light Radius                
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word70',`
    </div>
    <div class="word" id="word70">
        <h3 class="wordTitle" id="wordTitle70">Beast</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc70">
        Level [8-10] Fanaticism Aura when Equipped (varies)
        +40% Increased Attack Speed
        +[260-290]% Enhanced Damage (varies)
        20% Chance of Crushing Blow
        25% Chance of Open Wounds
        Prevent Monster Heal
        +3 to Hunger
        +3 to Maul
        +3 to Werebear
        +10 to Energy
        +2 to Mana after each Kill
        Level 13 Summon Grizzly (35 Charges)               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word71',`
    </div>
    <div class="word" id="word71">
        <h3 class="wordTitle" id="wordTitle71">Call To Arms</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc71">
        +1 to All Skills
        +40% Increased Attack Speed
        +[250-290]% Enhanced Damage (varies)
        Adds 5-30 Fire Damage
        7% Life Stolen per Hit
        Prevent Monster Heal
        +[2-6] to Battle Command (varies)
        +[1-6] to Battle Orders (varies)
        +[1-4] to Battle Cry (varies)
        Replenish Life +12
        30% Better Chance of Getting Magic Items                
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word72',`
    </div>
    <div class="word" id="word72">
        <h3 class="wordTitle" id="wordTitle72">Doom</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc72">
        5% Chance to Cast Level 18 Molten Boulder on Striking (Axes/Hammers/Polearms/Spears/Swords Only)
        5% Chance to Cast Level 28 Molten Boulder on Striking (Staves Only)
        Level 12 Holy Freeze Aura when Equipped
        +2 to All Skills
        +45% Increased Attack Speed
        +[330-370]% Enhanced Damage (varies)
        -[30-50]% to Enemy Cold Resistance (varies)
        20% Deadly Strike
        25% Chance of Open Wounds
        Prevent Monster Heal (Axes/Hammers/Polearms/Spears/Swords Only)
        +30% Faster Cast Rate (Staves Only)
        Freezes Target +3
        Requirements -20%              
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word73',`
    </div>
    <div class="word" id="word73">
        <h3 class="wordTitle" id="wordTitle73">Eternity</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc73">
        Indestructible
        +[260-310]% Enhanced Damage (varies)
        Adds 70-71 Damage
        7% Life Stolen per Hit
        20% Chance of Crushing Blow
        +4 Life after each Kill
        Cannot Be Frozen
        30% Better Chance of Getting Magic Items
        +4 to Revive
        You May Now Summon 6 Additional Revives
        10% Reanimate As: Wraith               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word74',`
    </div>
    <div class="word" id="word74">
        <h3 class="wordTitle" id="wordTitle74">Death</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc74">
        Indestructible
        25% Chance to Cast Level 18 Glacial Spike on Attack
        100% Chance to Cast Level 44 Chain Lightning when you Die
        +[300-355]% Enhanced Damage (varies)
        20% Bonus to Attack Rating
        +50 to Attack Rating
        Adds 1-50 Lightning Damage
        7% Mana Stolen per Hit
        50% Chance of Crushing Blow
        [0-24]% Deadly Strike (0.25 per Character Level)
        +1 to Light Radius
        +18 to Blood Golem
        Requirements -20%               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word75',`
    </div>
    <div class="word" id="word75">
        <h3 class="wordTitle" id="wordTitle75">Destruction</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc75">
        5% Chance to Cast Level 33 Molten Boulder on Striking
        5% Chance to Cast Level 45 Meteor on Striking
        23% Chance to Cast Level 22 Frost Nova on Striking
        15% Chance to Cast Level 32 Nova on Attack
        +[30-40]% Increased Attack Speed (varies)
        +300% Enhanced Damage
        Ignore Target's Defense
        7% Mana Stolen per Hit
        20% Chance of Crushing Blow
        20% Deadly Strike
        +10 to Dexterity               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word76',`
    </div>
    <div class="word" id="word76">
        <h3 class="wordTitle" id="wordTitle76">Grief</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc76">
        35% Chance to Cast Level 15 Venom on Striking
        +[30-40]% Increased Attack Speed (varies)
        Adds [200-240] to [260-300] Damage (varies)
        -25% Target Defense
        +[1-185]% Damage to Demons (+1.875% per Character Level)
        Adds 5-30 Fire Damage
        -[20-25]% to Enemy Poison Resistance (varies)
        20% Deadly Strike
        Prevent Monster Heal
        +2 to Mana after each Kill
        +[10-15] Life after each Kill (varies)               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word77',`
    </div>
    <div class="word" id="word77">
        <h3 class="wordTitle" id="wordTitle77">Obedience</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc77">
        30% Chance to Cast Level 21 Enchant Fire when you Kill an Enemy
        +40% Faster Hit Recovery
        +[280-320]% Enhanced Damage (varies)
        -25% Target Defense
        Adds 3-14 Cold Damage
        -25% to Enemy Fire Resistance
        40% Chance of Crushing Blow
        +[200-300] Defense (varies)
        +10 to Strength
        +10 to Dexterity
        All Resistances +[20-30] (varies)
        Requirements -20%               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word78',`
    </div>
    <div class="word" id="word78">
        <h3 class="wordTitle" id="wordTitle78">Silence</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc78">
        Level [23-25] Thorns Aura when Equipped (varies)
        +2 to All Skills
        +20% Increased Attack Speed
        +20% Faster Hit Recovery
        +[300-400]% Enhanced Damage (varies)
        +75% Damage to Undead
        +50 to Attack Rating against Undead
        11% Mana Stolen per Hit
        Hit Blinds Target +33
        All Resistances +50
        +2 to Mana after each Kill
        30% Better Chance of Getting Magic Items
        Requirements -20%                
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word79',`
    </div>
    <div class="word" id="word79">
        <h3 class="wordTitle" id="wordTitle79">Breath of the Dying</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc79">
        50% Chance to Cast Level 20 Poison Nova when you Kill an Enemy
        Indestructible
        +60% Increased Attack Speed
        +[350-400]% Enhanced Damage (varies)
        -25% Target Defense
        +50 to Attack Rating
        +200% Damage to Undead
        +50 to Attack Rating against Undead
        7% Mana Stolen per Hit
        [8-10]% Life Stolen per Hit (varies)
        Prevent Monster Heal
        +[20-30] to All Attributes (varies)
        +1 to Light Radius
        Requirements -20%               
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word80',`
    </div>
    <div class="word" id="word80">
        <h3 class="wordTitle" id="wordTitle80">Last Wish</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc80">
        10% Chance to Cast Level 18 Life Tap on Striking
        60% Chance to Cast Level 40 Charged Bolt on Attack
        6% Chance to Cast Level 11 Fade when Struck
        Level 17 Might Aura when Equipped
        +[350-400]% Enhanced Damage (varies)
        Ignore Target's Defense
        [60-70]% Chance of Crushing Blow (varies)
        Prevent Monster Heal
        +4 Life after each Kill
        [0-49]% Better Chance of Getting Magic Items (0.5% per Character Level)              
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word81',`
    </div>
    <div class="word" id="word81">
        <h3 class="wordTitle" id="wordTitle81">Unending Will</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc81">
        You May Summon [1-2] Additional Golems (varies)
        +25% Faster Cast Rate
        +50% Enhanced Damage
        +[2-3] to Golem Mastery (varies)
        Freezes Target +3
        +[300-450] Defense (varies)
        Cold Resist +30%
        Poison Resist +30%
        Physical Damage Taken Reduced by [5-7] (varies)
        +50% Damage to Undead             
        </b>
        </div>
    </div>
    `);
    runewordDetail.set('word82',`
    </div>
    <div class="word" id="word82">
        <h3 class="wordTitle" id="wordTitle82">Zenith</h3>
        <div class="wordDescContainer">
        <b class="wordDesc hidden" id="wordDesc82">
        Indestructible
        Level [8-12] Salvation Aura when Equipped (varies)
        +2 to All Skills
        +20% Faster Run/Walk
        +20% Increased Attack Speed
        +[200-300] Enhanced Damage (varies)
        Ignore Target's Defense
        Adds 205-280 Fire Damage
        Adds 201-300 Lightning Damage
        Adds 203-264 Cold Damage                  
        </b>
        </div>
    </div>
    `);
    
    

let wordDiv = '';

for (let i = 0; i < 81; i++) {
  wordDiv += runewordDetail.get(`word${i}`);
}
wordDetail.innerHTML = wordDiv;

//Click Script
const runeImg = document.querySelectorAll(".runeImg");
const runeBox = document.querySelectorAll("input.runeBox");
const word = document.querySelectorAll(".word");
const runeImgSmall = document.querySelectorAll(".runeImgSmall");

runeImg.forEach(function(item) {
  item.addEventListener('click', function() {
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    item.classList.toggle("selected");
    runeBox[num].checked = !runeBox[num].checked;
  });
});

//Runeword combination and show script
const runeTable = document.querySelector("#runeTable");
const runeTableBody = runeTable.querySelector("tbody");

function runewordShow() {
  //Leaf (TirRal)
  if (runeBox[3].checked && runeBox[8].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Lore (OrtSol)
  if (runeBox[9].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Nadir (NefTir)
  if (runeBox[4].checked && runeBox[3].checked) {
    word[3].classList.remove("hidden");
  } else {
    word[3].classList.add("hidden");
  }
  //Rhyme (ShaelEth)
  if (runeBox[13].checked && runeBox[5].checked) {
    word[4].classList.remove("hidden");
  } else {
    word[4].classList.add("hidden");
  }
  //Smoke (NefLum)
  if (runeBox[4].checked && runeBox[17].checked) {
    word[5].classList.remove("hidden");
  } else {
    word[5].classList.add("hidden");
  }
  //Stealth (TalEth)
  if (runeBox[7].checked && runeBox[5].checked) {
    word[6].classList.remove("hidden");
  } else {
    word[6].classList.add("hidden");
  }
  //Steel (TirEl)
  if (runeBox[3].checked && runeBox[1].checked) {
    word[7].classList.remove("hidden");
  } else {
    word[7].classList.add("hidden");
  }
  //Strength (AmnTir)
  if (runeBox[11].checked && runeBox[3].checked) {
    word[8].classList.remove("hidden");
  } else {
    word[8].classList.add("hidden");
  }
  //White (DolIo)
  if (runeBox[14].checked && runeBox[16].checked) {
    word[9].classList.remove("hidden");
  } else {
    word[9].classList.add("hidden");
  }
  //Zephyr (OrtEth)
  if (runeBox[9].checked && runeBox[5].checked) {
    word[10].classList.remove("hidden");
  } else {
    word[10].classList.add("hidden");
  }
  //Prudence (MalTir)
  if (runeBox[23].checked && runeBox[3].checked) {
    word[11].classList.remove("hidden");
  } else {
    word[11].classList.add("hidden");
  }
  //Splendor (EthLum)
  if (runeBox[5].checked && runeBox[17].checked) {
    word[12].classList.remove("hidden");
  } else {
    word[12].classList.add("hidden");
  }
  //Ancient's Pledge (RalOrtTal)
  if (runeBox[8].checked && runeBox[9].checked && runeBox[7].checked) {
    word[13].classList.remove("hidden");
  } else {
    word[13].classList.add("hidden");
  }
  //Black	Thul	Io	Nef
  if (runeBox[10].checked && runeBox[16].checked && runeBox[4].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Fury	Jah	Gul	Eth	
  if (runeBox[31].checked && runeBox[25].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //King's Grace	Amn	Ral	Thul	
  if (runeBox[11].checked && runeBox[8].checked && runeBox[10].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Lionheart	Hel	Lum	Fal
  if (runeBox[15].checked && runeBox[17].checked && runeBox[19].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Malice	Ith	El	Eth
  if (runeBox[6].checked && runeBox[1].checked && runeBox[5].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Melody	Shael	Ko	Nef	
  if (runeBox[13].checked && runeBox[18].checked && runeBox[4].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Radiance	Nef	Sol	Ith
  if (runeBox[4].checked && runeBox[12].checked && runeBox[6].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Venom	Tal	Dol	Mal
  if (runeBox[7].checked && runeBox[14].checked && runeBox[23].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Wealth	Lem	Ko	Tir
  if (runeBox[20].checked && runeBox[18].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Chaos	Fal	Ohm	Um	
  if (runeBox[19].checked && runeBox[27].checked && runeBox[22].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Crescent Moon	Shael	Um	Tir	
  if (runeBox[13].checked && runeBox[22].checked && runeBox[3].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Delirium	Lem	Ist	Io
  if (runeBox[20].checked && runeBox[24].checked && runeBox[16].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Duress	Shael	Um	Thul
  if (runeBox[13].checked && runeBox[22].checked && runeBox[10].checked) {
    word[1].classList.remove("hidden");
  } else {
    word[1].classList.add("hidden");
  }
  //Enigma	Jah	Ith	Ber
  if (runeBox[31].checked && runeBox[6].checked && runeBox[30].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Gloom	Fal	Um	Pul
  if (runeBox[19].checked && runeBox[22].checked && runeBox[21].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Sanctuary	Ko	Ko	Mal
  if (runeBox[18].checked && runeBox[18].checked && runeBox[23].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Wind	Sur	Sur	El
  if (runeBox[29].checked && runeBox[29].checked && runeBox[1].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Dragon	Sur	Lo	Sol
  if (runeBox[29].checked && runeBox[28].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Dream	Io	Jah	Pul
  if (runeBox[16].checked && runeBox[31].checked && runeBox[21].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Edge	Tir	Tal	Amn
  if (runeBox[3].checked && runeBox[7].checked && runeBox[11].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Lawbringer	Amn	Lem	Ko
  if (runeBox[11].checked && runeBox[20].checked && runeBox[18].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Bone	Sol	Um	Um	
  if (runeBox[12].checked && runeBox[22].checked && runeBox[22].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Enlightenment	Pul	Ral	Sol	
  if (runeBox[21].checked && runeBox[8].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Myth	Hel	Amn	Nef	
  if (runeBox[15].checked && runeBox[11].checked && runeBox[4].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Peace	Shael	Thul	Amn
  if (runeBox[13].checked && runeBox[10].checked && runeBox[11].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Principle	Ral	Pul	Eld	
  if (runeBox[8].checked && runeBox[21].checked && runeBox[2].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Rain	Ort	Mal	Ith	
  if (runeBox[9].checked && runeBox[23].checked && runeBox[6].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Treachery	Shael	Thul	Lem	
  if (runeBox[13].checked && runeBox[10].checked && runeBox[20].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Pattern	Tal	Ort	Tir	
  if (runeBox[7].checked && runeBox[9].checked && runeBox[3].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Plague	Cham	Fal	Um	
  if (runeBox[32].checked && runeBox[19].checked && runeBox[22].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Holy Thunder	Eth	Ral	Ort	Tal
  if (runeBox[5].checked && runeBox[8].checked && runeBox[9].checked && runeBox[7].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Memory	Lum	Io	Sol	Eth
  if (runeBox[17].checked && runeBox[16].checked && runeBox[12].checked && runeBox[5].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Bramble	Ral	Ohm	Sur	Eth	
  if (runeBox[8].checked && runeBox[27].checked && runeBox[29].checked && runeBox[5].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Chains of Honor	Dol	Um	Ber	Ist	
  if (runeBox[14].checked && runeBox[22].checked && runeBox[30].checked && runeBox[24].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Exile	Vex	Ohm	Ist	Dol	
  if (runeBox[26].checked && runeBox[27].checked && runeBox[24].checked && runeBox[14].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Famine	Fal	Ohm	Ort	Jah	
  if (runeBox[19].checked && runeBox[27].checked && runeBox[9].checked && runeBox[31].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Hand of Justice	Sur	Cham	Amn	Lo
  if (runeBox[29].checked && runeBox[32].checked && runeBox[11].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Heart of the Oak	Ko	Vex	Pul	Thul	 
  if (runeBox[18].checked && runeBox[26].checked && runeBox[21].checked && runeBox[10].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Kingslayer	Mal	Um	Gul	Fal	
  if (runeBox[23].checked && runeBox[22].checked && runeBox[25].checked && runeBox[19].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Passion	Dol	Ort	Eld	Lem	 
  if (runeBox[14].checked && runeBox[9].checked && runeBox[2].checked && runeBox[20].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Stone	Shael	Um	Pul	Lum	
  if (runeBox[13].checked && runeBox[22].checked && runeBox[21].checked && runeBox[17].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Brand	Jah	Lo	Mal	Gul	
  if (runeBox[31].checked && runeBox[28].checked && runeBox[23].checked && runeBox[25].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Faith	Ohm	Jah	Lem	Eld
  if (runeBox[27].checked && runeBox[31].checked && runeBox[20].checked && runeBox[2].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Fortitude	El	Sol	Dol	Lo	 	
  if (runeBox[1].checked && runeBox[12].checked && runeBox[14].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Harmony	Tir	Ith	Sol	Ko
  if (runeBox[3].checked && runeBox[6].checked && runeBox[12].checked && runeBox[18].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Ice	Amn	Shael	Jah	Lo	
  if (runeBox[11].checked && runeBox[13].checked && runeBox[31].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Infinity	Ber	Mal	Ber	Ist	
  if (runeBox[30].checked && runeBox[23].checked && runeBox[30].checked && runeBox[24].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Insight	Ral	Tir	Tal	Sol	 
  if (runeBox[8].checked && runeBox[3].checked && runeBox[7].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Oath	Shael	Pul	Mal	Lum	 
  if (runeBox[13].checked && runeBox[21].checked && runeBox[23].checked && runeBox[17].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Phoenix	Vex	Vex	Lo	Jah	 
  if (runeBox[26].checked && runeBox[26].checked && runeBox[28].checked && runeBox[31].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Pride	Cham	Sur	Io	Lo	 
  if (runeBox[32].checked && runeBox[29].checked && runeBox[16].checked && runeBox[28].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Rift	Hel	Ko	Lem	Gul	
  if (runeBox[15].checked && runeBox[18].checked && runeBox[20].checked && runeBox[25].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Spirit	Tal	Thul	Ort	Amn	
  if (runeBox[7].checked && runeBox[10].checked && runeBox[9].checked && runeBox[11].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Voice of Reason	Lem	Ko	El	Eld	
  if (runeBox[20].checked && runeBox[18].checked && runeBox[1].checked && runeBox[2].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Wrath	Pul	Lum	Ber	Mal	 
  if (runeBox[21].checked && runeBox[17].checked && runeBox[30].checked && runeBox[23].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Honor	Amn	El	Ith	Tir	Sol	
  if (runeBox[11].checked && runeBox[1].checked && runeBox[6].checked && runeBox[3].checked && runeBox[12].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Beast	Ber	Tir	Um	Mal	Lum	
  if (runeBox[30].checked && runeBox[3].checked && runeBox[22].checked && runeBox[23].checked && runeBox[17].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Call To Arms	Amn	Ral	Mal	Ist	Ohm	
  if (runeBox[11].checked && runeBox[8].checked && runeBox[23].checked && runeBox[24].checked && runeBox[27].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Doom	Hel	Ohm	Um	Lo	Cham	
  if (runeBox[15].checked && runeBox[27].checked && runeBox[22].checked && runeBox[28].checked && runeBox[32].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Eternity	Amn	Ber	Ist	Sol	Sur	 
  if (runeBox[11].checked && runeBox[30].checked && runeBox[24].checked && runeBox[12].checked && runeBox[29].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Death	Hel	El	Vex	Ort	Gul	 	
  if (runeBox[15].checked && runeBox[1].checked && runeBox[26].checked && runeBox[9].checked && runeBox[25].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Destruction	Vex	Lo	Ber	Jah	Ko	
  if (runeBox[26].checked && runeBox[28].checked && runeBox[30].checked && runeBox[31].checked && runeBox[18].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Grief	Eth	Tir	Lo	Mal	Ral	
  if (runeBox[5].checked && runeBox[3].checked && runeBox[28].checked && runeBox[23].checked && runeBox[8].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Obedience	Hel	Ko	Thul	Eth	Fal
  if (runeBox[15].checked && runeBox[18].checked && runeBox[10].checked && runeBox[5].checked && runeBox[19].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Silence	Dol	Eld	Hel	Ist	Tir	Vex	
  if (runeBox[14].checked && runeBox[2].checked && runeBox[15].checked && runeBox[24].checked && runeBox[3].checked && runeBox[26].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Breath of the Dying	Vex	Hel	El	Eld	Zod	Eth	
  if (runeBox[26].checked && runeBox[15].checked && runeBox[1].checked && runeBox[2].checked && runeBox[33].checked && runeBox[5].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
  //Last Wish	Jah	Mal	Jah	Sur	Jah	Ber
  if (runeBox[31].checked && runeBox[23].checked && runeBox[31].checked && runeBox[29].checked && runeBox[31].checked && runeBox[30].checked) {
    word[2].classList.remove("hidden");
  } else {
    word[2].classList.add("hidden");
  }
}
runewordShow();
document.addEventListener("click", runewordShow);

function runeHighlight(){
  const runes = [];
  for(let i = 0; i < runeBox.length; i++){
    runes.push(document.querySelectorAll('.runeImgSmall'+i));
  }
  for (let i = 0; i < 6; i++) { //the number of runeslot = 6
    for (let j = 0; j < runeBox.length; j++) { //the number of runes
      const runeC = runes[j][i];
      if (runeC == null) {
        continue;
        } else {
        if (runeBox[j].checked) {
          runeC.classList.add('highlight');
        } else if (!runeBox[j].checked) {
          runeC.classList.remove('highlight');
        }
      }
    }
  }
}

document.addEventListener("click",runeHighlight);

const wordTitle = document.querySelectorAll(".wordTitle");
const wordDesc = document.querySelectorAll(".wordDesc");
const wordPopup = document.querySelector("#wordPopup");

wordTitle.forEach(function(item){
  item.addEventListener('mouseover', function(){
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    wordPopup.innerHTML = wordDesc[num].innerHTML;
    wordPopup.classList.remove("invisible");
  })
  item.addEventListener('mouseout',function(){
    const r = /\d+/;
    const num = item.id.match(r)[0];  
    wordPopup.classList.add("invisible");
  })
})