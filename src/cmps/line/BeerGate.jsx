import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'

export function BeerGate({ beer }) {

	return (
		<section className='beer-gate'>

			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={beer}
				padMode={'end'}
				chars={Presets.ALPHANUM}
				// value={``}
				// length={2}
				value={`${beer.gate}`}
			/>
		</section>

	)
}
