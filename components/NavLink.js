/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

const NavLink = ({ href, ...rest }) => {
    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...rest} />
            </Link>
        );
    }

    if (isAnchorLink) {
        return <a href={href} {...rest} />;
    }

    return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default NavLink;
