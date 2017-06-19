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
					meta={[
						{ name: 'Big L Driving SchoolS', content: 'sample' },
					]}
				/>

				<Row divisions={2}>
					<Column>
						<Message>
							We offer a variety of services and plans to get you ready for your driving exam.
						</Message>
					</Column>
					<Column xs={2} md={1}>
						<h3>
							<StyledLink
								underline
								to={prefixLink('/services/#learners')}
							>
								Learners Licence{' '}
							</StyledLink>
							{' '}
						</h3>
						<p>
							Big L Driving School can help you prepare for the theory test on the NZ Road Codes with the
							ability to direct you to any available resources.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3>
							<StyledLink
								underline
								to={prefixLink('/services/#restricted')}
							>
								Restricted Licence{' '}
							</StyledLink>
							{' '}
						</h3>
						<p>
							We can to help you achieve your goal of getting your Restricted Licence. The driving
							instructor at Big L Driving School has an added advantage of in depth knowledge of Driver
							Testing and the Restricted Test routes.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3>
							<StyledLink
								underline
								to={prefixLink('/services/#full')}
							>
								Full Licence
							</StyledLink>
							{' '}
						</h3>
						<p>
							Big L Driving School can help you prepare for your Full Licence Test which involves driving
							into speed zones up to 70 km/h involving various manoeuvres. We can help you in identifying
							and responding to driving hazards as you progress through the test.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3>
							<StyledLink
								underline
								to={prefixLink('/services/#overseas')}
							>
								Overseas Conversion
							</StyledLink>
							{' '}
						</h3>
						<p>
							Big L Driving School can assist you with your licence conversion by offering our services
							in understanding the New Zealand Road Codes and passing the Theory Test followed by Full
							Driving Licence test.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h3>
							<StyledLink
								underline
								to={prefixLink('/services/#mock')}
							>
								Mock Test
							</StyledLink>
							{' '}
						</h3>
						<p>
							Being an ex VTNZ Driver Testing Officer, the driving instructor at Big L Driving School is
							fully conversant with actual testing routes and also the assessable task of the respective
							driving test. We can evaluate your driving standard and confirm your readiness for the
							actual test and any areas that need to be addressed prior to it.
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
