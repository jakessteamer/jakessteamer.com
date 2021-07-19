import React from "react";

export default function References(props) {
  const { sources } = props;
  return (
    <section className="section-general-content-references container flex flex-wrap ">
      <ul
        className="nav-tabs nav flex cursor-pointer  border-solid border-blue-900 border-b-4"
        id="myTab"
        role="tablist">
        <li className="nav-item py-2 px-6 bg-blue-500 text-white-accent rounded-t-lg">
          <span
            className="nav-link references-tab"
            id="reference-tab"
            role="tab"
            aria-controls="references"
            aria-selected="true">
            References
          </span>
        </li>
      </ul>
      <div className="tab-content mt-5" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="references"
          role="tabpanel"
          aria-labelledby="references-tab">
          <ol className="references-list">
            {sources.map((source) => (
              <li className="references-list-item">
                <p>{source}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
