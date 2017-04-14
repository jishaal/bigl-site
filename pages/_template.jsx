import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import { NavigationLink } from '../components/styled';

class Template extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<div>
				<NavigationLink
					to={prefixLink('/schedule/')}
					title="Q&A Schedule"
				>
					Go to home
				</NavigationLink>

				{children}
			</div>
		);
	}
}

export default Template;
