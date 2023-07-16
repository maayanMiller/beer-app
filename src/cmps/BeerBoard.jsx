import { Component } from 'react'
import { connect } from 'react-redux'
import { Line } from './Line'
import { loadBeers } from '../store/actions/beerActions'


export class _BeerBoard extends Component {
	async componentDidMount() {
		this.props.loadBeers()
		console.log('this.props:', this.props)
	}

	render() {
		const { beers } = this.props
		if (!beers) return <div>Loading...</div>

		return (
			<section className='board'>
				<div className='split-flap'>
					<div className='line line-header'>
						<div className='gate'>GATE</div>
						<div className='cell-container beer-name'>NAME</div>
						<div className='brewery-and-type'>
							<div className='cell-container beer-brewery'>BREWERY</div>
							<div className='cell-container'>TYPE</div>
						</div>
						<div className='gate'>ABV</div>
						<div className='gate'>IBU</div>
						<div className='cell-container'>UNTAPPD</div>
						<div className='cell-container'>PRICE </div>
					</div>
					<div className='split-flap-board'>
						{beers.filter((beer) => {
							return beer.gate !== '';
						}).sort((a, b) => {
							// Compare the values of 'gate' property for sorting
							if (a.gate < b.gate)
							{
								return -1;
							}
							if (a.gate > b.gate)
							{
								return 1;
							}
							return 0;
						}).map((beer) => {
							// return <h2 key={beer._id}>{beer.name}</h2>;
							return <Line key={beer._id} beer={beer} />
						})}
					</div>
				</div>
			</section>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		beers: state.beerModule.beers,
	}
}

const mapDispatchToProps = {
	loadBeers,
}

export const BeerBoard = connect(mapStateToProps, mapDispatchToProps)(_BeerBoard)
