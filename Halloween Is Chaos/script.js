"use strict";
const fs = require('fs');

const INPUT = "ExpertStandard.dat"
const OUTPUT = "ExpertPlusLawless.dat"

let difficulty = JSON.parse(fs.readFileSync(INPUT));

difficulty._customData = { _environment: [], _customEvents: [] };

const customData = difficulty._customData;
const walls = difficulty._obstacles;
const notes = difficulty._notes;
const environment = customData._environment;
const customEvents = customData._customEvents;

let filterednotes
let filteredwalls

walls.forEach(wall => {
	if (!wall._customData) {
		wall._customData = {}
	}
})

notes.forEach(note => {
	if (!note._customData) {
		note._customData = {}
	}
})

function Random(min, max) {
	max++;
	return Math.random() * (max - min) + min;
}

function GiveNotesTrack(track, t1, t2) {
	filterednotes = notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (!note._customData._track) note._customData._track = track;
		else if (Array.isArray(note._customData._track)) note._customData._track.push(track)
		else if (note._customData._track != track) note._customData._track = [note._customData._track, track]
	})
}

function GiveWallsTrack(track, t1, t2) {
	filteredwalls = walls.filter(n => n._time >= t1 && n._time <= t2)
	filteredwalls.forEach(wall => {
		if (!wall._customData._track) wall._customData._track = track;
		else if (Array.isArray(wall._customData._track)) wall._customData._track.push(track)
		else if (wall._customData._track != track) wall._customData._track = [wall._customData._track, track]
	})
}

function GiveNoteTypesTrack(Type0Track, Type1Track, t1, t2) {
	filterednotes = notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (note._type == 0) {
			if (!note._customData._track) note._customData._track = Type0Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Type0Track)
			else if (note._customData._track != Type0Track) note._customData._track = [note._customData._track, Type0Track]
		}
		if (note._type == 1) {
			if (!note._customData._track) note._customData._track = Type1Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Type1Track)
			else if (note._customData._track != Type0Track) note._customData._track = [note._customData._track, Type1Track]
		}
	})
}

function GiveNoteLanesTrack(Lane1Track, Lane2Track, Lane3Track, Lane4Track, t1, t2) {
	filterednotes = notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (note._lineLayer == 0) {
			if (!note._customData._track) note._customData._track = Lane1Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane1Track)
			else if (note._customData._track != Lane1Track) note._customData._track = [note._customData._track, Lane1Track]
		}
		if (note._lineLayer == 1) {
			if (!note._customData._track) note._customData._track = Lane2Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane2Track)
			else if (note._customData._track != Lane2Track) note._customData._track = [note._customData._track, Lane2Track]
		}
		if (note._lineLayer == 2) {
			if (!note._customData._track) note._customData._track = Lane3Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane3Track)
			else if (note._customData._track != Lane3Track) note._customData._track = [note._customData._track, Lane3Track]
		}
		if (note._lineLayer == 3) {
			if (!note._customData._track) note.customData._track = Lane4Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane4Track)
			else if (note._customData._track != Lane4Track) note._customData._track = [note._customData._track, Lane4Track]
		}
	})
}

GiveNotesTrack("Player", 0, 231)
GiveWallsTrack("Player", 0, 231)
GiveNotesTrack("Drop", 360, 396)

filterednotes = notes.filter(n => n._time >= 0 && n._time <= 40)
filterednotes.forEach(note => {
	note._customData._noteJumpStartBeatOffset = 4
	if (note._type == 0) {
		note._customData._animation = {
			_localRotation: [
				[Random(0, 180), Random(0, 180), Random(0, 180), 0],
				[0, 0, 0, 0.4],
			],
			_position: [
				[Random(-3, 0), -10, 0, 0, "easeInOutBack"],
				[0, 0, 0, 0.4, "easeInOutBack"],
			]
		}
	}
	if (note._type == 1) {
		note._customData._animation = {
			_localRotation: [
				[Random(0, 180), Random(0, 180), Random(0, 180), 0],
				[0, 0, 0, 0.4],
			],
			_position: [
				[Random(0, 3), -10, 0, 0, "easeInOutBack"],
				[0, 0, 0, 0.4, "easeInOutBack"],
			],
		}
	}
});

