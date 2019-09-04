#IfWinActive export

f:: ;next sample
    CoordMode, Mouse, Window
	Click, 71, 825
    Sleep, 100
    MouseMove, 540, 345
    Sleep, 300
    Click
    Sleep, 200
    Send {Space}
    Sleep, 100
    Send {Space}
    return

g:: ;clear sample
    Send ^{z}
    MouseMove, 255, 215
    Click
    Sleep, 250
    Send {Delete}
    Send {Enter}
    Sleep 200
    return

Del::Suspend

#IfWinActive Kontakt

f:: ;render sample
    CoordMode, Mouse, Screen
	Click, right, 1624, 165
    Sleep 200
	Click, 1645, 255
    Click, 550, 230
    Click, 575, 167
    Sleep, 500
    Send, {Shift down}
    MouseMove, 613, 167
    Click
    Send, {Shift up}
    Send, {Control down}
    Send, {Shift down}
    Send, {r}
    Send, {Control up}
    Send, {Shift up}
    CoordMode, Mouse, Window
    MouseMove, 100, 660
    Click

    return