const fs = require('fs');

const INPUT = "HardLightshow.dat"
const OUTPUT = "ExpertStandard.dat"

let difficulty = JSON.parse(fs.readFileSync(INPUT));

difficulty._customData = { _environment: [], _customEvents: [], _pointDefinitions: [] };

const _customData = difficulty._customData;
const _obstacles = difficulty._obstacles;
const _notes = difficulty._notes;
const _customEvents = _customData._customEvents;
const _environment = _customData._environment;
const _pointDefinitions = _customData._pointDefinitions;

let filterednotes

function Random(min, max, round) {
  if (round == false || round == undefined) return Math.random() * (max + 1 - min) + min;
  if (round == true) return Math.round(Math.random() * (max + 1 - min) + min);
}

function upNote(startBeat, endBeat) {
  filterednotes = _notes.filter(n => n._time >= startBeat && n._time < endBeat);
  filterednotes.forEach(note => {
    note._customData._noteJumpStartBeatOffset = 2;
    note._customData._animation = {}
    note._customData._animation._position = [[0, -5, 0, 0], [0, 0, 0, 0.3, "splineCatmullRom"]];
  })
}

function rotate(Start, End) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
    note._customData._animation = {}
    note._customData._animation._localRotation = [[Random(0, 180), Random(0, 180), Random(0, 180), 0], [0, 0, 0, 0.3]];
  })
}

function RotateIn(Start, End) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
    note._customData._noteJumpMovementSpeed = 14;
    note._customData._noteJumpStartBeatOffset = 2;
    note._customData._animation = {}
    note._customData._animation._localRotation = [[Random(0, 180), Random(0, 180), Random(0, 180), 0], [0, 0, 0, 0.3, "easeInOutExpo"]];
    note._customData._animation._position = [[Random(-5, 5), Random(-10, 5), Random(0, 10), 0], [0, 0, 0, 0.3, "easeInOutExpo"]];
    note._customData._animation._dissolve = [[0, 0.1], [1, 0.2]];
    note._customData._animation._dissolveArrow = [[0, 0.1], [1, 0.2]];
  })
}

function RightIn(Start, End) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
    note._customData._noteJumpMovementSpeed = 12;
    note._customData._noteJumpStartBeatOffset = 2;
    note._customData._animation = {}
    note._customData._animation._position = [[50, 0, 15, 0], [0, 0, 0, 0.4, "easeInOutExpo"]];
    note._customData._animation._dissolve = [[0, 0.1], [1, 0.2]];
    note._customData._animation._dissolveArrow = [[0, 0.1], [1, 0.2]];
  });
}

function LeftIn(Start, End) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
    note._customData._noteJumpMovementSpeed = 12;
    note._customData._noteJumpStartBeatOffset = 2;
    note._customData._animation = {}
    note._customData._animation._position = [[-50, 0, 15, 0], [0, 0, 0, 0.4, "easeInOutExpo"]];
    note._customData._animation._dissolve = [[0, 0.1], [1, 0.15]];
    note._customData._animation._dissolveArrow = [[0, 0.1], [1, 0.15]];
  });
}

function RandomIn(Start, End) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
    note._customData._noteJumpMovementSpeed = 17;
    note._customData._noteJumpStartBeatOffset = 2;
    note._customData._track = "glitching"
    note._customData._animation = {}
    note._customData._animation._position = [[Random(-50, 50), Random(0, 30), 15, 0], [0, 0, 0, 0.4, "easeInOutExpo"]];
    note._customData._animation._dissolve = [[0, 0.1], [1, 0.15]];
    note._customData._animation._dissolveArrow = [[0, 0.1], [1, 0.15]];
  });
}

function end(Start, End) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
    note._customData._noteJumpStartBeatOffset = 1.5;
    note._customData._track = "glitching"
    note._customData._animation = {}
    note._customData._animation._localRotation = [[Random(0, 360), Random(0, 360), Random(0, 360), 0], [0, 0, 0, 0.3]];
    note._customData._animation._position = [[0, 20, 0, 0], [0, 0, 0, 0.3, "easeInOutExpo"]];
  })
}


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

_environment.push(
  {
    "_id": "OriginsEnvironment.[0]Environment.[12]BigSmokePS",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[6]Construction",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[7]TrackConstruction",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[13]Spectrograms",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[9]TrackMirror",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[26]NeonTube",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[27]NeonTube (1)",
    "_lookupMethod": "Contains",
    "_active": false
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[8]PlayersPlace.[0]Mirror",
    "_lookupMethod": "Contains",
    "_active": true,
    "_track": "mirror"
  },
  {
    "_id": "GameCore.[1]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[10]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[11]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[12]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[13]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[14]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[15]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[2]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[3]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[4]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[5]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[6]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[7]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[8]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "GameCore.[9]LightsTrackLaneRing(Clone)",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [1.5, 1.5, 1.5],
    "_track": "squares"
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[17]SidePSR",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [10, 10, 10],
    "_localPosition": [100, 0, 100],
    "_localRotation": [0, 90, 0],
  },
  {
    "_id": "OriginsEnvironment.[0]Environment.[18]SidePSL",
    "_lookupMethod": "Contains",
    "_active": true,
    "_scale": [10, 10, 10],
    "_localPosition": [-100, 0, 100],
    "_localRotation": [0, -90, 0],
  }
)