filterednotes = notes.filter(n => n._time >= 41 && n._time <= 132)
filterednotes.forEach(note => {
	note._customData._noteJumpStartBeatOffset = 10
	note._customData._animation = {
		_localRotation: [
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0, "easeInOutBack"],
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.1, "easeInOutBack"],
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.2, "easeInOutBack"],
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.3, "easeInOutBack"],
			[0, 0, 0, 0.4, "easeInOutBack"],
		],
		_position: [
			[Random(-30, 30), Random(-30, 30), Random(10, 50), 0, "easeInOutBack"],
			[Random(-3, 3), Random(-3, 3), Random(0, 3), 0.3, "easeInOutBack"],
			[0, 0, 0, 0.4, "easeInOutBack"],
		],
		_dissolve: [
			[0, 0],
			[0, 0.3],
			[1, 0.4]
		]
	}
});

filterednotes = notes.filter(n => n._time >= 138 && n._time <= 232)
filterednotes.forEach(note => {
	note._customData._noteJumpStartBeatOffset = 10
	note._customData._animation = {
		_localRotation: [
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0],
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.25],
			[0, 0, 0, 0.45, "easeInOutBack"],
		],
		_position: [
			[Random(-30, 30), Random(-30, 30), Random(-20, 10), 0],
			[Random(-30, 30), Random(-30, 30), Random(10, 50), 0.25, "easeInOutBack"],
			[0, 0, 0, 0.4, "easeInOutBack"],
		],
		_dissolve: [
			[0, 0],
			[1, 0.1]
		],
		_dissolveArrow: [
			[0, 0],
			[1, 0.1]
		],
		_scale: [
			[3, 3, 3, 0],
			[3, 3, 3, 0.3],
			[1, 1, 1, 0.4, "easeInOutQuad"],
		]
	}
});

filterednotes = notes.filter(n => n._time >= 264 && n._time <= 276)
filterednotes.forEach(note => {
	note._customData._noteJumpStartBeatOffset = 5
	note._customData._animation = {
		_rotation: [
			[0, 0, Random(-360, 360), 0],
			[0, 0, 0, 0.35, "easeInOutBack"],
		],
		_position: [
			[Random(-30, 30), Random(-30, 30), 0, 0],
			[0, 0, 0, 0.35, "easeInOutBack"],
		],
	}

	for (let i = 0; i < 4; i++) {
		const dupe = JSON.parse(JSON.stringify(note))
		dupe._time += 0.001 * i
		dupe._customData._fake = true
		dupe._customData._interactable = false


		dupe._customData._animation = {
			_rotation: [
				[0, 0, Random(-360, 360), 0],
				[0, 0, Random(-360, 360), 0.4, "easeInOutBack"],
			],
			_position: [
				[Random(-10, 10), Random(-10, 10), Random(10, 50), 0],
				[Random(-10, 30), Random(-10, 10), Random(10, 50), 0.4, "easeInOutBack"],
			],
		}

		notes.push(dupe)
	}
});

filterednotes = notes.filter(n => n._time >= 344 && n._time <= 356)
filterednotes.forEach(note => {
	note._customData._noteJumpStartBeatOffset = 5
	note._customData._animation = {
		_rotation: [
			[0, 0, Random(-360, 360), 0],
			[0, 0, 0, 0.35, "easeInOutBack"],
		],
		_position: [
			[Random(-30, 30), Random(-30, 30), 0, 0],
			[0, 0, 0, 0.35, "easeInOutBack"],
		],
	}

	for (let i = 0; i < 4; i++) {
		const dupe = JSON.parse(JSON.stringify(note))
		dupe._time += 0.001 * i
		dupe._customData._fake = true
		dupe._customData._interactable = false

		dupe._customData._animation = {
			_rotation: [
				[0, 0, Random(-360, 360), 0],
				[0, 0, Random(-360, 360), 0.4, "easeInOutBack"],
			],
			_position: [
				[Random(-10, 10), Random(-10, 10), Random(10, 50), 0],
				[Random(-10, 30), Random(-10, 10), Random(10, 30), 0.4, "easeInOutBack"],
			],
		}

		notes.push(dupe)
	}
});


