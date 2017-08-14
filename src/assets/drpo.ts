export const DigitalRepresentedPhysicalObjects: [any] = [{
  "uid": "julia",
  "type": "object",
  "title": "Julia",
  "comment": "",
  "options": { "toggled": true, "ctrl": true },
  "form": { "width":  null, "height": null,  "depth":  null, },
  "appearance": { "mtl": "objects/Julia/julia.mtl", "obj": "objects/Julia/julia.obj", "color": "null" },
  "position": [
    { "x": "7", "y": "7.3", "z": "-14.471" }
  ],
  "rotation": [
    { "x": "0", "y": "-53.858", "z": "0"}
  ],
  "scale": [
    { "x": "0.200", "y": "0.200", "z": "0.200" }
  ],
  "animation": [
    { 
      "title": "turn-back",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "position", "to": "7 7.3 -14.471", "dur": "1000" },
        { "attribute": "rotation", "to": "0 -233.858 0", "dur": "1000" }
      ]
    },
    { 
      "title": "std",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "position", "to": "7 7.3 -14.471", "dur": "1000" },
        { "attribute": "rotation", "to": "0 -53.858 0", "dur": "1000" }
      ]
    },
    { 
      "title": "fly",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "position", "to": "7 10 -14.471", "dur": "1000" },
        { "attribute": "rotation", "to": "360 -53.858 0", "dur": "1000" }
      ]
    },{ 
      "title": "land",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "position", "to": "7 7.3 -14.471", "dur": "1000" },
        { "attribute": "rotation", "to": "-360 -53.858 0", "dur": "1000" }
      ]
    }
  ]
},{
  "uid": "curtain-left",
  "type": "box",
  "title": "The left curtain.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": true,
    "intesity": null
  },
  "form": {
    "width":  "24",
    "height": "13", 
    "depth":  "0.1",
  },
  "appearance": {
    "material": "materials/curtain.jpg",
    "color": null
  },
  "position": [
    { "x": "-12","y": "7","z": "-10" },
    { "x": "0", "y": "0", "z": "0"},
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
    { "x": null, "y": null, "z": null },
  ],
  "animation": [
    { 
      "title": "animateOpen",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "width", "to": "5", "dur": "4000" }
      ]
    }, { 
      "title": "animateClose",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "width", "to": "24", "dur": "6000" }
      ]
    }
  ]
},
{
  "uid": "curtain-right",
  "type": "box",
  "title": "The right curtain.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": true,
    "intesity": null
  },
  "form": {
    "width":  "24",
    "height": "13", 
    "depth":  "0.1",
  },
  "appearance": {
    "material": "materials/curtain.jpg",
    "color": null
  },
  "position": [
    { "x": "12", "y": "7", "z": "-10" },
    { "x": "0", "y": "0", "z": "0"},
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
    { "x": null, "y": null, "z": null },
  ],
  "animation": [
    { 
      "title": "animateOpen",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "width", "to": "5", "dur": "4000" }
      ]
    }, { 
      "title": "animateClose",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "width", "to": "24", "dur": "6000" }
      ]
    }
  ]
},
{
  "uid": "wall-right",
  "type": "box",
  "title": "The right theatre wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "1",
    "height": "14", 
    "depth":  "40",
  },
  "appearance": {
    "material": null,
    "color": "#581313"
  },
  "position": [
    { "x": "15", 
      "y": "7", 
      "z": "0" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "wall-left",
  "type": "box",
  "title": "The left theatre wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "1",
    "height": "14", 
    "depth":  "40",
  },
  "appearance": {
    "material": null,
    "color": "#581313"
  },
  "position": [
    { "x": "-15", 
      "y": "7", 
      "z": "0" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "wall-front",
  "type": "box",
  "title": "The background",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "30",
    "height": "14", 
    "depth":  "1",
  },
  "appearance": {
    "material": "materials/background.png",
    "color": null
  },
  "position": [
    { "x": "0", 
      "y": "7", 
      "z": "-20" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "ceiling",
  "type": "box",
  "title": "The theatres ceiling.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "30",
    "height": "1", 
    "depth":  "40",
  },
  "appearance": {
    "material": null,
    "color": "#000000"
  },
  "position": [
    { "x": "0", 
      "y": "13.641", 
      "z": "-0.009" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "floor",
  "type": "box",
  "title": "The theatres floor.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "30",
    "height": "1", 
    "depth":  "40",
  },
  "appearance": {
    "material": null,
    "color": "#352020"
  },
  "position": [
    { "x": "0", 
      "y": "0", 
      "z": "-0.8" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "stage",
  "type": "box",
  "title": "The theatres stage.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "30",
    "height": "2", 
    "depth":  "10",
  },
  "appearance": {
    "material": null,
    "color": "#000000"
  },
  "position": [
    { "x": "0", 
      "y": "1", 
      "z": "-14.5" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-right",
  "type": "box",
  "title": "The entrance halls right wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "1",
    "height": "14", 
    "depth":  "30",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "15", 
      "y": "7", 
      "z": "35" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-left",
  "type": "box",
  "title": "The entrance halls left wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "1",
    "height": "14", 
    "depth":  "30",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "-15", 
      "y": "7", 
      "z": "35" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-back",
  "type": "box",
  "title": "The entrance halls right wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "31",
    "height": "14", 
    "depth":  "1",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "0", 
      "y": "6.726", 
      "z": "48.357" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-floor",
  "type": "box",
  "title": "The entrance halls floor.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "35",
    "height": "35", 
    "depth":  "1",
  },
  "appearance": {
    "material": null,
    "color": "#352020"
  },
  "position": [
    { "x": "0", 
      "y": "0.01", 
      "z": "34.603" 
    },
  ],
  "rotation": [
    { "x": "-90", "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-ceiling",
  "type": "box",
  "title": "The entrance halls ceiling.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "30",
    "height": "30", 
    "depth":  "1",
  },
  "appearance": {
    "material": null,
    "color": "#352020"
  },
  "position": [
    { "x": "0", 
      "y": "14", 
      "z": "34.603" 
    },
  ],
  "rotation": [
    { "x": "-90", "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-door-inner-left",
  "type": "box",
  "title": "The entrance halls inner left front wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "7.5",
    "height": "14", 
    "depth":  "1",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "-11", 
      "y": "7", 
      "z": "20" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-door-inner-right",
  "type": "box",
  "title": "The entrance halls inner right front wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "7.5",
    "height": "14", 
    "depth":  "1",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "11", 
      "y": "7", 
      "z": "20" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-door-outer-left",
  "type": "box",
  "title": "The entrance halls outer left front wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "7.5",
    "height": "14", 
    "depth":  "0",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "-11.001", 
      "y": "7", 
      "z": "19.478" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "entr-wall-door-outer-right",
  "type": "box",
  "title": "The entrance halls outer right front wall.",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": false,
    "intesity": null
  },
  "form": {
    "width":  "7.5",
    "height": "14", 
    "depth":  "0",
  },
  "appearance": {
    "material": null,
    "color": "#cc9966"
  },
  "position": [
    { "x": "11.001", 
      "y": "7", 
      "z": "19.478" 
    },
  ],
  "rotation": [
    { "x": null, "y": null, "z": null },
  ],
  "scale": [
    { "x": null, "y": null, "z": null },
  ]
},
{
  "uid": "poster1",
  "type": "plane",
  "title": "A Poster.",
  "comment": null,
  "options": { "toggled": true, "ctrl": false, "intesity": null },
  "form": { "width":  "","height": "", "depth":  "",},
  "appearance": {
    "material": "materials/plakat1.jpg",
    "color": null
  },
  "position": [
    { "x": "-13.898", 
      "y": "6.854", 
      "z": "26.471" 
    },
  ],
  "rotation": [
    { "x": "0", "y": "90", "z": "0" },
  ],
  "scale": [
    { "x": "5", "y": "5", "z": "0" },
  ]
},
{
  "uid": "poster2",
  "type": "plane",
  "title": "Another Poster.",
  "comment": null,
  "options": { "toggled": true, "ctrl": false, "intesity": null },
  "form": { "width":  "","height": "", "depth":  "",},
  "appearance": {
    "material": "materials/plakat2.jpg",
    "color": null
  },
  "position": [
    { "x": "14.216", 
      "y": "6.761", 
      "z": "27.588" 
    },
  ],
  "rotation": [
    { "x": "0", "y": "-90", "z": "0" },
  ],
  "scale": [
    { "x": "6", "y": "12", "z": "0" },
  ]
},
{
  "uid": "poster3",
  "type": "plane",
  "title": "Another Poster.",
  "comment": null,
  "options": { "toggled": true, "ctrl": false, "intesity": null },
  "form": { "width":  "","height": "", "depth":  "",},
  "appearance": {
    "material": "materials/plakat3.jpg",
    "color": null
  },
  "position": [
    { "x": "14.216", 
      "y": "10.130", 
      "z": "38.702" 
    },
  ],
  "rotation": [
    { "x": "0", "y": "-90", "z": "0" },
  ],
  "scale": [
    { "x": "7", "y": "5", "z": "0" },
  ]
},
{
  "uid": "poster4",
  "type": "plane",
  "title": "Another Poster.",
  "comment": null,
  "options": { "toggled": true, "ctrl": false, "intesity": null },
  "form": { "width":  "","height": "", "depth":  "",},
  "appearance": {
    "material": "materials/plakat4.jpg",
    "color": null
  },
  "position": [
    { "x": "14.216", 
      "y": "3.270", 
      "z": "38.702" 
    },
  ],
  "rotation": [
    { "x": "0", "y": "-90", "z": "0" },
  ],
  "scale": [
    { "x": "7", "y": "5", "z": "0" },
  ]
},
{
  "uid": "poster5",
  "type": "plane",
  "title": "Another Poster.",
  "comment": null,
  "options": { "toggled": true, "ctrl": false, "intesity": null },
  "form": { "width":  "","height": "", "depth":  "",},
  "appearance": {
    "material": "materials/plakat5.jpg",
    "color": null
  },
  "position": [
    { "x": "-14.216", 
      "y": "6.898", 
      "z": "38.702" 
    },
  ],
  "rotation": [
    { "x": "0", "y": "90", "z": "0" },
  ],
  "scale": [
    { "x": "7", "y": "5", "z": "0" },
  ]
},{
  "uid": "balcony",
  "type": "object",
  "title": "The balcony",
  "comment": "",
  "options": { "toggled": true, "ctrl": false, "intesity": null },
  "form": { "width":  null, "height": null,  "depth":  null, },
  "appearance": { "mtl": "objects/Balkon/balkon.mtl", "obj": "objects/Balkon/balkon.obj", "color": "null" },
  "position": [
    { "x": "10", "y": "2.215", "z": "-16" }
  ],
  "rotation": [
    { "x": "0", "y": "204", "z": "0"}
  ],
  "scale": [
    { "x": null, "y": null, "z": null }
  ]
},{
  "uid": "Chairs",
  "type": "object",
  "title": "Chairs",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": true,
    "intesity": null
  },
  "form": { "width":  null, "height": null,  "depth":  null, },
  "appearance": { "mtl": "objects/Sitze/Stuhl.mtl", "obj": "objects/Sitze/Stuhl.obj", "color": "null" },
  "position": [
    { "x": "2.8", "y": "0", "z": "-1.28" }
  ],
  "rotation": [
    { "x": "0", "y": "270", "z": "0" },
  ],
  "scale": [
     { "x": null, "y": null, "z": null },
  ]
},{
  "uid": "camera0",
  "type": "camera",
  "title": "Camera 0",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true, "intesity": null, "active": true },
  "position": [
    { "x": "0.7", "y": "3", "z": "39.315"},
  ],
  "rotation":[{ "x":null, "y":null, "z":null }],
  "animation": [
    { 
      "title": "moveForward",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "position", "to": "0.7 3.0 -39.315", "dur": "10000", "delay": "30000" }
      ]
    }
  ]  
},{
  "uid": "camera1",
  "type": "camera",
  "title": "Camera 1",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
  "position": [{ "x": "0.7", "y": "3", "z": "6"},],
  "rotation":[{ "x":null, "y":null, "z":null }]
},{
  "uid": "camera2",
  "type": "camera",
  "title": "Camera 2",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
  "position": [{ "x": "7.1", "y": "7.2", "z": "-15.4"},],
  "rotation":[{ "x":"0", "y":"120", "z":"0" },]
},{
  "uid": "camera3",
  "type": "camera",
  "title": "Camera 3",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
  "position": [{ "x": "0", "y": "2.918", "z": "-12.5"},],
  "rotation":[{ "x":"0", "y":"-70", "z":"0" },]
},{
  "uid": "camera4",
  "type": "camera",
  "title": "Camera 4",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
  "position": [{ "x": "0.7", "y": "10", "z": "6"},],
  "rotation":[{ "x":null, "y":null, "z":null }]
},{
  "uid": "camera5",
  "type": "camera",
  "title": "Camera 5",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
  "position": [ { "x": "0.7", "y": "10", "z": "6"},],
  "rotation":[{ "x":null, "y":null, "z":null },], 
},{
  "uid": "the_spot",
  "type": "light",
  "title": "Spot Light",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true },
  "position": [
    { "x": "0", "y": "10", "z": "0"},
  ],
  "light": {
    "intensity": "0.5", 
    "color": "#FFF",
    "type": "spot"
  }
},{
  "uid": "the_ambient",
  "type": "light",
  "title": "Ambient Light",
  "comment": "null",
  "options": { "toggled": true, "ctrl": true },
  "position": [
    { "x": "0", "y": "0", "z": "0"},
  ],
  "light": {
    "intensity": "1.0", 
    "color": "#FFF",
    "type": "ambient"
  },
},{
  "uid": "door-right",
  "type": "object",
  "title": "The right door.",
  "comment": "",
  "options": { "toggled": true, "ctrl": true },
  "form": { "width":  null, "height": null,  "depth":  null, },
  "appearance": { "mtl": "objects/Door/door.mtl", "obj": "objects/Door/door.obj", "color": "null" },
  "position": [
    { "x": "7.5", "y": "7.0", "z": "20.0" }
  ],
  "rotation": [
    { "x": "0", "y": "90", "z": "0"}
  ],
  "scale": [
    { "x": "0.4", "y": "0.5", "z": "0.5" }
  ],
  "animation": [
    { 
      "title": "animateOpen",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "rotation", "to": "0 180 0", "dur": "4000" }
      ]
    }, { 
      "title": "animateClose",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "rotation", "to": "0 90 0", "dur": "4000" }
      ]
    }
  ]
},{
  "uid": "door-left",
  "type": "object",
  "title": "The left door.",
  "comment": "",
  "options": { "toggled": true, "ctrl": true },
  "form": { "width":  null, "height": null,  "depth":  null, },
  "appearance": { "mtl": "objects/Door/door.mtl", "obj": "objects/Door/door.obj", "color": "null" },
  "position": [
    { "x": "-7.5", "y": "7.0", "z": "20.0" }
  ],
  "rotation": [
    { "x": "0", "y": "-90", "z": "0"}
  ],
  "scale": [
    { "x": "0.4", "y": "0.5", "z": "0.5" }
  ],
  "animation": [
    { 
      "title": "animateOpen",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "rotation", "to": "0 -180 0", "dur": "4000" }
      ]
    }, { 
      "title": "animateClose",
      "autostart": false, 
      "state": false,
      "changes": [
        { "attribute": "rotation", "to": "0 -90 0", "dur": "4000" }
      ]
    }
  ]
}];















