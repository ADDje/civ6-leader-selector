module.exports = {

civList: [
  {
    leader: 'Alexander',
    civ: 'Macedonian'
  },
  {
    leader: 'Amanitore',
    civ: 'Nubian'
  },
  {
    leader: 'Catherine_de_Medici',
    civ: 'French'
  },
  {
    leader: 'Cleopatra',
    civ: 'Egyptian'
  },
  {
    leader: 'Cyrus',
    civ: 'Persian'
  },
  {
    leader: 'Frederick_Barbarossa',
    civ: 'German'
  },
  {
    leader: 'Gandhi',
    civ: 'Indian'
  },
  {
    leader: 'Gilgamesh',
    civ: 'Sumerian'
  },
  {
    leader: 'Gorgo',
    civ: 'Greek'
  },
  {
    leader: 'Harald_Hardrada',
    civ: 'Norwegian'
  },
  {
    leader: 'Hojo_Tokimune',
    civ: 'Japanese'
  },
  {
    leader: 'Jadwiga',
    civ: 'Polish'
  },
  {
    leader: 'John_Curtin',
    civ: 'Australian'
  },
  {
    leader: 'Montezuma',
    civ: 'Aztec'
  },
  {
    leader: 'Mvemba_a_Nzinga',
    civ: 'Kongolese'
  },
  {
    leader: 'Pedro_II',
    civ: 'Brazilian'
  },
  {
    leader: 'Pericles',
    civ: 'Greek'
  },
  {
    leader: 'Peter',
    civ: 'Russian'
  },
  {
    leader: 'Philip_II',
    civ: 'Spanish'
  },
  {
    leader: 'Qin_Shi_Huang',
    civ: 'Chinese'
  },
  {
    leader: 'Saladin',
    civ: 'Arabian'
  },
  {
    leader: 'Teddy_Roosevelt',
    civ: 'American'
  },
  {
    leader: 'Tomyris',
    civ: 'Scythian'
  },
  {
    leader: 'Trajan',
    civ: 'Roman'
  },
  {
    leader: 'Victoria',
    civ: 'English'
  },
],

dlcList: {
  aztec: {
    leader: 'Montezuma',
    civ: 'Aztec'
  },
  poland: {
    leader: 'Jadwiga',
    civ: 'Polish'
  },
  australia: {
    leader: 'John_Curtin',
    civ: 'Australian'
  },
  persia: {
    leader: 'Cyrus',
    civ: 'Persian'
  },
  macedonia: {
    leader: 'Alexander',
    civ: 'Macedonian'
  },
  nubia: {
    leader: 'Amanitore',
    civ: 'Nubian'
  }
},

civsToBools: function (civs) {
  var civBools = {};
  civs.forEach(civ => {
    civBools[civ.leader] = true;
  });
  return civBools;
},

filterCivs: function (civs, filter) {
  let filteredCivs = civs.filter(civ => filter.findIndex(el => el.leader === civ.leader) < 0);
  return filteredCivs;
},

selectCiv: function (civs) {
  let ranVal = Math.floor(Math.random() * civs.length);
  if (civs[ranVal]) {
    return civs[ranVal];
  } else {
    return {leader: 'Random', civ: 'Random'};
  }
},

selectCivsMP: function (players, civBools, duplicate) {

  let civs = this.civList.filter(civ => civBools[civ.leader]);

  var playerResults = [];
  players.forEach(player => {
    let playerDLCs = player.preferences.dlc;
    var playerCivs = civs;
    if(!duplicate) {
      if(playerResults.length > 0) {
        playerResults.forEach(result => {
          playerCivs = this.filterCivs(playerCivs, [result.civ]);
        });
      }
    }
    for (var dlc in playerDLCs) {
      if (!playerDLCs[dlc]) {
        if(dlc === 'persia') {
          playerCivs = this.filterCivs(playerCivs, [this.dlcList['persia']])
          playerCivs = this.filterCivs(playerCivs, [this.dlcList['macedonia']])
        } else {
          playerCivs = this.filterCivs(playerCivs, [this.dlcList[dlc]])
        }
      }
    }
    let res = this.selectCiv(playerCivs);
    playerResults.push({id: player.id, preferences: player.preferences, civ: res});
  });
  return playerResults;
}

}
