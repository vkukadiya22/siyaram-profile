"use client";

import React, { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console
    console.error("App error encountered:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-container-low px-gutter py-12 md:py-section-padding text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-error-container/20 text-error flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-4xl">warning</span>
        </div>
        <h1 className="font-headline-lg text-2xl font-bold text-deep-navy">
          Something Went Wrong
        </h1>
        <p className="font-body-md text-deep-navy/80 leading-relaxed">
          An unexpected error occurred while loading this page. Please try refreshing or click below to retry.
        </p>
        <div className="pt-4 flex justify-center gap-4 flex-wrap">
          <Button onClick={() => reset()} variant="primary" icon="refresh">
            Try Again
          </Button>
          <Button href="/" variant="outline" icon="home">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
