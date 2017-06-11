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

		if (this.props.location.pathname.includes('contact')) {
			banner = Tunnel;
		}

		return (
			<div>
				<HeaderImage bannerImg={banner}>
					<Header>
						<Logo />
						<NavigationContainer>
							<NavigationLink to={prefixLink('/')} title="Home">
								Home
							</NavigationLink>
							<NavigationLink
								to={prefixLink('/services/')}
								title="Services"
							>
								Services
							</NavigationLink>
							<NavigationLink
								to={prefixLink('/instructors/')}
								title="Instructors"
							>
								Instructors
							</NavigationLink>
							<NavigationLink
								to={prefixLink('/contact/')}
								title="Contact"
							>
								Contact
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
