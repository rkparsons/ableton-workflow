import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

type Props = ParameterProps & {
    chainName: string
}

function getOptions(chainName: string) {
    switch (chainName) {
        case 'Pad':
            return [
                'angelos tube',
                'aqua flute',
                'aura',
                'beacon',
                'blue ripples',
                'cs-80 sweepers',
                'dragons',
                'dream frontiers',
                'eternal evolve',
                'green glass',
                'greenhouse',
                'hovercraft',
                'inside converge',
                'jp-8 unsynced',
                'jp-8 vibrasines',
                'love triangles',
                'magnetic string',
                'meta enchanter',
                'mod bad statics',
                'mod crickets',
                'mod gummowave',
                'mod massive mooger',
                'mod multi filter',
                'mod romboidamoog',
                'modulated moog',
                'mt-240 flute',
                'mt-240 flute magnetic',
                'mt-240 flutey broken',
                'mt-240 low flute',
                'mt-240 raise',
                'mt-240 roboclock',
                'mt-240 tremolon',
                'mt-240 voxy',
                'my old soul vinyl',
                'nature boy',
                'ob-Xpander 3PolePhase',
                'pro5 gentlesweeper',
                'pro5 overtone',
                'pro5 pwm',
                'sk-1 data wave',
                'soft drawbar',
                'sparkling jd800 fifths',
                'spinning cheapo',
                'the main chord',
                'time phraser',
                'virus jp saws',
                'vs roby herb',
                'vs square table',
                'vs unison octaves',
                'warm noisy tone',
            ]
        case 'Strings':
            return [
                'arp solina',
                'atmosphere',
                'big green',
                'blue power',
                'blue pwm',
                'blue synergy',
                'blue vortex',
                'chorus',
                'cs-80',
                'digi church',
                'europeans',
                'intense fizz',
                'jp green sweep',
                'jp-8 bright pwm',
                'jp-8 champagne',
                'jp-8 pwm stereo',
                'jp-8 sawtooth',
                'jp-8 sync attack',
                'jp-8 thick&lush',
                'jp-8 warm pulse',
                'jp-8000 supersaw',
                'jp-8000 warm',
                'juno 60 dark',
                'juno 60 octaphonix',
                'juno 60 combo',
                'juno 60 fast',
                'juno 60 faster',
                'juno 60 warm',
                'jx-10 big saws',
                'jx-3p saw chorus',
                'lush green',
                'mega',
                'mt-240',
                'numan phaser',
                'ob-8 pwm big',
                'ob-8 pwm fast',
                'ob-8 uni mama',
                'ob-8 warm cognac',
                'omega pwm',
                'ppg chromapulse',
                'ppg pwm',
                'progresso',
                'prophet',
                'sublime',
                'thick blanket',
                'vintage molecular',
                'virus pulse',
                'vs prophet',
            ]
        case 'Texture':
            return ['texture1', 'texture2', 'texture3']
        case 'Waveform':
            return ['waveform1', 'waveform2', 'waveform3']
        case 'Chord':
            return ['chord1', 'chord2', 'chord3']
        case 'FX':
            return ['fx1', 'fx2', 'fx3']
        case 'Noise':
            return ['noise1', 'noise2', 'noise3']
        default:
            return []
    }
}

type OmnisphereSampleSelectProps = Props & {
    displayIndex: number
}

export class OmnisphereSampleSelect extends EnumParameter {
    displayIndex: number
    constructor({ chainName, pathToChain, deviceIndex, displayIndex }: OmnisphereSampleSelectProps) {
        const options = getOptions(chainName)
        super({
            name: 'Sample',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 1',
            options,
        })
        this.displayIndex = displayIndex
    }

    getName() {
        return super.getName().slice(8 * this.displayIndex)
    }

    getDisplayValue() {
        return super.getDisplayValue().slice(8 * this.displayIndex)
    }
}