const precision = 4

// WRITE YOUR SCRIPT IN HERE ˇ

environment.push(
	{
		_id: "Logo",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "GlowLine",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "BackColumns",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "Structure",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "Buildings",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "Spectrograms",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "TrackMirror",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "TrackConstruction",
		_lookupMethod: "Contains",
		_active: false
	},
	{
		_id: "PlayersPlace",
		_lookupMethod: "Contains",
		_active: false
	}
)

// Cursed note generator

const RandomColors = [[1, 0, 0, 1], [1, 0.5, 0, 1]]

function RandomColor() {
	return RandomColors[Math.floor(Random(0, RandomColors.length - 1))]
}

for (let i = 0; i < 25; i++) {
	notes.push(
		{
			_time: 50 + (i * 2),
			_lineIndex: 0,
			_lineLayer: 0,
			_type: 0,
			_cutDirection: 0,
			_customData: {
				_noteJumpStartBeatOffset: 10,
				_track: "Floater",
				_fake: true,
				_interactable: false,
				_color: RandomColor(),
				_animation: {
					_definitePosition: [
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0, "easeInOutBack"],
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0.5, "easeInOutBack"],
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 1, "easeInOutBack"]
					],
					_localRotation: [
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.1, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.2, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.3, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.4, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.5, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.6, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.7, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.8, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.9, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 1, "easeInOutBack"]
					],
					_dissolve: [
						[0, 0]
					],
					_dissolveArrow: [
						[0, 0],
						[1, 0.1],
						[1, 0.9],
						[0, 1]
					],
					_scale: [
						[3, 3, 3, 0]
					]
				}
			}
		}
	)
}

for (let i = 0; i < 50; i++) {
	notes.push(
		{
			_time: 114 + (i * 0.4),
			_lineIndex: 0,
			_lineLayer: 0,
			_type: 0,
			_cutDirection: 0,
			_customData: {
				_noteJumpStartBeatOffset: 10,
				_track: "Floater",
				_fake: true,
				_interactable: false,
				_color: RandomColor(),
				_animation: {
					_definitePosition: [
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0, "easeInOutBack"],
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0.5, "easeInOutBack"],
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 1, "easeInOutBack"]
					],
					_localRotation: [
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.1, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.2, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.3, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.4, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.5, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.6, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.7, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.8, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0.9, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 1, "easeInOutBack"]
					],
					_dissolveArrow: [
						[0, 0],
						[1, 0.1],
						[1, 0.9],
						[0, 1]
					],
					_scale: [
						[3, 3, 3, 0]
					]
				}
			}
		}
	)
}

for (let i = 0; i < 44; i++) {
	notes.push(
		{
			_time: 146 + (i * 2),
			_lineIndex: 0,
			_lineLayer: 0,
			_type: 0,
			_cutDirection: 0,
			_customData: {
				_noteJumpStartBeatOffset: 10,
				_fake: true,
				_interactable: false,
				_color: RandomColor(),
				_animation: {
					_definitePosition: [
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0, "easeInOutBack"],
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0.5, "easeInOutBack"],
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 1, "easeInOutBack"]
					],
					_localRotation: [
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0, "easeInOutBack"],
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 1, "easeInOutBack"]
					],
					_dissolveArrow: [
						[0, 0],
						[1, 0.1],
						[1, 0.9],
						[0, 1]
					],
					_dissolve: [
						[0, 0],
						[1, 0.1],
						[1, 0.9],
						[0, 1]
					],
					_scale: [
						[3, 3, 3, 0]
					]
				}
			}
		}
	)
}

customEvents.push(
	{
		_time: 50,
		_type: "AnimateTrack",
		_data: {
			_track: "Floater",
			_dissolve: [[0, 0]],
			_duration: 1
		}
	}
)

