import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Row, Column, Page } from 'hedron';
import { Message } from '../components/styled/';
import PricingPlans from '../components/PricingPlans.jsx';

export default class Index extends React.Component {
	render() {
		return (
			<Page width="1020px">
				<Helmet
					title={config.siteTitle}
					meta={[{ name: 'description', content: 'sample' }]}
				/>

				<Row divisions={2}>
					<Column>
						<Message>
							We offer a variety of services and plans to get you ready for your driving exam.
						</Message>
					</Column>
					<Column xs={2} md={1}>
						<h3>Learners Licence</h3>
						<p>
							We can assist you with passing your theory test by directing you to the available resources
							and/or sitting with you on one on one basis to explain and reason out various scenarios.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3>Restricted Licence</h3>
						<p>
							We teach you to drive in a very safe and supportive environment under the guidance and
							expertise of a professional driving instructor who has been an Ex-Driver Testing Officer
							with VTNZ and conducted thousands of driving test whilst in that role.
						</p>
					</Column>
				</Row>
				<Row>
					<Column>
						<Message>
							<strong>Introductory offer:</strong>
							{' '}
							1 hr free lesson when you book 10 x 1 hr lessons for $500 using your vehicle
							Or $600 using Driving School Vehicle
						</Message>
					</Column>
				</Row>
				<PricingPlans />
			</Page>
		);
	}
}
