import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import './assets/scss/global.scss'
import {BeerApp} from './pages/BeerApp'
import {AppHeader} from './cmps/AppHeader'
import {About} from './pages/About'
import {BeerDetails} from './pages/BeerDetails'
import {BeerEdit} from './pages/BeerEdit'
import {BeerBoard} from './cmps/BeerBoard'

const PrivateRoute = (props) => {
	const isAdmin = true
	// return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
	return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}

function App() {
	return (
		<Router>
			<div className='main-app main-layout'>
				<AppHeader />
				<main className='container'>
					<Switch>
						<Route path='/beer/edit/:id?' component={BeerEdit} />
						<PrivateRoute path='/beer/:id' component={BeerDetails} />
						<Route path='/about' component={About} />
						<Route path='/board' component={BeerBoard} />
						<Route path='/' component={BeerApp} />
					</Switch>
				</main>
				<footer className='app-footer full main-layout'>
					<section>MaayanMiller 2023 &copy;</section>
				</footer>
			</div>
		</Router>
	)
}

export default App
