Blockly.defineBlocksWithJsonArray(
  [
    {
    "type": "walk_forward",
    "message0": "Walk forward %1 Units: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "units",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Walk these many units if the direction you are facing",
    "helpUrl": "NA"
  },
  {
    "type": "turn",
    "message0": "Turn %1 by %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "side",
        "options": [
          [
            "left",
            '"left"'
          ],
          [
            "right",
            '"right"'
          ]
        ]
      },
      {
        "type": "field_angle",
        "name": "angle",
        "angle": 90
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Walk these many units if the direction you are facing",
    "helpUrl": "NA"
  },
  {
    "type": "rotate_by",
    "message0": "Rotate by %1",
    "args0": [
      {
        "type": "input_value",
        "name": "rotate_by"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "save_state",
    "message0": "Save state",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Walk these many units if the direction you are facing",
    "helpUrl": "NA"
  },
  {
    "type": "load_state",
    "message0": "Load state",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Walk these many units if the direction you are facing",
    "helpUrl": "NA"
  },
  {
    "type": "pen_state",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pen_state",
        "options": [
          [
            "Pen up",
           ' "draw_y"'
          ],
          [
            "Pen down",
            '"draw_n"'
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Walk these many units if the direction you are facing",
    "helpUrl": "NA"
  }
  ]
  );




Blockly.JavaScript['walk_forward'] = function(block) {
  var value_units = Blockly.JavaScript.valueToCode(block, 'units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'turtle.walk(' + value_units + ')\n';
  return code;
};

Blockly.JavaScript['turn'] = function(block) {
  var dropdown_name = block.getFieldValue('side');
  var angle_name = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name == '"left"') angle_name = "-" + angle_name

  var code = 'turtle.rotateBy(' + angle_name + ')\n';
  return code;
};

Blockly.JavaScript['rotate_by'] = function(block) {
  var value_rotate_by = '-' + Blockly.JavaScript.valueToCode(block, 'rotate_by', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'turtle.rotateBy(' + value_rotate_by + ')\n';
  return code;
};


Blockly.JavaScript['save_state'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turtle.saveState()\n';
  return code;
};

Blockly.JavaScript['load_state'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turtle.loadState()\n';
  return code;
};

Blockly.JavaScript['pen_state'] = function(block) {
  var dropdown_pen_state = block.getFieldValue('pen_state');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turtle.pennState()\n';
  return code;
};

