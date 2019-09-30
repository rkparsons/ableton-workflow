var initLiveApi =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/constants.js
var mode = {
  RACK_MIXER: 0,
  RACK_FX: 1,
  PAD_MIXER: 2,
  PAD_FX: 3,
  LAYER_PARAMS: 4,
  LAYER_FX: 5
};
var command = {
  DEFAULT: 0,
  RANDOM: 1
};
var constants_unitType = {
  FLOAT: 0,
  INT: 1,
  ENUM: 2
};
var unitStyle = {
  INT: 0,
  FLOAT: 1,
  TIME: 2,
  HERTZ: 3,
  DECIBEL: 4,
  PERCENT: 5,
  PAN: 6,
  SEMITONES: 7,
  MIDI: 8,
  CUSTOM: 9,
  NATIVE: 10
};
var ascii = {
  ARROW_DOWN: 1,
  BURGER: 2,
  PLUS_BAR: 3,
  MINUS_BAR: 4,
  TWO_BARS: 5,
  EMPTY_BARS: 6,
  ELLIPSIS: 28,
  BLOCK: 29,
  ARROW_RIGHT: 30,
  ARROW_LEFT: 31
}; // export const mode = {
//     VOICE_MIXER: 0,
//     VOICE_EFFECT: 1,
//     VOICE_SEQUENCE: 2,
//     LAYER_DEVICE: 8,
//     LAYER_EFFECT: 9,
// }

var selectButtonColour = {
  BLACK: 0,
  GREEN_DIM: 13,
  GREEN_BRIGHT: 19
};
var stateButtonColour = {
  BLACK: 0,
  BLUE_BRIGHT: 45,
  BLUE_DIM: 47
};
var pushTapTempoControl = 'Tap_Tempo_Button';
var pushControls = ['Foot_Pedal', 'Up_Arrow', 'Down_Arrow', 'Left_Arrow', 'Right_Arrow', 'Shift_Button', 'Select_Button', 'Delete_Button', 'Duplicate_Button', 'Quantization_Button', 'Accent_Button', 'In_Button', 'Out_Button', 'Master_Select_Button', 'Octave_Down_Button', 'Octave_Up_Button', 'Repeat_Button', 'Global_Mute_Button', 'Global_Solo_Button', 'Track_Stop_Button', 'Scale_Presets_Button', 'Vol_Mix_Mode_Button', 'Device_Mode_Button', 'Clip_Mode_Button', 'Browse_Mode_Button', 'Single_Track_Mode_Button', 'Pan_Send_Mode_Button', 'Note_Mode_Button', 'Session_Mode_Button', // 'Play_Button',
'New_Button', 'Automation_Button', pushTapTempoControl, 'Metronome_Button', 'Fixed_Length_Button', // 'Record_Button',
'Undo_Button', 'Create_Device_Button', 'Create_Track_Button', 'Double_Button', 'User_Button', 'Track_Select_Button0', 'Track_Select_Button1', 'Track_Select_Button2', 'Track_Select_Button3', 'Track_Select_Button4', 'Track_Select_Button5', 'Track_Select_Button6', 'Track_Select_Button7', 'Track_Select_Buttons', 'Track_State_Button0', 'Track_State_Button1', 'Track_State_Button2', 'Track_State_Button3', 'Track_State_Button4', 'Track_State_Button5', 'Track_State_Button6', 'Track_State_Button7', 'Track_State_Buttons', 'Scene_Launch_Button7', 'Scene_Launch_Button6', 'Scene_Launch_Button5', 'Scene_Launch_Button4', 'Scene_Launch_Button3', 'Scene_Launch_Button2', 'Scene_Launch_Button1', 'Scene_Launch_Button0', 'Scene_Launch_Buttons', // '0_Clip_0_Button',
// '1_Clip_0_Button',
// '2_Clip_0_Button',
// '3_Clip_0_Button',
// '4_Clip_0_Button',
// '5_Clip_0_Button',
// '6_Clip_0_Button',
// '7_Clip_0_Button',
// '0_Clip_1_Button',
// '1_Clip_1_Button',
// '2_Clip_1_Button',
// '3_Clip_1_Button',
// '4_Clip_1_Button',
// '5_Clip_1_Button',
// '6_Clip_1_Button',
// '7_Clip_1_Button',
// '0_Clip_2_Button',
// '1_Clip_2_Button',
// '2_Clip_2_Button',
// '3_Clip_2_Button',
// '4_Clip_2_Button',
// '5_Clip_2_Button',
// '6_Clip_2_Button',
// '7_Clip_2_Button',
// '0_Clip_3_Button',
// '1_Clip_3_Button',
// '2_Clip_3_Button',
// '3_Clip_3_Button',
// '4_Clip_3_Button',
// '5_Clip_3_Button',
// '6_Clip_3_Button',
// '7_Clip_3_Button',
// '0_Clip_4_Button',
// '1_Clip_4_Button',
// '2_Clip_4_Button',
// '3_Clip_4_Button',
// '4_Clip_4_Button',
// '5_Clip_4_Button',
// '6_Clip_4_Button',
// '7_Clip_4_Button',
// '0_Clip_5_Button',
// '1_Clip_5_Button',
// '2_Clip_5_Button',
// '3_Clip_5_Button',
// '4_Clip_5_Button',
// '5_Clip_5_Button',
// '6_Clip_5_Button',
// '7_Clip_5_Button',
// '0_Clip_6_Button',
// '1_Clip_6_Button',
// '2_Clip_6_Button',
// '3_Clip_6_Button',
// '4_Clip_6_Button',
// '5_Clip_6_Button',
// '6_Clip_6_Button',
// '7_Clip_6_Button',
// '0_Clip_7_Button',
// '1_Clip_7_Button',
// '2_Clip_7_Button',
// '3_Clip_7_Button',
// '4_Clip_7_Button',
// '5_Clip_7_Button',
// '6_Clip_7_Button',
// '7_Clip_7_Button',
// 'Button_Matrix',
// 'Double_Press_Matrix',
'Single_Press_Event_Matrix', 'Double_Press_Event_Matrix', 'Tempo_Control_Tap', 'Tempo_Control', 'Swing_Control_Tap', 'Swing_Control', 'Master_Volume_Tap', 'Master_Volume_Control', 'Track_Control_Touch_0', 'Track_Control_Touch_1', 'Track_Control_Touch_2', 'Track_Control_Touch_3', 'Track_Control_Touch_4', 'Track_Control_Touch_5', 'Track_Control_Touch_6', 'Track_Control_Touch_7', 'Track_Control_Touches', 'Track_Control_0', 'Track_Control_1', 'Track_Control_2', 'Track_Control_3', 'Track_Control_4', 'Track_Control_5', 'Track_Control_6', 'Track_Control_7', 'Track_Controls', 'Display_Line_0', 'Display_Line_1', 'Display_Line_2', 'Display_Line_3', 'Shifted_Button_Matrix', 'Touch_Strip_Tap', 'Touch_Strip_Control'];
// CONCATENATED MODULE: ./src/drum/drumTrack.js
 //todo: run isActive check before, and updateDisplay after, every method call

