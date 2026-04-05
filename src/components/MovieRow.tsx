import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import type { MovieSubject } from "@/lib/api";

interface MovieRowProps {
  title: string;
  subtitle?: string;
  movies: MovieSubject[];
  accentColor?: "cyan" | "magenta";
}

const MovieRow = ({ title, subtitle, movies, accentColor = "cyan" }: MovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const amount = 400;
    rowRef.current.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  const accentClass = accentColor === "cyan" ? "text-neon-cyan glow-text-cyan border-neon-cyan" : "text-neon-magenta glow-text-magenta border-neon-magenta";

  if (!movies || movies.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className={`font-display text-lg font-bold tracking-widest ${accentClass}`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-muted-foreground font-body mt-0.5">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll("left")}
            className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-auto hide-scrollbar pb-2"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.subjectId} movie={movie} size="md" />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
