import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { Message, StyledLink, ButtonLink } from '../components/styled/';
import PricingPlans from '../components/PricingPlans.jsx';

export default class Index extends React.Component {
	render() {
		return (
			<Page width="1020px">
				<Helmet
					title={config.siteTitle}
					meta={[
						{ name: 'description', content: 'Learn to drive! We provide driving lessons for restricted, full and overseas drivers including mock exams. Call us now!' },
						{ name: 'keywords', content: config.siteKeywords }
					]}
				/>

				<Row divisions={2}>
					<Column>
						<Message>
							We offer a variety of services and plans to get you ready for your driving exam.
							{' '}
							<StyledLink
								underline
								fontSize={24}
								to={prefixLink('/contact/')}>Click here to contact us now!
							</StyledLink>
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
						<ButtonLink to={prefixLink('/services/#learners')} marginTop="15px">
							{' '}read more...
						</ButtonLink>
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
						<ButtonLink to={prefixLink('/services/#restricted')} marginTop="15px">
							{' '}read more...
						</ButtonLink>
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
						<ButtonLink to={prefixLink('/services/#full')} marginTop="15px">
							{' '}read more...
						</ButtonLink>
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
						<ButtonLink to={prefixLink('/services/#overseas')}>
							{' '}read more...
						</ButtonLink>
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
						<ButtonLink to={prefixLink('/services/#mock')}>
								{' '}read more...
						</ButtonLink>
					</Column>
				</Row>
				<PricingPlans />
			</Page>
		);
	}
}
