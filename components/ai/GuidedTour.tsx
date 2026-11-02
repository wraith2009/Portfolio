"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TOUR_STEPS } from "@/lib/ai/knowledge";

interface GuidedTourProps {
  onComplete?: () => void;
}

export default function GuidedTour({ onComplete }: GuidedTourProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const step = TOUR_STEPS[currentStep];

  useEffect(() => {
    if (!isActive || !step) return;

    const element = document.querySelector(step.targetSelector);
    if (element) {
      const rect = element.getBoundingClientRect();
      setTargetRect(rect);

      // Smooth scroll to element
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isActive, currentStep, step]);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsActive(false);
      setCurrentStep(0);
      onComplete?.();
    }
  };

  const handleSkip = () => {
    setIsActive(false);
    setCurrentStep(0);
    onComplete?.();
  };

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const getTooltipPosition = () => {
    if (!targetRect || !step) return {};

    const padding = 20;

    if (step.position === "bottom") {
      return {
        top: targetRect.bottom + padding,
        left: Math.max(20, Math.min(targetRect.left, window.innerWidth - 340)),
      };
    }

    // Default to top
    return {
      top: targetRect.top - 160,
      left: Math.max(20, Math.min(targetRect.left, window.innerWidth - 340)),
    };
  };

  if (!isActive) {
    return (
      <motion.button
        onClick={startTour}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-24 right-24 z-40 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg shadow-green-500/25 hover:scale-105 transition-transform flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Take a Tour
      </motion.button>
    );
  }

  const tooltipPosition = getTooltipPosition();

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[100]"
            onClick={handleSkip}
          />

          {/* Spotlight */}
          {targetRect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed z-[101] border-2 border-white/50 rounded-lg pointer-events-none"
              style={{
                top: targetRect.top - 8,
                left: targetRect.left - 8,
                width: targetRect.width + 16,
                height: targetRect.height + 16,
                boxShadow: "0 0 0 9999px rgba(0,0,0,0.7)",
              }}
            />
          )}

          {/* Tooltip */}
          {targetRect && step && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed z-[102] w-80 bg-white rounded-xl shadow-2xl overflow-hidden"
              style={tooltipPosition}
            >
              {/* Progress bar */}
              <div className="h-1 bg-gray-100">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / TOUR_STEPS.length) * 100}%` }}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <span className="text-xs text-gray-400">
                    {currentStep + 1} / {TOUR_STEPS.length}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{step.content}</p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleSkip}
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Skip tour
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {currentStep < TOUR_STEPS.length - 1 ? "Next" : "Finish"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