for (let i = 0; i < 10; i++) {
	customEvents.push(
		{
			_time: 132 + (i / 5),
			_type: "AnimateTrack",
			_data: {
				_track: "Floater",
				_dissolve: [[1, 0]],
				_duration: 0.2
			}
		}
	)

	i++

	customEvents.push(
		{
			_time: 132 + (i / 5),
			_type: "AnimateTrack",
			_data: {
				_track: "Floater",
				_dissolve: [[0, 0]],
				_duration: 0.2
			}
		}
	)
}

for (let i = 0; i < 10; i++) {
	notes.push(
		{
			_time: 144,
			_lineIndex: 0,
			_lineLayer: 0,
			_type: 0,
			_cutDirection: 0,
			_customData: {
				_noteJumpStartBeatOffset: 10,
				_track: "Scarer",
				_fake: true,
				_interactable: false,
				_color: [1, 0, 0, 1],
				_animation: {
					_definitePosition: [
						[Random(-30, 30), Random(-30, 30), Random(10, 50), 0],
					],
					_localRotation: [
						[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0],
					],
					_scale: [
						[5, 5, 5, 0]
					]
				}
			}
		}
	)
}

customEvents.push(
	{
		_time: 130,
		_type: "AnimateTrack",
		_data: {
			_track: "Scarer",
			_dissolve: [[0, 0]],
			_dissolveArrow: [[0, 0]],
			_duration: 1
		}
	},
	{
		_time: 134,
		_type: "AnimateTrack",
		_data: {
			_track: "Scarer",
			_dissolve: [[1, 0]],
			_dissolveArrow: [[1, 0]],
			_duration: 1
		}
	},
	{
		_time: 135,
		_type: "AnimateTrack",
		_data: {
			_track: "Scarer",
			_position: [[0, 10, 0, 0]],
			_duration: 1
		}
	},
	{
		_time: 136,
		_type: "AnimateTrack",
		_data: {
			_track: "Scarer",
			_position: [[0, 20, 0, 0]],
			_dissolve: [[1, 0.5], [0, 1]],
			_dissolveArrow: [[1, 0.5], [0, 1]],
			_duration: 1
		}
	}
)

customEvents.push(
	{
		_time: 41,
		_type: "AssignPlayerToTrack",
		_data: {
			_track: "Player",
		}
	},
	{
		_time: 42,
		_type: "AnimateTrack",
		_data: {
			_track: "Player",
			_rotation: [
				[0, 0, 0, 0],
				[0, 0, 60, 0.25, "easeInOutCubic"],
				[0, 0, 0, 0.5, "easeInOutCubic"],
				[0, 0, -60, 0.75, "easeInOutCubic"],
				[0, 0, 0, 1, "easeInOutCubic"]
			],
			_position: [
				[0, 0, 0, 0],
				[0, 0, 20, 0.25, "easeInOutCubic"],
				[0, 0, 0, 0.5, "easeInOutCubic"],
				[0, 0, 20, 0.75, "easeInOutCubic"],
				[0, 0, 0, 1, "easeInOutCubic"]
			],
			_duration: 62
		}
	},
	{
		_time: 104,
		_type: "AnimateTrack",
		_data: {
			_track: "Player",
			_rotation: [
				[0, 0, 0, 0],
				[0, 0, 60, 0.25, "easeInOutCubic"],
				[0, 0, 0, 0.5, "easeInOutCubic"],
				[0, 0, -60, 0.75, "easeInOutCubic"],
				[0, 0, 0, 1, "easeInOutCubic"]
			],
			_position: [
				[0, 0, 0, 0],
				[0, -10, 20, 0.25, "easeInOutCubic"],
				[0, 0, 0, 0.5, "easeInOutCubic"],
				[0, 10, 20, 0.75, "easeInOutCubic"],
				[0, 0, 0, 1, "easeInOutCubic"]
			],
			_duration: 28
		}
	}
)

