import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

type Props = ParameterProps & {
    chainName: string
}

function getOptions(chainName: string) {
    switch (chainName) {
        case 'Pad':
            return [
                'abandoned 1',
                'abandoned 2',
                'abandoned 3',
                'angelos tube',
                'aqua flute pad',
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
                'mt-240 pad raise',
                'mt-240 roboclock pad',
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
            return ['strings1', 'strings2', 'strings3']
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
