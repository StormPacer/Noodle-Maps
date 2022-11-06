"use strict";
const fs = require('fs');

const INPUT = "ExpertPlusLawless.dat"
const OUTPUT = "ExpertPlusStandard.dat"

let difficulty = JSON.parse(fs.readFileSync(INPUT));

difficulty._customData = { _environment: [], _customEvents: [] };

const customData = difficulty._customData;
const environment = customData._environment;
const customEvents = customData._customEvents;
const events = difficulty._events

function Random(min, max) {
    max++;
    return Math.random() * (max - min) + min;
}

const precision = 4

// WRITE YOUR SCRIPT IN HERE ˇ

environment.push(
    {
        _id: "Castle",
        _lookupMethod: "Contains",
        _active: false
    },
    {
        _id: "PlayersPlace",
        _lookupMethod: "Contains",
        _active: false
    },
    {
        _id: "ZombieHand (1)",
        _lookupMethod: "EndsWith",
        _scale: [10, 10, 10],
        _localRotation: [0, 180, 0],
        _track: "ZombieHand",
    },
    {
        _id: "Tree",
        _lookupMethod: "Contains",
        _track: "Trees"
    },
    {
        _id: "Crow",
        _lookupMethod: "Contains",
        _active: false
    },
    {
        _id: "Fog",
        _lookupMethod: "Contains",
        _active: false
    },
    {
        _id: "Grave0 (1)",
        _lookupMethod: "EndsWith",
        _track: "CrossGrave",
        _scale: [50, 50, 50],
        _position: [0, 0, 60],
        _localRotation: [-90, 0, 0],
    },
    {
        _id: "Bats",
        _lookupMethod: "EndsWith",
        _active: false
    },
    {
        _id: "ZombieHand (2)",
        _lookupMethod: "EndsWith",
        _scale: [30, 30, 30],
        _track: "ZombieHand2",
    },
    {
        _id: "ZombieHand (3)",
        _lookupMethod: "EndsWith",
        _scale: [30, 30, 30],
        _localRotation: [0, 0, 0],
        _track: "ZombieHand3",
    },
    {
        _id: "Grave0 (2)",
        _lookupMethod: "EndsWith",
        _track: "CrossGrave1",
        _scale: [50, 50, 50],
    },
    {
        _id: "Grave0",
        _lookupMethod: "EndsWith",
        _track: "CrossGrave2",
        _scale: [50, 50, 50],
    },
    {
        _id: "Grave0",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _track: "CrossGrave3",
        _scale: [50, 50, 50],
    },
    {
        _id: "Grave0",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _track: "CrossGrave4",
        _scale: [50, 50, 50],
    },
    {
        _id: "ZombieHand (4)",
        _lookupMethod: "EndsWith",
        _scale: [20, 20, 20],
        _localRotation: [0, 90, 0],
        _track: "ZombieHand4",
    },
    {
        _id: "ZombieHand (5)",
        _lookupMethod: "EndsWith",
        _scale: [20, 20, 20],
        _localRotation: [0, -90, 0],
        _track: "ZombieHand5",
    },
    {
        _id: "ZombieHand (6)",
        _lookupMethod: "EndsWith",
        _scale: [40, 40, 40],
        _localRotation: [0, 20, 0],
        _track: "ZombieHand6",
    },
    {
        _id: "ZombieHand (2)",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _scale: [10, 10, 10],
        _localRotation: [0, -20, 0],
        _track: "ZombieHand7",
    },
    {
        _id: "ZombieHand (2)",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _scale: [10, 10, 10],
        _localRotation: [0, 40, 0],
        _track: "ZombieHand8",
    },
    {
        _id: "ZombieHand (2)",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _scale: [10, 10, 10],
        _localRotation: [0, -90, 0],
        _track: "ZombieHand9",
    },
    {
        _id: "ZombieHand (2)",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _scale: [10, 10, 10],
        _localRotation: [0, 0, 0],
        _track: "ZombieHand10",
    },
    {
        _id: "ZombieHand (2)",
        _lookupMethod: "EndsWith",
        _duplicate: 1,
        _scale: [10, 10, 10],
        _localRotation: [0, 14, 0],
        _track: "ZombieHand11",
    },
    {
        _id: "TombStone",
        _lookupMethod: "Contains",
        _track: "TombStone",
    },
    {
        _id: "Fence",
        _lookupMethod: "Contains",
        _track: "Fence",
    },
    {
        _id: "Grave",
        _lookupMethod: "EndsWith",
        _active: false,
    },
    {
        _id: "Grave1",
        _lookupMethod: "EndsWith",
        _active: false,
    },
    {
        _id: "Grave1 (1)",
        _lookupMethod: "EndsWith",
        _active: false,
    },
    {
        _id: "Ground",
        _lookupMethod: "EndsWith",
        _active: false,
    },
    {
        _id: "[163]ZombieHand",
        _lookupMethod: "EndsWith",
        _active: false,
    }
);

