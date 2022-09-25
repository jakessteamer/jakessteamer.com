/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable react/button-has-type */
import React from "react";
import Iframe from "react-iframe";

// const defaultLoadingMSG = "Loading...";
// const Loader = ({ message }) => {
//     return (
//         <div className="loader-container">
//             <div className="loader" />
//             <span className="loading-text">{message || "Loading..."}</span>
//         </div>
//     );
// };

export default function Reviews({ isClosed, setClosed }) {
  const [state, setState] = React.useState(null);
  const fetchReviews = async () => {
    try {
      const controller = new AbortController();
      const { signal } = controller;
      const response = await fetch(
        "https://pro.housecallpro.com/alpha/organization/reviews/settings",
        {
          method: "GET",
          headers: { Authorization: `Token e5fb241079164c83aa85e58e9aa1b12b` },
          signal,
        }
      );

      if (!response.ok) {
        // this will be handled by our `catch` block below
        throw new Error(`Request Error: ${response.status}`);
      }
      const responseData = await response.json();
      const { uuid } = responseData;
      setState(uuid);
    } catch (e) {
      setState(e.message);
    }
  };
  React.useEffect(() => {
    const abortController = new AbortController();
    fetchReviews();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <aside
      aria-hidden={isClosed}
      id="reviewsPanel"
      className={`${
        isClosed ? "hidden" : "w-screen"
      } absolute right-0 bg-white flex flex-col z-50`}
    >
      <button
        tabIndex="1"
        className="w-10 ml-auto pr-4"
        aria-label="Close menu"
        title="Close menu"
        onClick={() => setClosed(true)}
      >
        <svg
          className="h-10 w-10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="iframe-container">
        <Iframe
          height="100%"
          width="100%"
          className="mt-8"
          url={`https://client.housecallpro.com/reviews/reviews/${state}/`}
        />
      </div>
    </aside>
  );
}

// This gets called on every request
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch("https://pro.housecallpro.com/alpha/organization/reviews/settings", {
//         method: "GET",
//         headers: { Authorization: `Token e5fb241079164c83aa85e58e9aa1b12b` },
//     });
//     const data = await res.json();
//     // Pass data to the page via props
//     return { props: { data } };
// }
