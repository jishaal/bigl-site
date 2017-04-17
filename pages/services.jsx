import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import { Message, StyledLink, Text } from '../components/styled/';

export default class Services extends React.Component {
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
						<Message>Services</Message>
					</Column>
				</Row>
				<Row>
					<Column>
						<Text fontSize="18px">
							// TODO
						</Text>
					</Column>
				</Row>
			</Page>
		);
	}
}
