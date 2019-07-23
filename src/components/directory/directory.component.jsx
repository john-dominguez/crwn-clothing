import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component'
import { sectionData } from './directory.data.js'

import './directory.styles.scss'

export default class Directory extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sections: sectionData,
		}
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		)
	}
}