function DrumTrack(drumRack, controlSurface) {
  this.isActive = false;
  this.mode = mode.LAYER_PARAMS;
  this.command = null;
  this.drumRack = drumRack;
  this.controlSurface = controlSurface;
  this.controlSurface.on('Tap_Tempo_Button', pushToggleActive.bind(this));
  this.controlSurface.on('Track_Controls', sendValue.bind(this));
  this.controlSurface.on('Tempo_Control', handleTempoControl.bind(this));
  this.controlSurface.on('Track_Control_Touches', executeParamLevelCommand.bind(this));
  this.controlSurface.on('Track_State_Buttons', handleTrackStateButtons.bind(this));
  this.controlSurface.on('Track_Select_Buttons', handleTrackSelectButtons.bind(this));
  this.controlSurface.on('Vol_Mix_Mode_Button', setMode.bind(this, mode.RACK_MIXER));
  this.controlSurface.on('Pan_Send_Mode_Button', setMode.bind(this, mode.RACK_FX));
  this.controlSurface.on('Single_Track_Mode_Button', setMode.bind(this, mode.PAD_MIXER));
  this.controlSurface.on('Clip_Mode_Button', setMode.bind(this, mode.PAD_FX));
  this.controlSurface.on('Device_Mode_Button', setMode.bind(this, mode.LAYER_PARAMS));
  this.controlSurface.on('Browse_Mode_Button', setMode.bind(this, mode.LAYER_FX));
  this.controlSurface.on('Master_Select_Button', setCommand.bind(this, command.DEFAULT));
  this.controlSurface.on('Track_Stop_Button', setCommand.bind(this, command.RANDOM));
  this.drumRack.onDrumPadSelected(focusDrumPad.bind(this));
  this.drumRack.onValueChanged(receiveValue.bind(this));
  this.appointedDeviceApi = new LiveAPI(setAppointedDeviceId.bind(this), 'live_set');
  this.appointedDeviceApi.property = 'appointed_device';
  this.appointedDeviceId = parseInt(this.appointedDeviceApi.get('appointed_device')[1]);
  this.deviceId = parseInt(new LiveAPI(null, 'this_device').id);

  function setMode(mode, args) {
    if (args[1] === 127) {
      this.mode = mode;
      updateDisplay.call(this);
    }
  }

  function setCommand(command, args) {
    if (args[1] === 127) {
      this.command = command;
    } else if (this.command !== null) {
      executePageLevelCommand.call(this);
    }
  }

  function setAppointedDeviceId(args) {
    if (args[0] === 'appointed_device') {
      this.appointedDeviceId = parseInt(args[2]);
    }
  }

  function pushToggleActive(args) {
    if (this.deviceId !== this.appointedDeviceId) {
      return;
    }

    var isPressed = args[1] === 127;

    if (isPressed) {
      this.isActive = !this.isActive;
      this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate();
    } else {
      updateDisplay.call(this);
    }
  }

  function focusDrumPad(args) {
    if (args[0] === 'selected_drum_pad') {
      this.drumRack.setActiveDrumPad(args[2]);
      updateDisplay.call(this);
    }
  }

  function handleTempoControl(args) {
    if (!this.isActive) {
      return;
    }

    var sampleParameter = getActiveParameterPage.call(this).getSampleParameter();

    if (sampleParameter && args[1] === 1) {
      sampleParameter.increment();
    } else if (sampleParameter && args[1] === 127) {
      sampleParameter.decrement();
    }

    updateDisplay.call(this);
  }

  function handleTrackSelectButtons(args) {
    if (!this.isActive) {
      return;
    }

    if (this.mode === mode.RACK_MIXER && args[1] === 127) {
      this.drumRack.setActiveMixerPage(args[2]);
      updateDisplay.call(this);
    } else if (this.mode === mode.LAYER_PARAMS && args[1] === 127) {
      this.drumRack.getActiveDrumPad().getActiveDrumLayer().setActiveParameterPage(args[2]);
      updateDisplay.call(this);
    } else if (this.mode === mode.PAD_MIXER && args[1] === 127) {
      this.drumRack.getActiveDrumPad().setActiveMixerPage(args[2]);
      updateDisplay.call(this);
    }
  }

  function handleTrackStateButtons(args) {
    if (!this.isActive || args[1] !== 127) {
      return;
    }

    if (this.mode === mode.LAYER_PARAMS || this.mode === mode.LAYER_FX && args[1] === 127) {
      this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2]);
      updateDisplay.call(this);
    }
  }

  function getActiveParameterPage() {
    if (this.mode === mode.LAYER_PARAMS) {
      return this.drumRack.getActiveDrumPad().getActiveDrumLayer().getActiveParameterPage();
    } else if (this.mode === mode.PAD_MIXER) {
      return this.drumRack.getActiveDrumPad().getActiveMixerPage();
    } else if (this.mode === mode.RACK_MIXER) {
      return this.drumRack.getActiveMixerPage();
    }
  }

  function executePageLevelCommand() {
    if (this.command === command.DEFAULT) {
      getActiveParameterPage.call(this)["default"]();
    } else if (this.command === command.RANDOM) {
      getActiveParameterPage.call(this).random();
    }

    updateDisplay.call(this);
    this.command = null;
  }

  function executeParamLevelCommand(args) {
    if (!this.isActive || args[1] === 0) {
      return;
    }

    var encoderIndex = parseInt(args[2]);
    var parameterPage = getActiveParameterPage.call(this);
    var activeParameter = parameterPage.getParameter(encoderIndex);

    if (this.command === command.DEFAULT) {
      activeParameter["default"]();
    } else if (this.command === command.RANDOM) {
      activeParameter.random();

      if (parameterPage.categoryParameterIndex === encoderIndex) {
        parameterPage.getParameter(parameterPage.sampleParameterIndex)["default"]();
      }
    }

    updateDisplay.call(this);
    this.command = null;
  }

  function sendValue(args) {
    if (!this.isActive || args[1] === 'id') {
      return;
    }

    var value = args[1];
    var encoderIndex = parseInt(args[2]);
    var parameterPage = getActiveParameterPage.call(this);

    if (parameterPage.categoryParameterIndex === encoderIndex) {
      parameterPage.getParameter(parameterPage.sampleParameterIndex)["default"]();
    }

    parameterPage.getParameter(encoderIndex).sendValue(value);
    updateDisplay.call(this);
  }

  function updateDisplay() {
    if (!this.isActive) {
      return;
    }

    var activeDrumPad = this.drumRack.getActiveDrumPad();
    var activeDrumLayer = activeDrumPad.getActiveDrumLayer();
    var drumLayerNames = activeDrumPad.getDrumLayers().map(function (layer) {
      return layer.getName();
    });

    if (this.mode === mode.RACK_MIXER) {
      var drumRackMixerPage = this.drumRack.getActiveMixerPage();
      var mixerPageNames = this.drumRack.getMixerPageNames();
      var activeMixerPageIndex = this.drumRack.getActiveMixerPageIndex();
      this.controlSurface.display.line(0, this.drumRack.getDrumPadNames());
      this.controlSurface.display.line(1, drumRackMixerPage.getParameterValues());
      this.controlSurface.display.title(2, []);
      this.controlSurface.display.menu(3, mixerPageNames, activeMixerPageIndex);
      this.controlSurface.trackSelect.map(mixerPageNames.length, activeMixerPageIndex);
      this.controlSurface.trackState.map(0, 0);
    } else if (this.mode === mode.RACK_FX) {
      this.controlSurface.display.line(0, [' ']);
      this.controlSurface.display.line(1, [' ']);
      this.controlSurface.display.title(2, ['FX']);
      this.controlSurface.display.line(3, [' ']);
      this.controlSurface.trackSelect.map(0, 0);
      this.controlSurface.trackState.map(0, 0);
    } else if (this.mode === mode.PAD_MIXER) {
      var drumPadMixerPage = activeDrumPad.getActiveMixerPage();
      var drumPadMixerPageNames = activeDrumPad.getMixerPages().map(function (page) {
        return page.getName();
      });
      this.controlSurface.display.line(0, drumLayerNames);
      this.controlSurface.display.line(1, drumPadMixerPage.getParameterValues());
      this.controlSurface.display.title(2, [activeDrumPad.getName()]);
      this.controlSurface.display.menu(3, drumPadMixerPageNames, drumPadMixerPage.getIndex());
      this.controlSurface.trackSelect.map(drumPadMixerPageNames.length, drumPadMixerPage.getIndex());
      this.controlSurface.trackState.map(0, 0);
    } else if (this.mode === mode.PAD_FX) {
      this.controlSurface.display.line(0, [' ']);
      this.controlSurface.display.line(1, [' ']);
      this.controlSurface.display.title(2, [activeDrumPad.getName() + ' FX']);
      this.controlSurface.display.line(3, [' ']);
      this.controlSurface.trackSelect.map(0, 0);
      this.controlSurface.trackState.map(0, 0);
    } else if (this.mode === mode.LAYER_PARAMS) {
      var activeParameterPage = activeDrumLayer.getActiveParameterPage();
      var parameterPageNames = activeDrumLayer.getParameterPageNames();
      var activeParameterPageIndex = activeDrumLayer.getActiveParameterPageIndex();
      var parameterNames = activeParameterPage.getParameterNames();
      this.controlSurface.display.line(0, parameterNames);
      this.controlSurface.display.line(1, activeParameterPage.getParameterValues());
      this.controlSurface.display.title(2, [activeDrumPad.getName() + ' ' + activeDrumLayer.getName()]);
      this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex);
      this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex);
      this.controlSurface.trackState.map(drumLayerNames.length, activeDrumLayer.getIndex());
    } else if (this.mode === mode.LAYER_FX) {
      this.controlSurface.display.line(0, [' ']);
      this.controlSurface.display.line(1, [' ']);
      this.controlSurface.display.title(2, [activeDrumPad.getName() + ' ' + activeDrumLayer.getName() + ' FX']);
      this.controlSurface.display.line(3, [' ']);
      this.controlSurface.trackSelect.map(0, 0);
      this.controlSurface.trackState.map(drumLayerNames.length, activeDrumLayer.getIndex());
    }
  }

  function receiveValue(args) {
    if (this.isActive) {
      updateDisplay.call(this);
    }
  }
}
// CONCATENATED MODULE: ./src/drum/drumRack.js
function DrumRack(pathToDrumRack, drumPads, drumPadNames, mixerPages, mixerPageNames) {
  var activeMixerPageIndex = 0;
  var activeDrumPadId = null;
  var selectedPadApi = null;

  this.onValueChanged = function (callback) {
    for (i in drumPads) {
      drumPads[i].onValueChanged(callback);
    }

    for (i in mixerPages) {
      mixerPages[i].onValueChanged(callback);
    }
  };

  this.onDrumPadSelected = function (callback) {
    selectedPadApi = new LiveAPI(callback, pathToDrumRack + ' view');
    selectedPadApi.property = 'selected_drum_pad';
  };

  this.getActiveDrumPad = function () {
    return drumPads[activeDrumPadId];
  };

  this.setActiveDrumPad = function (drumPadId) {
    activeDrumPadId = drumPadId;
  };

  this.getDrumPadNames = function () {
    return drumPadNames;
  }; // replace


  this.getActiveMixerPageIndex = function () {
    return activeMixerPageIndex;
  };

  this.getActiveMixerPage = function () {
    return mixerPages[activeMixerPageIndex];
  };

  this.setActiveMixerPage = function (index) {
    activeMixerPageIndex = index;
  };

  this.getMixerPageNames = function () {
    return mixerPageNames;
  };
}
// CONCATENATED MODULE: ./src/drum/drumPad.js
function DrumPad(name, drumLayers, drumLayerNames, mixerPages, mixerPageNames) {
  //todo: remove unused params
  var activeDrumLayerIndex = 0;
  var activeMixerPageIndex = 0;

  this.getName = function () {
    return name;
  };

  this.onValueChanged = function (callback) {
    for (i in drumLayers) {
      drumLayers[i].onValueChanged(callback);
    }

    for (i in mixerPages) {
      mixerPages[i].onValueChanged(callback);
    }
  };

  this.getDrumLayers = function () {
    return drumLayers;
  };

  this.getActiveDrumLayer = function () {
    return drumLayers[activeDrumLayerIndex];
  };

  this.setActiveDrumLayer = function (drumLayerIndex) {
    activeDrumLayerIndex = drumLayerIndex;
  };

  this.getMixerPages = function () {
    return mixerPages;
  };

  this.getActiveMixerPage = function () {
    return mixerPages[activeMixerPageIndex];
  };

  this.setActiveMixerPage = function (index) {
    activeMixerPageIndex = index;
  };
}
// CONCATENATED MODULE: ./src/drum/drumLayer.js
function DrumLayer(index, name, parameterPages, parameterPageNames) {
  var activeParameterPageIndex = 0;

  this.getIndex = function () {
    return index;
  };

  this.getName = function () {
    return name;
  };

  this.onValueChanged = function (callback) {
    for (i in parameterPages) {
      parameterPages[i].onValueChanged(callback);
    }
  };

  this.getActiveParameterPageIndex = function () {
    return activeParameterPageIndex;
  };

  this.getActiveParameterPage = function () {
    return parameterPages[activeParameterPageIndex];
  };

  this.setActiveParameterPage = function (index) {
    activeParameterPageIndex = index;
  };

  this.getParameterPageNames = function () {
    return parameterPageNames;
  };
}
// CONCATENATED MODULE: ./src/parameter/parameterPage.js
function ParameterPage(index, pageName, parameters, categoryParameterIndex, sampleParameterIndex) {
  this.pageName = pageName;
  this.parameters = parameters;
  this.categoryParameterIndex = categoryParameterIndex;
  this.sampleParameterIndex = sampleParameterIndex;

  this.getName = function () {
    return pageName;
  };

  this.getIndex = function () {
    return index;
  };

  this.onValueChanged = function (callback) {
    this.callback = callback;

    for (i in this.parameters) {
      if (this.parameters[i]) {
        this.parameters[i].onValueChanged(handleParameterChange.bind(this, parseInt(i), callback));
      }
    }
  };

  this.getParameterNames = function () {
    var names = [];

    for (i in this.parameters) {
      names.push(this.parameters[i] ? this.parameters[i].getDisplayName() : '');
    }

    return names;
  };

  this.getParameterValues = function () {
    var values = [];

    for (i in this.parameters) {
      values.push(this.parameters[i] ? this.parameters[i].getDisplayValue() : '');
    }

    return values;
  };

  this.getParameter = function (parameterIndex) {
    return this.parameters[parameterIndex];
  };

  this.getSampleParameter = function () {
    return this.parameters[this.sampleParameterIndex];
  };

  this["default"] = function () {
    for (i in this.parameters) {
      this.parameters[i]["default"]();
    }
  };

  this.random = function () {
    for (i in this.parameters) {
      this.parameters[i].random();
      handleSampleCategoryChange.call(this, parseInt(i));
    }
  };

  function handleParameterChange(i, callback) {
    handleSampleCategoryChange.call(this, i);
    callback();
  } // could move to subclass


  function handleSampleCategoryChange(i) {
    if (i === this.categoryParameterIndex) {
      this.parameters[this.sampleParameterIndex].filterOptions(this.parameters[i].getDisplayValue());
    }
  }
}
// CONCATENATED MODULE: ./src/util.js
function defclass(base, body) {
  var prototype = Object.create(base.prototype);
  body.call(prototype, base.prototype);
  prototype.constructor.prototype = prototype;
  return prototype.constructor;
}
function deferLow(task) {
  this.allowExecution = false;
  new Task(function () {
    if (this.allowExecution) {
      task();
      arguments.callee.task.cancel();
    }

    this.allowExecution = true;
  }, this).execute();
}
function log() {
  for (var i = 0, len = arguments.length; i < len; i++) {
    var message = arguments[i];

    if (message && message.toString) {
      var s = message.toString();

      if (s.indexOf('[object ') >= 0) {
        s = JSON.stringify(message);
      }

      post(s);
    } else if (message === null) {
      post('<null>');
    } else {
      post(message);
    }
  }

  post('\n');
}
// CONCATENATED MODULE: ./src/parameter/Parameter.js


