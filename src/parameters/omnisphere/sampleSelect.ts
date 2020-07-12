import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

type Props = ParameterProps & {
    chainName: string
}

function getOptions(chainName: string) {
    switch (chainName) {
        case 'Pad':
            return [
                'abandon1',
                'abandon2',
                'abandon3',
                'angelos',
                'aqua',
                'aura',
                'beacon',
                'blue',
                'cs80 with more text',
                'dragons',
                'dream',
                'eternal',
                'greenGla',
                'greenHau',
                'hover',
                'inside',
                'jp8UnSyn',
                'jp8Vibra',
                'loveTri',
                'magnetic',
                'meta',
                'modBad',
                'modCrick',
                'modGummo',
                'modMassi',
                'modMulti',
                'modRombo',
                'modMoog',
                'mt240_A',
                'mt240_B',
                'mt240_C',
                'mt240_D',
                'mt240_E',
                'mt240_F',
                'mt240_G',
                'mt240_H',
                'myOld',
                'nature',
                'obXpand',
                'pro5gent',
                'pro5over',
                'pro5pwm',
                'sk1Data',
                'softDraw',
                'sparkle',
                'spinning',
                'theMain',
                'timePhra',
                'virusJP',
                'vsRoby',
                'vsSquare',
                'vsUnison',
                'warmNois',
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

export class OmnisphereSampleSelect extends EnumParameter {
    constructor({ chainName, pathToChain, deviceIndex }: Props) {
        const options = getOptions(chainName)
        super({
            name: 'Sample',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 1',
            options,
        })
        this.length = 2
    }
}
