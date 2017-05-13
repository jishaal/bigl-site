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
							We off a variety of services and plans to get you ready for your driving exam.
						</Message>
					</Column>
					<Column xs={2} md={1}>
						<h2>Tenderloin bresaola</h2>
						<p>
							Tongue chuck tenderloin bresaola, flank chicken meatball spare ribs biltong. Frankfurter
							sausage burgdoggen brisket venison spare ribs.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h2>Kevin ground </h2>
						<p>
							Pastrami spare ribs salami, venison porchetta shankle pork loin kielbasa jowl picanha bresaola
							kevin ground round brisket.
						</p>
					</Column>
				</Row>

				<Row divisions={2}>
					<Column xs={2} md={1}>
						<h2>Shankle</h2>
						<p>
							Bresaola kielbasa fatback pork belly shoulder, turducken picanha short loin pork loin pig
							pastrami frankfurter beef ribs shankle leberkas. Picanha drumstick biltong rump pancetta
							salami.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h2>Venison filet</h2>
						<p>
							Pork chop alcatra filet mignon picanha, hamburger t-bone ball tip turducken short loin.
							Andouille doner venison chicken tenderloin brisket turkey, rump pig t-bone burgdoggen leberkas
							salami short ribs spare ribs.
						</p>
					</Column>
				</Row>

				<Row divisions={2}>
					<Column xs={2} md={1}>
						<h2>Section Title</h2>
						<p>
							Tongue chuck tenderloin bresaola, flank chicken meatball spare ribs biltong. Frankfurter
							sausage burgdoggen brisket venison spare ribs.
						</p>
					</Column>
					<Column xs={2} md={1}>
						<h2>Section Title</h2>
						<p>
							Pastrami spare ribs salami, venison porchetta shankle pork loin kielbasa jowl picanha bresaola
							kevin ground round brisket.
						</p>
					</Column>
				</Row>

				<PricingPlans />
			</Page>
		);
	}
}