var Parameter = defclass(Object, function () {
  this.constructor = function (displayName, livePath, property, defaultValue, unitType, randomRange) {
    this.displayName = displayName;
    this.livePath = livePath;
    this.property = property;
    this.defaultValue = defaultValue || 0;
    this.unitType = unitType;
    this.randomRange = randomRange;
    this.speed = 1;
    this.api = null;
    this.value = null;
    this.callback = null;
  };

  this.onValueChanged = function (callback) {
    this.callback = callback;
    this.api = new LiveAPI(this.observeValue.bind(this), this.livePath);
    this.api.property = this.property;
  };

  this.observeValue = function (args) {
    if (args[0] === this.property) {
      this.value = args[1];
      this.callback();
    }
  };

  this.getDisplayName = function () {
    return this.displayName;
  };

  this.getDisplayValue = function () {
    return Math.round(this.value);
  };

  this["default"] = function () {
    this.value = this.defaultValue;
    this.constrainAndSendValue();
  };

  this.random = function () {
    if (this.randomRange) {
      this.value = this.randomRange[0] + Math.random() * (this.randomRange[1] - this.randomRange[0]);
      this.constrainAndSendValue();
    }
  };

  this.constrainAndSendValue = function () {
    this.value = Math.max(this.min, this.value);
    this.value = Math.min(this.max, this.value);

    if (this.api) {
      this.api.set(this.property, this.getOutputValue());
    }
  };

  this.sendValue = function (delta) {
    this.value += this.getIncrement(delta);
    this.constrainAndSendValue();
  };

  this.getIncrement = function (delta) {
    return this.speed * (delta < 50 ? delta : delta - 128);
  };

  this.getOutputValue = function () {
    return this.unitType === constants_unitType.FLOAT ? Math.round(this.value * 1000) / 1000 : Math.round(this.value);
  };
});
// CONCATENATED MODULE: ./src/parameter/enumParameter.js


 // replace with ES6 classes

var EnumParameter = defclass(Parameter, function () {
  this.constructor = function (displayName, livePath, property, defaultValue, options, randomRange) {
    Parameter.call(this, displayName, livePath, property, defaultValue, constants_unitType.ENUM);
    this.options = options;
    this.optionKeys = Object.keys(options);
    this.min = this.optionKeys[0];
    this.max = this.optionKeys[this.optionKeys.length - 1];
    this.randomRange = randomRange || [this.min, this.max];
    this.speed = 0.05;
  };

  this.increment = function () {
    this.value += 1;
    this.constrainAndSendValue();
  };

  this.decrement = function () {
    this.value -= 1;
    this.constrainAndSendValue();
  };

  this.getDisplayValue = function () {
    return this.options[Math.round(this.value)];
  };
});
// CONCATENATED MODULE: ./src/parameter/filteredEnumParameter.js


var FilteredEnumParameter = defclass(EnumParameter, function () {
  this.constructor = function (displayName, livePath, property, defaultValue, optionGroups) {
    var optionGroupKey = Object.keys(optionGroups)[0];
    EnumParameter.call(this, displayName, livePath, property, defaultValue, optionGroups[optionGroupKey]);
    this.optionGroups = optionGroups;
  };

  this.filterOptions = function (optionGroupKey) {
    this.options = this.optionGroups[optionGroupKey];
    this.optionKeys = Object.keys(this.options);
    this.min = this.optionKeys[0];
    this.max = this.optionKeys[this.optionKeys.length - 1];
    this.randomRange = [this.min, this.max];
  };
});
// CONCATENATED MODULE: ./src/parameter/valueParameter.js



