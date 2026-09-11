import React from "react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-container-low px-gutter py-section-padding text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="font-stats-num text-8xl font-extrabold text-primary-container">
          404
        </div>
        <h1 className="font-headline-lg text-2xl font-bold text-deep-navy">
          Page Not Found
        </h1>
        <p className="font-body-md text-deep-navy/80 leading-relaxed">
          The industrial page or specification document you are looking for could not be located. It may have been moved or updated.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button href="/" variant="primary" icon="home">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
