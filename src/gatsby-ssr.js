// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

export const onRenderBody = (
	{ setPostBodyComponents, setHeadComponents },
	options
) => {
	const { position } = options;
	// eslint-disable-next-line no-param-reassign
	delete options.position;

	const args = [];
	Object.keys(options).forEach(key => {
		if (key !== 'plugins') {
			const opt = Array.isArray(options[key])
				? options[key].join(',')
				: options[key];
			args.push(`${key}=${opt}`);
		}
	});

	const parameters = args.length > 0 ? `?${args.join('&')}` : '';
	const fn = position === 'body' ? setPostBodyComponents : setHeadComponents;

	fn([
		<script
			key="polyfill-io"
			src={`https://cdn.polyfill.io/v3/polyfill.min.js${parameters}`}
		/>,
	]);
};
