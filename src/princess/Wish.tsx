import { motion } from 'motion/react'

import { confetti } from './Backdrop'
import { NAME } from './config'
import { Crown, Flourish, Heart } from './ui'

// Change the message here (each line is one paragraph). The name lives in config.ts.
const MESSAGE = [
  'Today is yours, and not just because the calendar says so.',
  'You make ordinary days softer, brighter and a little more magical just by being in them. I hope today gives all of that back to you.',
  'May it bring you warm laughs, kind surprises and every quiet wish you have been holding on to.',
  'I made something small for you. Take your time with it.',
]

const EASE = [0.22, 1, 0.36, 1] as const
const FIRST = 1.2
const STEP = 0.75

const ORNAMENTS = [
  { left: '8%', top: '14%' },
  { left: '88%', top: '9%' },
  { left: '10%', top: '80%' },
  { left: '86%', top: '74%' },
]

const SPARKLES = [
  { left: '22%', top: '8%', delay: '0s' },
  { left: '76%', top: '22%', delay: '1.2s' },
  { left: '14%', top: '46%', delay: '2.1s' },
  { left: '90%', top: '52%', delay: '0.7s' },
  { left: '30%', top: '90%', delay: '1.8s' },
  { left: '68%', top: '92%', delay: '2.6s' },
]

export function Wish({ onContinue }: { onContinue: () => void }) {
  const buttonDelay = FIRST + MESSAGE.length * STEP + 0.4

  return (
    <motion.section
      aria-label={`A wish for ${NAME}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-[radial-gradient(circle_at_20%_0%,#ffe6f0,transparent_55%),radial-gradient(circle_at_85%_15%,#ffeef5,transparent_50%),linear-gradient(180deg,#fff7fb,#ffe9f2)] px-5 py-10"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-petal/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-white/80 blur-3xl" />
      {ORNAMENTS.map((spot, i) => (
        <span key={i} aria-hidden="true" className="animate-float pointer-events-none absolute size-9 text-rose/25" style={spot}>
          {i % 2 === 0 ? <Crown className="size-full" /> : <Heart className="size-full" />}
        </span>
      ))}
      {SPARKLES.map((spark, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="animate-twinkle pointer-events-none absolute text-sm text-champagne"
          style={{ left: spark.left, top: spark.top, animationDelay: spark.delay }}
        >
          ✦
        </span>
      ))}

      <div className="relative w-full max-w-xl text-center">
        <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: EASE }}>
          <Crown className="animate-float mx-auto size-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-5 text-[0.62rem] font-medium tracking-[0.42em] text-rose uppercase"
        >
          18 november · princess day
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: EASE }}
          className="script foil mt-3 pb-2 text-[clamp(3.6rem,16vw,6.4rem)] leading-none"
        >
          {NAME}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="font-serif text-xl text-rose-deep italic"
        >
          happy princess day
        </motion.p>

        <Flourish className="mt-5" />

        <div className="mt-6 space-y-4 font-serif text-[1.12rem] leading-relaxed text-ink/90 sm:text-[1.22rem]">
          {MESSAGE.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: FIRST + i * STEP, duration: 0.9, ease: EASE }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: buttonDelay, duration: 0.8, ease: EASE }}
          className="mt-9"
        >
          <button
            type="button"
            onClick={() => {
              confetti(0.5, 0.78, 120, 1.1)
              window.setTimeout(onContinue, 450)
            }}
            className="rounded-full bg-gradient-to-r from-rose to-rose-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-petal transition hover:brightness-105 active:scale-95"
          >
            Open your surprise ✦
          </button>
          <p className="mt-4 text-[0.6rem] tracking-[0.26em] text-muted/70 uppercase">there is a little lock ahead</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
