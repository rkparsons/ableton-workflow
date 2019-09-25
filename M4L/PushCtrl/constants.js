exports.mode = {
    RACK_MIXER: 0,
    RACK_FX: 1,
    PAD_MIXER: 2,
    PAD_FX: 3,
    LAYER_PARAMS: 4,
    LAYER_FX: 5,
}

exports.command = {
    DEFAULT: 0,
    RANDOM: 1,
}

exports.unitType = {
    FLOAT: 0,
    INT: 1,
    ENUM: 2,
}

exports.unitStyle = {
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
    NATIVE: 10,
}

exports.ascii = {
    PLUS_BAR: 3,
    MINUS_BAR: 4,
    TWO_BARS: 5,
    EMPTY_BARS: 6,
}

// exports.mode = {
//     VOICE_MIXER: 0,
//     VOICE_EFFECT: 1,
//     VOICE_SEQUENCE: 2,
//     LAYER_DEVICE: 8,
//     LAYER_EFFECT: 9,
// }

exports.selectButtonColour = {
    BLACK: 0,
    GREEN_DIM: 13,
    GREEN_BRIGHT: 19,
}

exports.stateButtonColour = {
    BLACK: 0,
    BLUE_BRIGHT: 45,
    BLUE_DIM: 47,
}

exports.pushTapTempoControl = 'Tap_Tempo_Button'

exports.pushControls = [
    'Foot_Pedal',
    'Up_Arrow',
    'Down_Arrow',
    'Left_Arrow',
    'Right_Arrow',
    'Shift_Button',
    'Select_Button',
    'Delete_Button',
    'Duplicate_Button',
    'Quantization_Button',
    'Accent_Button',
    'In_Button',
    'Out_Button',
    'Master_Select_Button',
    'Octave_Down_Button',
    'Octave_Up_Button',
    'Repeat_Button',
    'Global_Mute_Button',
    'Global_Solo_Button',
    'Track_Stop_Button',
    'Scale_Presets_Button',
    'Vol_Mix_Mode_Button',
    'Device_Mode_Button',
    'Clip_Mode_Button',
    'Browse_Mode_Button',
    'Single_Track_Mode_Button',
    'Pan_Send_Mode_Button',
    'Note_Mode_Button',
    'Session_Mode_Button',
    // 'Play_Button',
    'New_Button',
    'Automation_Button',
    exports.pushTapTempoControl,
    'Metronome_Button',
    'Fixed_Length_Button',
    // 'Record_Button',
    'Undo_Button',
    'Create_Device_Button',
    'Create_Track_Button',
    'Double_Button',
    'User_Button',
    'Track_Select_Button0',
    'Track_Select_Button1',
    'Track_Select_Button2',
    'Track_Select_Button3',
    'Track_Select_Button4',
    'Track_Select_Button5',
    'Track_Select_Button6',
    'Track_Select_Button7',
    'Track_Select_Buttons',
    'Track_State_Button0',
    'Track_State_Button1',
    'Track_State_Button2',
    'Track_State_Button3',
    'Track_State_Button4',
    'Track_State_Button5',
    'Track_State_Button6',
    'Track_State_Button7',
    'Track_State_Buttons',
    'Scene_Launch_Button7',
    'Scene_Launch_Button6',
    'Scene_Launch_Button5',
    'Scene_Launch_Button4',
    'Scene_Launch_Button3',
    'Scene_Launch_Button2',
    'Scene_Launch_Button1',
    'Scene_Launch_Button0',
    'Scene_Launch_Buttons',
    // '0_Clip_0_Button',
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
    'Single_Press_Event_Matrix',
    'Double_Press_Event_Matrix',
    'Tempo_Control_Tap',
    'Tempo_Control',
    'Swing_Control_Tap',
    'Swing_Control',
    'Master_Volume_Tap',
    'Master_Volume_Control',
    'Track_Control_Touch_0',
    'Track_Control_Touch_1',
    'Track_Control_Touch_2',
    'Track_Control_Touch_3',
    'Track_Control_Touch_4',
    'Track_Control_Touch_5',
    'Track_Control_Touch_6',
    'Track_Control_Touch_7',
    'Track_Control_Touches',
    'Track_Control_0',
    'Track_Control_1',
    'Track_Control_2',
    'Track_Control_3',
    'Track_Control_4',
    'Track_Control_5',
    'Track_Control_6',
    'Track_Control_7',
    'Track_Controls',
    'Display_Line_0',
    'Display_Line_1',
    'Display_Line_2',
    'Display_Line_3',
    'Shifted_Button_Matrix',
    'Touch_Strip_Tap',
    'Touch_Strip_Control',
]
