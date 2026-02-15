export enum BeltLevel {
  White = "White Belt",
  Yellow = "Yellow Belt",
  Orange = "Orange Belt",
  Green = "Green Belt",
  Blue = "Blue Belt",
  Brown = "Brown Belt",
  Black = "Black Belt",
  All = "All Levels"
}

export enum VideoCategory {
  Basics = "Basics",
  Advanced = "Advanced",
  Kata = "Kata",
  Kumite = "Kumite",
  Other = "Other"
}

export interface VideoItem {
  id: string; // YouTube ID
  secondaryId?: string; // Optional second video for split view
  title: string;
  category: VideoCategory;
  belt?: BeltLevel;
  description?: string;
}

export interface TerminologyItem {
  term: string;
  translation: string;
  category: "General" | "Numbers" | "Techniques" | "Stances" | "Dojo Rules";
}

export interface DownloadItem {
  title: string;
  description: string;
  url: string;
  date: string;
}