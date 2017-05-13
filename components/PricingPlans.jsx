import React from 'react';

import { colorYellow, colorSecondary, colorTertiary } from './styled/constants';
import { Row, Column } from 'hedron';

import {
	PricingPlan,
	PlanHeader,
	PlanContent,
	PlanPrice,
	PlanContentRow,
} from '../components/styled/';

const PLANS = [
	{
		name: '1 hr lesson',
		color: colorSecondary,
		price: '$70',
		items: [
			'A full 1 hour of driving',
			'Tailored to the driver\'s individual needs',
			'Includes take-home lesson notes',
		],
	},
	{
		name: '1 hr driving assessment',
		color: colorYellow,
		price: '$75',
		items: [
			'A full 1 hour of driving',
			'Restricted licence test available',
			'Full licence test available',
		],
	},
	{
		name: 'Vehicle hire for licence test',
		color: colorTertiary,
		price: '$80',
		items: [
			'1 hour driving',
			'Using the driving school car',
			'Something else',
			'Something positive',
		],
	},
];

const PricingPlans = () => (
	<Row divisions={9}>
		{PLANS.map((plan, i) => (
			<Column xs={9} md={3} key={i}>
				<PricingPlan bgColor={plan.color}>
					<PlanHeader bgColor={plan.color}>
						{plan.name}
					</PlanHeader>
					<PlanPrice bgColor={plan.color}> {plan.price} </PlanPrice>
					<PlanContent>
						{plan.items.map((item, i) => (
							<PlanContentRow key={i}>
								{item}
							</PlanContentRow>
						))}
					</PlanContent>
				</PricingPlan>
			</Column>
		))}
	</Row>
);

export default PricingPlans;
