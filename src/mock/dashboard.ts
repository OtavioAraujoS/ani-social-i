export const recentAdditions = [
  { id: "1", title: "NEON GENESIS ARC" },
  { id: "2", title: "ETHER REALMS" },
  { id: "3", title: "SHADOW TIDES" },
  { id: "4", title: "WINGED CHROME" },
  { id: "5", title: "LUNAR GATES" },
];

export const discoursePosts = [
  {
    id: "1",
    title: "The hidden meaning of the Blue Iris in Episode 14?",
    excerpt:
      "The way the camera lingered on the cracked vase suggests we might be looking at a Kintsugi metaphor earlier than expected...",
    category: "THEORY",
    ref: "SC_77_412",
  },
  {
    id: "2",
    title: "Complete Series: Astral Chains now in UHD",
    excerpt:
      "Our technical team has finally finished the restoration of the 1994 classic. The grain structure is preserved...",
    category: "NEWS",
    ref: "SC_77_883",
  },
  {
    id: "3",
    title: "Which genre should we focus on for October?",
    excerpt:
      "Voting is open for our monthly sanctuary theme. Psychological Horror or Cyberpunk Noir?",
    category: "POLL",
    ref: "SC_77_109",
  },
  {
    id: "4",
    title: "WINGED CHROME",
    excerpt:
      "Voting is open for our monthly sanctuary theme. Psychological Horror or Cyberpunk Noir?",
    category: "POLL",
    ref: "SC_77_109",
  },
  {
    id: "5",
    title: "LUNAR GATES",
    excerpt:
      "Voting is open for our monthly sanctuary theme. Psychological Horror or Cyberpunk Noir?",
    category: "POLL",
    ref: "SC_77_109",
  },
  {
    id: "6",
    title: "LUNAR GATES",
    excerpt:
      "Voting is open for our monthly sanctuary theme. Psychological Horror or Cyberpunk Noir?",
    category: "POLL",
    ref: "SC_77_109",
  },
];

export interface Resident {
  id: string;
  name: string;
  watching: string;
  status: "online" | "idle" | "offline";
}

export const residents: Resident[] = [
  { id: "1", name: "Vesper_Zero", watching: "Kill la Kill", status: "online" },
  { id: "2", name: "Kaelith", watching: "Monster", status: "online" },
  { id: "3", name: "Oracle_Lune", watching: "Paprika", status: "online" },
  { id: "4", name: "Unit_808", watching: "Psycho-Pass", status: "idle" },
  { id: "5", name: "Vesper_Zero", watching: "Kill la Kill", status: "online" },
  { id: "6", name: "Kaelith", watching: "Monster", status: "online" },
  { id: "7", name: "Oracle_Lune", watching: "Paprika", status: "online" },
];