var ValueParameter = defclass(Parameter, function () {
  this.constructor = function (displayName, livePath, property, defaultValue, unitType, inputRange, randomRange) {
    Parameter.call(this, displayName, livePath, property, defaultValue, unitType, randomRange);
    this.inputRange = inputRange;
    this.min = this.inputRange[0];
    this.max = this.inputRange[1];
    this.isBipolar = this.max / this.min < 0;
  };

  this.getDisplayValue = function () {
    if (!this.value) {
      return ' ';
    }

    var barCount = this.isBipolar ? 4 : 8;
    var padding = String.fromCharCode(ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS);
    var outputPositive = this.isBipolar && this.value < 0 ? '' : getMeterOutput(true, barCount, this.value / this.max);
    var outputNegative = this.isBipolar && this.value > 0 ? '' : getMeterOutput(false, barCount, this.min === 0 ? 0 : this.value / this.min);

    if (this.isBipolar) {
      return (padding + outputNegative).slice(-4) + (outputPositive + padding).slice(0, 4);
    } else {
      return (outputPositive + padding).slice(0, 8);
    }
  };

  this.getIncrement = function (delta) {
    return (this.max - this.min) * (delta < 50 ? delta : delta - 128) / 100;
  };

  function getMeterOutput(isPositive, barCount, fraction) {
    var fullBars = Math.floor(barCount * fraction);
    var isHalfBar = Math.abs(barCount * fraction) % 1 >= 0.5;
    var output = '';

    if (!isPositive && isHalfBar) {
      output += String.fromCharCode(ascii.MINUS_BAR);
    }

    for (var i = 0; i < fullBars; i++) {
      output += String.fromCharCode(ascii.TWO_BARS);
    }

    if (isPositive && isHalfBar) {
      output += String.fromCharCode(ascii.PLUS_BAR);
    }

    return output;
  }
});
// CONCATENATED MODULE: ./src/fileSystem/fileSystem.js
function getCategories(samplesFolder, drumPadName, drumLayerName) {
  var folder = new Folder(getSamplesFolderPath(samplesFolder, drumPadName, drumLayerName));
  folder.typelist = ['fold'];
  var categories = {};
  var categoryIndex = 0;
  folder.next();

  while (!folder.end) {
    categories[categoryIndex] = folder.filename;
    folder.next();
    categoryIndex++;
  }

  folder.close();
  return categories;
}
function getSampleGroups(samplesFolder, drumPadName, drumLayerName, categories) {
  // todo handle multisamples
  var sampleGroups = {};

  for (i in categories) {
    sampleGroups[categories[i]] = getSamples(samplesFolder, drumPadName, drumLayerName, categories[i]);
  }

  return sampleGroups;
}

function getSamples(samplesFolder, drumPadName, drumLayerName, category) {
  var folder = new Folder(getSamplesFolderPath(samplesFolder, drumPadName, drumLayerName) + '/' + category);
  folder.typelist = ['WAVE'];
  var samples = [];
  folder.next();

  while (!folder.end) {
    var indexStart = folder.filename.indexOf('_') + 1;
    var indexEnd = folder.filename.indexOf('.');
    var sample = folder.filename.slice(indexStart, indexEnd);
    samples.push(sample);
    folder.next();
  }

  folder.close();
  return samples;
}

function getSamplesFolderPath(samplesFolder, drumPadName, drumLayerName) {
  var isSharedSampleFolder = ['Layer', 'Trans'].indexOf(drumLayerName.toString()) >= 0;
  var drumPadFolder = isSharedSampleFolder ? 'Shared' : drumPadName;
  return samplesFolder + '/' + drumPadFolder + '/' + drumLayerName;
}
// CONCATENATED MODULE: ./src/config/parameterConfig.js

