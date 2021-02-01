/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true, 
	grid : {
		spacing : 20, 
		length : 2, 
		colour : '#888', 
		snap : false
	}
};

/* Set workspace size */ 
var wsHeight = document.querySelector('.Editor').getBoundingClientRect().height
document.querySelector('#blocklyDiv').style.height = ""+ wsHeight + "px"

/* Inject your workspace */ 
var workspace = Blockly.inject('blocklyDiv', options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);


// For Execution purposes
Blockly.JavaScript.addReservedWords('code');
// Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
// Blockly.JavaScript.addReservedWords('highlightBlock');