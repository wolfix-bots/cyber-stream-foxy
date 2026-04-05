import { Link } from "react-router-dom";
import { Play, Star, Clock, Tv } from "lucide-react";
import type { MovieSubject } from "@/lib/api";
import { formatDuration } from "@/lib/api";

interface MovieCardProps {
  movie: MovieSubject;
  size?: "sm" | "md" | "lg";
}

const MovieCard = ({ movie, size = "md" }: MovieCardProps) => {
  const isTV = movie.subjectType === 2;

  const sizeClasses = {
    sm: "w-36 md:w-44",
    md: "w-40 md:w-52",
    lg: "w-48 md:w-64",
  };

  const imgHeightClasses = {
    sm: "h-52 md:h-64",
    md: "h-56 md:h-72",
    lg: "h-64 md:h-88",
  };

  return (
    <Link
      to={`/movie/${movie.subjectId}`}
      className={`${sizeClasses[size]} flex-shrink-0 group cursor-pointer`}
    >
      <div className="relative overflow-hidden rounded-sm cyber-border transition-all duration-300 group-hover:border-neon-cyan group-hover:shadow-neon-cyan">
        {/* Poster */}
        <div className={`${imgHeightClasses[size]} relative overflow-hidden bg-dark-surface`}>
          {movie.cover?.url ? (
            <img
              src={movie.cover.url}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-dark-elevated">
              <Tv className="w-10 h-10 text-muted-foreground" />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center glow-cyan">
              <Play className="w-5 h-5 text-neon-cyan fill-current ml-0.5" />
            </div>
          </div>

          {/* Top badges */}
          <div className="absolute top-2 left-2 flex gap-1">
            {isTV && (
              <span className="px-1.5 py-0.5 text-xs font-display bg-accent/80 text-accent-foreground rounded-sm">
                TV
              </span>
            )}
            {movie.corner && (
              <span className="px-1.5 py-0.5 text-xs font-display bg-primary/80 text-primary-foreground rounded-sm">
                {movie.corner}
              </span>
            )}
          </div>

          {/* Rating badge */}
          {movie.imdbRatingValue && parseFloat(movie.imdbRatingValue) > 0 && (
            <div className="absolute top-2 right-2 flex items-center gap-0.5 px-1.5 py-0.5 bg-background/80 rounded-sm">
              <Star className="w-3 h-3 text-neon-yellow fill-current" />
              <span className="text-xs font-display text-neon-yellow">{movie.imdbRatingValue}</span>
            </div>
          )}

          {/* Scan line effect */}
          <div className="absolute inset-0 bg-gradient-overlay pointer-events-none" />
        </div>

        {/* Info */}
        <div className="p-2 bg-dark-surface">
          <h3 className="text-sm font-body font-semibold text-foreground truncate group-hover:text-neon-cyan transition-colors">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            {movie.releaseDate && (
              <span className="text-xs text-muted-foreground">
                {new Date(movie.releaseDate).getFullYear()}
              </span>
            )}
            {movie.duration > 0 && (
              <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                <Clock className="w-2.5 h-2.5" />
                {formatDuration(movie.duration)}
              </span>
            )}
          </div>
          {movie.genre && (
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              {movie.genre.split(",")[0]}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
