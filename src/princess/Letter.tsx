import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { confetti } from './Backdrop'
import { NAME } from './config'
import { addAura, Crown, Section } from './ui'

const RULES = [
  'Nothing heavy today. Not bags, not plans, not other people’s moods.',
  'Ask for the thing you want before anyone offers it. Bonus points for asking twice.',
  'Accept one compliment out loud, with eye contact. House rules.',
  'Let yourself be spoiled without keeping score. Nobody is counting, least of all me.',
  'Smile at least once for no reason at all. I will take full credit.',
]

type LetterPart = { heading: string; paragraphs: string[] }

// The long middle of the letter. Each part grew out of a note on the wall.
const LETTER_PARTS: LetterPart[] = [
  {
    heading: 'your eyes',
    paragraphs: [
      'Your eyes are as mesmerizing as they could ever be, and I mean that far more literally than I have ever managed to say out loud. I could get lost in them and never ask for directions. I have tried to look away politely, more than once, and I have failed every single time.',
      'There is a softness in them when you are listening, a spark right before you say something funny, and a quiet kind of tired that I would give anything to take care of. Whatever mood you walk in with, they tell me before you do. And I am always paying attention.',
    ],
  },
  {
    heading: 'your smile, your laugh',
    paragraphs: [
      'The smile on your face always makes my day. Not in a dramatic way. In the most reliable way there is. Whatever kind of morning I am having, one smile from you resets all of it.',
      'And your laugh is my favourite sound in the whole world. I would happily be the worst joke-teller alive if it meant hearing it a little more often. Some days I replay it in my head just to make everything feel slightly more in tune.',
    ],
  },
  {
    heading: 'my whole world',
    paragraphs: [
      `You are my whole world, my princess. I say it lightly sometimes, because that is how I say the biggest things, but I have never meant anything more. ${NAME}, you are the best part of every single day, and I do not say that to be sweet. I say it because it is simply true.`,
      'Even on the dullest days, one thought of you is enough to make me smile. A long queue, a grey afternoon, a task I did not want to do. It does not matter. You walk into my head and the whole day softens.',
    ],
  },
  {
    heading: 'missing you',
    paragraphs: [
      'I cannot stop missing you, and I have stopped pretending that I can. It sits quietly in the background of everything I do, like a song I never turned off.',
      'But I have decided that missing you is just loving you from far away. Distance is only a detail. My heart finds its way to you every single time, even on the days when the rest of me has to wait its turn.',
    ],
  },
  {
    heading: 'songs, screens and small things',
    paragraphs: [
      'Every song I love has started to sound a little like you. I will be halfway through a playlist and suddenly realise that I am not listening to the music at all. I am listening to you in it. That is why there are three songs on this page. I wanted you to have a little of that feeling too.',
      'And your name on my screen is still my favourite notification. Still. After everything. It does not matter what the message says. That small jump in my chest happens before I even read it.',
    ],
  },
  {
    heading: 'how proud I am',
    paragraphs: [
      'I am so proud of you, even on the days you cannot see why. You carry more than you let anyone know, and you keep going anyway, quietly and bravely and with a kindness that never seems to run out.',
      'You do not have to be perfect for me to be proud. You do not even have to be okay. You only have to be you, and you are doing that beautifully.',
    ],
  },
  {
    heading: 'the easiest thing I have ever done',
    paragraphs: [
      'Loving you is the easiest, softest thing I have ever done. It never felt like effort. It feels like coming home to a room where the light is already on.',
      'You make ordinary days feel like something worth remembering. A walk, a voice note, a silly joke at the wrong moment: somehow all of it becomes a memory the moment you are in it. I did not know days could feel like that until you.',
    ],
  },
]

const SMALL_LETTERS = [
  {
    label: 'open when you miss me',
    body: 'Then look at the pictures in this page, pick the worst one, and send it to me with no context. I am probably already reaching for my keys. Distance is a detail, not a fact.',
  },
  {
    label: 'open when it all feels like too much',
    body: 'Put it down. All of it. The world will still be there in an hour and it will not have fallen apart — and even if it had, it would be lucky to have you tired. You do not have to be impressive to be worth keeping. You already are.',
  },
  {
    label: 'open when you forget how loved you are',
    body: 'Remember the room you walked into and how it changed? That was not the lighting. It has always been you. The crown is honestly just a formality at this point.',
  },
]

