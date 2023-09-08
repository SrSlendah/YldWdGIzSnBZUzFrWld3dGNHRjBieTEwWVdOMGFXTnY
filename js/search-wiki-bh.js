const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: 'Aang', url: '../wiki-bh/aang' },
    { resultado: "Ada", url: '../wiki-bh/ada' },
    { resultado: 'Akuma no Kogo Hattori', url: '../wiki-bh/akuma-no-kogo-hattori' },
    { resultado: 'Akuma', url: '../wiki-bh/akuma' },
    { resultado: 'Alucard', url: '../wiki-bh/alucard' },
    { resultado: 'Amethyst', url: '../wiki-bh/amethyst' },
    { resultado: 'Apocalypse', url: '../wiki-bh/apocalypse' },
    { resultado: 'Arcadia', url: '../wiki-bh/Arcadia' },
    { resultado: 'Archfiend Zariel', url: '../wiki-bh/archfiend-zariel' },
    { resultado: 'Artemis', url: '../wiki-bh/Artemis' },
    { resultado: 'Asgard Bödvar', url: '../wiki-bh/asgard-bodvar' },
    { resultado: 'Asgardian Elite', url: '../wiki-bh/asgardian-elite' },
    { resultado: 'Assassins Creed', url: '../wiki-bh/assassins-creed' },
    { resultado: 'Astral Core Ada', url: '../wiki-bh/astral-core-ada' },
    { resultado: 'Asuka', url: '../wiki-bh/asuka' },
    { resultado: 'Asuri', url: '../wiki-bh/asuri' },
    { resultado: 'Aurora Brynn', url: '../wiki-bh/aurora-brynn' },
    { resultado: 'Avatar', url: '../wiki-bh/avatar' },
    { resultado: 'Azoth', url: '../wiki-bh/azoth' },
    { resultado: 'Barbara', url: '../wiki-bh/barbara' },
    { resultado: 'Barraza', url: '../wiki-bh/barraza' },
    { resultado: 'Beachbrawl', url: '../wiki-bh/beachbrawl' },
    { resultado: 'Beastmaster Sidra', url: '../wiki-bh/beastmaster-sidra' },
    { resultado: 'Becky Lynch', url: '../wiki-bh/becky-lynch' },
    { resultado: 'Ben 10', url: '../wiki-bh/ben10' },
    { resultado: 'Black Knight', url: '../wiki-bh/black-knight' },
    { resultado: 'Blackguard Keep', url: '../wiki-bh/blackguard-keep' },
    { resultado: 'Bödvar', url: '../wiki-bh/bodvar' },
    { resultado: 'Bombsketball', url: '../wiki-bh/bombsketball' },
    { resultado: 'Bounty', url: '../wiki-bh/bounty' },
    { resultado: 'Brawlball', url: '../wiki-bh/brawlball' },
    { resultado: 'Brawldown', url: '../wiki-bh/brawldown' },
    { resultado: 'Brawlhaven', url: '../wiki-bh/brawlhaven' },
    { resultado: 'Brynn', url: '../wiki-bh/brynn' },
    { resultado: 'Bubble Tag', url: '../wiki-bh/bubble-tag' },
    { resultado: 'Buddy', url: '../wiki-bh/buddy' },
    { resultado: 'Captura la Bandera', url: '../wiki-bh/captura-la-bandera' },
    { resultado: 'Caspian', url: '../wiki-bh/caspian' },
    { resultado: 'Cassidy', url: '../wiki-bh/cassidy' },
    { resultado: 'Castlevania', url: '../wiki-bh/castlevania' },
    { resultado: 'Capturar Bombas', url: '../wiki-bh/catch-bombs' },
    { resultado: 'Chun-Li', url: '../wiki-bh/chun-li' },
    { resultado: 'Cofre Ancestral', url: '../wiki-bh/cofre-ancestral' },
    { resultado: 'Cofre Bandido', url: '../wiki-bh/cofre-bandido' },
    { resultado: 'Cofre Brawl City', url: '../wiki-bh/cofre-brawl-city' },
    { resultado: 'Cofre Celestial', url: '../wiki-bh/cofre-celestial' },
    { resultado: 'Cofre Cósmico', url: '../wiki-bh/cofre-cosmico' },
    { resultado: 'Cofre del Dragón', url: '../wiki-bh/cofre-dragon' },
    { resultado: 'Cofre Elemental', url: '../wiki-bh/cofre-elemental' },
    { resultado: 'Cofre Exaltado', url: '../wiki-bh/cofre-exaltado' },
    { resultado: 'Cofre Forjado', url: '../wiki-bh/cofre-forjado' },
    { resultado: 'Cofre Hundido', url: '../wiki-bh/cofre-hundido' },
    { resultado: 'Cofre Imperial', url: '../wiki-bh/cofre-imperial' },
    { resultado: 'Cofre de Odin', url: '../wiki-bh/cofre-odin' },
    { resultado: 'Cofre Olímpico', url: '../wiki-bh/cofre-olimpico' },
    { resultado: 'Cofre de la Orden Real', url: '../wiki-bh/cofre-orden-real' },
    { resultado: 'Cofre Prohibido', url: '../wiki-bh/cofre-prohibido' },
    { resultado: 'Cofre Ragnarok', url: '../wiki-bh/cofre-ragnarok' },
    { resultado: 'Cofre Renacido', url: '../wiki-bh/cofre-renacido' },
    { resultado: 'Cofre Salvaje', url: '../wiki-bh/cofre-salvaje' },
    { resultado: 'Cofre Sandstorm', url: '../wiki-bh/cofre-sandstorm' },
    { resultado: 'Cofre Skysail', url: '../wiki-bh/cofre-skysail' },
    { resultado: 'Cofre Synthwave', url: '../wiki-bh/cofre-synthwave' },
    { resultado: 'Cofres', url: '../wiki-bh/cofres' },
    { resultado: 'Collectors Pack', url: '../wiki-bh/collectors-pack' },
    { resultado: 'Corrupted Blood Tezca', url: '../wiki-bh/corrupted-blood-tezca' },
    { resultado: 'Crew Battle', url: '../wiki-bh/crew-battle' },
    { resultado: 'Crimson Oni Jiro', url: '../wiki-bh/crimson-oni-jiro' },
    { resultado: 'Cross', url: '../wiki-bh/cross' },
    { resultado: 'Crossovers', url: '../wiki-bh/crossovers' },
    { resultado: 'Crystal Temple', url: '../wiki-bh/crystal-temple' },
    { resultado: 'Cybernetic Beat Isaiah', url: '../wiki-bh/cybernetic-beat-isaiah' },
    { resultado: 'Daimio', url: '../wiki-bh/daimio' },
    { resultado: 'Daryl', url: '../wiki-bh/daryl' },
    { resultado: 'Deathcap Dusk', url: '../wiki-bh/deathcap-dusk' },
    { resultado: 'Demon Island', url: '../wiki-bh/demon-island' },
    { resultado: 'Devil Jin', url: '../wiki-bh/devil-jin' },
    { resultado: 'Dhalsim', url: '../wiki-bh/dhalsim' },
    { resultado: 'Diamondhead', url: '../wiki-bh/diamondhead' },
    { resultado: 'Diana', url: '../wiki-bh/diana' },
    { resultado: 'Dice Destruction', url: '../wiki-bh/dice-destruction' },
    { resultado: 'Dodgebomb', url: '../wiki-bh/dodgebomb' },
    { resultado: 'Donatello', url: '../wiki-bh/donatello' },
    { resultado: "Dracula's Castle", url: '../wiki-bh/draculas-castle' },
    { resultado: 'Draugr Bödvar', url: '../wiki-bh/draugr-bodvar' },
    { resultado: 'Dusk', url: '../wiki-bh/dusk' },
    { resultado: 'Ehzot Azoth', url: '../wiki-bh/ehzot-azoth' },
    { resultado: 'Eivor', url: '../wiki-bh/eivor' },
    { resultado: 'Elder Wild Ragnir', url: '../wiki-bh/elder-wild-ragnir' },
    { resultado: 'Ember', url: '../wiki-bh/ember' },
    { resultado: 'Enchantress', url: '../wiki-bh/enchantress' },
    { resultado: 'Equinox Arcadia', url: '../wiki-bh/equinox-arcadia' },
    { resultado: 'Event Horizon Artemis', url: '../wiki-bh/event-horizon-artemis' },
    { resultado: 'Ezio', url: '../wiki-bh/ezio' },
    { resultado: 'Fabled City', url: '../wiki-bh/fabled-city' },
    { resultado: 'Fait', url: '../wiki-bh/fait' },
    { resultado: "Fangwild's Heart Ember", url: '../wiki-bh/fangwilds-heart-ember' },
    { resultado: 'Finn', url: '../wiki-bh/finn' },
    { resultado: 'Florence Terrace', url: '../wiki-bh/florence-terrace' },
    { resultado: 'Fortress of the Lions', url: '../wiki-bh/fortress-of-the-lions' },
    { resultado: 'Four Arms', url: '../wiki-bh/four-arms' },
    { resultado: 'Future Wave Val', url: '../wiki-bh/future-wave-val' },
    { resultado: 'Galvan Prime', url: '../wiki-bh/galvan-prime' },
    { resultado: 'Garnet', url: '../wiki-bh/garnet' },
    { resultado: 'G.I. Joe', url: '../wiki-bh/gi-joe' },
    { resultado: 'Globox', url: '../wiki-bh/globox' },
    { resultado: 'Gnash', url: '../wiki-bh/gnash' },
    { resultado: 'Gruagach', url: '../wiki-bh/gruagach' },
    { resultado: 'Grumpy Temple', url: '../wiki-bh/grumpy-temple' },
    { resultado: 'Halo (Crossover)', url: '../wiki-bh/halo' },
    { resultado: 'Halo (Mapa)', url: '../wiki-bh/halo-map' },
    { resultado: 'Hattori', url: '../wiki-bh/hattori' },
    { resultado: 'Heatblast', url: '../wiki-bh/heatblast' },
    { resultado: 'Hellboy (Crossover)', url: '../wiki-bh/hellboy-crossover' },
    { resultado: 'Hellboy (Leyenda)', url: '../wiki-bh/hellboy' },
    { resultado: 'High Frequency Yumiko', url: '../wiki-bh/high-frequency-yumiko' },
    { resultado: 'High Priestess Nai', url: '../wiki-bh/high-priestess-nai' },
    { resultado: 'Honor Bound Cross', url: '../wiki-bh/honor-bound-cross' },
    { resultado: 'Hora de Aventura', url: '../wiki-bh/hora-de-aventura' },
    { resultado: 'Horde', url: '../wiki-bh/horde' },
    { resultado: 'Infernal Warlock Volkov', url: '../wiki-bh/infernal-warlock-volkov' },
    { resultado: 'Isaiah', url: '../wiki-bh/isaiah' },
    { resultado: 'Jaeyun', url: '../wiki-bh/jaeyun' },
    { resultado: 'Jake', url: '../wiki-bh/jake' },
    { resultado: 'Jhala', url: '../wiki-bh/jhala' },
    { resultado: 'Jiro', url: '../wiki-bh/jiro' },
    { resultado: 'John Cena', url: '../wiki-bh/john-cena' },
    { resultado: 'Jörmungandr Mako', url: '../wiki-bh/jormungandr-mako' },
    { resultado: 'Kaya', url: '../wiki-bh/kaya' },
    { resultado: 'Ken', url: '../wiki-bh/ken' },
    { resultado: 'King Knight', url: '../wiki-bh/king-knight' },
    { resultado: 'Kings Pass', url: '../wiki-bh/kings-pass' },
    { resultado: 'Koji', url: '../wiki-bh/koji' },
    { resultado: 'Kor', url: '../wiki-bh/kor' },
    { resultado: 'Kung Foot', url: '../wiki-bh/kung-foot' },
    { resultado: 'Kung Fu Panda', url: '../wiki-bh/kung-fu-panda' },
    { resultado: 'Lara Croft', url: '../wiki-bh/lara-croft' },
    { resultado: 'Leonardo', url: '../wiki-bh/leonardo' },
    { resultado: 'Leonidas Onyx', url: '../wiki-bh/leonidas-onyx' },
    { resultado: 'Leyendas', url: '../wiki-bh/leyendas' },
    { resultado: 'Lin Fei', url: '../wiki-bh/lin-fei' },
    { resultado: 'Live Action Orion', url: '../wiki-bh/live-action-orion' },
    { resultado: 'Lord Vraxx', url: '../wiki-bh/lord-vraxx' },
    { resultado: 'Lost Labyrinth', url: '../wiki-bh/lost-labyrinth' },
    { resultado: 'Lucien', url: '../wiki-bh/lucien' },
    { resultado: 'Luke', url: '../wiki-bh/luke' },
    { resultado: 'Luminous Paladin Jaeyun', url: '../wiki-bh/luminous-paladin-jaeyun' },
    { resultado: 'M. Bison', url: '../wiki-bh/m-bison' },
    { resultado: 'Macho Man', url: '../wiki-bh/macho-man' },
    { resultado: 'Maggie', url: '../wiki-bh/maggie' },
    { resultado: 'Magyar', url: '../wiki-bh/magyar' },
    { resultado: 'Mako', url: '../wiki-bh/Mako' },
    { resultado: 'Mammoth Fortress', url: '../wiki-bh/mammoth-fortress' },
    { resultado: 'Mapas', url: '../wiki-bh/mapas' },
    { resultado: 'Master Blacksmith Ulgrim', url: '../wiki-bh/master-blacksmith-ulgrim' },
    { resultado: 'Miami Dome', url: '../wiki-bh/miami-dome' },
    { resultado: 'Michelangelo', url: '../wiki-bh/michelangelo' },
    { resultado: 'Michonne', url: '../wiki-bh/michonne' },
    { resultado: 'Mirage', url: '../wiki-bh/mirage' },
    { resultado: 'Mishima Dojo', url: '../wiki-bh/mishima-dojo' },
    { resultado: 'Modos de Juego', url: '../wiki-bh/modos-de-juego' },
    { resultado: 'Modular Riff Ember', url: '../wiki-bh/modular-riff-ember' },
    { resultado: 'Mordex', url: '../wiki-bh/mordex' },
    { resultado: 'Morph', url: '../wiki-bh/morph' },
    { resultado: 'Munin', url: '../wiki-bh/munin' },
    { resultado: 'Negan', url: '../wiki-bh/negan' },
    { resultado: 'Neostreet Hattori', url: '../wiki-bh/neostreet-hattori' },
    { resultado: 'Netherworld Artemis', url: '../wiki-bh/netherworld-artemis' },
    { resultado: 'Nimue', url: '../wiki-bh/nimue' },
    { resultado: 'Nina Williams', url: '../wiki-bh/nina-williams' },
    { resultado: 'Nix', url: '../wiki-bh/nix' },
    { resultado: 'Obake Petra', url: '../wiki-bh/obake-petra' },
    { resultado: 'Octavius Mordex', url: '../wiki-bh/octavius-mordex' },
    { resultado: 'Oddbrawl', url: '../wiki-bh/oddbrawl' },
    { resultado: 'Onyx', url: '../wiki-bh/onyx' },
    { resultado: 'Orion Prime', url: '../wiki-bh/orion-prime' },
    { resultado: 'Orion', url: '../wiki-bh/Orion' },
    { resultado: 'Owl Bard Hugin', url: '../wiki-bh/owl-bard-hugin' },
    { resultado: 'Pase de Batalla', url: '../wiki-bh/pase-batalla' },
    { resultado: 'Pase de Batalla ➤ Temporada Clásica 1', url: '../wiki-bh/pase-batalla-classic1' },
    { resultado: 'Pase de Batalla ➤ Temporada Clásica 2', url: '../wiki-bh/pase-batalla-classic2' },
    { resultado: 'Pase de Batalla ➤ Temporada 1', url: '../wiki-bh/pase-batalla1' },
    { resultado: 'Pase de Batalla ➤ Temporada 2', url: '../wiki-bh/pase-batalla2' },
    { resultado: 'Pase de Batalla ➤ Temporada 3', url: '../wiki-bh/pase-batalla3' },
    { resultado: 'Pase de Batalla ➤ Temporada 4', url: '../wiki-bh/pase-batalla4' },
    { resultado: 'Pase de Batalla ➤ Temporada 5', url: '../wiki-bh/pase-batalla5' },
    { resultado: 'Pase de Batalla ➤ Temporada 6', url: '../wiki-bh/pase-batalla6' },
    { resultado: 'Pase de Batalla ➤ Temporada 7', url: '../wiki-bh/pase-batalla7' },
    { resultado: 'Pase de Batalla ➤ Temporada 8', url: '../wiki-bh/pase-batalla8' },
    { resultado: 'Pearl', url: '../wiki-bh/pearl' },
    { resultado: 'Petra', url: '../wiki-bh/petra' },
    { resultado: 'Plague Knight', url: '../wiki-bh/plague-knight' },
    { resultado: 'Plains of Passage', url: '../wiki-bh/plains-of-passage' },
    { resultado: 'Platform King', url: '../wiki-bh/platform-king' },
    { resultado: 'Po', url: '../wiki-bh/po' },
    { resultado: 'Princess Bubblegum', url: '../wiki-bh/princess-bubblegum' },
    { resultado: 'Puella Papilio Scarlet', url: '../wiki-bh/puella-papilio-scarlet' },
    { resultado: 'Queen Nai', url: '../wiki-bh/queen-nai' },
    { resultado: 'Ragnir', url: '../wiki-bh/ragnir' },
    { resultado: 'Ranked', url: '../wiki-bh/ranked' },
    { resultado: 'Raphael', url: '../wiki-bh/raphael' },
    { resultado: 'Rayman (Crossover)', url: '../wiki-bh/rayman-crossover' },
    { resultado: 'Rayman (Leyebda)', url: '../wiki-bh/rayman' },
    { resultado: 'Red Raptor', url: '../wiki-bh/red-raptor' },
    { resultado: 'Reno', url: '../wiki-bh/reno' },
    { resultado: 'Retro Reaper Nix', url: '../wiki-bh/retro-reaper-nix' },
    { resultado: 'Rick', url: '../wiki-bh/rick' },
    { resultado: 'Roman Reigns', url: '../wiki-bh/roman-reigns' },
    { resultado: 'Royal Warrior Thor', url: '../wiki-bh/royal-warrior-thor' },
    { resultado: 'Ryu', url: '../wiki-bh/ryu' },
    { resultado: 'Sakura', url: '../wiki-bh/sakura' },
    { resultado: 'Scarlet', url: '../wiki-bh/scarlet' },
    { resultado: 'Sentinel', url: '../wiki-bh/sentinel' },
    { resultado: 'Shipwreck Falls', url: '../wiki-bh/shipwreck-falls' },
    { resultado: 'Shorwind Fishing Port', url: '../wiki-bh/shorwind-fishing-port' },
    { resultado: 'Shovel Knight (Crossover)', url: '../wiki-bh/shovel-knight-crossover' },
    { resultado: 'Shovel Knight (Skin Épica)', url: '../wiki-bh/shovel-knight' },
    { resultado: 'Showdown', url: '../wiki-bh/showdown' },
    { resultado: 'Sidra', url: '../wiki-bh/sidra' },
    { resultado: 'Simon Belmont', url: '../wiki-bh/simon-belmont' },
    { resultado: 'Sir Roland', url: '../wiki-bh/sir-roland' },
    { resultado: 'Snake Eyes', url: '../wiki-bh/snake-eyes' },
    { resultado: 'Snowbrawl', url: '../wiki-bh/snowbrawl' },
    { resultado: 'Soulbound Diana', url: '../wiki-bh/soulbound-diana' },
    { resultado: 'Specter Knight', url: '../wiki-bh/specter-knight' },
    { resultado: 'Spirit Realm', url: '../wiki-bh/spirit-realm' },
    { resultado: 'Star Commander Fait', url: '../wiki-bh/star-commander-fait' },
    { resultado: 'Steven Universe', url: '../wiki-bh/steven-universe' },
    { resultado: 'Stevonnie', url: '../wiki-bh/stevonnie' },
    { resultado: 'Stock', url: '../wiki-bh/stock' },
    { resultado: 'Storm Shadow', url: '../wiki-bh/storm-shadow' },
    { resultado: 'Street Brawl', url: '../wiki-bh/street-brawl' },
    { resultado: 'Street Fighter', url: '../wiki-bh/street-fighter' },
    { resultado: 'Street Sovereign Petra', url: '../wiki-bh/street-sovereign-petra' },
    { resultado: 'Strikeout', url: '../wiki-bh/strikeout' },
    { resultado: 'Sun Drive City', url: '../wiki-bh/sun-drive-city' },
    { resultado: 'Suzaku Castle', url: '../wiki-bh/suzaku-castle' },
    { resultado: 'Switchcraft', url: '../wiki-bh/switchcraft' },
    { resultado: 'Sylvan Cleric Kaya', url: '../wiki-bh/sylvan-cleric-kaya' },
    { resultado: 'Tai Lung', url: '../wiki-bh/tai-lung' },
    { resultado: 'Tekken', url: '../wiki-bh/tekken' },
    { resultado: 'Temple Climb', url: '../wiki-bh/temple-climb' },
    { resultado: 'Temple Ruins', url: '../wiki-bh/temple-ruins' },
    { resultado: 'Termidex', url: '../wiki-bh/termidex' },
    { resultado: 'Teros', url: '../wiki-bh/teros' },
    { resultado: 'Terror-Watt Xull', url: '../wiki-bh/terror-watt-xull' },
    { resultado: 'Tezca', url: '../wiki-bh/tezca' },
    { resultado: 'Thatch', url: '../wiki-bh/thatch' },
    { resultado: 'The Arbiter', url: '../wiki-bh/the-arbiter' },
    { resultado: 'The Enigma', url: '../wiki-bh/the-enigma' },
    { resultado: 'The Fangwild', url: '../wiki-bh/the-fangwild' },
    { resultado: 'The Great Hall', url: '../wiki-bh/the-great-hall' },
    { resultado: 'The Master Chief', url: '../wiki-bh/the-master-chief' },
    { resultado: 'The Rock', url: '../wiki-bh/the-rock' },
    { resultado: 'The Turtles Lair', url: '../wiki-bh/the-turtles-lair' },
    { resultado: 'The Undertaker', url: '../wiki-bh/the-undertaker' },
    { resultado: 'The Walking Dead', url: '../wiki-bh/the-walking-dead' },
    { resultado: 'Thea', url: '../wiki-bh/thea' },
    { resultado: 'Thor', url: '../wiki-bh/thor' },
    { resultado: 'Thundergard Stadium', url: '../wiki-bh/thundergard-stadium' },
    { resultado: 'Tigress', url: '../wiki-bh/tigress' },
    { resultado: 'Timed', url: '../wiki-bh/timed' },
    { resultado: "Titan's End", url: '../wiki-bh/titans-end' },
    { resultado: 'Tomb Raider', url: '../wiki-bh/tomb-raider' },
    { resultado: 'Toph', url: '../wiki-bh/toph' },
    { resultado: 'Tortugas Ninja', url: '../wiki-bh/tortugas-ninja' },
    { resultado: 'Tree Fort', url: '../wiki-bh/tree-fort' },
    { resultado: 'Tutorial', url: '../wiki-bh/tutorial' },
    { resultado: 'Twilight Grove', url: '../wiki-bh/twilight-grove' },
    { resultado: 'Ulgrim', url: '../wiki-bh/ulgrim' },
    { resultado: 'Val', url: '../wiki-bh/val' },
    { resultado: 'Vanir Guardian Bödvar', url: '../wiki-bh/vanir-guardian-bodvar' },
    { resultado: 'Vector', url: '../wiki-bh/vector' },
    { resultado: 'Void Major', url: '../wiki-bh/void-major' },
    { resultado: 'Volkov', url: '../wiki-bh/volkov' },
    { resultado: 'Volleybrawl', url: '../wiki-bh/volleybrawl' },
    { resultado: 'Walker Attack', url: '../wiki-bh/walker-attack' },
    { resultado: 'Warchief Bödvar', url: '../wiki-bh/warchief-bodvar' },
    { resultado: 'Western Air Temple', url: '../wiki-bh/western-air-temple' },
    { resultado: 'Wheel', url: '../wiki-bh/wheel' },
    { resultado: "World's End", url: '../wiki-bh/worlds-end' },
    { resultado: 'Wu Shang', url: '../wiki-bh/wu-shang' },
    { resultado: 'WWE', url: '../wiki-bh/wwe' },
    { resultado: 'Xavier Woods', url: '../wiki-bh/xavier-woods' },
    { resultado: 'Xull', url: '../wiki-bh/xull' },
    { resultado: 'Yoshimitsu', url: '../wiki-bh/yoshimitsu' },
    { resultado: 'Yumiko', url: '../wiki-bh/yumiko' },
    { resultado: 'Zariel', url: '../wiki-bh/zariel' },
    { resultado: 'Zuko', url: '../wiki-bh/zuko' },
  ];

  query = removeAccents(query.toLowerCase());

  return resultadosConURLs.filter(item => removeAccents(item.resultado.toLowerCase()).includes(query));
}

searchInput.addEventListener('input', function() {
  const searchQuery = this.value;
  autocompleteList.innerHTML = '';

  if (searchQuery.length >= 2) {
    const results = obtenerResultadosConURLs(searchQuery);

    if (results.length > 0) {
      autocompleteList.style.display = 'block';

      const getScore = (result, query) => {
        const resultLower = result.resultado.toLowerCase();
        query = query.toLowerCase();

        if (resultLower.startsWith(query)) {
          return 2;
        } else if (resultLower.includes(query)) {
          return 1;
        } else {
          return 0;
        }
      };

      results.sort((a, b) => getScore(b, searchQuery) - getScore(a, searchQuery));

      results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.resultado;
        autocompleteList.appendChild(listItem);
      });
    } else {
      autocompleteList.style.display = 'none';
    }
  } else {
    autocompleteList.style.display = 'none';
  }
});

autocompleteList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const clickedResult = event.target.textContent;
    const resultObject = resultadosConURLs.find(item => item.resultado.toLowerCase() === clickedResult.toLowerCase());

    if (resultObject) {
      window.location.href = resultObject.url;
    }
  }
});