var parameterConfig = {
  Mixer: {
    Volume: {
      path: 'mixer_device volume',
      inputRange: [0, 1],
      defaultValue: 0.85,
      unitType: constants_unitType.FLOAT
    },
    Panning: {
      path: 'mixer_device panning',
      inputRange: [-1, 1],
      unitType: constants_unitType.FLOAT
    }
  },
  Layer: {
    // exports.xxx = {
    //     name: constants.muteName,
    //     apiProperty: 'mute',
    //     path: '',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    Solo: {
      displayName: 'Solo',
      property: 'solo',
      path: '',
      options: ['off', 'on'],
      randomRange: [0, 0],
      unitType: constants_unitType.ENUM
    }
  },
  CC: {
    Delay: {
      displayName: 'Delay',
      path: 'parameters 1',
      inputRange: [0, 200],
      randomRange: [0, 0],
      unitType: constants_unitType.INT
    },
    Start: {
      displayName: 'Start',
      path: 'parameters 2',
      inputRange: [0, 127],
      randomRange: [0, 0],
      unitType: constants_unitType.INT
    } // exports.xxx = {
    //     name: 'chain_rand',
    //     displayName: 'Sample',
    //     path: 'devices 0 parameters 3',
    //     inputRange: [0, 127],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'drive_velo',
    //     displayName: 'Drive',
    //     path: 'devices 0 parameters 4',
    //     inputRange: [0, 100],
    //     outputRange: [0, 127],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'pe_velo',
    //     displayName: 'PEnv',
    //     path: 'devices 0 parameters 5',
    //     inputRange: [0, 100],
    //     outputRange: [0, 127],
    //     unitType: unitType.INT,
    // }

  },
  Sampler: {
    Category: {
      displayName: 'Category',
      path: 'parameters 29',
      options: [],
      unitType: constants_unitType.ENUM
    },
    Select: {
      displayName: 'Sample',
      path: 'parameters 3',
      options: [],
      unitType: constants_unitType.ENUM
    },
    Reverse: {
      displayName: 'Playback',
      path: 'parameters 1',
      options: {
        0: '>>>',
        1: '<<<'
      },
      unitType: constants_unitType.ENUM,
      randomRange: [0, 0]
    },
    OscWave: {
      displayName: '/\\/',
      path: 'parameters 6',
      options: ['sin', 'sin 4bit', 'sin 8bit', 'saw 3', 'saw 4', 'saw 6', 'saw 8', 'saw 16', 'saw 32', 'saw 64', 'saw D', 'squ 3', 'squ 4', 'squ 6', 'squ 8', 'squ 16', 'squ 32', 'squ 64', 'squ D', 'tri', 'noise'],
      unitType: constants_unitType.ENUM
    },
    OscLevel: {
      displayName: 'Amount',
      path: 'parameters 7',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    // exports.xxx = {
    //     name: 'o_velo',
    //     displayName: 'Osc',
    //     path: 'parameters 8',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // },
    OscFreq: {
      displayName: 'Freq',
      path: 'parameters 12',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    OscMulti: {
      displayName: 'Multi',
      path: 'parameters 13',
      options: ['x  0.001', 'x  0.01', 'x  0.1', 'x  1', 'x 10'],
      unitType: constants_unitType.ENUM
    },
    OscEnvAttack: {
      displayName: 'A /',
      path: 'parameters 14',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    OscEnvDecay: {
      displayName: 'D \\',
      path: 'parameters 17',
      inputRange: [0, 1],
      defaultValue: 1,
      unitType: constants_unitType.FLOAT
    },
    Spread: {
      displayName: 'Spread',
      path: 'parameters 28',
      inputRange: [0, 100],
      unitType: constants_unitType.INT
    },
    Pitch: {
      displayName: 'Pitch',
      path: 'parameters 34',
      inputRange: [-48, 48],
      unitType: constants_unitType.INT
    },
    Detune: {
      displayName: '- / +',
      path: 'parameters 35',
      inputRange: [-50, 50],
      unitType: constants_unitType.INT
    },
    // exports.xxx = {
    //     name: 'pitch_lfo',
    //     displayName: 'Pitch',
    //     path: 'parameters 36',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    PitchEnv: {
      name: 'pitch_env',
      displayName: 'Env',
      path: 'parameters 38',
      inputRange: [-48, 48],
      unitType: constants_unitType.INT
    },
    PitchEnvAttack: {
      displayName: 'A /',
      path: 'parameters 39',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    PitchEnvDecay: {
      displayName: 'D \\',
      path: 'parameters 42',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    // exports.xxx = {
    //     name: 'vol_velo',
    //     displayName: 'Vol',
    //     path: 'parameters 54',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'vol_lfo',
    //     displayName: 'Vol',
    //     path: 'parameters 55',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'pan_lfo',
    //     displayName: 'Pan',
    //     path: 'parameters 57',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    AmpAttack: {
      displayName: 'A /',
      path: 'parameters 59',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    AmpDecay: {
      displayName: 'D \\',
      path: 'parameters 62',
      inputRange: [0, 1],
      defaultValue: 1,
      unitType: constants_unitType.FLOAT
    },
    AmpSustain: {
      displayName: 'S --',
      path: 'parameters 65',
      inputRange: [0, 1],
      defaultValue: 1,
      unitType: constants_unitType.FLOAT
    },
    AmpRelease: {
      displayName: 'R \\',
      path: 'parameters 66',
      inputRange: [0, 1],
      defaultValue: 1,
      unitType: constants_unitType.FLOAT
    },
    AmpLoop: {
      displayName: 'Loop',
      path: 'parameters 68',
      options: ['none', 'loop', 'beat', 'sync', 'trig'],
      unitType: constants_unitType.ENUM
    },
    AmpSync: {
      displayName: 'Sync',
      path: 'parameters 70',
      options: ['1/48', '1/32', '1/24', '1/16', '1/12', '1/8', '1/6', '1/4', '1/3', '1/2', '1', '1.5', '2', '3', '4'],
      unitType: constants_unitType.ENUM
    },
    // exports.xxx = {
    //     name: 'time_velo',
    //     displayName: 'Time',
    //     path: 'parameters 71',
    //     inputRange: [-100, 100],
    //     unitType: unitType.INT,
    // }
    FilterType: {
      displayName: 'Type',
      path: 'parameters 76',
      options: ['low -\\', 'high /-', 'band /\\', 'notch \\/'],
      unitType: constants_unitType.ENUM
    },
    FilterCircuit: {
      displayName: 'Circuit',
      path: 'parameters 77',
      options: ['clean', 'osr', 'ms2', 'smp', 'prd'],
      unitType: constants_unitType.ENUM
    },
    FilterSlope: {
      displayName: 'Slope',
      path: 'parameters 79',
      options: ['12 dB', '24 dB'],
      unitType: constants_unitType.ENUM
    },
    FilterFreq: {
      displayName: 'Freq',
      path: 'parameters 80',
      inputRange: [0, 1],
      defaultValue: 1,
      unitType: constants_unitType.FLOAT
    },
    FilterRes: {
      displayName: 'Res',
      path: 'parameters 81',
      inputRange: [0, 1.25],
      unitType: constants_unitType.FLOAT
    },
    FilterDrive: {
      displayName: 'Drive',
      path: 'parameters 83',
      inputRange: [0, 24],
      unitType: constants_unitType.FLOAT
    },
    FilterEnv: {
      displayName: 'Env',
      path: 'parameters 85',
      inputRange: [-72, 72]
    },
    FilterEnvAttack: {
      displayName: 'A /',
      path: 'parameters 86',
      inputRange: [0, 1],
      unitType: constants_unitType.FLOAT
    },
    FilterEnvDecay: {
      displayName: 'D \\',
      path: 'parameters 89',
      inputRange: [0, 1],
      defaultValue: 1,
      unitType: constants_unitType.FLOAT
    },
    // exports.xxx = {
    //     name: 'f_velo',
    //     displayName: 'Filter',
    //     path: 'parameters 101',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'f_lfo',
    //     displayName: 'Filter',
    //     path: 'parameters 102',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '24.'],
    //     unitType: unitType.INT,
    // }
    ShaperType: {
      displayName: 'Shaper',
      path: 'parameters 104',
      options: ['soft', 'hard', 'sine', '4bit'],
      unitType: constants_unitType.ENUM
    },
    ShaperLevel: {
      displayName: '- / +',
      path: 'parameters 105',
      inputRange: [0, 100],
      unitType: constants_unitType.INT
    },
    ShaperPre: {
      displayName: 'Route',
      path: 'parameters 106',
      options: ['<<<', '>>>'],
      unitType: constants_unitType.ENUM
    }
  } // // synth kick
  // exports.xxx = {
  //     name: 'decay',
  //     displayName: 'Decay',
  //     path: 'parameters 1',
  //     inputRange: [0, 100],
  //     exponent: 0.8,
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'pitch',
  //     displayName: 'Pitch',
  //     path: 'parameters 2',
  //     inputRange: [30, 200],
  //     exponent: 3.333,
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'env',
  //     displayName: 'Env',
  //     path: 'parameters 3',
  //     inputRange: [0, 100],
  //     exponent: 0.8,
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'attack',
  //     displayName: 'Attack',
  //     path: 'parameters 4',
  //     inputRange: [0, 100],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'click',
  //     displayName: 'Click',
  //     path: 'parameters 5',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'drive',
  //     displayName: 'Drive',
  //     path: 'parameters 6',
  //     inputRange: [0, 100],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'tone',
  //     displayName: 'Tone',
  //     path: 'parameters 7',
  //     inputRange: [0, 100],
  //     unitType: unitType.FLOAT,
  // }
  // // synth snare
  // exports.xxx = {
  //     name: 'decay',
  //     displayName: 'Decay',
  //     path: 'parameters 1',
  //     inputRange: [0, 100],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'tune',
  //     displayName: 'Tune',
  //     path: 'parameters 2',
  //     inputRange: [0, 100],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'filter',
  //     displayName: 'Filter',
  //     path: 'parameters 3',
  //     inputRange: ['LP -\\', 'HP /-', 'BP /\\'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'tone',
  //     displayName: 'Tone',
  //     path: 'parameters 4',
  //     inputRange: [0, 100],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'colour',
  //     displayName: 'Colour',
  //     path: 'parameters 5',
  //     inputRange: [0, 100],
  //     unitType: unitType.INT,
  // }
  // // tension
  // exports.xxx = {
  //     name: 'string_decay',
  //     displayName: 'Decay',
  //     path: 'parameters 57',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'string_ratio',
  //     displayName: 'Ratio',
  //     path: 'parameters 59',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'string_inharm',
  //     displayName: 'Inharm',
  //     path: 'parameters 60',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'string_damping',
  //     displayName: 'Damping',
  //     path: 'parameters 55',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'string_octave',
  //     displayName: 'Octave',
  //     path: 'parameters 3',
  //     inputRange: [-3, 3],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'string_semi',
  //     displayName: 'Semi',
  //     path: 'parameters 4',
  //     inputRange: [-12, 12],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'string_error',
  //     displayName: 'Error',
  //     path: 'parameters 12',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'excitor_type',
  //     displayName: 'Type',
  //     path: 'parameters 33',
  //     inputRange: ['bow', 'hammer', 'bouncing', 'plectrum'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'excitor_protusion',
  //     displayName: 'Force',
  //     path: 'parameters 34',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'excitor_stiffness',
  //     displayName: 'Stiffnes',
  //     path: 'parameters 37',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'excitor_speed',
  //     displayName: 'Speed',
  //     path: 'parameters 40',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'excitor_position',
  //     displayName: 'Position',
  //     path: 'parameters 24',
  //     inputRange: [0, 50],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'excitor_damping',
  //     displayName: 'Damping',
  //     path: 'parameters 43',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'damper_on',
  //     displayName: 'I/O',
  //     path: 'parameters 46',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'damper_mass',
  //     displayName: 'Mass',
  //     path: 'parameters 47',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'damper_stiffness',
  //     displayName: 'Stiffnes',
  //     path: 'parameters 49',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'damper_position',
  //     displayName: 'Position',
  //     path: 'parameters 28',
  //     inputRange: [0, 50],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'damper_damping',
  //     displayName: 'Damping',
  //     path: 'parameters 53',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'finger_on',
  //     displayName: 'I/O',
  //     path: 'parameters 61',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'finger_mass',
  //     displayName: 'Mass',
  //     path: 'parameters 63',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'finger_stiffness',
  //     displayName: 'Stiffnes',
  //     path: 'parameters 62',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'fret_stiffness',
  //     displayName: 'Fret',
  //     path: 'parameters 66',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'pickup_on',
  //     displayName: 'I/O',
  //     path: 'parameters 44',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'pickup_position',
  //     displayName: 'Position',
  //     path: 'parameters 45',
  //     inputRange: [0, 50],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'body_on',
  //     displayName: 'I/O',
  //     path: 'parameters 91',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'body_type',
  //     displayName: 'Type',
  //     path: 'parameters 92',
  //     inputRange: ['piano', 'guitar', 'violin', 'generic'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'body_size',
  //     displayName: 'Size',
  //     path: 'parameters 93',
  //     inputRange: ['xs', 's', 'm', 'l', 'xl'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'body_decay',
  //     displayName: 'Decay',
  //     path: 'parameters 94',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'body_lowcut',
  //     displayName: 'Lowcut',
  //     path: 'parameters 95',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'body_highcut',
  //     displayName: 'Highcut',
  //     path: 'parameters 96',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'body_balance',
  //     displayName: 'Str/Body',
  //     path: 'parameters 98',
  //     inputRange: [-100, 100],
  //     outputRange: ['0', '1.'],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'velocity_protusion',
  //     displayName: 'Force',
  //     path: 'parameters 36',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'velocity_stiffness',
  //     displayName: 'Stiffnes',
  //     path: 'parameters 39',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'velocity_speed',
  //     displayName: 'Speed',
  //     path: 'parameters 42',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'velocity_position',
  //     displayName: 'Position',
  //     path: 'parameters 27',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'velocity_damper',
  //     displayName: 'Damper',
  //     path: 'parameters 31',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'velocity_finger',
  //     displayName: 'Finger',
  //     path: 'parameters 65',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // // collision
  // exports.xxx = {
  //     name: 'structure',
  //     displayName: 'Routing',
  //     path: 'devices 0 parameters 1',
  //     inputRange: ['1 > 2', '1 + 2'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'mallet_on',
  //     displayName: 'I/O',
  //     path: 'devices 0 parameters 6',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'mallet_volume',
  //     displayName: 'Volume',
  //     path: 'devices 0 parameters 7',
  //     inputRange: [-60, 0],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'mallet_volume_vel',
  //     displayName: '< vel',
  //     path: 'devices 0 parameters 8',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'mallet_stiffness',
  //     displayName: 'Stiffnes',
  //     path: 'devices 0 parameters 10',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'mallet_stiffness_vel',
  //     displayName: '< vel',
  //     path: 'devices 0 parameters 11',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'mallet_noise',
  //     displayName: 'Noise',
  //     path: 'devices 0 parameters 13',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'mallet_noise_vel',
  //     displayName: '< vel',
  //     path: 'devices 0 parameters 14',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'mallet_colour',
  //     displayName: 'Colour',
  //     path: 'devices 0 parameters 16',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'noise_on',
  //     displayName: 'I/O',
  //     path: 'devices 0 parameters 17',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'noise_volume',
  //     displayName: 'Volume',
  //     path: 'devices 0 parameters 18',
  //     inputRange: [-60, 0],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'filter_type',
  //     displayName: 'Filter',
  //     path: 'devices 0 parameters 21',
  //     inputRange: ['lp -\\', 'hp /-', 'bp /\\', 'lhp /-\\'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'filter_freq',
  //     displayName: 'Freq',
  //     path: 'devices 0 parameters 22',
  //     inputRange: [0, 1],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'filter_res',
  //     displayName: 'Res',
  //     path: 'devices 0 parameters 26',
  //     inputRange: [0, 1],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'env_freq',
  //     displayName: 'Freq <',
  //     path: 'devices 0 parameters 25',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'env_attack',
  //     displayName: 'A /',
  //     path: 'devices 0 parameters 27',
  //     inputRange: [0, 1],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'env_decay',
  //     displayName: 'D \\',
  //     path: 'devices 0 parameters 28',
  //     inputRange: [0, 1],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'env_sustain',
  //     displayName: 'S --',
  //     path: 'devices 0 parameters 29',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'env_release',
  //     displayName: 'R \\',
  //     path: 'devices 0 parameters 30',
  //     inputRange: [0, 1],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_on',
  //     displayName: 'Reso1',
  //     path: 'devices 0 parameters 31',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'reso1_type',
  //     displayName: 'Type',
  //     path: 'devices 0 parameters 32',
  //     inputRange: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'reso1_quality',
  //     displayName: 'Quality',
  //     path: 'devices 0 parameters 33',
  //     inputRange: ['basic', 'few', 'medium', 'full'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'reso1_decay',
  //     displayName: 'Decay',
  //     path: 'devices 0 parameters 40',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_material',
  //     displayName: 'Material',
  //     path: 'devices 0 parameters 44',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_ratio',
  //     displayName: 'Ratio',
  //     path: 'devices 0 parameters 50',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_brightness',
  //     displayName: 'Bright',
  //     path: 'devices 0 parameters 51',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_inharmonics',
  //     displayName: 'Inharm',
  //     path: 'devices 0 parameters 53',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_position',
  //     displayName: 'Position',
  //     path: 'devices 0 parameters 57',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_volume',
  //     displayName: 'Volume',
  //     path: 'devices 0 parameters 63',
  //     inputRange: [0, 1],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_radius',
  //     displayName: 'Radius',
  //     path: 'devices 0 parameters 47',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_opening',
  //     displayName: 'Opening',
  //     path: 'devices 0 parameters 55',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_tune',
  //     displayName: 'Tune',
  //     path: 'devices 0 parameters 34',
  //     inputRange: [-48, 48],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'reso1_fine',
  //     displayName: '+ / -',
  //     path: 'devices 0 parameters 35',
  //     inputRange: [-50, 50],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'reso1_env',
  //     displayName: '< Env',
  //     path: 'devices 0 parameters 37',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso1_time',
  //     displayName: '< Time',
  //     path: 'devices 0 parameters 39',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_on',
  //     displayName: 'Reso2',
  //     path: 'devices 0 parameters 64',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'reso2_type',
  //     displayName: 'Type',
  //     path: 'devices 0 parameters 65',
  //     inputRange: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'reso2_quality',
  //     displayName: 'Quality',
  //     path: 'devices 0 parameters 66',
  //     inputRange: ['basic', 'few', 'medium', 'full'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'reso2_decay',
  //     displayName: 'Decay',
  //     path: 'devices 0 parameters 73',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_material',
  //     displayName: 'Material',
  //     path: 'devices 0 parameters 77',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_ratio',
  //     displayName: 'Ratio',
  //     path: 'devices 0 parameters 83',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_brightness',
  //     displayName: 'Bright',
  //     path: 'devices 0 parameters 84',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_inharmonics',
  //     displayName: 'Inharm',
  //     path: 'devices 0 parameters 86',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_position',
  //     displayName: 'Position',
  //     path: 'devices 0 parameters 90',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_volume',
  //     displayName: 'Volume',
  //     path: 'devices 0 parameters 96',
  //     inputRange: [0, 1],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_radius',
  //     displayName: 'Radius',
  //     path: 'devices 0 parameters 80',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_opening',
  //     displayName: 'Opening',
  //     path: 'devices 0 parameters 88',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_tune',
  //     displayName: 'Tune',
  //     path: 'devices 0 parameters 67',
  //     inputRange: [-48, 48],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'reso2_fine',
  //     displayName: '+ / -',
  //     path: 'devices 0 parameters 68',
  //     inputRange: [-50, 50],
  //     unitType: unitType.INT,
  // }
  // exports.xxx = {
  //     name: 'reso2_env',
  //     displayName: '< Env',
  //     path: 'devices 0 parameters 70',
  //     inputRange: [-100, 100],
  //     outputRange: ['-1.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'reso2_time',
  //     displayName: '< Time',
  //     path: 'devices 0 parameters 72',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo1_shape',
  //     displayName: 'Shape',
  //     path: 'devices 0 parameters 98',
  //     inputRange: ['sine', 'square', 'triangle', 'saw up', 'saw down', 's&h', 'noise'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo1_retrig',
  //     displayName: 'Retrig',
  //     path: 'devices 0 parameters 99',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo1_depth',
  //     displayName: 'Depth',
  //     path: 'devices 0 parameters 105',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo1_rate',
  //     displayName: 'Rate',
  //     path: 'devices 0 parameters 101',
  //     inputRange: [0, 1],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo1_dest_a',
  //     displayName: 'Dest A',
  //     path: 'devices 0 parameters 107',
  //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo2rate', 'lfo2amt'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo1_amount_a',
  //     path: 'devices 0 parameters 108',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo1_dest_b',
  //     displayName: 'Dest B',
  //     path: 'devices 0 parameters 109',
  //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo2rate', 'lfo2amt'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo1_amount_b',
  //     path: 'devices 0 parameters 110',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo2_shape',
  //     displayName: 'Shape',
  //     path: 'devices 0 parameters 112',
  //     inputRange: ['sine', 'square', 'triangle', 'saw up', 'saw down', 's&h', 'noise'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo2_retrig',
  //     displayName: 'Retrig',
  //     path: 'devices 0 parameters 113',
  //     inputRange: ['off', 'on'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo2_depth',
  //     displayName: 'Depth',
  //     path: 'devices 0 parameters 119',
  //     inputRange: [0, 100],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo2_rate',
  //     displayName: 'Rate',
  //     path: 'devices 0 parameters 115',
  //     inputRange: [0, 1],
  //     outputRange: ['0.', '1.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo2_dest_a',
  //     displayName: 'Dest A',
  //     path: 'devices 0 parameters 121',
  //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo1amt', 'lfo2rate'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo2_amount_a',
  //     path: 'devices 0 parameters 122',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }
  // exports.xxx = {
  //     name: 'lfo2_dest_b',
  //     displayName: 'Dest B',
  //     path: 'devices 0 parameters 123',
  //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo1amt', 'lfo2rate'],
  //     unitType: unitType.ENUM,
  // }
  // exports.xxx = {
  //     name: 'lfo2_amount_b',
  //     path: 'devices 0 parameters 124',
  //     inputRange: [-20, 20],
  //     outputRange: ['-5.', '5.'],
  //     unitType: unitType.FLOAT,
  // }

};
// CONCATENATED MODULE: ./src/parameter/parameterFactory.js






function createParameters(samplesFolder, drumPadName, drumLayerName, parameterNames, deviceTypeToIndex, pathToDrumLayer) {
  var parameters = [];
  var categoryParameterIndex = null;
  var sampleParameterIndex = null;
  var sampleCategories = null;

  for (var parameterindex = 0; parameterindex < parameterNames.length; parameterindex++) {
    if (parameterNames[parameterindex]) {
      var parameterNameParts = parameterNames[parameterindex].split('_');
      var targetDeviceType = parameterNameParts[0];
      var targetParameterName = parameterNameParts[1];
      var targetDeviceIndex = deviceTypeToIndex[targetDeviceType];
      var targetDevicePath = targetDeviceIndex !== undefined ? pathToDrumLayer + ' devices ' + targetDeviceIndex : pathToDrumLayer;
      var targetDeviceConfig = parameterConfig[targetDeviceType];
      var targetParameterConfig = targetDeviceConfig ? targetDeviceConfig[targetParameterName] : null; // can remove this check

      if (!targetParameterConfig) {
        continue;
      }

      var apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value';
      var apiPath = targetDevicePath + ' ' + targetParameterConfig.path;

      if (targetParameterName === 'Category') {
        sampleCategories = getCategories(samplesFolder, drumPadName, drumLayerName);
        targetParameterConfig.options = sampleCategories;
        categoryParameterIndex = parameterindex;
        parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options));
      } else if (targetParameterName === 'Select') {
        targetParameterConfig.options = getSampleGroups(samplesFolder, drumPadName, drumLayerName, sampleCategories);
        sampleParameterIndex = parameterindex;
        parameters.push(new FilteredEnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options));
      } else if (targetParameterConfig.unitType === constants_unitType.ENUM) {
        parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange));
      } else {
        parameters.push(new ValueParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange));
      }
    }
  }

  return {
    parameters: parameters,
    categoryParameterIndex: categoryParameterIndex,
    sampleParameterIndex: sampleParameterIndex
  };
}
function createMixerParameters(parameterName, pathToDevice, chainCount) {
  var targetParameterConfig = parameterConfig.Mixer[parameterName];
  var parameters = [];

  for (var chainIndex = 0; chainIndex < chainCount; chainIndex++) {
    var apiPath = pathToDevice + ' chains ' + chainIndex + ' ' + targetParameterConfig.path;
    var apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value';
    parameters.push(new ValueParameter(parameterName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange));
  }

  return parameters;
}
// CONCATENATED MODULE: ./src/config/parameterPageConfig.js
var parameterPageConfig = {
  Sampler: [{
    name: 'Sample',
    parameters: ['Sampler_Category', 'Sampler_Select', 'CC_Delay', 'CC_Start', 'Sampler_Reverse', 'Layer_Solo', null, null]
  }, {
    name: 'Amp',
    parameters: ['Sampler_AmpAttack', 'Sampler_AmpDecay', 'Sampler_AmpSustain', 'Sampler_AmpRelease', 'Sampler_AmpLoop', 'Sampler_AmpSync', null, null]
  }, {
    name: 'Pitch',
    parameters: ['Sampler_Pitch', 'Sampler_Detune', 'Sampler_Spread', 'Sampler_PitchEnv', 'Sampler_PitchEnvAttack', 'Sampler_PitchEnvDecay', null, null]
  }, {
    name: 'Filter',
    parameters: ['Sampler_FilterType', 'Sampler_FilterFreq', 'Sampler_FilterRes', 'Sampler_FilterEnv', 'Sampler_FilterEnvAttack', 'Sampler_FilterEnvDecay', null, null]
  }, {
    name: 'Tone',
    parameters: ['Sampler_FilterCircuit', 'Sampler_FilterSlope', 'Sampler_FilterDrive', 'Sampler_ShaperPre', 'Sampler_ShaperType', 'Sampler_ShaperLevel', null, null]
  }, {
    name: 'Osc',
    parameters: ['Sampler_OscLevel', 'Sampler_OscWave', 'Sampler_OscFreq', 'Sampler_OscMulti', 'Sampler_OscEnvAttack', 'Sampler_OscEnvDecay', null, null]
  }, {
    name: 'Velo',
    parameters: ['vol_velo', 'o_velo', 'f_velo', 'drive_velo', 'pe_velo', 'time_velo', null, null]
  }, {
    name: 'Rand',
    parameters: ['vol_lfo', 'pitch_lfo', null, 'f_lfo', 'pan_lfo', 'chain_rand', null, null]
  }],
  KickSynth: [{
    name: 'On',
    parameters: ['decay', 'pitch', 'env', 'drive', 'tone', 'solo', null, null]
  }, {
    name: 'Trans',
    parameters: [null, null, null, null, 'attack', 'click', null, null]
  }],
  SnareSynth: [{
    name: 'On',
    parameters: ['decay', 'tune', 'filter', 'tone', 'colour', 'solo', null, null]
  }],
  Tension: [{
    name: 'String',
    parameters: ['string_decay', 'string_ratio', 'string_inharm', 'string_damping', 'string_octave', 'string_semi', 'string_error', null]
  }, {
    name: 'Excitor',
    parameters: ['excitor_type', 'excitor_protusion', 'excitor_stiffness', 'excitor_speed', 'excitor_position', 'excitor_damping', null, null]
  }, {
    name: 'Damper',
    parameters: ['damper_on', 'damper_damping', 'damper_mass', 'damper_stiffness', 'damper_position', null, null, null]
  }, {
    name: 'Finger',
    parameters: ['finger_on', 'finger_mass', 'finger_stiffness', 'fret_stiffness', null, null, null, null]
  }, {
    name: 'Pickup',
    parameters: ['pickup_on', 'pickup_position', null, null, null, null, null, null]
  }, {
    name: 'Body',
    parameters: ['body_on', 'body_type', 'body_size', 'body_decay', 'body_lowcut', 'body_highcut', 'body_balance', null]
  }, {
    name: 'Velocity',
    parameters: [null, 'velocity_protusion', 'velocity_stiffness', 'velocity_speed', 'velocity_position', 'velocity_damper', 'velocity_finger', null]
  }],
  Collision: [{
    name: 'Mallet',
    parameters: ['mallet_volume', 'mallet_volume_vel', 'mallet_stiffness', 'mallet_stiffness_vel', 'mallet_noise', 'mallet_noise_vel', 'mallet_colour', null]
  }, {
    name: 'Noise',
    parameters: ['noise_on', 'noise_volume', 'filter_type', 'filter_freq', 'filter_res', null, null, null]
  }, {
    name: 'Env',
    parameters: ['env_freq', 'noise_volume', null, 'env_attack', 'env_decay', 'env_sustain', 'env_release', null]
  }, {
    name: 'Mixer',
    parameters: ['structure', 'reso1_on', 'reso1_volume', 'reso1_quality', 'reso2_on', 'reso2_volume', 'reso2_quality', null]
  }, {
    name: 'Reso1',
    parameters: ['reso1_type', 'reso1_decay', 'reso1_material', 'reso1_ratio', 'reso1_brightness', 'reso1_inharmonics', 'reso1_position', null]
  }, {
    name: 'Reso1.',
    parameters: ['reso1_type', 'reso1_decay', 'reso1_radius', 'reso1_opening', null, null, null, null]
  }, {
    name: 'Reso1..',
    parameters: ['reso1_type', 'reso1_decay', 'reso1_tune', 'reso1_fine', 'reso1_env', 'reso1_time', null, null]
  }, {
    name: 'Reso2',
    parameters: ['reso2_type', 'reso2_decay', 'reso2_material', 'reso2_ratio', 'reso2_brightness', 'reso2_inharmonics', 'reso2_position', null]
  }, {
    name: 'Reso2.',
    parameters: ['reso2_type', 'reso2_decay', 'reso2_radius', 'reso2_opening', null, null, null, null]
  }, {
    name: 'Reso2..',
    parameters: ['reso2_type', 'reso2_decay', 'reso2_tune', 'reso2_fine', 'reso2_env', 'reso2_time', null, null]
  }, {
    name: 'LFO1',
    parameters: ['lfo1_shape', 'lfo1_retrig', 'lfo1_rate', 'lfo1_dest_a', 'lfo1_amount_a', 'lfo1_dest_b', 'lfo1_amount_b', null]
  }, {
    name: 'LFO2',
    parameters: ['lfo2_shape', 'lfo2_retrig', 'lfo2_rate', 'lfo2_dest_a', 'lfo2_amount_a', 'lfo2_dest_b', 'lfo2_amount_b', null]
  }]
};
// CONCATENATED MODULE: ./src/parameter/parameterPageFactory.js




function createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount) {
  var parameterPages = [];
  var parameterPageNames = [];
  var deviceTypeToIndex = {};
  var instrumentType = null;

  for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
    var deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices ' + deviceIndex);
    var deviceType = parseInt(deviceApi.get('type'));
    var deviceName = deviceApi.get('name');
    deviceTypeToIndex[deviceName] = deviceIndex;

    if (deviceType === 1) {
      instrumentType = deviceName;
    }
  }

  for (i in parameterPageConfig[instrumentType]) {
    var page = parameterPageConfig[instrumentType][i];
    var result = createParameters(samplesFolder, drumPadName, drumLayerName, page.parameters, deviceTypeToIndex, pathToDrumLayer);
    parameterPages.push(new ParameterPage(i, page.name, result.parameters, result.categoryParameterIndex, result.sampleParameterIndex));
    parameterPageNames.push(page.name);
  }

  return {
    parameterPages: parameterPages,
    parameterPageNames: parameterPageNames
  };
}
function createMixerPages(pathToDevice, chainCount) {
  var mixerPageNames = Object.keys(parameterConfig.Mixer);
  var mixerPages = [];

  for (i in mixerPageNames) {
    var parameters = createMixerParameters(mixerPageNames[i], pathToDevice, chainCount);
    mixerPages.push(new ParameterPage(i, mixerPageNames[i], parameters));
  }

  return {
    mixerPages: mixerPages,
    mixerPageNames: mixerPageNames
  };
}
// CONCATENATED MODULE: ./src/drum/drumLayerFactory.js


