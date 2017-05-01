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

		if (this.props.location.pathname.includes('tips')) {
			banner = Tunnel;
		}

		return (
			<div>
				<HeaderImage bannerImg={banner}>
					<Header>
						<Logo />
					</Header>
				</HeaderImage>
				{children}
			</div>
		);
	}
}

export default Template;
