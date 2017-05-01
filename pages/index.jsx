import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Row, Column, Page } from 'hedron';
import { Message, StyledLink, Text } from '../components/styled/';

export default class Index extends React.Component {
	render() {
		return (
			<Page>
				<Helmet
					title={config.siteTitle}
					meta={[{ name: 'description', content: 'sample' }]}
				/>

				<Row divisions={2}>
					<Column>
						<Message>
							{' '}
							Our website is coming soon.
							{' '}
						</Message>
						<Message>
							{' '}
							<a href="https://www.facebook.com/Bigldrivingschool/">In the meantime, click here to find us on Facebook.</a>
							{' '}
						</Message>
					</Column>
				</Row>
			</Page>
		);
	}
}