function createDrumLayers(samplesFolder, drumPadName, pathToDrumLayers, drumLayerCount) {
  var drumLayers = [];

  for (var i = 0; i < drumLayerCount; i++) {
    var pathToDrumLayer = pathToDrumLayers + ' chains ' + i;
    var drumLayerApi = new LiveAPI(null, pathToDrumLayer);
    var drumLayerName = drumLayerApi.get('name');
    var devicesCount = drumLayerApi.get('devices').length / 2;
    var result = createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount);
    drumLayers[i] = new DrumLayer(i, drumLayerName, result.parameterPages, result.parameterPageNames);
  }

  return drumLayers;
}
// CONCATENATED MODULE: ./src/drum/drumPadFactory.js



function createDrumPads(samplesFolder, pathToDrumRack) {
  var drumPads = {};
  var drumPadNames = [];

  for (var i = 0; i < 16; i++) {
    var pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i;
    var drumPadApi = new LiveAPI(null, pathToDrumPad);

    if (drumPadApi.get('chains')[1]) {
      var pathToDrumLayers = pathToDrumPad + ' chains 0 devices 0';
      var drumLayersApi = new LiveAPI(null, pathToDrumLayers);
      var drumPadName = drumPadApi.get('name');
      var drumLayerCount = drumLayersApi.get('chains').length / 2;
      var drumLayers = createDrumLayers(samplesFolder, drumPadName, pathToDrumLayers, drumLayerCount);
      var mixerPages = createMixerPages(pathToDrumLayers, drumLayerCount);
      drumPads[drumPadApi.id] = new DrumPad(drumPadName, drumLayers, mixerPages);
      drumPadNames.push(drumPadName);
    }
  } // todo: remove name arrays from factory methods


  return {
    drumPads: drumPads,
    drumPadNames: drumPadNames
  };
}
// CONCATENATED MODULE: ./src/drum/drumRackFactory.js



