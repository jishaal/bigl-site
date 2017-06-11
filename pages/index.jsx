import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { Message, StyledLink } from '../components/styled/';
import PricingPlans from '../components/PricingPlans.jsx';

export default class Index extends React.Component {
	render() {
		return (
			<Page width="1020px">
				<Helmet
					title={config.siteTitle}
					meta={[{ name: 'Big L Driving SchoolS', content: 'sample' }]}
				/>

				<Row divisions={2}>
					<Column>
						<Message>
							We offer a variety of services and plans to get you ready for your driving exam.
						</Message>
					</Column>
					<Column xs={2} md={1}>
						<h3><StyledLink  underline to={prefixLink('/services/#learners')}>Learners Licence </StyledLink> </h3>
						<p>
							We can assist you with passing your theory test by directing you to the available resources
							and/or sitting with you on one on one basis to explain and reason out various scenarios.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3><StyledLink underline to={prefixLink('/services/#restricted')}>Restricted Licence </StyledLink> </h3>
						<p>
							We teach you to drive in a very safe and supportive environment under the guidance and
							expertise of a professional driving instructor who has been an Ex-Driver Testing Officer
							with VTNZ and conducted thousands of driving test whilst in that role.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3><StyledLink  underline to={prefixLink('/services/#full')}>Full Licence</StyledLink> </h3>
						<p>
							Following successfully attaining the restricted licence, the next step is Full Licence.
							Whilst you are driving under restricted licence , you are actually practising driving for
							your full licence and that you are still learning.</p>
					</Column>
					<Column xs={2} md={1}>
						<h3><StyledLink underline to={prefixLink('/services/#overseas')}>Overseas Conversion</StyledLink> </h3>
						<p>
							Moving to a new country is exciting and challenging. Depending on the country you have come
							from, you may be required to sit for a theory test followed by a full practical driving
							test before being granted a full New Zealand driver licence.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3><StyledLink underline to={prefixLink('/services/#mock')}>Mock Test</StyledLink> </h3>
						<p>
							A mock driving test allows you and your driving instructor to identify any areas of your
							driving that need improvement before taking your actual practical driving test. During the
							mock test you also get to familiarise with what to expect on the actual test.
						</p>
					</Column>
				</Row>
				<Row>
					<Column>
						<Message>
							<strong>Introductory offer:</strong>
							{' '}
							1 hr free lesson when you book 10 x 1 hr lessons for $500 using your vehicle
							Or $600 using Driving School Vehicle (valid till 31st July '17)
						</Message>
					</Column>
				</Row>
				<PricingPlans />
			</Page>
		);
	}
}
