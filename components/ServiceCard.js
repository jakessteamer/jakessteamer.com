export default function ServiceCard(props) {
  const { imgSrc, title, desc, href, alt, tags } = props;

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
      <div className="relative aspect-w-1 aspect-h-1">
        <img
          src={imgSrc}
          alt={alt}
          className="absolute inset-0 w-full object-cover object-center rounded-lg shadow-md"
        />
      </div>

      <div className=" relative px-4 -mt-16  ">
        <div className="theme-surface-inverse p-6 rounded-lg shadow-lg">
          {/* {tags
            ? tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block mx-1 px-2 py-1 leading-none bg-cyan text-gray-700 rounded-full font-semibold  tracking-wide text-xs">
                  {tag}
                </span>
              ))
            : ""} */}
          <a href={href}>
            <h2 className="mt-1 prose-xl font-bold  theme-blue">{title}</h2>
          </a>

          <p className="mt-1 prose text-white dark:text-blue-900">{desc}</p>
          <div className="c-card__btn mt-4 flex items-center text-base font-medium leading-6">
            <a
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              href={href}>
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
