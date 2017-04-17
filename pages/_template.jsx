import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';

import {
	NavigationLink,
	NavigationContainer,
	Logo,
	Header,
	HeaderImage,
} from '../components/styled';

import Tunnel from '../assets/tunnel.jpg';

class Template extends React.Component {
	render() {
		const { children } = this.props;
		let banner;

		if (this.props.location.pathname.includes('lessons')) {
			banner = Tunnel;
		}

		return (
			<div>
				<HeaderImage bannerImg={banner}>
					<Header>
						<Logo />
						<NavigationContainer>
							<NavigationLink
								to={prefixLink('/about/')}
								title="About"
							>
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
							<NavigationLink
								to={prefixLink('/tips/')}
								title="Tips"
							>
								Tips
							</NavigationLink>
						</NavigationContainer>
					</Header>
				</HeaderImage>
				{children}
			</div>
		);
	}
}

export default Template;
