import ReactGA from 'react-ga';
ReactGA.initialize('UA-42097851-4');

exports.onRouteUpdate = (location) => {
	if (location.hash) {
		setTimeout(() => {
			document.querySelector(`${location.hash}`).scrollIntoView();
		}, 0);
	}

	const { pathname } = location;
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
};
