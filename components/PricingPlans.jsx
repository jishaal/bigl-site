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
		name: '1 hour lesson',
		color: colorSecondary,
		price: '$60',
		items: [
			'A full 1 hour of driving',
			'Tailored to the driver\'s individual needs',
			'Includes take-home lesson notes',
			'Add $5 per hour using driving school vehicle',
		],
	},
	{
		name: 'Package Deal 6 x 1 hour driving lessons',
		color: colorTertiary,
		price: '$345',
		items: [
			'Tailored to the driver\'s individual needs',
			'Includes take-home lesson notes',
			'Add $5 per hour using driving school vehicle',
		],
	},
	{
		name: 'Package Deal 10 x 1 hour driving lessons',
		color: colorYellow,
		price: '$550',
		items: [
			'Tailored to the driver\'s individual needs',
			'Includes take-home lesson notes',
			'Add $5 per hour using driving school vehicle',
		],
	},
	{
		name: '1 hour mock test',
		color: colorSecondary,
		price: '$65',
		items: [
			'A full 1 hour of driving',
			'Restricted/full-licence mock test',
			'Add $5 per hour using driving school vehicle',
		],
	},
	{
		name: 'Vehicle hire for licence test',
		color: colorTertiary,
		price: '$75 per hour',
		items: [
			'Add $40 for 1 hour pre-test drive if required',
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
