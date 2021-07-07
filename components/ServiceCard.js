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
          {tags
            ? tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block mx-1 px-2 py-1 leading-none bg-cyan text-blue-900 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {tag}
                </span>
              ))
            : ""}
          <a href={href}>
            <h2 className="mt-1 text-xl font-semibold uppercase leading-tight text-blue-500">
              {title}
            </h2>
          </a>

          <p className="mt-1 theme-text-inverse">{desc}</p>
          <div className="c-card__btn mt-4 flex items-center">
            <a
              className="w-full sm:w-auto px-5 py-2  mb-4  text-sm     font-medium  focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-900 focus:outline-none transition-colors duration-200 rounded-full block  bg-blue-500 text-white-accent "
              href={href}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