for (let i = 0; i < 30; i += 2) {
	customEvents.push(
		{
			_time: 136 + i,
			_type: "AnimateTrack",
			_data: {
				_track: "Player",
				_position: [
					[0, 0, 0, 0],
					[0, 0, 10, 0.5, "easeInOutCubic"],
					[0, 0, 0, 1, "easeInOutCubic"],
				],
				_duration: 2
			}
		}
	)
}

for (let i = 167; i <= 226; i += 5) {
	customEvents.push(
		{
			_time: i,
			_type: "AnimateTrack",
			_data: {
				_track: "Player",
				_position: [
					[0, 0, 0, 0],
					[Random(-10, 10), Random(-10, 10), Random(-10, 10), 0.5, "easeInOutCubic"],
					[0, 0, 0, 1, "easeInOutCubic"],
				],
				_rotation: [
					[0, 0, 0, 0],
					[0, 0, Random(-180, 180), 0.5, "easeInOutCubic"],
					[0, 0, 0, 1, "easeInOutCubic"],
				],
				_duration: 5
			}
		}
	)
}

notes.push(
	{
		_time: 344,
		_type: 0,
		_lineIndex: 0,
		_lineLayer: 0,
		_cutDirection: 1,
		_customData: {
			_disableNoteLook: true,
			_disableNoteGravity: true,
			_track: "Thing",
			_noteJumpStartBeatOffset: 112,
			_fake: true,
			_interactable: false,
			_color: [1, 1, 1, 1],
			_animation: {
				_definitePosition: [
					[0, 0, 30, 0]
				],
				_scale: [
					[50, 50, 50, 0]
				]
			}
		}
	}
)

notes.push(
	{
		_time: 344,
		_type: 0,
		_lineIndex: 0,
		_lineLayer: 0,
		_cutDirection: 1,
		_customData: {
			_disableNoteLook: true,
			_disableNoteGravity: true,
			_track: "Thing",
			_noteJumpStartBeatOffset: 112,
			_fake: true,
			_interactable: false,
			_color: [1, 1, 1, 1],
			_animation: {
				_definitePosition: [
					[30, 0, 0, 0]
				],
				_scale: [
					[50, 50, 50, 0]
				]
			}
		}
	}
)

notes.push(
	{
		_time: 344,
		_type: 0,
		_lineIndex: 0,
		_lineLayer: 0,
		_cutDirection: 1,
		_customData: {
			_disableNoteLook: true,
			_disableNoteGravity: true,
			_track: "Thing",
			_noteJumpStartBeatOffset: 112,
			_fake: true,
			_interactable: false,
			_color: [1, 1, 1, 1],
			_animation: {
				_definitePosition: [
					[-30, 0, 0, 0]
				],
				_scale: [
					[50, 50, 50, 0]
				]
			}
		}
	}
)

notes.push(
	{
		_time: 344,
		_type: 0,
		_lineIndex: 0,
		_lineLayer: 0,
		_cutDirection: 1,
		_customData: {
			_disableNoteLook: true,
			_disableNoteGravity: true,
			_track: "Thing",
			_noteJumpStartBeatOffset: 112,
			_fake: true,
			_interactable: false,
			_color: [1, 1, 1, 1],
			_animation: {
				_definitePosition: [
					[0, 0, -30, 0]
				],
				_scale: [
					[50, 50, 50, 0]
				]
			}
		}
	}
)

customEvents.push(
	{
		_time: 222,
		_type: "AnimateTrack",
		_data: {
			_track: "Thing",
			_dissolve: [[0, 0]],
			_dissolveArrow: [[0, 0]],
			_duration: 1
		}
	},
)

for (let i = 280; i <= 326; i++) {
	customEvents.push(
		{
			_time: i,
			_type: "AnimateTrack",
			_data: {
				_track: "Thing",
				_dissolve: [[0.1, 0.5], [0, 1]],
				_rotation: [
					[0, 0, 0, 0],
					[0, 90, 0, 0.25],
					[0, 180, 0, 0.5],
					[0, 270, 0, 0.75],
					[0, 360, 0, 1]
				],
				_duration: 1
			}
		}
	)
}

