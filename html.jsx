import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
	propTypes() {
		return {
			body: React.PropTypes.string,
		};
	},
	render() {
		const head = Helmet.rewind();

		let css;
		if (process.env.NODE_ENV === 'production') {
			const styles = styleSheet
				.rules()
				.map(rule => rule.cssText)
				.join('\n');
			css = <style dangerouslySetInnerHTML={{ __html: styles }} />;
		}

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta name="google-site-verification" content="Kv5eL_vmPl4QSpv7hl1baUuQC_RQQM1cqlLYD0CITqg" />
					{head.title.toComponent()}
					{head.meta.toComponent()}
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css"
						media="all"
						rel="stylesheet"
					/>
					{css}
				</head>
				<body>
					<div
						id="react-mount"
						dangerouslySetInnerHTML={{ __html: this.props.body }}
					/>
					<script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
				</body>
			</html>
		);
	},
});
