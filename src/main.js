import { throttle, memoize } from 'lodash-es';

// import 'lazysizes';
// import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const nav = document.querySelector('#navbar');

let prevScrollpos = window.pageYOffset;

const hideShowNav = () => {
	console.log('scrolling');
	const currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		nav?.classList.remove('nav-disappear-transition');
		nav?.classList.add('nav-appear-transition');
	} else {
		nav?.classList.remove('nav-appear-transition');
		nav?.classList.add('nav-disappear-transition');
	}
	prevScrollpos = currentScrollPos;
};

const throttleScroll = memoize(throttle(hideShowNav, 300));

window.addEventListener('scroll', throttleScroll, { passive: true });
