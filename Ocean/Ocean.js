const fs = require('fs');

const INPUT = "ExpertStandard.dat"
const OUTPUT = "HardStandard.dat"

let difficulty = JSON.parse(fs.readFileSync(INPUT));

difficulty._customData = { _pointDefinitions: [], _customEvents: [], _environment: [] };

const _customData = difficulty._customData;
const _obstacles = difficulty._obstacles;
const _notes = difficulty._notes;
const _customEvents = _customData._customEvents;
const _environment = _customData._environment

_obstacles.forEach(wall => {
  if (!wall._customData) {
    wall._customData = {}
  }
})

_notes.forEach(note => {
  if (!note._customData) {
    note._customData = {}
  }
})


// Big thanks to Tzur for making regex!

_environment.push(
  {
    "_id": "BTSEnvironmentCharacterSpawner",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]PillarPair \\(3\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]PillarPair \\(4\\)$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "TrackMirror$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "GlowLineL$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "GlowLineR$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "GlowLineC$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "GlowLineH",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]PillarPair \\(3\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]PillarPair \\(1\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "BTSStarTextEffectEvent$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "Construction$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]PillarPair \\(2\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackL1"
  },
  {
    "_id": "\\]PillarPair\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackR1"
  },
  {
    "_id": "\\]PillarPair\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackL2"
  },
  {
    "_id": "\\]SmallPillarPair\\.\\[R\\]PillarR",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackR2"
  },
  {
    "_id": "\\]PillarPair \\(1\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackL3"
  },
  {
    "_id": "\\]PillarPair \\(1\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackR3"
  },
  {
    "_id": "\\]PillarPair \\(2\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarTrackL4"
  },
  {
    "_id": "\\]SmallPillarPair \\(2\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP1"
  },
  {
    "_id": "\\]SmallPillarPair \\(2\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP2"
  },
  {
    "_id": "\\]SmallPillarPair \\(3\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP3"
  },
  {
    "_id": "\\]SmallPillarPair \\(3\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP4"
  },
  {
    "_id": "\\]SmallPillarPair\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP5"
  },
  {
    "_id": "\\]SmallPillarPair\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP6"
  },
  {
    "_id": "\\]SmallPillarPair \\(1\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP7"
  },
  {
    "_id": "\\]SmallPillarPair \\(1\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "pillarUP8"
  },
  {
    "_id": "MagicDoorSprite$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "LowCloudsGenerator$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]PlayersPlace\\.\\[\\d*\\]RectangleFakeGlow$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "HighCloudsGenerator$",
    "_lookupMethod": "Regex",
    "_active": true,
    "_track": "clouds"
  }
);

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "wallBoy",
    _duration: 322,
    _position: [[0, 0, 0, 0], [0, 0, -500, 1]],
    _time: [[1, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack1",
    _duration: 322,
    _localRotation: [[90, 0, 20, 0]],
    _position: [[-30, -5, 40, 0]],
    _scale: [[25, 25, 25, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack2",
    _duration: 322,
    _localRotation: [[180, 0, 50, 0]],
    _position: [[30, -5, 30, 0]],
    _scale: [[18, 18, 18, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack3",
    _duration: 322,
    _localRotation: [[-57, -20, 0, 0]],
    _position: [[30, -10, 6, 0]],
    _scale: [[20, 20, 20, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack4",
    _duration: 322,
    _localRotation: [[57, 20, 0, 0]],
    _position: [[-25, -10, 6, 0]],
    _scale: [[20, 20, 20, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack5",
    _duration: 322,
    _localRotation: [[60, -40, 0, 0]],
    _position: [[-60, -10, -6, 0]],
    _scale: [[25, 25, 25, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack6",
    _duration: 322,
    _localRotation: [[-143, 40, 0, 0]],
    _position: [[40, -5, -6, 0]],
    _scale: [[18, 18, 18, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack7",
    _duration: 322,
    _localRotation: [[30, 0, 42, 0]],
    _position: [[20, -5, 80, 0]],
    _scale: [[20, 20, 20, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack8",
    _duration: 322,
    _localRotation: [[20, 90, 0, 0]],
    _position: [[-15, -5, 88, 0]],
    _scale: [[20, 20, 20, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack9",
    _duration: 322,
    _localRotation: [[12, 72, 0, 0]],
    _position: [[50, -5, 30, 0]],
    _scale: [[20, 20, 20, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "bloqTrack10",
    _duration: 322,
    _localRotation: [[-12, -72, 0, 0]],
    _position: [[-50, -5, 30, 0]],
    _scale: [[20, 20, 20, 0]],
    _dissolveArrow: [[0, 0]],
    _time: [[0.3, 0]]
  }
});

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack3",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack4",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack7",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack8",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack9",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack10",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack1",
      _duration: 1,
      _scale: [[25, 25, 25, 0], [30, 30, 30, 0.25], [25, 25, 25, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack5",
      _duration: 1,
      _scale: [[25, 25, 25, 0], [30, 30, 30, 0.25], [25, 25, 25, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack2",
      _duration: 1,
      _scale: [[18, 18, 18, 0], [23, 23, 23, 0.25], [18, 18, 18, 0.5]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack6",
      _duration: 1,
      _scale: [[18, 18, 18, 0], [23, 23, 23, 0.25], [18, 18, 18, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack3",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack4",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack7",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack8",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack9",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack10",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack1",
      _duration: 1,
      _scale: [[25, 25, 25, 0], [30, 30, 30, 0.25], [25, 25, 25, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack5",
      _duration: 1,
      _scale: [[25, 25, 25, 0], [30, 30, 30, 0.25], [25, 25, 25, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack2",
      _duration: 1,
      _scale: [[18, 18, 18, 0], [23, 23, 23, 0.25], [18, 18, 18, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack6",
      _duration: 1,
      _scale: [[18, 18, 18, 0], [23, 23, 23, 0.25], [18, 18, 18, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack3",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack4",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack7",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack8",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack9",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack10",
      _duration: 1,
      _scale: [[20, 20, 20, 0], [25, 25, 25, 0.25], [20, 20, 20, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack1",
      _duration: 1,
      _scale: [[25, 25, 25, 0], [30, 30, 30, 0.25], [25, 25, 25, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack5",
      _duration: 1,
      _scale: [[25, 25, 25, 0], [30, 30, 30, 0.25], [25, 25, 25, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack2",
      _duration: 1,
      _scale: [[18, 18, 18, 0], [23, 23, 23, 0.25], [18, 18, 18, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "bloqTrack6",
      _duration: 1,
      _scale: [[18, 18, 18, 0], [23, 23, 23, 0.25], [18, 18, 18, 0.5]]
    }
  });
}

for (let i = 0; i <= 322; i += 20) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "clouds",
      _duration: 20,
      _localPosition: [[0, 30, 0, 0, "easeInOutSine"], [0, 20, 0, 0.5, "easeInOutSine"], [0, 30, 0, 1, "easeInOutSine"]]
    }
  });
}

for (let i = 119; i <= 150; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "wallBoy",
      _duration: 1,
      _color: [[0, 0.56, 4, 5, 0], [0, 0.56, 4, 5, 0.25], [0, 0.56, 1, 5, 0.5]]
    }
  });
}

for (let i = 251; i <= 280; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "wallBoy",
      _duration: 1,
      _color: [[0, 0.56, 4, 5, 0], [0, 0.56, 4, 5, 0.25], [0, 0.56, 1, 5, 0.5]]
    }
  });
}

for (let i = 283; i <= 312; i += 1) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "wallBoy",
      _duration: 1,
      _color: [[0, 0.56, 4, 5, 0], [0, 0.56, 4, 5, 0.25], [0, 0.56, 1, 5, 0.5]]
    }
  });
}

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackR1",
    _duration: 1,
    _position: [[69420, -69420, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP1",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP2",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP3",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP4",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP5",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP6",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP7",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarUP8",
    _duration: 1,
    _position: [[69420, -69420, 69420, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackL4",
    _duration: 1,
    _position: [[69420, -50, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackR2",
    _duration: 1,
    _position: [[69420, -69420, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackL2",
    _duration: 1,
    _position: [[69420, -69420, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackL4",
    _duration: 1,
    _position: [[69420, -69420, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackL3",
    _duration: 1,
    _position: [[69420, -69420, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackR3",
    _duration: 1,
    _position: [[69420, -69420, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackL2",
    _duration: 1,
    _position: [[69420, -69240, 70, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "boingUP1",
    _time: [[0.3, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 0,
  _data: {
    _track: "pillarTrackL1",
    _duration: 40,
    _position: [[10, 0, 60, 0], [10, 0, -50, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 20, 0, 0.3], [-5, 0, 0, 0.6], [15, -18, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 40,
  _data: {
    _track: "pillarTrackL1",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 35,
  _data: {
    _track: "pillarTrackR1",
    _duration: 5,
    _position: [[-10, -50, 70, 0], [-10, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [10, -8, 0, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 40,
  _data: {
    _track: "pillarTrackR1",
    _duration: 37,
    _position: [[-10, 0, 60, 0], [-10, 0, -50, 1]],
    _localRotation: [[10, -8, 0, 0], [-13, 14, 0, 0.3], [12, -12, 3, 0.6], [3, 4, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 77,
  _data: {
    _track: "pillarTrackR1",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 80,
  _data: {
    _track: "pillarTrackL2",
    _duration: 5,
    _position: [[20, -50, 70, 0], [20, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [7, 3, 0, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 85,
  _data: {
    _track: "pillarTrackL2",
    _duration: 35,
    _position: [[20, 0, 60, 0], [20, 0, -50, 1]],
    _localRotation: [[7, 3, 0, 0], [-20, -10, 0, 0.3], [5, 2, 3, 0.6], [-15, -7, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 120,
  _data: {
    _track: "pillarTrackL2",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 115,
  _data: {
    _track: "pillarTrackR2",
    _duration: 5,
    _position: [[-20, -50, 70, 0], [-20, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 2, 4, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 120,
  _data: {
    _track: "pillarTrackR2",
    _duration: 40,
    _position: [[-20, 0, 60, 0], [-20, 0, -50, 1]],
    _localRotation: [[10, 2, 4, 0], [-20, -10, 0, 0.3], [5, 2, 3, 0.6], [-15, -7, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 160,
  _data: {
    _track: "pillarTrackR2",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 155,
  _data: {
    _track: "pillarTrackL3",
    _duration: 5,
    _position: [[20, -50, 70, 0], [20, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 2, 4, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 160,
  _data: {
    _track: "pillarTrackL3",
    _duration: 40,
    _position: [[20, 0, 60, 0], [20, 0, -50, 1]],
    _localRotation: [[10, 2, 4, 0], [-20, -10, 0, 0.3], [5, 2, 3, 0.6], [-15, -7, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 200,
  _data: {
    _track: "pillarTrackL3",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 195,
  _data: {
    _track: "pillarTrackR3",
    _duration: 5,
    _position: [[10, -50, 70, 0], [10, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 2, 4, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 200,
  _data: {
    _track: "pillarTrackR3",
    _duration: 40,
    _position: [[10, 0, 60, 0], [10, 0, -50, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 20, 0, 0.3], [-5, 0, 0, 0.6], [15, -18, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 240,
  _data: {
    _track: "pillarTrackR3",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 235,
  _data: {
    _track: "pillarTrackL4",
    _duration: 5,
    _position: [[20, -50, 70, 0], [20, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 2, 4, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 240,
  _data: {
    _track: "pillarTrackL4",
    _duration: 40,
    _position: [[20, 0, 60, 0], [20, 0, -50, 1]],
    _localRotation: [[10, 2, 4, 0], [-20, -10, 0, 0.3], [5, 2, 3, 0.6], [-15, -7, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 280,
  _data: {
    _track: "pillarTrackL4",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP1",
    _duration: 1,
    _position: [[10, -40, 20, 0], [10, 20, 20, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP2",
    _duration: 1,
    _position: [[-10, -40, 20, 0], [-10, 20, 20, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP3",
    _duration: 1,
    _position: [[-10, -40, 30, 0], [-10, 20, 30, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP4",
    _duration: 1,
    _position: [[10, -40, 30, 0], [10, 20, 30, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP5",
    _duration: 1,
    _position: [[10, -40, 40, 0], [10, 20, 40, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP6",
    _duration: 1,
    _position: [[-10, -40, 40, 0], [-10, 20, 40, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP7",
    _duration: 1,
    _position: [[10, -40, 50, 0], [10, 20, 50, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 250,
  _data: {
    _track: "pillarUP8",
    _duration: 1,
    _position: [[-10, -40, 50, 0], [-10, 20, 50, 1, "easeOutCubic"]],
    _localRotation: [[0, 90, 0, 0]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 275,
  _data: {
    _track: "pillarTrackL4",
    _duration: 5,
    _position: [[-20, -50, 70, 0], [-20, 0, 60, 1]],
    _localRotation: [[0, 0, 0, 0], [10, 2, 4, 1]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 280,
  _data: {
    _track: "pillarTrackL4",
    _duration: 40,
    _position: [[-20, 0, 60, 0], [-20, 0, -50, 1]],
    _localRotation: [[10, 2, 4, 0], [-20, -10, 0, 0.3], [5, 2, 3, 0.6], [-15, -7, 0, 0.8], [0, 0, 0, 1]]
  }
}, {
  _type: "AnimateTrack",
  _time: 320,
  _data: {
    _track: "pillarTrackL4",
    _duration: 1,
    _position: [[-42069, -42069, -42069, 0]]
  }
});

_customEvents.push({
  _type: "AssignPathAnimation",
  _time: 0,
  _data: {
    _track: "sands",
    _position: [[0, 0, 0, 0], [0, 10, 0, 0.2]]
  }
});

_customEvents.push({
  _type: "AnimateTrack",
  _time: 300,
  _data: {
    _track: "wallBoy",
    _duration: 22,
    _dissolve: [[1, 0], [0, 1]]
  }
});

const precision = 4

const jsonP = Math.pow(10, precision)
const sortP = Math.pow(10, 2)
function deeperDaddy(obj) {
  if (obj)
    for (const key in obj) {
      if (obj[key] == null) {
        delete obj[key]
      } else if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
        deeperDaddy(obj[key])
      } else if (typeof obj[key] == 'number') {
        obj[key] = parseFloat(Math.round((obj[key] + Number.EPSILON) * jsonP) / jsonP)
      }
    }
}
deeperDaddy(difficulty)

difficulty._notes.sort(
  (a, b) =>
    parseFloat(Math.round((a._time + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._time + Number.EPSILON) * sortP) / sortP) ||
    parseFloat(Math.round((a._lineIndex + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._lineIndex + Number.EPSILON) * sortP) / sortP) ||
    parseFloat(Math.round((a._lineLayer + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._lineLayer + Number.EPSILON) * sortP) / sortP)
)
difficulty._obstacles.sort((a, b) => a._time - b._time)
difficulty._events.sort((a, b) => a._time - b._time)

console.log("Discovered is a furry");

fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0));