for (let i = 1; i < 23; i++) {
    environment.push({
        _id: `RotatingLasersPair (${i})`,
        _lookupMethod: "Contains",
        _track: `laser${i}`,
    });
}

for (let i = 1; i <= 91; i++) {
    environment.push(
        {
            _id: `GroundStone (${i})`,
            _lookupMethod: "Contains",
            _track: `Stone${i}`,
        }
    )
}

for (let i = 1; i <= 91; i++) {
    const x = Random(-30, 30)
    const y = Random(0, 20)
    const z = Random(0, 40)

    const rx = Random(0, 360)
    const ry = Random(0, 360)
    const rz = Random(0, 360)

    customEvents.push(
        {
            _time: 0,
            _type: "AnimateTrack",
            _data: {
                _track: `Stone${i}`,
                _localPosition: [[x, y, z, 0], [Random(-30, 30), Random(0, 20), Random(0, 40), 1]],
                _localRotation: [[rx, ry, rz, 0], [Random(0, 360), Random(0, 360), Random(0, 360), 1]],
                _duration: 300,
            }
        },
    )
}

customEvents.push(
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand",
            _position: [[0, -50, 40, 0], [0, 0, 40, 1, "easeOutExpo"]],
            _duration: 20,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "Trees",
            _localPosition: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand2",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 23.417,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand2",
            _position: [[40, -50, 60, 0], [40, 0, 60, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand3",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 31.204,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand3",
            _position: [[-40, -50, 60, 0], [-40, 0, 60, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave1",
            _position: [[0, -999, 0, 0]],
            _localRotation: [[-90, -15, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 18.524,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave1",
            _position: [[40, -50, 80, 0], [40, 0, 80, 1]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave2",
            _position: [[0, -999, 0, 0]],
            _localRotation: [[-90, 15, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 26.311,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave2",
            _position: [[-40, -50, 80, 0], [-40, 0, 80, 1]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave3",
            _position: [[0, -999, 0, 0]],
            _localRotation: [[-90, 90, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 34.097,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave3",
            _position: [[40, -50, 30, 0], [40, 0, 30, 1]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand4",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 38.991,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand4",
            _position: [[20, -50, 30, 0], [20, 0, 30, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave4",
            _position: [[0, -999, 0, 0]],
            _localRotation: [[-90, -90, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 41.884,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave4",
            _position: [[-40, -50, 30, 0], [-40, 0, 30, 1]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand5",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 46.777,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand5",
            _position: [[-20, -50, 30, 0], [-20, 0, 30, 1, "easeOutExpo"]],
            _duration: 1,
        }
    }
)

customEvents.push(
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand6",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 50.691,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand6",
            _position: [[20, -40, 60, 0], [20, 0, 60, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand7",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 54.605,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand7",
            _position: [[-10, -20, 20, 0], [-10, 0, 20, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand8",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 58.519,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand8",
            _position: [[10, -40, 10, 0], [10, 0, 10, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand9",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 62.433,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand9",
            _position: [[-15, -40, 15, 0], [-15, 0, 15, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand10",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 66.347,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand10",
            _position: [[5, -40, 30, 0], [5, 0, 30, 1, "easeOutExpo"]],
            _duration: 1,
        }
    },
    {
        _time: 0,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand11",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 70.261,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand11",
            _position: [[-5, -40, 30, 0], [-5, 0, 30, 1, "easeOutExpo"]],
            _duration: 1,
        }
    }
)

for (let i = 1; i <= 11; i++) {
    customEvents.push(
        {
            _time: 81.031,
            _type: "AnimateTrack",
            _data: {
                _track: "ZombieHand" + i,
                _position: [[0, -999, 0, 0]],
                _duration: 1,
            }
        }
    )
}

for (let i = 1; i <= 4; i++) {
    customEvents.push(
        {
            _time: 81.032,
            _type: "AnimateTrack",
            _data: {
                _track: "CrossGrave" + i,
                _position: [[0, -999, 0, 0]],
                _duration: 1,
            }
        }
    )
}

customEvents.push(
    {
        _time: 81.032,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    }
)

customEvents.push(
    {
        _time: 128.844,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave",
            _position: [[0, 50, 50, 0], [0, 60, 50, 0.5, "easeInOutBack"], [0, 50, 50, 1, "easeInOutBack"]],
            _localRotation: [[90, 0, 0, 0]],
            _duration: 32
        }
    }
)


customEvents.push(
    {
        _time: 81.031,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    }
)

customEvents.push(
    {
        _time: 81.032,
        _type: "AnimateTrack",
        _data: {
            _track: "TombStone",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
    {
        _time: 81.032,
        _type: "AnimateTrack",
        _data: {
            _track: "Fence",
            _position: [[0, -999, 0, 0]],
            _duration: 1,
        }
    },
)

customEvents.push(
    {
        _time: 0,
        _type: "AssignFogTrack",
        _data: {
            _track: "Fog",
        }
    },
    {
        _time: 81.032,
        _type: "AnimateTrack",
        _data: {
            _track: "Fog",
            _startY: [[-999, 0]],
            _duration: 1,
        }
    },
    {
        _time: 202.201,
        _type: "AnimateTrack",
        _data: {
            _track: "Fog",
            _startY: [[-2, 0]],
            _duration: 1,
        }
    }
)

for (let i = 1; i <= 91; i++) {
    customEvents.push(
        {
            _time: 81.032,
            _type: "AnimateTrack",
            _data: {
                _track: `Stone${i}`,
                _localPosition: [[0, -999, 0, 0]],
                _duration: 1,
            }
        }
    )
}

for (let i = 0; i < 60; i++) {
    environment.push(
        {
            _id: "ZombieHand (2)",
            _lookupMethod: "EndsWith",
            _duplicate: 1,
            _scale: [10, 10, 10],
            _track: `ZombieHand${12 + i}`,
        },
    )

    customEvents.push(
        {
            _time: 0,
            _type: "AnimateTrack",
            _data: {
                _track: `ZombieHand${12 + i}`,
                _position: [[0, -999, 0, 0]],
                _duration: 1,
            }
        }
    )
}

for (let z = 0; z < 15; z += 2) {
    for (let i = 2; i <= 72; i++) {
        let x = 0;
        let y = Random(-60, 60)

        const scale = Random(20, 50)

        let random = Math.random();

        if (random < 0.5) x = Random(-70, -50);
        else x = Random(50, 70);

        if (y > 30 || y < -30) x = Random(-10, 10);

        customEvents.push(
            {
                _time: 81.032 + (i * 0.1) + z,
                _type: "AnimateTrack",
                _data: {
                    _track: `ZombieHand${i}`,
                    _position: [[x, y, Random(150, 200), 0], [x, y, Random(-20, 0), 0.99], [0, -999, 0, 1]],
                    _rotation: [[0, 0, 0, 0], [0, 0, 90, 0.25], [0, 0, 180, 0.5], [0, 0, 270, 0.75], [0, 0, 360, 1]],
                    _scale: [[scale, scale, scale, 0]],
                    _duration: 2,
                }
            }
        )
    }
}

for (let z = 0; z < 50; z++) {
    for (let i = 1; i <= 22; i++) {
        let x = Random(-70, 70);
        let y = Random(-60, 60)

        customEvents.push(
            {
                _time: 81.032 + (i * 0.1) + z,
                _type: "AnimateTrack",
                _data: {
                    _track: `laser${i}`,
                    _position: [[x, y, Random(150, 200), 0], [x, y, Random(-20, 0), 0.99], [0, -999, 0, 1]],
                    _rotation: [[Random(0, 360), Random(0, 360), Random(0, 360), 0], [Random(0, 360), Random(0, 360), Random(0, 360), 1]],
                    _duration: 1,
                }
            }
        )
    }
}

for (let z = 0; z < 15; z += 2) {
    for (let i = 2; i <= 76; i++) {
        let x = 0;

        let random = Math.random();

        if (random < 0.5) x = -20;
        else x = 20;

        customEvents.push(
            {
                _time: 104.979 + (i * 0.1) + z,
                _type: "AnimateTrack",
                _data: {
                    _track: `ZombieHand${i}`,
                    _position: [[x, -20, Random(150, 200), 0], [x, -20, Random(-20, 0), 0.99], [0, -999, 0, 1]],
                    _scale: [[40, 40, 40, 0]],
                    _duration: 2,
                }
            }
        )
    }
}

for (let z = 0; z < 25; z += 2) {
    for (let i = 1; i <= 23; i++) {
        let x = 0;

        let random = Math.random();

        if (random < 0.5) x = -20;
        else x = 20;

        customEvents.push(
            {
                _time: 104.979 + (i * 0.1) + z,
                _type: "AnimateTrack",
                _data: {
                    _track: `laser${i}`,
                    _position: [[x, -20, Random(150, 200), 0], [x, -20, Random(-20, 0), 0.99], [0, -999, 0, 1]],
                    _duration: 2,
                }
            }
        )
    }
}

for (let z = 0; z < 45; z += 5) {
    for (let i = 1; i <= 23; i++) {
        let x = 0;

        if (i <= 11) x = -20;
        else x = 20;

        customEvents.push(
            {
                _time: 153.687 + z + (i * 0.3),
                _type: "AnimateTrack",
                _data: {
                    _track: `laser${i}`,
                    _position: [[x, 0, 100, 0], [x, 0, 0, 0.99], [0, -999, 0, 1]],
                    _rotation: [[0, 0, 0, 0], [0, 0, 90, 0.25], [0, 0, 180, 0.5], [0, 0, 270, 0.75], [0, 0, 360, 1]],
                    _duration: 5,
                }
            }
        )
    }
}

for (let i = 1; i <= 23; i++) {
    customEvents.push(
        {
            _time: 202.209,
            _type: "AnimateTrack",
            _data: {
                _track: `laser${i}`,
                _position: [[Random(-40, 40), Random(-20, 20), Random(10, 50), 0]],
                _rotation: [[Random(0, 360), Random(0, 360), Random(0, 360), 0]],
                _duration: 1,
            }
        }
    )
}

events.forEach(e => {
    if (e._time >= 81.032 && e._time <= 128.844) {
        if (e._type == 2 || e._type == 3) {
            if (e._customData) {
                e._customData._color = [Random(0, 1) * 2, Random(0, 1) * 2, Random(0, 1) * 2, 10]
            }
        }
    }
})

for (let i = 10; i <= 20; i++) {
    environment.push(
        {
            _id: "Grave0 (1)",
            _lookupMethod: "EndsWith",
            _track: `CrossGrave${i}`,
            _scale: [50, 50, 50],
            _position: [0, -99999, 0],
            _duplicate: 1,
            _localRotation: [-90, -90, 0],
        }
    )
}

for (let z = 0; z < 36; z += 4) {
    for (let i = 10; i <= 20; i++) {
        let y = 0;
        const x = Random(-70, 70);
        const zp = Random(40, 150);

        if (i % 2 == 0) y = -100;
        else y = 100;

        customEvents.push(
            {
                _time: 157.687 + (i * 0.4) + z,
                _type: "AnimateTrack",
                _data: {
                    _track: `CrossGrave${i}`,
                    _position: [[x, y, zp, 0], [x, y * -1, zp, 0.99], [0, -999, 0, 1]],
                    _rotation: [[Random(0, 360), Random(0, 360), Random(0, 360), 0], [Random(0, 360), Random(0, 360), Random(0, 360), 1]],
                    _scale: [[0, 0, 0, 0], [50, 50, 50, 0.3], [50, 50, 50, 0.7], [0, 0, 0, 1]],
                    _duration: 4,
                }
            }
        )
    }
}

//for (let z = 0; z < 28; z += 2) {
//    for (let i = 10; i <= 41; i++) {
//        let x = 0;
//
//        if (i % 2 == 0) x = -20;
//        else x = 20;
//
//        customEvents.push(
//            {
//                _time: 157.687 + (i * 0.4) + z,
//                _type: "AnimateTrack",
//                _data: {
//                    _track: `CrossGrave${i}`,
//                    _position: [[x, -30, 150, 0], [x, -30, -20, 0.99], [0, -999, 0, 1]],
//                    _duration: 2,
//                }
//            }
//        )
//    }
//}

customEvents.push(
    {
        _time: 160.687,
        _type: "AnimateTrack",
        _data: {
            _track: "CrossGrave",
            _position: [[0, 0, -9999, 0]],
            _duration: 1,
        }
    }
)

for (let i = 3; i <= 10; i++) {
    const z = Random(10, 50);
    const x = Random(-40, 40);
    customEvents.push(
        {
            _time: 202.201,
            _type: "AnimateTrack",
            _data: {
                _track: `ZombieHand${i}`,
                _position: [[x, -99, z, 0], [x, 0, z, 1]],
                _duration: 16,
            }
        }
    )
}

customEvents.push(
    {
        _time: 218,
        _type: "AnimateTrack",
        _data: {
            _track: "ZombieHand11",
            _position: [[0, -2, 200, 0], [0, -2, 5, 1]],
            _scale: [[10, 10, 10, 0]],
            _duration: 1,
        }
    }
)


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