// FUNCTION ANIMATION STUFF

upNote(0, 39.5)
RightIn(40, 48.9)
LeftIn(49, 55.9)
RightIn(56, 63.9)
LeftIn(64, 71.5)
rotate(154, 158.25)
rotate(161, 163.9)
rotate(186, 190)
rotate(193, 195.9)
rotate(209.05, 211.9)
rotate(213.05, 215.9)
rotate(241.05, 243.9)
rotate(245.05, 247.9)
RotateIn(284, 298)
RandomIn(328, 391)
end(392, 424)

// ANIMATETRACK STUFF

for (let i = -0.25; i < 80; i += 0.25) {
  _customEvents.push({
    _time: (8 + i),
    _type: "AnimateTrack",
    _data: {
      _track: "ghosts",
      _duration: 0.25,
      _dissolve: [[1, 0], [0, 1]]
    }
  })
}

for (let i = 0; i < 16; i += 2) {
  _customEvents.push({
    _time: (72 + i),
    _type: "AnimateTrack",
    _data: {
      _track: ["buildup", "squares"],
      _duration: 0.5,
      _scale: [[1, 1, 1, 0], [2, 2, 2, 0.5], [1, 1, 1, 1]]
    }
  })
}

for (let i = 0; i < 17; i += 1) {
  _customEvents.push({
    _time: (88 + i),
    _type: "AnimateTrack",
    _data: {
      _track: ["buildup", "squares"],
      _duration: 0.5,
      _scale: [[1, 1, 1, 0], [2, 2, 2, 0.5], [1, 1, 1, 1]]
    }
  })
}

for (let i = 0; i < 20; i += 0.5) {
  _customEvents.push({
    _time: (104 + i),
    _type: "AnimateTrack",
    _data: {
      _track: ["buildup", "squares"],
      _duration: 0.5,
      _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]]
    }
  })
}

for (let i = 0; i < 8; i += 0.25) {
  _customEvents.push({
    _time: (124 + i),
    _type: "AnimateTrack",
    _data: {
      _track: "buildup",
      _duration: 1,
      _localPosition: [[0, 0, 0, 0], [-0.15, 0, 0, 0.2], [0.15, 0, 0, 0.2], [-0.15, 0, 0, 0.6], [0.15, 0, 0, 0.8], [0, 0, 0, 1]],
      _scale: [[1, 1, 1, 0], [2, 2, 2, 0.5], [1, 1, 1, 1]]
    }
  })
}

_customEvents.push({
  _time: 123.5,
  _type: "AnimateTrack",
  _data: {
    _track: "squares",
    _duration: 0.5,
    _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 1]]
  }
})

for (let i = 0; i < 8; i += 0.25) {
  _customEvents.push({
    _time: (124 + i),
    _type: "AnimateTrack",
    _data: {
      _track: "squares",
      _duration: 1,
      _scale: [[1.5, 1.5, 1.5, 0], [1, 1, 1, 0.5], [1.5, 1.5, 1.5, 1]]
    }
  })
}