function createDrumRack(samplesFolder) {
  var pathToDrumRack = 'this_device canonical_parent devices 1';
  var result = createDrumPads(samplesFolder, pathToDrumRack);
  var pagesResult = createMixerPages(pathToDrumRack, Object.keys(result.drumPads).length);
  return new DrumRack(pathToDrumRack, result.drumPads, result.drumPadNames, pagesResult.mixerPages, pagesResult.mixerPageNames);
}
// CONCATENATED MODULE: ./src/controlSurface/controlSurfaceDisplay.js

function ControlSurfaceDisplay(getControl) {
  var x = ascii.ELLIPSIS;
  this.padding = String.fromCharCode(x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x);
  this.displayApi = [];
  this.displayApi[0] = new LiveAPI(function () {}, getControl('Display_Line_0'));
  this.displayApi[1] = new LiveAPI(function () {}, getControl('Display_Line_1'));
  this.displayApi[2] = new LiveAPI(function () {}, getControl('Display_Line_2'));
  this.displayApi[3] = new LiveAPI(function () {}, getControl('Display_Line_3'));

  this.line = function (lineIndex, values) {
    this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values));
  };

  this.menu = function (lineIndex, values, selectedIndex) {
    this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values, selectedIndex));
  };

  this.title = function (lineIndex, values) {
    var output = String.fromCharCode(x, x);

    for (i in values) {
      output += values[i] + String.fromCharCode(x);
    }

    output += this.padding;
    this.displayApi[lineIndex].call('display_message', output.slice(0, 68));
  };

  function createDisplayMessage(messageItems, selectedIndex) {
    var paddingEnd = '        ';
    var itemsPadded = '';

    for (i in messageItems) {
      var prefix = selectedIndex === undefined ? '' : i == selectedIndex ? String.fromCharCode(ascii.ARROW_RIGHT) : ' ';
      itemsPadded += (prefix + messageItems[i] + paddingEnd).slice(0, 8);
      itemsPadded += i % 2 === 0 ? ' ' : '';
    }

    return itemsPadded;
  }
}
// CONCATENATED MODULE: ./src/controlSurface/trackSelect.js

function TrackSelect(getControl) {
  this.buttonApi = [new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button0')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button1')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button2')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button3')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button4')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button5')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button6')), new LiveAPI(function () {}, getControl.call(this, 'Track_Select_Button7'))];

  this.map = function (itemsCount, activeItemIndex) {
    for (var i = 0; i < 8; i++) {
      var buttonValue = i >= itemsCount ? selectButtonColour.BLACK : i == activeItemIndex ? selectButtonColour.GREEN_BRIGHT : selectButtonColour.GREEN_DIM;
      this.buttonApi[i].call('send_value', buttonValue);
    }
  };
}
// CONCATENATED MODULE: ./src/controlSurface/trackState.js

function TrackState(getControl) {
  this.buttonApi = [new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button0')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button1')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button2')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button3')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button4')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button5')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button6')), new LiveAPI(function () {}, getControl.call(this, 'Track_State_Button7'))];

  this.map = function (itemsCount, activeItemIndex) {
    for (var i = 0; i < 8; i++) {
      var buttonValue = i >= itemsCount ? stateButtonColour.BLACK : i == activeItemIndex ? stateButtonColour.BLUE_BRIGHT : stateButtonColour.BLUE_DIM;
      this.buttonApi[i].call('send_value', buttonValue);
    }
  };
}
// CONCATENATED MODULE: ./src/controlSurface/controlSurface.js




function ControlSurface(onOffControlName) {
  this.apis = {};
  this.onOffControlName = onOffControlName;
  this.controlSurfaceApi = new LiveAPI('control_surfaces 0');
  this.display = new ControlSurfaceDisplay(getControl.bind(this));
  this.trackSelect = new TrackSelect(getControl.bind(this));
  this.trackState = new TrackState(getControl.bind(this));

  this.activate = function () {
    for (var i in pushControls) {
      var control = this.controlSurfaceApi.call('get_control_by_name', [pushControls[i]]);
      this.controlSurfaceApi.call('grab_control', control);
    }
  };

  this.deactivate = function () {
    for (var i in pushControls) {
      if (pushControls[i] !== this.onOffControlName) {
        var control = this.controlSurfaceApi.call('get_control_by_name', [pushControls[i]]);
        this.controlSurfaceApi.call('release_control', control);
      }
    }
  };

  this.on = function (controlName, callback) {
    var control = this.controlSurfaceApi.call('get_control_by_name', controlName);
    var controlApi = new LiveAPI(callback, control);
    controlApi.property = 'value';
    this.apis[controlName] = controlApi;
  };

  function getControl(controlName) {
    return this.controlSurfaceApi.call('get_control_by_name', [controlName]);
  }
}
// CONCATENATED MODULE: ./src/controlSurface/controlSurfaceFactory.js

function createControlSurface(onOffControlName) {
  return new ControlSurface(onOffControlName);
}
// CONCATENATED MODULE: ./src/drum/drumTrackFactory.js




/* harmony default export */ var drumTrackFactory = (function (samplesFolder) {
  var controlSurface = createControlSurface(pushTapTempoControl);
  var drumRack = createDrumRack(samplesFolder);
  return new DrumTrack(drumRack, controlSurface);
});
// CONCATENATED MODULE: ./src/devices/drumTrack.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initLiveApi; });


var path = __webpack_require__(3);

function initLiveApi() {
  drumTrackFactory(path.join(this.patcher.filepath, '..', '..', 'samples'));
}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ])["default"];