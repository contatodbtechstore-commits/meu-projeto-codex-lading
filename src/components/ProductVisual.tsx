import { Sparkles } from "lucide-react";

export function ProductVisual({ className = "" }: { className?: string }) {
  return (
    <div className={"beauty-stage " + className} role="img" aria-label="Ilustração conceitual de embalagens de cosméticos sem marca; substituir pelas fotos reais">
      <div className="stage-halo" />
      <div className="stage-shelf" />
      <div className="stage-bottle" />
      <div className="stage-tube" />
      <div className="stage-jar" />
      <Sparkles className="stage-star left-[14%] top-[18%]" size={32} aria-hidden="true" />
      <Sparkles className="stage-star right-[12%] top-[31%]" size={22} aria-hidden="true" />
      <span className="stage-caption">Composição ilustrativa · imagens reais pendentes</span>
    </div>
  );
}