export function Letter() {
  const [open, setOpen] = useState(false)
  const [opened, setOpened] = useState<Record<number, boolean>>({})

  const breakSeal = () => {
    if (open) {
      setOpen(false)
      return
    }
    setOpen(true)
    confetti(0.5, 0.45, 100)
    addAura(40)
  }

  const openSmall = (index: number) => {
    setOpened((prev) => {
      if (!prev[index]) {
        confetti(0.25 + index * 0.25, 0.6, 45, 0.7)
        addAura(15)
      }
      return { ...prev, [index]: !prev[index] }
    })
  }

  return (
    <Section
      id="letter"
      eyebrow="sealed with wax, obviously"
      title="A letter for"
      accent={NAME}
      intro="One long letter, and three small ones for the days that need them. Go on, break the seal."
    >
      <div className="relative mx-auto max-w-2xl">
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-petal/60 blur-3xl" />

        <div className="relative rounded-[2rem] border border-line bg-gradient-to-b from-white to-blush p-2 shadow-petal">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#fff3f8] shadow-inner">
            <AnimatePresence initial={false}>
              {!open ? (
                <motion.div
                  key="closed"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  className="relative"
                >
                  <div className="relative flex min-h-[19rem] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[22rem]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{ background: 'linear-gradient(180deg,#fff8fb 0%,#ffeaf3 42%,#ffdcea 100%)' }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
                      style={{
                        background: 'linear-gradient(180deg,#fffdfe,#ffe6f0)',
                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                        boxShadow: '0 1px 0 rgba(226,86,138,0.1)',
                      }}
                    />
                    <p className="relative mt-16 text-[0.62rem] tracking-[0.38em] text-rose-deep/70 uppercase">
                      to the girl who runs my whole world
                    </p>
                    <p className="script relative mt-2 text-4xl text-rose-deep sm:text-5xl">For {NAME}, always</p>
                    <p className="relative mt-1 font-serif text-sm text-muted italic">do not open before today</p>

                    <motion.button
                      type="button"
                      onClick={breakSeal}
                      whileHover={{ scale: 1.06, rotate: -4 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label="Break the wax seal and open the letter"
                      className="absolute top-1/2 left-1/2 z-10 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#f07aa6,#c2325f_55%,#8d2148)] shadow-[0_14px_30px_rgba(140,43,85,0.45),inset_0_2px_6px_rgba(255,255,255,0.4)]"
                    >
                      <Crown className="size-9 opacity-95" />
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[0.58rem] tracking-[0.25em] whitespace-nowrap text-rose-deep/80 uppercase">
                        break the seal
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.article
                  key="open"
                  initial={{ opacity: 0, rotateX: -70, y: -30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1200, transformOrigin: 'top center' }}
                  className="paper-lines relative bg-[#fffdfc] px-6 py-10 text-left text-ink sm:px-12 sm:py-14"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <p className="text-[0.6rem] tracking-[0.32em] text-rose-deep/60 uppercase">
                      delivered by hand · {new Date().getFullYear()}
                    </p>
                    <Crown className="size-7 opacity-70" />
                  </div>

                  <h3 className="script text-4xl text-rose-deep sm:text-5xl">My dearest {NAME},</h3>

                  <div className="mt-6 space-y-5 font-serif text-[1.05rem] leading-[2.1] sm:text-[1.15rem]">
                    <p>
                      Happy Princess Day. I know today is supposed to be about crowns and cake, but I kept thinking
                      about the ordinary things instead: how you narrate your own life under your breath, how you
                      remember everyone’s small details, how you turn a boring Tuesday into something worth telling
                      someone about later.
                    </p>
                    <p>
                      So this is not really about being royal. It is about being looked after for once, properly,
                      without having to ask and without having to earn it first.
                    </p>
                    <p>
                      I started out meaning to write something short. It refused. Every note I pinned on your wall is
                      true, and every one of them had so much more to say, so here is the long version.
                    </p>
                  </div>

                  {LETTER_PARTS.map((part) => (
                    <motion.section
                      key={part.heading}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.6 }}
                      className="mt-10"
                    >
                      <h4 className="script text-3xl text-rose sm:text-4xl">{part.heading}</h4>
                      <div className="mt-2 space-y-5 font-serif text-[1.05rem] leading-[2.1] sm:text-[1.15rem]">
                        {part.paragraphs.map((text) => (
                          <p key={text}>{text}</p>
                        ))}
                      </div>
                    </motion.section>
                  ))}

                  <div className="mt-12 space-y-5 font-serif text-[1.05rem] leading-[2.1] sm:text-[1.15rem]">
                    <p className="font-serif text-rose-deep italic">
                      Five rules for today, signed and sealed:
                    </p>
                  </div>

                  <ol className="mt-4 space-y-3">
                    {RULES.map((rule, i) => (
                      <motion.li
                        key={rule}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 font-serif text-[1rem] leading-relaxed"
                      >
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-rose/40 text-[0.65rem] text-rose-deep">
                          {i + 1}
                        </span>
                        {rule}
                      </motion.li>
                    ))}
                  </ol>

                  <div className="mt-10 space-y-5 font-serif text-[1.05rem] leading-[2.1] sm:text-[1.15rem]">
                    <p>
                      Everything else on this page is yours too: the wall of notes, the pictures, the three songs, the
                      little game that is harder than it looks. Click everything. Nothing here breaks.
                    </p>
                    <p>
                      You deserve every good thing, {NAME}, and I will keep reminding you. Today, and on the dullest
                      Tuesday of the year, and from however far away I have to do it. Thank you for being exactly who
                      you are. Happy Princess Day, my princess.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-rose/20 pt-6">
                    <div>
                      <p className="font-serif text-sm text-muted italic">with all my heart,</p>
                      <p className="script mt-1 text-4xl text-rose-deep">always yours</p>
                    </div>
                    <p className="script max-w-[11rem] -rotate-3 text-sm leading-relaxed text-rose/80">
                      p.s. the crown up there is not decoration. click it. i built it for this.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={breakSeal}
                    className="mt-8 rounded-full border border-rose/30 px-5 py-2 text-[0.68rem] tracking-[0.2em] text-rose-deep uppercase transition hover:bg-petal/50"
                  >
                    fold it back up
                  </button>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {SMALL_LETTERS.map((letter, i) => {
          const isOpen = Boolean(opened[i])
          return (
            <motion.div
              key={letter.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border transition-colors duration-500 ${
                isOpen ? 'border-rose/40 bg-white shadow-soft' : 'border-line bg-blush/80 hover:border-rose/35'
              }`}
            >
              <button
                type="button"
                onClick={() => openSmall(i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="text-[0.62rem] tracking-[0.26em] text-rose-deep/80 uppercase">{letter.label}</span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full bg-rose text-white transition-transform duration-500 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-6 font-serif text-[1.02rem] leading-relaxed text-ink">{letter.body}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <span aria-hidden="true" className="pointer-events-none absolute -right-3 -bottom-4 size-16 rotate-12 bg-petal/60 blur-xl" />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