_customEvents.push({
  _time: 136,
  _type: "AnimateTrack",
  _data: {
    _track: "drop",
    _duration: 4,
    _position: [[0, 0, 0, 0, "easeOutSine"], [0, 5, 15, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeInOutSine"]]
  }
})

_customEvents.push({
  _time: 136,
  _type: "AssignPlayerToTrack",
  _data: {
    _track: "drop"
  }
})

_customEvents.push({
  _time: 144,
  _type: "AnimateTrack",
  _data: {
    _track: "drop",
    _duration: 4,
    _position: [[0, 0, 0, 0], [10, 10, 5, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeInOutSine"]],
    _localRotation: [[0, 0, 0, 0], [0, 30, 0, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeOutSine"]]
  }
})

_customEvents.push({
  _time: 168,
  _type: "AnimateTrack",
  _data: {
    _track: "drop",
    _duration: 4,
    _position: [[0, 0, 0, 0,], [0, 5, 15, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeInOutSine"]]
  }
})

_customEvents.push({
  _time: 176,
  _type: "AnimateTrack",
  _data: {
    _track: "drop",
    _duration: 4,
    _position: [[0, 0, 0, 0], [10, 10, 5, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeInOutSine"]],
    _localRotation: [[0, 0, 0, 0], [0, 10, 20, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeOutSine"]]
  }
})

_customEvents.push({
  _time: 204,
  _type: "AssignPlayerToTrack",
  _data: {
    _track: "glitchOut"
  }
})

for (let i = 0; i < 2; i += 0.25) {
  _customEvents.push({
    _time: (204 + i),
    _type: "AnimateTrack",
    _data: {
      _track: "glitchOut",
      _duration: 0.25,
      _dissolve: [[0, 0], [1, 1]]
    }
  })
}

_customEvents.push({
  _time: 206,
  _type: "AnimateTrack",
  _data: {
    _track: "glitchOut",
    _duration: 2,
    _position: [[0, 0, 0, 0], [-6, 5, 0, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeOutSine"]],
    _localRotation: [[0, 0, 0, 0], [30, 0, 0, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeInOutSine"]]
  }
})

_customEvents.push({
  _time: 220,
  _type: "AnimateTrack",
  _data: {
    _track: "death",
    _duration: 3,
    _dissolve: [[0, 0], [1, 1]]
  }
})

_customEvents.push({
  _time: 238,
  _type: "AnimateTrack",
  _data: {
    _track: "glitchOut",
    _duration: 2,
    _position: [[0, 0, 0, 0], [6, 5, 0, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeOutSine"]],
    _localRotation: [[0, 0, 0, 0], [-30, 0, 0, 0.5, "easeInOutSine"], [0, 0, 0, 1, "easeInOutSine"]]
  }
})

for (let i = 0; i < 2; i += 0.25) {
  _customEvents.push({
    _time: (236 + i),
    _type: "AnimateTrack",
    _data: {
      _track: "glitchOut",
      _duration: 0.25,
      _dissolve: [[0, 0], [1, 1]]
    }
  })
}

_customEvents.push({
  _time: 252,
  _type: "AnimateTrack",
  _data: {
    _track: "death",
    _duration: 3,
    _dissolve: [[0, 0], [1, 1]]
  }
})

_customEvents.push({
  _time: 296,
  _type: "AnimateTrack",
  _data: {
    _track: "ghosts",
    _duration: 0.25,
    _dissolve: [[1, 0]]
  }
})

for (let i = 0; i <= 18; i++) {

  _obstacles.push(
    {
      "_time": (294 + (i / 18)),
      "_lineIndex": 0,
      "_type": 1,
      "_duration": 30,
      "_width": 0,
      "_customData": {
        _track: "fluteWalls",
        _scale: [Random(1, 10), Random(1, 10), Random(1, 10)],
        _localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
        _animation: {
          _dissolve: [[0, 0.01], [1, 0.015]],
          _time: [[0.3, 0]],
          _definitePosition: [[Random(-100, 100), Random(5, 20), Random(10, 30), 0]]
        }
      }
    }
  );
}

_customEvents.push({
  _time: 293,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _dissolve: [[0, 0]]
  }
})

_customEvents.push({
  _time: 296,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _dissolve: [[1, 0]]
  }
})

_customEvents.push({
  _time: 296,
  _type: "AnimateTrack",
  _data: {
    _track: "mirror",
    _scale: [[5000, 0.1, 5000, 0]],
    _localPosition: [[-2500, -1, -2500, 0]]
  }
})

_customEvents.push({
  _time: 298,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[0, 0, 0, 1, 0], [0.807, 0, 0.921, 1, 1]]
  }
})

_customEvents.push({
  _time: 300.5,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[0.807, 0, 0.921, 1, 0], [0, 0.956, 0.960, 1, 1]]
  }
})

_customEvents.push({
  _time: 304,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0, 1, 1, 0]]
  }
})

_customEvents.push({
  _time: 306,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0, 1, 1, 0], [1, 0, 0, 1, 1]]
  }
})

_customEvents.push({
  _time: 308,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0, 0, 1, 0], [1, 0.541, 0, 1, 1]]
  }
})

_customEvents.push({
  _time: 310.5,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0.541, 0, 1, 0], [1, 0, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 312,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0, 1, 1, 0], [1, 0, 0, 1, 1]]
  }
})

_customEvents.push({
  _time: 314,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0, 0, 1, 0], [1, 0.937, 0, 1, 1]]
  }
})

_customEvents.push({
  _time: 316.5,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0.937, 0, 1, 0], [1, 0, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 323,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _color: [[1, 0, 1, 1, 0], [0, 1, 2, 1.5, 1]]
  }
})

_customEvents.push({
  _time: 326,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _dissolve: [[0, 0]]
  }
})

_customEvents.push({
  _time: 312,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 313,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 0.5,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 313.5,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 0.25,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 313.75,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 0.25,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 314,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 0.5,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 314.5,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 0.5,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 315,
  _type: "AnimateTrack",
  _data: {
    _track: "fluteWalls",
    _duration: 1,
    _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
  }
})

