import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import { NavigationLink, NavigationContainer } from '../components/styled';

class Template extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<div>
				<NavigationContainer>
					<NavigationLink to={prefixLink('/about/')} title="About">
						About
					</NavigationLink>
					<NavigationLink
						to={prefixLink('/lessons/')}
						title="Lessons"
					>
						Lessons
					</NavigationLink>
					<NavigationLink
						to={prefixLink('/testimonials/')}
						title="Testimonials"
					>
						Testimonials
					</NavigationLink>
					<NavigationLink to={prefixLink('/tips/')} title="Tips">
						Tips
					</NavigationLink>
				</NavigationContainer>
				{children}
			</div>
		);
	}
}

export default Template;
