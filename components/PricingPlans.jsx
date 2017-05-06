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
		name: 'Starter Lesson',
		color: colorSecondary,
		price: '$50',
		items: [
			'1 hour driving',
			'Your own car',
			'Something else',
			'Something positive',
		],
	},
	{
		name: 'Standard Lesson',
		color: colorYellow,
		price: '$50',
		items: [
			'1 hour driving',
			'Your own car',
			'Something else',
			'Something positive',
		],
	},
	{
		name: 'Adavanced Lesson',
		color: colorTertiary,
		price: '$80',
		items: [
			'1 hour driving',
			'Your own car',
			'Something else',
			'Something positive',
		],
	},
];

const PricingPlans = () => (
	<Row debug divisions={9}>
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
