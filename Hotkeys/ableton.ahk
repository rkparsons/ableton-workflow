#IfWinActive Massive X

global xPosition := 115

defaultOscKnobs()
{
    Click, 180, 285, 2
    Click, 250, 285, 2
}

setOscMode(index)
{
    Click, %xPosition%, 215

    if (index = 1) {
        Click, %xPosition%, 240         
    } else if (index = 2) {
        Click, %xPosition%, 255  
    } else if (index = 3) {
        Click, %xPosition%, 275  
    } else if (index = 4) {
        Click, %xPosition%, 295  
    } else if (index = 5) {
        Click, %xPosition%, 310  
    } else if (index = 6) {
        Click, %xPosition%, 330  
    } else if (index = 7) {
        Click, %xPosition%, 345  
    } else if (index = 8) {
        Click, %xPosition%, 365  
    } else if (index = 9) {
        Click, %xPosition%, 380  
    } else if (index = 10) {
        Click, %xPosition%, 400  
    }
}

setOscSubMode(index)
{
    Click, %xPosition%, 275

    if (index = 1) {
        Click, %xPosition%, 295        
    } else if (index = 2) {
        Click, %xPosition%, 315  
    } else if (index = 3) {
        Click, %xPosition%, 330 
    }
}

setOscSubSubMode(index)
{
    Click, %xPosition%, 285

    if (index = 1) {
        Click, %xPosition%, 310        
    } else if (index = 2) {
        Click, %xPosition%, 330   
    } else if (index = 3) {
        Click, %xPosition%, 345 
    } else if (index = 4) {
        Click, %xPosition%, 365        
    } else if (index = 5) {
        Click, %xPosition%, 385   
    } else if (index = 6) {
        Click, %xPosition%, 400 
    }
}

setOscSubSubSubMode(index)
{
    Click, %xPosition%, 300

    if (index = 1) {
        Click, %xPosition%, 325        
    } else if (index = 2) {
        Click, %xPosition%, 345   
    }
}

Esc:: ;standard
    setOscMode(1)
    defaultOscKnobs()
    return

    `:: ;forward
        setOscSubMode(1)
        return

    1:: ;backward
        setOscSubMode(2)
        return

        Tab:: ;positive
            setOscSubSubMode(1)
            return

        q:: ;negative
            setOscSubSubMode(2)
            return

F1:: ;mirror
    setOscMode(3)
    defaultOscKnobs()
    return

F2:: ;bend: strong, medium, gentle / neutral, up-down, for-back
    setOscMode(2)
    defaultOscKnobs()
    return

F3:: ;hardsync: hard, soft, grain / neutral, up-down, for-back 
    setOscMode(4)
    defaultOscKnobs()
    return

F4:: ;wrap: hard, soft, grain / neutral, up-down, for-back 
    setOscMode(5)
    defaultOscKnobs()
    return

F5:: ;formant: _ / neutral, up-down, for-back 
    setOscMode(6)
    defaultOscKnobs()
    return

F6:: ;art
    setOscMode(7)
    defaultOscKnobs()
    return

    2:: ;hard
        setOscSubMode(1)
        return

    3:: ;medium
        setOscSubMode(2)
        return

    4:: ;soft
        setOscSubMode(3)
        return

        w:: ;neutral
            setOscSubSubMode(1)
            return

        e:: ;up-down
            setOscSubSubMode(2)
            return

        r:: ;for-back
            setOscSubSubMode(3)
            return

        t:: ;fu-db
            setOscSubSubMode(4)
            return

            s:: ;body
                setOscSubSubSubMode(1)
                return

            d:: ;nobody
                setOscSubSubSubMode(2)
                return

F8:: ;gorilla
    setOscMode(8)
    defaultOscKnobs()
    return

    8:: ;king
        setOscSubMode(1)
        return

    9:: ;kang
        setOscSubMode(2)
        return

    0:: ;kong
        setOscSubMode(3)
        return

        i:: ;1x
            setOscSubSubMode(1)
            return

        o:: ;2x
            setOscSubSubMode(2)
            return

        p:: ;3x
            setOscSubSubMode(3)
            return

        k:: ;4x
            setOscSubSubMode(4)
            return

        l:: ;5x
            setOscSubSubMode(5)
            return

        `;:: ;6x
            setOscSubSubMode(6)
            return

F11:: ;random: fluid, thunder, divide / p.rnd, p.switch
    setOscMode(9)
    defaultOscKnobs()
    return

F12:: ;jitter: j1, j2, j3 / p.rnd, p.switch
    setOscMode(10)
    defaultOscKnobs()
    return

    -:: ;fluid/j1
        setOscSubMode(1)
        return

    =:: ;thunder/j2
        setOscSubMode(2)
        return

    BS:: ;divide/j3
        setOscSubMode(3)
        return

        ]:: ;p.rnd
            setOscSubSubMode(1)
            return

        #:: ;p.switch
            setOscSubSubMode(2)
            return

Del::Suspend