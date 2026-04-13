'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function HeroSpline() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--color-accent-cyan)"
      />

      {/* Spline 3D robot — covers entire hero so mouse tracking works everywhere */}
      <div className="absolute inset-0">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Left fade — blends robot into the text area */}
      <div
        className="absolute inset-y-0 left-0 w-[60%] pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to right, var(--color-bg-primary) 30%, transparent 100%)',
        }}
      />

      {/* Bottom fade — blends robot into sections below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, var(--color-bg-primary), transparent)',
        }}
      />

      {/* Top fade — blends behind navbar */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-primary) 10%, transparent)',
        }}
      />
    </div>
  )
}
