import { ArrowUpRight } from "lucide-react";
import { catalog, type Kit } from "../content";
import { availabilityLabel, kitAction, photoStyle } from "../utils/commerce";
import { Reveal } from "./Reveal";
import { KitPrice } from "./KitPrice";

export function KitCollection({
  kits,
  onSelect,
}: {
  kits: Kit[];
  onSelect: (kit: Kit) => void;
}) {
  if (!kits.length)
    return (
      <p className="catalog-empty" role="status">
        Nossos kits estão sendo preparados. Volte em breve para conhecer a
        coleção.
      </p>
    );
  const groups = Array.from({ length: Math.ceil(kits.length / 3) }, (_, i) =>
    kits.slice(i * 3, i * 3 + 3),
  );
  return (
    <div className="kit-collection">
      {groups.map((group, groupIndex) => (
        <div className={`kit-grid kit-grid--${group.length}`} key={group[0].id}>
          {group.map((kit, index) => {
            const number = String(groupIndex * 3 + index + 1).padStart(2, "0");
            const layout =
              index === 2
                ? "kit-featured"
                : index === 1
                  ? "kit-secondary"
                  : "kit-primary";
            return (
              <Reveal
                key={kit.id}
                delay={index * 0.1}
                className={`kit-card ${kit.color} ${layout}`}
              >
                <div className="kit-image-wrap">
                  {kit.label && <span className="kit-tag">{kit.label}</span>}
                  <span className="kit-index" aria-hidden="true">
                    {number}
                  </span>
                  <img
                    src={kit.image}
                    alt={kit.imageAlt}
                    className={
                      kit.imageMode === "photo" ? "product-photo" : undefined
                    }
                    style={photoStyle(kit)}
                    decoding="async"
                    width="900"
                    height="900"
                    loading="lazy"
                  />
                </div>
                <div className="kit-info">
                  <span className="kit-mood">{kit.mood}</span>
                  <h3>
                    {kit.name}
                    <span>{number}</span>
                  </h3>
                  <p>{kit.description}</p>
                  <KitPrice kit={kit} />
                  {(!catalog.demoMode || kit.availability !== "on-request") && (
                    <span className={`kit-availability ${kit.availability}`}>
                      {availabilityLabel(kit)}
                    </span>
                  )}
                  <button
                    className="kit-button"
                    onClick={() => onSelect(kit)}
                    aria-label={`${kitAction(kit)}: ${kit.name}`}
                  >
                    {kitAction(kit)} <ArrowUpRight size={19} />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      ))}
    </div>
  );
}
