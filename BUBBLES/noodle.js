const fs = require("fs");

const INPUT = "ExpertLightshow.dat"
const OUTPUT = "ExpertPlusLightshow.dat"

let difficulty = JSON.parse(fs.readFileSync(INPUT));

difficulty._customData = { _environment: [], _customEvents: [] };

const _customData = difficulty._customData;
const _obstacles = difficulty._obstacles;
const _notes = difficulty._notes;
const _environment = _customData._environment;
const _customEvents = _customData._customEvents;

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

function Random(min, max) {
	max++;
	return Math.random() * (max - min) + min;
}

_environment.push(
	{
		"_id": "Environment.[13]MonstercatLogoL",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "Environment.[14]MonstercatLogoR",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[24]GlowTopLine (5)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [0, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[25]GlowTopLine (6)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [-3, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[26]GlowTopLine (7)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [3, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[27]GlowTopLine (8)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [-6, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[5]PlayersPlace.[0]Mirror",
		"_lookupMethod": "Contains",
		"_scale": [2500, 0.1, 2500],
		"_position": [-1250, 0, -1250]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[28]GlowTopLine (9)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [6, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[29]GlowTopLine (10)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [-9, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[30]GlowTopLine (11)",
		"_lookupMethod": "Contains",
		"_localRotation": [90, 0, 0],
		"_localPosition": [9, 20, 20]
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[3]NearBuildingRight.[1]Neon.[1]BoxLight",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[3]NearBuildingRight.[2]Neon (1).[1]BoxLight",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[4]NearBuildingLeft.[1]Neon.[1]BoxLight",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[4]NearBuildingLeft.[2]Neon (1).[1]BoxLight",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[8]FarBuildings",
		"_lookupMethod": "Contains",
		"_position": [0, 0, -20],
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[34]GlowLineR (1)",
		"_lookupMethod": "Contains",
		"_localPosition": [3, 0.1, 0],
	},
)

_environment.push(
	{
		"_id": "GameCore.[10]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[11]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[12]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[13]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[14]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[15]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[16]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[17]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[18]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[19]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[20]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[1]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[2]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[3]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[4]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[5]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[6]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[7]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[8]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "GameCore.[9]SmallTrackLaneRing(Clone)",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[5]PlayersPlace.[2]Construction",
		"_lookupMethod": "Contains",
		"_active": false
	},
	{
		"_id": "MonstercatEnvironment.[0]Environment.[6]TrackMirror",
		"_lookupMethod": "Contains",
		"_active": false
	},
)

const precision = 4

// WRITE YOUR SCRIPT IN HERE ˇ

for (let i = 0; i < 132; i++) {
	let x = Random(-20, 20)
	let z = Random(10, 80)
	_obstacles.push(
		{
			"_time": i,
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 10,
			"_width": 0,
			"_customData": {
				_track: "bubbles",
				_color: [0.019, 1, 0.992, 10],
				_fake: true,
				_interactable: false,
				_scale: [3, 3, 3],
				_animation: {
					_localRotation: [[Random(0, 360), Random(0, 360), Random(0, 360), 0], [0, 0, 0, 1]],
					_definitePosition: [[x, -10, z, 0], [x, Random(20, 50), z, 1]],
					_dissolve: [[1, 0.95], [0, 1]]
				}
			}
		}
	)
}

for (let i = 0; i < 40; i++) {
	let x = Random(-50, 50)
	let x2 = x + Random(-10, 10)
	let x3 = x2 + Random(-10, 10)
	let y = Random(7, 30)
	let y2 = y + Random(-5, 5)
	let y3 = y2 + Random(-5, 5)
	let z = Random(-10, 90)
	let z2 = z + Random(-10, 10)
	let z3 = z2 + Random(-10, 10)
	_obstacles.push(
		{
			"_time": (331 + (i / 40)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 50,
			"_width": 0,
			"_customData": {
				_track: "8bit",
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_scale: [3, 3, 3],
				_animation: {
					_definitePosition: [[x, y, z, 0, "splineCatmullRom"], [x2, y2, z2, Random(0.3, 0.4), "splineCatmullRom"], [x3, y3, z3, Random(0.7, 0.8), "splineCatmullRom"]]
				}
			}
		}
	)
}

_customEvents.push({
	_time: 0,
	_type: "AnimateTrack",
	_data: {
		_track: "8bit",
		_duration: 1,
		_dissolve: [[0, 0]]
	}
})

_customEvents.push({
	_time: 332,
	_type: "AnimateTrack",
	_data: {
		_track: "8bit",
		_duration: 1,
		_dissolve: [[1, 0]]
	}
})

_customEvents.push({
	_time: 364,
	_type: "AnimateTrack",
	_data: {
		_track: "8bit",
		_duration: 1,
		_dissolve: [[0, 0]]
	}
})

var z = 5
for (let i = 0; i < 5; i++) {
	z += 5
	_notes.push(
		{
			"_time": (88.2 + (i / 5)),
			"_lineIndex": 2,
			"_lineLayer": 0,
			"_type": 0,
			"_cutDirection": 1,
			"_customData": {
				_track: "sip",
				_color: [10, 10, 0, 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_animation: {
					_scale: [[7, 7, 7, 0]],
					_definitePosition: [[10, -15, z, 0], [10, 40, z, 1]],
					_dissolve: [[1, 0.7], [0, 1]]
				}
			}
		}
	)
}

z = 5
for (let i = 0; i < 5; i++) {
	z += 5
	_notes.push(
		{
			"_time": (88.2 + (i / 5)),
			"_lineIndex": 2,
			"_lineLayer": 0,
			"_type": 0,
			"_cutDirection": 1,
			"_customData": {
				_track: "sip",
				_color: [10, 10, 0, 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_animation: {
					_scale: [[7, 7, 7, 0]],
					_definitePosition: [[-10, -15, z, 0], [-10, 40, z, 1]],
					_dissolve: [[1, 0.7], [0, 1]]
				}
			}
		}
	)
}

z = 5
for (let i = 0; i < 5; i++) {
	z += 5
	_notes.push(
		{
			"_time": (131.2 + (i / 5)),
			"_lineIndex": 2,
			"_lineLayer": 0,
			"_type": 0,
			"_cutDirection": 1,
			"_customData": {
				_track: "sip",
				_color: [10, 10, 0, 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_animation: {
					_scale: [[7, 7, 7, 0]],
					_definitePosition: [[10, 40, z, 0], [10, -40, z, 1]],
					_dissolve: [[0, 0.1], [1, 0.2]],
					_dissolveArrow: [[0, 0.1], [1, 0.2]]
				}
			}
		}
	)
}

z = 5
for (let i = 0; i < 5; i++) {
	z += 5
	_notes.push(
		{
			"_time": (131.2 + (i / 5)),
			"_lineIndex": 2,
			"_lineLayer": 0,
			"_type": 0,
			"_cutDirection": 1,
			"_customData": {
				_track: "sip",
				_color: [10, 10, 0, 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_animation: {
					_scale: [[7, 7, 7, 0]],
					_definitePosition: [[-10, 40, z, 0], [-10, -40, z, 1]],
					_dissolve: [[0, 0.1], [1, 0.2]],
					_dissolveArrow: [[0, 0.1], [1, 0.2]]
				}
			}
		}
	)
}

var y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (173.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[40, y, 50, 0], [-200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (175.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[-40, y, 50, 0], [200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (189.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[40, y, 50, 0], [-200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (191.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[-40, y, 50, 0], [200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

z = 5
for (let i = 0; i < 5; i++) {
	z += 5
	_notes.push(
		{
			"_time": (384.2 + (i / 5)),
			"_lineIndex": 2,
			"_lineLayer": 0,
			"_type": 0,
			"_cutDirection": 1,
			"_customData": {
				_track: "sip",
				_color: [10, 10, 0, 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_animation: {
					_scale: [[7, 7, 7, 0]],
					_definitePosition: [[10, -15, z, 0], [10, 40, z, 1]],
					_dissolve: [[1, 0.7], [0, 1]]
				}
			}
		}
	)
}

z = 5
for (let i = 0; i < 5; i++) {
	z += 5
	_notes.push(
		{
			"_time": (384.2 + (i / 5)),
			"_lineIndex": 2,
			"_lineLayer": 0,
			"_type": 0,
			"_cutDirection": 1,
			"_customData": {
				_track: "sip",
				_color: [10, 10, 0, 1],
				_localRotation: [Random(0, 360), Random(0, 360), Random(0, 360)],
				_fake: true,
				_interactable: false,
				_animation: {
					_scale: [[7, 7, 7, 0]],
					_definitePosition: [[-10, -15, z, 0], [-10, 40, z, 1]],
					_dissolve: [[1, 0.7], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (469.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[40, y, 50, 0], [-200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (471.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[-40, y, 50, 0], [200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}


_customEvents.push({
	_time: 121,
	_type: "AnimateTrack",
	_data: {
		_track: "bubbles",
		_duration: 10,
		_dissolve: [[1, 0], [0, 1]]
	}
})

//----------------------------------------------------------------------------------------------------------------------------

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (469.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[40, y, 50, 0], [-200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (471.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[-40, y, 50, 0], [200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (485.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[40, y, 50, 0], [-200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

y = 15
for (let i = 0; i < 4; i++) {
	y -= 3
	_obstacles.push(
		{
			"_time": (487.6 + (i / 8)),
			"_lineIndex": 0,
			"_type": 1,
			"_duration": 0.2,
			"_width": 0,
			"_customData": {
				_color: [Random(0, 1), Random(0, 1), Random(0, 1), 10],
				_fake: true,
				_interactable: false,
				_scale: [10, 1.5, 0.1],
				_animation: {
					_definitePosition: [[-40, y, 50, 0], [200, y, 50, 1]],
					_dissolve: [[0, 0], [1, 0.1], [1, 0.95], [0, 1]]
				}
			}
		}
	)
}

// WRITE YOUR SCRIPT IN HERE ^

const jsonP = Math.pow(10, precision)
const sortP = Math.pow(10, 2)
function hahaBall(obj) {
	if (obj)
		for (const key in obj) {
			if (obj[key] == null) {
				delete obj[key]
			} else if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
				hahaBall(obj[key])
			} else if (typeof obj[key] == 'number') {
				obj[key] = parseFloat(Math.round((obj[key] + Number.EPSILON) * jsonP) / jsonP)
			}
		}
}

hahaBall(difficulty)

difficulty._notes.sort(
	(a, b) =>
		parseFloat(Math.round((a._time + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._time + Number.EPSILON) * sortP) / sortP) ||
		parseFloat(Math.round((a._lineIndex + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._lineIndex + Number.EPSILON) * sortP) / sortP) ||
		parseFloat(Math.round((a._lineLayer + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._lineLayer + Number.EPSILON) * sortP) / sortP)
)
difficulty._obstacles.sort((a, b) => a._time - b._time)
difficulty._events.sort((a, b) => a._time - b._time)

fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0));