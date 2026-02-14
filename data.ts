import { BeltLevel, VideoCategory, VideoItem, TerminologyItem, DownloadItem } from './types.ts';

// DATA EXTRACTION NOTE: 
// The YouTube IDs below are extracted from the source request where available.
// Others are placeholders or inferred from standard Shito-Ryu curriculum on the channel.

export const videos: VideoItem[] = [
  // --- BASICS (Kihon) ---
  // Stances (Tachikata)
  {
    id: "gndORk_8HWY", // Placeholder
    title: "Tachikata (Stances) Overview",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Overview of fundamental stances: Heisoku, Musubi, Heiko, Hachiji, Uchi Hachiji, Shiko, Moto, Zenkutsu, Neko Ashi, Sanchin, Kosa, Kokutsu, Renoji."
  },
  {
    id: "gndORk_8HWY",
    title: "Zenkutsu Dachi (Forward Stance)",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Detailed breakdown of the Forward Stance, focusing on weight distribution and hip alignment."
  },
  {
    id: "gndORk_8HWY",
    title: "Shiko Dachi (Square Stance)",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "The Sumo/Square stance essential for Shito-Ryu stability and leg strength."
  },
  {
    id: "gndORk_8HWY",
    title: "Neko Ashi Dachi (Cat Stance)",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Cat Foot Stance focusing on rear-leg weight distribution and agility."
  },
  
  // Blocks (Uke Waza)
  {
    id: "gndORk_8HWY",
    title: "Uke Waza: Gedan Barai & Yoko Uke",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Downward Block (Gedan Barai) and Inside Block (Yoko Uke)."
  },
  {
    id: "XJbWw_hQ5ko", 
    title: "Shuto Uke (Knife Hand Block)",
    category: VideoCategory.Basics,
    belt: BeltLevel.Yellow,
    description: "Proper form for knife hand guarding block in Kokutsu Dachi or Neko Ashi Dachi."
  },
  {
    id: "gndORk_8HWY",
    title: "Advanced Blocks: Kake Uke & Mawashi Uke",
    category: VideoCategory.Basics,
    belt: BeltLevel.Green,
    description: "Hook block (Kake Uke) and Roundhouse block (Mawashi Uke) techniques."
  },

  // Strikes (Tsuki Waza)
  {
    id: "gndORk_8HWY",
    title: "Tsuki Waza: Seiken, Oi Tsuki, Gyaku Tsuki",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Forefist punch, Lunge punch, and Reverse punch mechanics."
  },
  {
    id: "gndORk_8HWY",
    title: "Striking Variations: Ura, Kagi, & Tate Tsuki",
    category: VideoCategory.Basics,
    belt: BeltLevel.Yellow,
    description: "Inverted punch (Ura), Hook punch (Kagi), and Vertical punch (Tate)."
  },

  // Kicks (Geri Waza)
  {
    id: "gndORk_8HWY",
    title: "Geri Waza: Mae Geri (Front Kick)",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Front snap kick fundamentals and ball-of-foot striking."
  },
  {
    id: "gndORk_8HWY",
    title: "Geri Waza: Mawashi Geri (Roundhouse Kick)",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Roundhouse kick hip rotation and impact."
  },
  {
    id: "gndORk_8HWY",
    title: "Geri Waza: Yoko Geri (Side Kick)",
    category: VideoCategory.Basics,
    belt: BeltLevel.Yellow,
    description: "Side thrust kick (Kekomi) and Side snap kick (Keage)."
  },

  // --- KATAS ---
  // White Belt
  { id: "O9YlRkv8Su8", title: "Kata 1: Kihon Kata Ichi", category: VideoCategory.Kata, belt: BeltLevel.White },
  { id: "yLjfk3a2sLs", title: "Kata 2: Kihon Kata Ni", category: VideoCategory.Kata, belt: BeltLevel.White },
  { id: "mh-pBNlKcHY", title: "Kata 3: Kihon Kata San", category: VideoCategory.Kata, belt: BeltLevel.White },
  
  // Yellow Belt
  { id: "eW_jHGFLAAI", title: "Kata 4: Kihon Kata Yon", category: VideoCategory.Kata, belt: BeltLevel.Yellow },
  { id: "aCZKFiDtBKY", title: "Kata 5: Kihon Kata Go", category: VideoCategory.Kata, belt: BeltLevel.Yellow },
  { id: "NVG-6aqQcYA", title: "Kata 6: Kihon Kata Roku", category: VideoCategory.Kata, belt: BeltLevel.Yellow },

  // Orange Belt - Pinan Nidan
  { id: "teMbijIvnig", title: "Kata 7: Kihon Kata Shichi", category: VideoCategory.Kata, belt: BeltLevel.Orange },
  { id: "Sq-u8ZMikS4", title: "Kata 8: Kihon Kata Hachi", category: VideoCategory.Kata, belt: BeltLevel.Orange },
  { id: "NY6tE4Et3vw", title: "Kata 9: Kihon Kata Ku", category: VideoCategory.Kata, belt: BeltLevel.Orange },
  { id: "rLTZCKjK2v8", title: "Heian Nidan", category: VideoCategory.Kata, belt: BeltLevel.Orange },

  // Green Belt - Pinan Sandan
  { id: "3l-jrrtoGVs", title: "Kata 10", category: VideoCategory.Kata, belt: BeltLevel.Green },
  { id: "vVKUAVr2hC4", title: "Kata 11", category: VideoCategory.Kata, belt: BeltLevel.Green },
  { id: "8e3XUs_L-C4", title: "Kata 12", category: VideoCategory.Kata, belt: BeltLevel.Green },
  { id: "1q4n8OYNO3o", title: "Heian Sandan", category: VideoCategory.Kata, belt: BeltLevel.Green },

  // Blue Belt - Pinan Shodan
  { id: "wD--FQkCxG0", title: "Kata 13", category: VideoCategory.Kata, belt: BeltLevel.Blue },
  { id: "W7LWrhb0Nu0", title: "Kata 14", category: VideoCategory.Kata, belt: BeltLevel.Blue },
  { id: "XyM1Xa_FaU8", title: "Kata 15", category: VideoCategory.Kata, belt: BeltLevel.Blue },
  { id: "T-XErnU6muQ", title: "Heian Shodan", category: VideoCategory.Kata, belt: BeltLevel.Blue },

  // Brown Belt - Pinan Yondan / Godan
  { id: "upg5kxMeCD8", title: "Heian Yondan", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "Q3k0QAFbciA", title: "Heian Godan", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "4QfcGbexHI4", title: "Jitte", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "7M6pzVCSsC4", title: "Jion", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "HFnh5r3onlc", title: "Jiin", category: VideoCategory.Kata, belt: BeltLevel.Brown },

  // --- KUMITE ---
  { id: "cX-oN7itZiA", title: "Basic Kumite 1 - 3", category: VideoCategory.Kumite, belt: BeltLevel.White },
  { id: "KXfH1Ib0P6Y", title: "Basic Kumite 4 - 6", category: VideoCategory.Kumite, belt: BeltLevel.Yellow },
  { id: "R9FXvwIMF9I", title: "Basic Kumite 7 - 9", category: VideoCategory.Kumite, belt: BeltLevel.Orange },
  { id: "G6trDy2AgJw", title: "Basic Kumite 10 - 12", category: VideoCategory.Kumite, belt: BeltLevel.Green },
  { id: "Emn-rnCTO2Y", title: "Basic Kumite 13 - 15", category: VideoCategory.Kumite, belt: BeltLevel.Blue },
  { id: "23YJB55rj0w", title: "Basic Kumite 16 - 17", category: VideoCategory.Kumite, belt: BeltLevel.Brown },
  { id: "gJIQ0r-BDXI", title: "Basic Kumite 18 - 19", category: VideoCategory.Kumite, belt: BeltLevel.Brown },
  { id: "5eL0HGgWVZw", title: "Basic Kumite 20", category: VideoCategory.Kumite, belt: BeltLevel.Brown },
];

