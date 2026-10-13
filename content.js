/* ============================================================
   OPPY — ALL WEBSITE CONTENT LIVES IN THIS FILE
   Edit text between the quotes "..." only. Keep commas and brackets.
   After a change: Commit on GitHub → the site updates in ±1 minute.
   ============================================================ */

window.OPPY = {
  brand: "Oppy",
  role: "Short-form video editor",
  tagline: "Cinematic short-form edits for creators who already post — and want every second to hit harder.",
  heroLine1: "Cinematic short-form edits,",
  heroLine2: "cut to keep people watching.",
  location: "Belgium — working worldwide",
  tool: "After Effects & Premiere Pro",
  email: "oppy_ae@outlook.com",

  // Links — leave href empty ("") to hide a button
  socials: [
    { label: "Linktree", href: "https://linktr.ee/oppy_ae" },
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
    { label: "YouTube", href: "" },
  ],

  // Words in the moving strip
  disciplines: [
    "Short-form editing", "Kinetic captions", "Motion graphics", "Podcast clips",
    "Colour grading", "Sound design", "Talking-head storytelling",
  ],

  // Numbers row
  stats: [
    { value: "9:16", label: "Native vertical" },
    { value: "60fps", label: "Smooth delivery" },
    { value: "48h", label: "Typical turnaround" },
    { value: "AE · PR", label: "After Effects & Premiere" },
  ],

  about: {
    headlineDark: "Human edits",
    headlineMuted: "for human attention.",
    paragraphs: [
      "I'm Oppy — a short-form editor cutting video for creators and founders who are already showing up on camera. My job is to make sure nobody scrolls past.",
      "Every edit is built by hand in After Effects and Premiere Pro: kinetic captions timed to the syllable, clean and natural colour, sound-led pacing and motion that serves the story instead of shouting over it. Talking heads become scenes. Podcasts become moments.",
      "The goal is simple — edits that feel cinematic, stay honest to the speaker, and keep people watching until the very last frame.",
    ],
  },

  process: [
    { title: "Brief", text: "You send the raw footage, references and the one thing viewers must remember." },
    { title: "Cut", text: "I find the hook, trim the dead air and build the story beat by beat." },
    { title: "Craft", text: "Captions, motion, grade and sound design — polished in After Effects & Premiere." },
    { title: "Deliver", text: "Review, refine and export in every format your platforms need." },
  ],

  /* ---------- YOUR EDITS ----------
     To add one: upload the video to the "videos" folder and a still image to "posters",
     then copy one block { ... }, paste it below the others and change the details.
     format: "9:16" (vertical), "1:1" (square) or "16:9" (widescreen) */
  edits: [
    {
      title: "Where It Started",
      client: "Jonathan Krispijn",
      description: "A raw, face-to-camera monologue turned into a tight story arc — punch-in framing, word-by-word amber captions and a cold open borrowed from a podcast moment.",
      format: "9:16",
      duration: "1:09",
      tags: ["Talking head", "Kinetic captions"],
      video: "videos/jonathan-krispijn.mp4",
      poster: "posters/jonathan-krispijn.jpg",
    },
    {
      title: "Borrowed Money",
      client: "Mees Wijnants",
      description: "A podcast answer about how money is created, cut for rhythm. Layered caption stacks, a red emphasis word and warm studio tones keep a complex idea easy to follow.",
      format: "1:1",
      duration: "0:33",
      tags: ["Podcast clip", "Finance"],
      video: "videos/mees-wijnants-47.mp4",
      poster: "posters/mees-wijnants-47.jpg",
    },
    {
      title: "Nothing Changes",
      client: "Mees Wijnants",
      description: "News footage, b-roll and a selfie take woven into one argument. A sun-bleached cinematic grade and clean white captions give an opinion piece documentary weight.",
      format: "9:16",
      duration: "1:23",
      tags: ["Commentary", "Colour grade"],
      video: "videos/mees-wijnants-55.mp4",
      poster: "posters/mees-wijnants-55.jpg",
    },
    {
      title: "On the Road",
      client: "Onuha Brothers",
      description: "A car-seat conversation about running multiple e-commerce stores, cut into a quick widescreen clip. Natural colour, clean two-shot framing and understated captions let the talk carry it.",
      format: "16:9",
      duration: "0:23",
      tags: ["Podcast clip", "E-commerce"],
      video: "videos/onuha-brothers.mp4",
      poster: "posters/onuha-brothers.jpg",
    },
  ],
};
