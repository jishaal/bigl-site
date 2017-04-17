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
							We off a variety of services and plans to get you ready for your driving exam.
							{' '}
						</Message>
					</Column>
					<Column xs={2} md={1}>
						<h4>Section Title</h4>
						<p>
							Etiam pretium libero massa, vitae lacinia nibh ultricies ut.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h4>Section Title</h4>
						<p>
							Etiam pretium libero massa, vitae lacinia nibh ultricies ut.
						</p>
					</Column>
				</Row>

				<Row divisions={2}>
					<Column />
					<Column xs={2} md={1}>
						<h4>Section Title</h4>
						<p>
							Etiam pretium libero massa, vitae lacinia nibh ultricies ut.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h4>Section Title</h4>
						<p>
							Etiam pretium libero massa, vitae lacinia nibh ultricies ut.
						</p>
					</Column>
				</Row>
			</Page>
		);
	}
}