export const terminology: TerminologyItem[] = [
  // Numbers
  { term: "Ichi", translation: "One", category: "Numbers" },
  { term: "Ni", translation: "Two", category: "Numbers" },
  { term: "San", translation: "Three", category: "Numbers" },
  { term: "Shi", translation: "Four", category: "Numbers" },
  { term: "Go", translation: "Five", category: "Numbers" },
  { term: "Roku", translation: "Six", category: "Numbers" },
  { term: "Shichi", translation: "Seven", category: "Numbers" },
  { term: "Hachi", translation: "Eight", category: "Numbers" },
  { term: "Ku", translation: "Nine", category: "Numbers" },
  { term: "Ju", translation: "Ten", category: "Numbers" },
  // General
  { term: "Karate", translation: "Empty Hand", category: "General" },
  { term: "Dojo", translation: "Training Hall", category: "General" },
  { term: "Sensei", translation: "Teacher/Instructor", category: "General" },
  { term: "Gi", translation: "Uniform", category: "General" },
  { term: "Obi", translation: "Belt", category: "General" },
  { term: "Rei", translation: "Bow", category: "General" },
  { term: "Yame", translation: "Stop", category: "General" },
  { term: "Hajime", translation: "Begin", category: "General" },
  // Techniques
  { term: "Uke", translation: "Block", category: "Techniques" },
  { term: "Tsuki", translation: "Punch", category: "Techniques" },
  { term: "Geri", translation: "Kick", category: "Techniques" },
  { term: "Jodan", translation: "Upper Level (Head)", category: "Techniques" },
  { term: "Chudan", translation: "Middle Level (Body)", category: "Techniques" },
  { term: "Gedan", translation: "Lower Level", category: "Techniques" },
  // Stances
  { term: "Zenkutsu Dachi", translation: "Forward Stance", category: "Stances" },
  { term: "Shiko Dachi", translation: "Horse/Sumo Stance", category: "Stances" },
  { term: "Neko Ashi Dachi", translation: "Cat Stance", category: "Stances" },
  { term: "Kokutsu Dachi", translation: "Back Stance", category: "Stances" },
  { term: "Sanchin Dachi", translation: "Hourglass Stance", category: "Stances" },
  { term: "Heiko Dachi", translation: "Parallel Stance", category: "Stances" },
  { term: "Musubi Dachi", translation: "Attention Stance (Heels together)", category: "Stances" },
];

export const downloads: DownloadItem[] = [
  {
    title: "WKF Competition Rules",
    description: "Official World Karate Federation competition rules and regulations.",
    url: "https://www.wkf.net/pdf/WKF_Competition%20Rules_2024.pdf",
    date: "2024"
  },
  {
    title: "Sato-Ha Kata List",
    description: "Complete list of Katas for the Sato-Ha style.",
    url: "https://www.shitoryu.net/wp-content/uploads/2018/07/SATO-HA-SHITO-RYU-KATA-LIST-Revised-July-2018.pdf",
    date: "July 2018"
  },
  {
    title: "Dan Test Guidelines",
    description: "Requirements for Black Belt grading.",
    url: "https://www.shitoryu.net/wp-content/uploads/2022/03/SATO-HA-RICK-V.4-DAN-TEST-GUIDELINES-Revision-Mar-3-2022-1-6.pdf",
    date: "March 2022"
  },
  {
    title: "Colour Belt Requirements",
    description: "Curriculum for kyu grades.",
    url: "http://shitoryu.net/wp-content/uploads/2019/01/Sato-Ha-Colour-Belt-Test-Requirements.pdf",
    date: "Jan 2019"
  }
];