import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import {
	Message,
	StyledLink,
	Text,
	Title,
	Subtitle,
} from '../components/styled/';

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
						<Title>Services</Title>
					</Column>
				</Row>

				<Row>
					<Column>
						<Subtitle>
							Learner Licence
						</Subtitle>
						<Text>
							We can assist you with passing your theory test by directing you to the available resources
							and/or sitting with you on one on one basis to explain and reason out various scenarios.
							Outlined below are references to available resources for the learner licence requirements.
							{' '}
							<i>(source: NZTA website)</i>
						</Text>

						<Text>
							The NZ Transport Agency sets the following conditions for Learners Licence

							You need to be 16 or older when you sit the learner licence test.

							You do the test on a computer at an AA/ VTNZ Centre.

							The test has 35 multi-choice questions

							If you answer at least 32 correctly, you pass. When you pass you get a learner licence,
							and you can start learning to drive with a supervisor or a driving instructor.

						</Text>

						<Text>
							Learn the road rules
							To keep everyone safe on the road, you need to learn the road rules before you can get your
							learner licence. You’ll need to pass a test to prove that you understand the rules for
							driving safely in New Zealand. You can prepare for this by reading the New Zealand road
							code, or by working your way through
							{' '}
							<a href="https://drive.govt.nz/get-your-learners/interactive-road-code">
								interactive road code
							</a>
							.
							You can sit official practice learner tests at
							{' '}
							<a href="http://www.roadcodepractice.co.nz">
								Rode Code Practice
							</a>
							{' '}
							and at the
							<a href="https://www.nzta.govt.nz/resources/roadcode">
								{' '}NZTA road codes
							</a>
							{' '}
							site.
						</Text>
					</Column>
				</Row>

				<Row>
					<Column>
						<Subtitle>
							Restricted Licence
						</Subtitle>
						<Text>
							We teach you to drive in a very safe and supportive environment under the guidance and
							expertise of a professional driving instructor who has been an Ex-Driver Testing Officer
							with VTNZ and conducted thousands of driving test whilst in that role. Pravin (PK) is a
							very patient and caring and promotes safe driving skills.
						</Text>

						<Text>
							As an Ex Driver Testing Officer, Pravin (PK) is ideally placed to instruct you on your driving skills,
							as well as preparing you for your driving test. He knows exactly how the practical licence test works,
							and the assessment and marking criteria used. In addition, Pravin (PK) can also act as your support person
							during your actual test if this is required.
						</Text>

						<Text>
							Learn the road rules
							NZTA recommends 120 hours of driving practice prior to sitting for your Restricted Licence.
							This can be a combination of driving school lessons and driving with other supervisors in
							between your formal lessons. The more you drive the better you get with your driving
							ability. Being taught by a professional instructor will greatly enhance your chances of
							passing your Restricted Licence test.
						</Text>

						<Text>
							<strong>The Restricted Licence Test</strong>
						</Text>
						<Text>
							The Restricted Test is intended to check that you have sufficient knowledge of the road
							rules and the necessary driving skills required to be a safe and competent driver.
							It will expose you to a variety of driving situations that you would be likely to encounter
							during your normal driving.
						</Text>

						<Text>
							In order to pass the test, you will need to demonstrate that you are safe to be driving by
							yourself and without supervision.
						</Text>

						<Text>
							The Restricted Licence driving test lasts for approximately 1 hour in total. It consists of
							2 stages – the first stage is in a lower speed area and is intended to test your basic
							driving skills and that you are a safe driver. If you pass the first stage, you will progress
							to the next stage, which involves higher speeds and busier traffic and road conditions.
							You will be assessed on a variety of manoeuvres involving intersections, lane changes,
							turning and interaction with other road users.
						</Text>
						<Text>
							To pass Stage 1 of the test, you cannot incur any more than 1 ‘critical error’ and no
							‘immediate fail errors’. You also cannot incur too many ‘negative’ points which will result
							in a ‘points fail’. To pass the test overall, you cannot incur more than 2 ‘critical errors’
							overall, no ‘immediate fail errors’ and not incurring too many ‘negative’ points.
						</Text>
						<Text>
							Outlined below are some other requirements after obtaining restricted licence.
						</Text>

						<Text>
							To keep you safe while you’re still on restricted licence, there are some conditions you must follow:
							<ul>
								<li>
									you can drive on your own between 5am and 10pm.
								</li>
								<li>
									you can only drive between 10pm and 5am if you have a supervisor in the front passenger seat.
								</li>
								<li>
									If you’re driving without a supervisor, you can only take a passenger if they are:
									<ul>
										<li>
											your spouse or partner (for example the person you live with as if you’re married or in a civil union)
										</li>
										<li>
											a child who is financially dependent on you or your spouse (for example you  are their parent or guardian)
										</li>
										<li>
											your parent or guardian
										</li>
										<li>
											relatives that live with you and are on a social security benefit
										</li>
										<li>
											someone you look after as their primary caregiver.
										</li>
									</ul>
								</li>
							</ul>
						</Text>
						<Text>
							A useful resource for learner drivers sitting for their Restricted Licences is a website
							put together by NZTA – www.practice.co.nz. This is aimed specifically at learner drivers
							and explains the Restricted Licence test process in detail.
						</Text>
						<Text>
							For more information, or to make a booking, please contact us now by phoning Pravin (PK) on
							{' '}
							<strong>021-1066-077</strong>
							{' '}
							or
							emailing us at
							{' '}
							<a href="mailto:bookings@bigl.co.nz?Subject=Big%20L%20booking%20enquiry">
								bookings@bigl.co.nz
							</a>
							.
						</Text>
					</Column>
				</Row>
			</Page>
		);
	}
}
