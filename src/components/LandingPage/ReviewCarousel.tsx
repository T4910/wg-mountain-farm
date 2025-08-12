"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Demo reviews (can be sourced from Supabase later)
const reviews = [
  {
    id: 1,
    text: "Since joining New Mountain Farms, my herd has doubled in size and my pasture stays green all year round. Their advice on pasture rotation and animal health has saved me money and reduced my workload.",
    author: "Michayla Williams",
    title: "Founder at Elevate Media",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    text: "Before, goat farming was unpredictable for my family. With their grazing program and veterinary support, our livestock has grown steadily, and my children now enjoy better nutrition from the fresh dairy we produce.",
    author: "Michayla Williams",
    title: "Founder at Elevate Media",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    text: "As a restaurant owner sourcing high-quality beef, we always had a challenge. New Mountain Farms, the animals are healthy, the meat is fresh, and the taste is unmatched. My customers notice the difference.",
    author: "Michayla Williams",
    title: "Founder at Elevate Media",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    text: "The sustainable farming practices have transformed our land. We've seen increased biodiversity and healthier soil, which has led to better crop yields and reduced environmental impact.",
    author: "Sarah Johnson",
    title: "Organic Farm Owner",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    text: "Their consultation services helped us optimize our feed costs by 30% while improving animal health. The ROI has been incredible for our dairy operation.",
    author: "Mike Chen",
    title: "Dairy Farm Manager",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-rating" : "text-muted-foreground"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [items, setItems] = useState(reviews);
  const [index, setIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [translate, setTranslate] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);
  const isAnimatingRef = useRef(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);

  // Measure step (one-card width + gap) responsively
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const firstCard = track.querySelector<HTMLDivElement>("[data-card]");
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const styles = getComputedStyle(track);
      const gapX = parseFloat(styles.columnGap || styles.gap || "0");
      stepRef.current = cardWidth + gapX;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAuto || stepRef.current === 0) return;
    const id = setInterval(() => slideNext(), 4000);
    return () => clearInterval(id);
  }, [isAuto, items]);

  const pauseAndResume = () => {
    setIsAuto(false);
    const timer = setTimeout(() => setIsAuto(true), 10000);
    return () => clearTimeout(timer);
  };

  const slideNext = () => {
    if (isAnimatingRef.current || !trackRef.current) return;
    const track = trackRef.current;
    isAnimatingRef.current = true;
    setTransitionOn(true);
    setTranslate(-stepRef.current);

    const onEnd = (e: TransitionEvent) => {
      // Guard: only handle transform transition on the track itself
      if (e.propertyName !== "transform" || e.target !== track) return;
      track.removeEventListener("transitionend", onEnd);

      // Snap back to 0 without animating, then rotate items
      setTransitionOn(false);
      requestAnimationFrame(() => {
        // Force reflow so the transition-off state is applied before transform change
        void track.offsetHeight;
        setTranslate(0);
        setItems((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setIndex((i) => i + 1);
        // Re-enable transition on the next frame
        requestAnimationFrame(() => {
          setTransitionOn(true);
          isAnimatingRef.current = false;
        });
      });
    };

    track.addEventListener("transitionend", onEnd as unknown as EventListener);
  };

  const slidePrev = () => {
    if (isAnimatingRef.current || !trackRef.current) return;
    isAnimatingRef.current = true;
    // Prepend last item and start from -step, then animate to 0
    setTransitionOn(false);
    setItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
    setTranslate(-stepRef.current);

    // Next frame: animate back to 0
    requestAnimationFrame(() => {
      setTransitionOn(true);
      setTranslate(0);
      const track = trackRef.current!;
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "transform" || e.target !== track) return;
        track.removeEventListener("transitionend", onEnd);
        setIndex((i) => i - 1);
        isAnimatingRef.current = false;
      };
      track.addEventListener(
        "transitionend",
        onEnd as unknown as EventListener
      );
    });
  };

  const progressValue = useMemo(() => {
    const len = items.length;
    const n = ((index % len) + len) % len;
    return ((n + 1) / len) * 100;
  }, [index, items.length]);

  const visible = useMemo(() => items.slice(0, 4), [items]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Left primary panel */}
      <aside className="bg-primary text-primary-foreground rounded-2xl p-8 lg:w-80 flex flex-col justify-between shadow-[var(--shadow-elegant)]">
        <div>
          <Quote className="w-12 h-12 opacity-30 mb-4" />
          <h3 className="text-4xl font-semibold leading-tight">
            What people are saying about us
          </h3>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => {
              pauseAndResume();
              slidePrev();
            }}
            className="rounded-full w-10 h-10 bg-transparent hover:bg-primary-foreground/10"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex-1 max-w-24">
            <Progress
              value={progressValue}
              className="h-2 bg-gray-200"
              style={{
                ["--progress-foreground" as any]: "hsl(var(--accent))",
              }}
            />
          </div>

          <Button
            variant="secondary"
            size="icon"
            onClick={() => {
              pauseAndResume();
              slideNext();
            }}
            className="rounded-full w-10 h-10 bg-transparent hover:bg-primary-foreground/10"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </aside>

      {/* Track */}
      <div className="flex-1 relative overflow-hidden">
        <div
          ref={trackRef}
          className={
            "flex gap-4 items-stretch " +
            (transitionOn ? " transition-transform duration-500 ease-out" : "")
          }
          style={{ transform: `translateX(${translate}px)` }}
        >
          {visible.map((review) => (
            <div
              key={`${review.id}`}
              data-card
              className="flex-shrink-0 basis-2/5"
            >
              <Card className="p-6 min-h-80 flex flex-col justify-between animate-fade-in">
                <p className="text-sm leading-relaxed mb-4 line-clamp-6">
                  “{review.text}”
                </p>
                <div className="space-y-4">
                  <Stars rating={review.rating} />
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{review.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {review.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
