export const Characters: [any] = [{
  "uid": "romeo",
  "name": "Romeo",
  "comment": null,
  "options": {
    "toggled": true,
    "ctrl": true
  },
  "figures":[
    { "id":"0", "title": "std", "active": true },
    { "id":"1", "title": "knee", "active": false },
    { "id":"2", "title": "back2std", "active": false }
  ],
  "parts": [
    {
      "title":"body",
      "type":"object",
      "appearance":{
        "obj":"objects/Romeo/romeo-body.obj",
        "mtl":"objects/Romeo/romeo-body.mtl"
      },
      "position":[
        { "x":"0.000", "y":"2.918", "z":"-12.5" },
        { "x":"0.000", "y":"2.690", "z":"-11.260" },
        { "x":"0.000", "y":"2.918", "z":"-12.5" },
      ],
      "scale":[
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
      ],
      "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":"0", "y":"100", "z":"0" },
        { "x":null, "y":null, "z":null },
      ]
    },
    {
      "title":"left-arm",
      "type":"object",
      "appearance":{
        "obj":"objects/Romeo/romeoleftarm.obj",
        "mtl":"objects/Romeo/romeoleftarm.mtl"
      },
      "position":[
        { "x":"0.0000", "y":"2.918", "z":"-12.5" },
        { "x":"0.0006", "y":"2.690", "z":"-11.279" },
        { "x":"0.0000", "y":"2.918", "z":"-12.5" },
      ],
      "scale":[
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
      ],
      "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":"0", "y":"100", "z":"0" },
        { "x":null, "y":null, "z":null },
      ]
    },{
      "title":"right-arm",
      "type":"object",
      "appearance":{
        "obj":"objects/Romeo/romeorightarm.obj",
        "mtl":"objects/Romeo/romeorightarm.mtl"
      },
      "position":[
        { "x":"-0.05", "y":"2.918", "z":"-12.5" },
        { "x":"0.007", "y":"2.690", "z":"-11.237" },
        { "x":"-0.05", "y":"2.918", "z":"-12.5" },
      ],
      "scale":[
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
      ],
      "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":"0", "y":"100", "z":"0" },
        { "x":null, "y":null, "z":null },
      ]
    },{
      "title":"left-leg",
      "type":"object",
      "appearance":{
        "obj":"objects/Romeo/romeoleftleg.obj",
        "mtl":"objects/Romeo/romeoleftleg.mtl"
      },
      "position":[
        { "x":"0.000", "y":"2.918", "z":"-12.5" },
        { "x":"0", "y":"2.9", "z":"-11.4" },
        { "x":"0.000", "y":"2.918", "z":"-12.5" },
      ],
      "scale":[
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
      ],
      "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":"6.131", "y":"8.652", "z":"-35.355" },
        { "x":null, "y":null, "z":null },
      ]
    },{
      "title":"right-leg",
      "type":"object",
      "appearance":{
        "obj":"objects/Romeo/romeoleftleg.obj",
        "mtl":"objects/Romeo/romeoleftleg.mtl"
      },
      "position":[
        { "x":"-0.313", "y":"2.918", "z":"-12.5" },
        { "x":"0.117", "y":"2.730", "z":"-10.987" },
        { "x":"-0.313", "y":"2.918", "z":"-12.5" },
      ],
      "scale":[
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
        { "x":"0.200", "y":"0.200", "z":"0.200" },
      ],
      "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":"6.131", "y":"8.652", "z":"-35.355" },
        { "x":null, "y":null, "z":null },
      ]
    }
  ]
},
{
  "uid": "tree",
  "name": "Baum",
  "comment": null,
  "options": {
  "toggled": true, 
  "ctrl": true
  },
   "figures":[
    { "id":"0", "title": "std", "active": true },
    { "id":"1", "title": "shaking", "active": false }
  ],
  "parts": [
  {
    "title":"treetrunk",
    "type":"cylinder",
    "appearance": {"material": null,  "color": "brown"},
    "form": { "height":"5", "radius":"0.5"},
    "position":[
        { "x":"-7", "y":"2.918", "z":"-13.3"},
        { "x":"-7", "y":"2.918", "z":"-13.3"}
    ],
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  }, 
  {
    "title":"Tree1",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"1", "width":"2.5", "depth":"1"},
    "position":[
        { "x":"-7", "y":"5.421", "z":"-13.3" },
        { "x":"-7", "y":"5.421", "z":"-13.3" }
    ],
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  },
  {
    "title":"Tree2",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"1", "width":"2.5", "depth":"1"},
    "position":[
        { "x":"-7", "y":"6.421", "z":"-13.3" },
        { "x":"-7", "y":"6.421", "z":"-13.3" }
    ],
     "rotation":[
         { "x":null, "y":null, "z":null },
         { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ]                     
  },
  {
    "title":"Tree3",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"1", "width":"2.5", "depth":"1"},
    "position":[
        { "x":"-7", "y":"4.421", "z":"-13.3" },
        { "x":"-7", "y":"4.421", "z":"-13.3" }
    ],
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  },
  {
    "title":"Tree4",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"1.5", "width":"2", "depth":"3"},
    "position":[
        { "x":"-7", "y":"5.421", "z":"-13.3" },
        { "x":"-7", "y":"5.421", "z":"-13.3" }
    ],
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  },
  {
    "title":"Leaf1",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"0.1", "width":"0.3", "depth":"0.3"},
    "position":[
        { "x":"-7", "y":"5.421", "z":"-14.2" },
        { "x":"-7", "y":"1", "z":"-14.2" }
    ],
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ]
  },
  {
    "title":"Leaf2",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"0.1", "width":"0.3", "depth":"0.3"},      
    "position":[
        { "x":"-6.5", "y":"5.421", "z":"-12.4" },
        { "x":"-6.5", "y":"1", "z":"-12.4" }
    ], 
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  },
  {
    "title":"Leaf3",
    "type":"box",
    "appearance": {"material": null,  "color": "#003300"},
    "form": { "height":"0.1", "width":"0.3", "depth":"0.3"},      
    "position":[
        { "x":"-8", "y":"5.421", "z":"-14" },
        { "x":"-8", "y":"1", "z":"-14" }
    ], 
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  },
  {
    "title":"Leaf4",
    "type":"box",
    "appearance": { "material": null,  "color": "#003300" },
    "form": { "height":"0.1", "width":"0.3", "depth":"0.3" },      
    "position":[
        { "x":"-5.5", "y":"5.421", "z":"-13.3" },
        { "x":"-5.5", "y":"1", "z":"-13.3" }], 
    "rotation":[
        { "x":null, "y":null, "z":null },
        { "x":null, "y":null, "z":null }
    ], 
    "scale":[
        { "x":"1", "y":"1", "z":"1" },
        { "x":"1", "y":"1", "z":"1" }
    ] 
  }
  ]         
}];













