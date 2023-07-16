import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'
import { makeId } from '../../services/utilService'


export function BeerPrice({ beer }) {
	const [newBeer, setBeer] = useState(beer);
	const play = () => {
		new Audio(flipSlapSound).play()
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			setBeer({ ...beer })
			play()
		}, Math.random() * 15000000);
		return () => clearInterval(intervalId);
	}, [beer]);

	return (

		<section className='beer-price'>
			<FlapDisplay
				className='cell-container '
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM + '₪'}
				padMode={'end'}
				// length={3}
				// value={``}
				value={`${beer.price}₪`}
			/>
		</section>

	)
}
