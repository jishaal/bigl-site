import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Wrapper } from '../components/styled/';

export default class Index extends React.Component {
	render() {
		return (
			<Wrapper>
				<Helmet
					title={config.siteTitle}
					meta={[{ name: 'description', content: 'sample' }]}
				/>
			</Wrapper>
		);
	}
}
