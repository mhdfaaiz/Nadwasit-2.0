import { useState } from "react";

import { BRANCHES, EMIRATES, type Emirate } from "./data";

type Filter = Emirate | "All";

const FILTERS: Filter[] = ["All", ...EMIRATES];

/**
 * The branch index. Filtering happens client side over a list that is fully
 * server rendered first, so every branch is in the HTML and in a headless
 * screenshot even before hydration.
 */
export function Branches() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown =
    filter === "All" ? BRANCHES : BRANCHES.filter((b) => b.emirate === filter);

  return (
    <section className="nw-section" id="branches">
      <div className="nw-shell">
        <div className="nw-branches__head">
          <div>
            <p className="nw-eyebrow">Ten branches, three emirates</p>
            <h2 className="nw-display nw-h2" style={{ marginTop: "1rem" }}>
              Where to find us
            </h2>
          </div>

          <div className="nw-filter" role="group" aria-label="Filter branches by emirate">
            {FILTERS.map((option) => (
              <button
                aria-pressed={filter === option}
                className="nw-filter__btn"
                key={option}
                onClick={() => setFilter(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <ul className="nw-branchlist">
          {shown.map((branch) => (
            <li key={branch.id}>
              <a className="nw-branch" href={branch.phoneHref}>
                <h3 className="nw-branch__name">{branch.name}</h3>
                <p className="nw-branch__where">
                  {branch.area}, {branch.emirate}
                  {branch.head ? <span className="nw-branch__tag">Head office</span> : null}
                </p>
                <span className="nw-branch__side">
                  <span className="nw-branch__phone">{branch.phone}</span>
                  <span className="nw-branch__hours">{branch.hours}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <figure className="nw-branches__plate">
          <img
            alt="The Nad Wasit corner branch in the Industrial Area, Ajman, signage lit at night"
            loading="lazy"
            src="/assets/img/branch-industrial.jpg"
          />
          <figcaption>Industrial Area, Ajman</figcaption>
        </figure>
      </div>
    </section>
  );
}