for (let i = 316; i < 320; i += 0.5) {

  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "fluteWalls",
      _duration: 0.5,
      _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
    }
  })
}

for (let i = 320; i < 326; i += 0.25) {

  _customEvents.push(
    {
      _time: i,
      _type: "AnimateTrack",
      _data: {
        _track: "fluteWalls",
        _duration: 0.25,
        _localRotation: [[0, 0, 0, 0], [90, 0, 0, 0.25], [180, 0, 0, 0.5], [270, 0, 0, 0.75], [360, 0, 0, 1]]
      }
    }
  )
}

_customEvents.push({
  _time: 312,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.5,
    _scale: [[1, 1, 1, 0], [2, 2, 2, 0.5], [1, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 313,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.5,
    _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 313.5,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.25,
    _scale: [[1, 1, 1, 0], [1.25, 1.25, 1.25, 0.5], [1, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 313.75,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.25,
    _scale: [[1, 1, 1, 0], [1.25, 1.25, 1.25, 0.5], [1, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 314,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.5,
    _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 314.5,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.5,
    _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]]
  }
})

_customEvents.push({
  _time: 315,
  _type: "AnimateTrack",
  _data: {
    _track: ["buildup", "squares"],
    _duration: 0.5,
    _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]]
  }
})

for (let i = 316; i < 320; i += 0.5) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "buildup",
      _duration: 0.5,
      _scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]]
    }
  })
}

for (let i = 320; i < 326; i += 0.25) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "buildup",
      _duration: 0.25,
      _scale: [[1, 1, 1, 0], [1.25, 1.25, 1.25, 0.5], [1, 1, 1, 1]]
    }
  })
}

for (let i = 316; i < 320; i += 0.5) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "squares",
      _duration: 0.5,
      _scale: [[1, 1, 1, 0], [2, 2, 2, 0.5], [1, 1, 1, 1]]
    }
  })
}

for (let i = 320; i < 326; i += 0.25) {
  _customEvents.push({
    _time: i,
    _type: "AnimateTrack",
    _data: {
      _track: "squares",
      _duration: 0.25,
      _scale: [[1, 1, 1, 0], [2, 2, 2, 0.5], [1, 1, 1, 1]]
    }
  })
}

_customEvents.push({
  _time: 326,
  _type: "AnimateTrack",
  _data: {
    _track: "squares",
    _duration: 0.25,
    _scale: [[1.5, 1.5, 1.5, 0]]
  }
})

_customEvents.push({
  _time: 326,
  _type: "AnimateTrack",
  _data: {
    _track: "mirror",
    _scale: [[1, 1, 1, 0]],
    _localPosition: [[0, 0, 0, 0]]
  }
})

_customEvents.push({
  _time: 326,
  _type: "AssignPlayerToTrack",
  _data: {
    _track: "glitching"
  }
})

_customEvents.push({
  _time: 328,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [0, 0, -5, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 329,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, -5, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 332,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [5, 5, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, 0, 0, 0], [0, 20, 0, 1]]
  }
})

_customEvents.push({
  _time: 333,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[5, 5, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, 20, 0, 0], [0, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 336,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [0, 5, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 337,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 5, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 340,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [10, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 341,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[10, 0, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 344,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [-5, 5, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, 0, 0, 0], [0, -20, 0, 1]]
  }
})

_customEvents.push({
  _time: 345,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[-5, 5, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, -20, 0, 0], [0, 0, 0, 1]]
  }
})

_customEvents.push({
  _time: 348,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [0, 10, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 349,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 10, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 352,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [10, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 353,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[10, 0, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 357,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1.5,
    _position: [[0, 0, 0, 0], [0, 10, -10, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 358.5,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 10, -10, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 360,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [0, 0, -5, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 361,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, -5, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 364,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [5, 5, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, 0, 0, 0], [0, 20, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 365,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[5, 5, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, 20, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 368,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [0, 5, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 369,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 5, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 372,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [10, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 373,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[10, 0, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 376,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [-5, 5, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, 0, 0, 0], [0, -20, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 377,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[-5, 5, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]],
    _localRotation: [[0, -20, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 380,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [0, 10, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 381,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 10, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 384,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 0, 0, 0], [10, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 385,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[10, 0, 0, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 389,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1.5,
    _position: [[0, 0, 0, 0], [0, 10, -10, 1, "easeInOutExpo"]]
  }
})

_customEvents.push({
  _time: 390.5,
  _type: "AnimateTrack",
  _data: {
    _track: "glitching",
    _duration: 1,
    _position: [[0, 10, -10, 0], [0, 0, 0, 1, "easeInOutExpo"]]
  }
})

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

fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0));