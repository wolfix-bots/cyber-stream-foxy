import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Flame, Loader2, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";
import type { MovieSubject } from "@/lib/api";

const Index = () => {
  const { data: hotData, isLoading: hotLoading, error: hotError } = useQuery({
    queryKey: ["hot"],
    queryFn: api.getHot,
  });

  const { data: trendingData, isLoading: trendingLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: () => api.getTrending(0, 18),
  });

  const hotMovies: MovieSubject[] = hotData?.data?.movie || [];
  const hotTV: MovieSubject[] = hotData?.data?.tv || [];
  const trending: MovieSubject[] = trendingData?.data?.subjectList || [];

  const heroMovies = [...hotMovies.slice(0, 4), ...trending.slice(0, 2)].filter(
    (m) => m.stills?.url || m.cover?.url
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      {hotLoading ? (
        <div className="flex items-center justify-center h-96">
          <div className="text-center space-y-4">
            <Loader2 className="w-10 h-10 text-neon-cyan animate-spin mx-auto" />
            <p className="font-display text-sm text-muted-foreground tracking-widest animate-pulse">
              LOADING STREAMS...
            </p>
          </div>
        </div>
      ) : hotError ? (
        <div className="flex items-center justify-center h-48">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="w-5 h-5" />
            <span className="font-display text-sm">Failed to load content</span>
          </div>
        </div>
      ) : (
        <HeroSection movies={heroMovies} />
      )}

      {/* Content rows */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {/* Hot Movies */}
        {hotMovies.length > 0 && (
          <MovieRow
            title="🔥 HOT MOVIES"
            subtitle="Currently trending worldwide"
            movies={hotMovies}
            accentColor="cyan"
          />
        )}

        {/* Hot TV */}
        {hotTV.length > 0 && (
          <MovieRow
            title="📺 HOT SERIES"
            subtitle="Binge-worthy shows right now"
            movies={hotTV}
            accentColor="magenta"
          />
        )}

        {/* Trending */}
        {trending.length > 0 && (
          <MovieRow
            title="⚡ TRENDING"
            subtitle="Most watched this week"
            movies={trending}
            accentColor="cyan"
          />
        )}

        {/* Footer attribution */}
        <footer className="border-t border-border pt-8 pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display text-xs text-muted-foreground tracking-widest">
              © 2025 FOXYSTREAM
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-display text-muted-foreground">POWERED BY</span>
              <span className="px-2 py-1 text-xs font-display border border-neon-cyan/30 text-neon-cyan rounded-sm tracking-wider">
                FOXY TECH
              </span>
              <span className="px-2 py-1 text-xs font-display border border-neon-magenta/30 text-neon-magenta rounded-sm tracking-wider">
                CASPER TECH KENYA
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
