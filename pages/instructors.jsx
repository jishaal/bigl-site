import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import { Message, StyledLink, Text } from '../components/styled/';

export default class Instructors extends React.Component {
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
						<Message>About Big L Driving School</Message>
					</Column>
				</Row>
				<Row>
					<Column>
						<Text fontSize="18px">
							My name is
							{' '}
							<b>Pravin Kalyan</b>
							{' '}
							also known as PK and I hold dual qualification of Driving
							Instructor and Driver Testing Officer.
						</Text>
						<Text fontSize="18px">
							In my previous role of Driver Testing Officer, I have carried out thousands of restricted and
							full driving test and have seen varying driving standards. Each time I witnessed poor performance
							by the drivers, I wished I could help to improve their driving standards but my role as
							Driver Testing Officer prevented me from helping apart from debriefing after the driving test
							with recommendation for improving their driving standards.
						</Text>

						<Text>
							To help lift the standard of driving and produce drivers with safe driving skills, I stepped
							down from the Driving Testing Role and take up Driver Instructing Role.
						</Text>

						<Text>
							I personally have 37 years of driving experience and all my working career has been in customer service role.

						</Text>

						<Text>
							I have conducted a number of training session in delivering excellent customer services
							whilst employed in banking industry and bring all my experiences to driver instructing.
						</Text>

					</Column>
				</Row>
			</Page>
		);
	}
}
