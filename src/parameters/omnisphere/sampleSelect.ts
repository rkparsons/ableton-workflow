import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

type Props = ParameterProps & {
    chainName: string
}

function getOptions(chainName: string) {
    switch (chainName) {
        case 'Pad':
            return ['pad1', 'pad2', 'pad3']
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
    }
}
