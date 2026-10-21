import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images, alt, className = "" }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  function prev(e) {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next(e) {
    e.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={images[index]}
        alt={alt}
        className="h-full w-full object-cover transition-opacity duration-300"
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-bg/70 p-1.5 text-text opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-bg/70 p-1.5 text-text opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-violet" : "bg-text-muted/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
