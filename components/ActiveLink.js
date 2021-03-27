/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
    >
      Services
    </a>
  );
}

export default ActiveLink;
