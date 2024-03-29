import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
)

function App() {
	return (
		<div>
			<Link to='/'>Like an anchor tag</Link>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop/hats' component={HatsPage} />
			</Switch>
		</div>
	)
}

export default App