for (let i = 328; i <= 336; i++) {
	customEvents.push(
		{
			_time: i,
			_type: "AnimateTrack",
			_data: {
				_track: "Thing",
				_dissolve: [[0.1, 0.5], [0, 1]],
				_rotation: [
					[0, 0, 0, 0],
					[0, 90, 0, 0.25],
					[0, 180, 0, 0.5],
					[0, 270, 0, 0.75],
					[0, 360, 0, 1]
				],
				_duration: 1
			}
		}
	)
}

for (let i = 368; i < 392; i++) {
	customEvents.push(
		{
			_time: i,
			_type: "AnimateTrack",
			_data: {
				_track: "Drop",
				_scale: [[1, 1, 1, 0], [1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1]],
				_localRotation: [[0, 0, 0, 0], [0, 0, Random(-4, 4), 0.5], [0, 0, 0, 1]],
				_duration: 0.5
			}
		},
		{
			_time: i,
			_type: "AnimateTrack",
			_data: {
				_track: ["Player", "Drop"],
				_position: [[0, 0, 0, 0], [0, 0, 10, 0.5], [0, 0, 0, 1]],
				_duration: 1
			}
		}
	)
}

customEvents.push(
	{
		_time: 337.5,
		_type: "AnimateTrack",
		_data: {
			_track: "Thing",
			_dissolve: [[0.1, 0.5], [0, 1]],
			_rotation: [
				[0, 0, 0, 0],
				[0, 90, 0, 0.25],
				[0, 180, 0, 0.5],
				[0, 270, 0, 0.75],
				[0, 360, 0, 1]
			],
			_duration: 1
		}
	},
	{
		_time: 339,
		_type: "AnimateTrack",
		_data: {
			_track: "Thing",
			_dissolve: [[0.1, 0.5], [0, 1]],
			_rotation: [
				[0, 0, 0, 0],
				[0, 90, 0, 0.25],
				[0, 180, 0, 0.5],
				[0, 270, 0, 0.75],
				[0, 360, 0, 1]
			],
			_duration: 1
		}
	},
	{
		_time: 340,
		_type: "AnimateTrack",
		_data: {
			_track: "Thing",
			_dissolve: [[0.1, 0.5], [0, 1]],
			_rotation: [
				[0, 0, 0, 0],
				[0, 90, 0, 0.25],
				[0, 180, 0, 0.5],
				[0, 270, 0, 0.75],
				[0, 360, 0, 1]
			],
			_duration: 1
		}
	}
)

customEvents.push(
	{
		_time: 0,
		_type: "AssignFogTrack",
		_data: {
			_track: "Fog"
		}
	},
	{
		_time: 0,
		_type: "AnimateTrack",
		_data: {
			_track: "Fog",
			_startY: [[-9999, 0]],
			_duration: 1
		}
	}
)


filterednotes = notes.filter(n => n._time >= 396 && n._time <= 428)
filterednotes.forEach(note => {
	note._customData._noteJumpStartBeatOffset = 10
	note._customData._animation = {
		_localRotation: [
			[Random(-360, 360), Random(-360, 360), Random(-360, 360), 0, "easeInOutBack"],
			[0, 0, 0, 0.4, "easeInOutBack"],
		],
		_position: [
			[Random(-30, 30), Random(-30, 30), Random(10, 50), 0, "easeInOutBack"],
			[0, 0, 0, 0.4, "easeInOutBack"],
		],
		_dissolve: [
			[0, 0],
			[0, 0.3],
			[1, 0.4]
		]
	}
});


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

const data = JSON.parse(fs.readFileSync(OUTPUT))

console.log("\n--------------- NOODLE/CHROMA EVENTS STATS ---------------\n\n", data._customData._environment.length, "Environment pieces pushed\n", data._customData._customEvents.length, "Custom events pushed\n\n--------------- NORMAL MAP STATS ---------------\n\n", data._notes.length, "Notes\n", data._obstacles.length, "Walls\n", data._events.length, "Events")
console.log("\x1b[1m\x1b[32m", "\nAll pushes ran successfully!\n")