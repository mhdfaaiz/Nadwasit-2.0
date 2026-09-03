import {
  BRAND,
  DELIVERY_PARTNERS,
  DISHES,
  PROOF_BAND,
  SERVICES,
  TIMELINE,
} from "./data";
import { CallCta, MenuCta, NadwasitMark, OrderCta, ServiceIcon } from "./chrome";

/** Scroll linked drift, not a timed loop: the band moves because you move. */
export function ProofBand() {
  const row = [...PROOF_BAND, ...PROOF_BAND];
  return (
    <div aria-hidden="true" className="nw-proof">
      <div className="nw-proof__track">
        {row.map((item, index) => (
          <span className="nw-proof__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Story() {
  return (
    <section className="nw-section" id="story">
      <div className="nw-shell">
        <div className="nw-story__grid">
          <div>
            <h2 className="nw-display nw-h2">One kitchen in Sharjah, then nine more</h2>
            <p className="nw-lede" style={{ marginTop: "1.5rem" }}>
              Nadwasit opened in 1989 on a simple promise: fresh ingredients and
              genuine hospitality. Thirty six years later that promise has not moved.
            </p>
            <blockquote className="nw-story__quote">
              Our charcoal chicken, cooked to a recipe we have never handed out, is
              what people cross town for.
              <cite>From the Nadwasit kitchen</cite>
            </blockquote>
            <div className="nw-figures">
              <div className="nw-figures__item">
                <span className="nw-figures__value">{BRAND.years}</span>
                <span className="nw-figures__label">Years on the grill</span>
              </div>
              <div className="nw-figures__item">
                <span className="nw-figures__value">{BRAND.branchCount}</span>
                <span className="nw-figures__label">Branches</span>
              </div>
              <div className="nw-figures__item">
                <span className="nw-figures__value">{BRAND.emirateCount}</span>
                <span className="nw-figures__label">Emirates</span>
              </div>
            </div>
          </div>

          <figure className="nw-story__plate">
            <img
              alt="The Nad Wasit branch in Al Zahra, Ajman, lit up at night"
              loading="lazy"
              src="/assets/img/branch-zahra.jpg"
            />
            <figcaption className="nw-story__stamp">EST. {BRAND.founded}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Signatures() {
  return (
    <section className="nw-section nw-section--tint" id="signatures">
      <div className="nw-shell">
        <h2 className="nw-display nw-h2">The charcoal range</h2>
        <p className="nw-lede" style={{ marginTop: "1.25rem" }}>
          Same bird, same fire, four finishes. Every branch cooks all of them to
          order.
        </p>

        <div className="nw-mosaic">
          {DISHES.map((dish, index) => (
            <article
              className={index === 0 ? "nw-dish nw-dish--lead" : "nw-dish"}
              key={dish.id}
            >
              {dish.image ? (
                <div className="nw-dish__photo">
                  <img alt={dish.alt ?? dish.name} loading="lazy" src={dish.image} />
                </div>
              ) : null}
              <div className="nw-dish__inner">
                <span className="nw-dish__arabic" lang="ar">
                  {dish.arabic}
                </span>
                <h3 className="nw-dish__name">{dish.name}</h3>
                <p className="nw-dish__note">{dish.note}</p>
                {index === 0 ? (
                  <div className="nw-dish__cta">
                    <MenuCta />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="nw-section" id="services">
      <div className="nw-shell">
        <h2 className="nw-display nw-h2">More than a meal</h2>
        <p className="nw-lede" style={{ marginTop: "1.25rem" }}>
          Catering, standing office orders, outdoor grills and party trays, run by the
          same kitchen that runs the branch.
        </p>

        <div className="nw-services">
          {SERVICES.map((service) => (
            <article className="nw-service" key={service.id}>
              <span className="nw-service__icon">
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="nw-service__title">{service.title}</h3>
              <p className="nw-service__body">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Delivery() {
  return (
    <section className="nw-delivery" id="delivery">
      <div className="nw-shell">
        <div className="nw-delivery__grid">
          <div>
            <p className="nw-eyebrow">Available on</p>
            <h2 className="nw-display nw-h2" style={{ marginTop: "1rem" }}>
              Order it to your door
            </h2>
            <p className="nw-lede" style={{ marginTop: "1.25rem" }}>
              Every branch is listed on the delivery apps. Use whichever one is
              already on your phone.
            </p>
            <ul className="nw-apps">
              {DELIVERY_PARTNERS.map((partner) => (
                <li className="nw-app" key={partner}>
                  {partner}
                </li>
              ))}
            </ul>
          </div>

          {/* Two crops of the same poster: a wide one for desktop and a tall
              one for phones, so neither has to be squeezed into the other's
              shape. */}
          <figure className="nw-delivery__poster">
            <picture>
              <source
                media="(max-width: 47.99rem)"
                srcSet="/assets/img/delivery-poster-mobile.jpg"
              />
              <img
                alt="Nad Wasit poster: full menu delivered, available on Noon, Talabat, Smiles and Keeta"
                loading="lazy"
                src="/assets/img/delivery-poster.jpg"
              />
            </picture>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="nw-section nw-section--tint" id="growth">
      <div className="nw-shell">
        <h2 className="nw-display nw-h2">From one kitchen to ten</h2>
        <div className="nw-rail">
          {TIMELINE.map((step) => (
            <article className="nw-rail__step" key={step.year}>
              <span className="nw-rail__year">{step.year}</span>
              <h3 className="nw-rail__title">{step.title}</h3>
              <p className="nw-rail__body">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Order() {
  return (
    <section className="nw-order" id="order">
      <div className="nw-shell">
        <div className="nw-order__grid">
          <div>
            <p className="nw-eyebrow">Order and contact</p>
            <h2 className="nw-display nw-h2" style={{ marginTop: "1rem" }}>
              The grill is still on
            </h2>
            <p className="nw-lede" style={{ marginTop: "1.25rem" }}>
              Message us for a table, a delivery, or a full catering quote. Dubai and
              Al Zahra never close.
            </p>
            <div className="nw-order__actions">
              <OrderCta />
              <CallCta href={BRAND.phoneHref}>{BRAND.phone}</CallCta>
            </div>
          </div>

          <div className="nw-order__panel">
            <figure className="nw-order__photo">
              <img
                alt="The Nad Wasit head office and typing centre in Yarmook, Sharjah"
                loading="lazy"
                src="/assets/img/head-office.jpg"
              />
            </figure>
            <div className="nw-order__cell">
              <span className="nw-order__label">Head office</span>
              <span className="nw-order__value">
                <a href={BRAND.mapUrl} rel="noreferrer noopener" target="_blank">
                  {BRAND.address}
                </a>
              </span>
            </div>
            <div className="nw-order__cell">
              <span className="nw-order__label">Email</span>
              <span className="nw-order__value">
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </span>
            </div>
            <div className="nw-order__cell">
              <span className="nw-order__label">Opening hours</span>
              <span className="nw-order__value">
                Dubai and Al Zahra, Ajman: open 24 hours.
                <br />
                Every other branch: 6 AM to 3 AM.
              </span>
            </div>
            <div className="nw-order__cell">
              <span className="nw-order__label">Also on</span>
              <ul className="nw-partners">
                {DELIVERY_PARTNERS.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="nw-footer">
      <div className="nw-shell">
        <div className="nw-footer__top">
          <div>
            <a className="nw-brand" href="#since">
              <NadwasitMark className="nw-brand__mark nw-brand__mark--lg" />
            </a>
            <p className="nw-footer__claim">
              Taste the essence of freshness in every dish, prepared with passion and
              served with love since {BRAND.founded}.
            </p>
          </div>

          <div className="nw-footer__col">
            <h3>Visit</h3>
            <ul className="nw-footer__list">
              <li>
                <a href="#story">Our story</a>
              </li>
              <li>
                <a href="#signatures">Menu</a>
              </li>
              <li>
                <a href="#services">Catering</a>
              </li>
              <li>
                <a href="#branches">Branches</a>
              </li>
            </ul>
          </div>

          <div className="nw-footer__col">
            <h3>Reach us</h3>
            <ul className="nw-footer__list">
              <li>
                <a href={BRAND.phoneHref}>{BRAND.phone}</a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li>
                <a href={BRAND.instagram} rel="noreferrer noopener" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={BRAND.whatsappChannel}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  WhatsApp channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nw-footer__bottom">
          <span>
            {"©"} {new Date().getFullYear()} {BRAND.name} Group of Restaurants
          </span>
          <span>Sharjah, Dubai, Ajman</span>
        </div>
      </div>
    </footer>
  );
}
