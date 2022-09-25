/* eslint-disable react/no-unescaped-entities */
import { useTheme } from "next-themes";

export default function Fab() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="fabWrap md:hidden">
      <div className="fabIconArrow" aria-hidden="true">
        {resolvedTheme === "dark" ? (
          <svg
            className="theme-text fab-arrow--filter-dark bounce-animation"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="2"
            viewBox="0 0 448 512"
            height="32px"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
          </svg>
        ) : (
          <svg
            className="theme-text fab-arrow--filter-light bounce-animation"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="32px"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
          </svg>
        )}
        {/* <svg
          className="theme-text bounce-animation"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="32px"
          width="32px"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
        </svg> */}
      </div>
      <a
        href="tel:+14328474600"
        className="p-0 w-12 h-12 bg-c rounded-full hover:bg-blue-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        {/* <svg
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
          className="w-6 h-6 inline-block"
        >
          <path
            fill="#FFFFFF"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
          />
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto text-white mt-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      </a>
      {/* <a href="tel:+14328474600" id="fabIcon" className="bg-blue-400">
        
        <span>Call Jake's Steamer</span>
      </a> */}
    </div>
  );
}
