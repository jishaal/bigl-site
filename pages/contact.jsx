import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import { Message, StyledLink, Text } from '../components/styled/';

export default class Contact extends React.Component {
	render() {
		const { route } = this.props;
		const post = route.page.file;

		return (
			<Page>
				<Helmet
					title={`${config.siteTitle} - ${_.capitalize(post.name)}`}
				/>
				<Row divisions={1}>
					<Column sm={1}>
						<StyledLink to={prefixLink('/')}>back home</StyledLink>
					</Column>
					<Column sm={1}>
						<Message>Contact</Message>
					</Column>
				</Row>
				<Row>
					<Column>
						<Text fontSize="18px">
							Phone: 0211066077
						</Text>
						<Text fontSize="18px">
							Email: <a href="mailto:bookings@bigl.co.nz?Subject=Big%20L%20booking%20enquiry">
							bookings@bigl.co.nz
						</a>
						</Text>
						<Text fontSize="18px">
							Facebook: <a href="https://www.facebook.com/BigLDrivingSchool"> Big L Driving School </a>
						</Text>

					</Column>
				</Row>
			</Page>
		);
	}
}
