import type { Kit } from "../content";
import { getKitPrice } from "../utils/commerce";

export function KitPrice({ kit }: { kit: Kit }) {
  const { current, previous } = getKitPrice(kit);
  if (current === null) return null;
  return (
    <div className="kit-price">
      {previous && (
        <del>
          <span className="sr-only">Preço anterior: </span>
          {previous}
        </del>
      )}
      <span>
        <span className="sr-only">
          {previous ? "Preço promocional: " : "Preço: "}
        </span>
        {current}
      </span>
    </div>
  );
}
