import { BeltLevel, VideoCategory, VideoItem, TerminologyItem, DownloadItem } from './types.ts';

export const videos: VideoItem[] = [
  // --- BASICS ROUTINE ---
  {
    id: "gndORk_8HWY",
    title: "Shito-Ryu Basics Routine",
    category: VideoCategory.Basics,
    belt: BeltLevel.White,
    description: "Full run-through of basic techniques. (Video by Anthony Au)"
  },

  // --- BASICS: STANCES ---
  { id: "", title: "Stance: Heisoku Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Informal Attention Stance. Feet together, toes pointing forward." },
  { id: "", title: "Stance: Musubi Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Open Attention Stance. Heels together, toes open at 45 degrees." },
  { id: "", title: "Stance: Heiko Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Parallel Stance. Feet shoulder width apart, toes pointing forward." },
  { id: "", title: "Stance: Hachiji Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Open Leg Stance. Feet shoulder width, toes pointing out." },
  { id: "", title: "Stance: Shiko Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Square Stance. Wide stance, knees bent, back straight. Essential for leg strength." },
  { id: "", title: "Stance: Zenkutsu Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Front/Forward Stance. Long stance, front knee bent, back leg straight." },
  { id: "", title: "Stance: Neko Ashi Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Cat Foot Stance. Most weight on back leg, front foot resting lightly." },
  { id: "", title: "Stance: Kokutsu Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Back Stance. Similar to Zenkutsu but weight shifted back." },
  { id: "", title: "Stance: Moto Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "High Forward Stance. Shorter and higher than Zenkutsu." },
  { id: "", title: "Stance: Sanchin Dachi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Hourglass Stance. Tension stance with toes turned inward." },

  // --- BASICS: ATTACKS ---
  { id: "", title: "Seiken Tsuki", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Forefist Punch using the first two knuckles." },
  { id: "", title: "Oi Tsuki", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Lunge Punch. Stepping forward and punching with the same side hand." },
  { id: "", title: "Gyaku Tsuki", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Reverse Punch. Punching with the hand opposite to the forward leg." },
  { id: "", title: "Kizami Tsuki", category: VideoCategory.Basics, belt: BeltLevel.Yellow, description: "Jab punch used for speed and range finding." },
  { id: "", title: "Ura Tsuki", category: VideoCategory.Basics, belt: BeltLevel.Yellow, description: "Inverted/Upper Punch. Palm facing up, often close range." },
  { id: "", title: "Shuto Uchi", category: VideoCategory.Basics, belt: BeltLevel.Yellow, description: "Knife Hand Strike. Striking with the outer edge of the hand." },
  { id: "", title: "Hiji Ate", category: VideoCategory.Basics, belt: BeltLevel.Green, description: "Elbow Strike (Empi). Using the point of the elbow." },

  // --- BASICS: BLOCKS ---
  { id: "", title: "Gedan Barai", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Downward Block/Sweep. Protecting the lower body." },
  { id: "", title: "Yoko Uke", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Inside Block. Blocking from inside out to protect the mid-section." },
  { id: "", title: "Yoko Uchi", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Outside Block. Blocking from outside in." },
  { id: "", title: "Age Uke", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Rising Block. Protecting the head/face area." },
  { id: "XJbWw_hQ5ko", title: "Shuto Uke", category: VideoCategory.Basics, belt: BeltLevel.Yellow, description: "Knife Hand Block. Classic guarding stance block." },

  // --- BASICS: KICKS ---
  { id: "", title: "Mae Geri", category: VideoCategory.Basics, belt: BeltLevel.White, description: "Front Kick. Snap kick using the ball of the foot (Chusoku)." },
  { id: "", title: "Mawashi Geri", category: VideoCategory.Basics, belt: BeltLevel.Yellow, description: "Roundhouse Kick. Striking with the instep or ball of the foot." },
  { id: "", title: "Yoko Geri", category: VideoCategory.Basics, belt: BeltLevel.Yellow, description: "Side Kick. Can be performed as snap (Keage) or thrust (Kekomi)." },
  { id: "", title: "Fumikomi Geri", category: VideoCategory.Basics, belt: BeltLevel.Green, description: "Stomp Kick. Targeting the opponent's knee or foot." },
  { id: "", title: "Ushiro Geri", category: VideoCategory.Basics, belt: BeltLevel.Green, description: "Back Kick. Thrusting kick to the rear." },

  // --- ADVANCED TECHNIQUES ---
  { id: "", title: "Ura Mawashi Geri", category: VideoCategory.Advanced, belt: BeltLevel.Black, description: "Hook Kick. Striking with the heel or sole in a reverse circular motion." },
  { id: "", title: "Ushiro Mawashi Geri", category: VideoCategory.Advanced, belt: BeltLevel.Black, description: "Spinning Hook Kick (Wheel Kick). A powerful rotating kick targeting the head." },
  { id: "", title: "Kaiten Mawashi Geri", category: VideoCategory.Advanced, belt: BeltLevel.Black, description: "Rolling Wheel Kick. A sacrificial kick rolling the body to deliver power." },
  { id: "", title: "Tobi Yoko Geri", category: VideoCategory.Advanced, belt: BeltLevel.Brown, description: "Jumping Side Kick. Generating power from the jump for a thrusting kick." },
  { id: "", title: "Kakato Otoshi", category: VideoCategory.Advanced, belt: BeltLevel.Brown, description: "Axe Kick. Bringing the heel down vertically on the opponent." },
  { id: "", title: "Haito Uchi", category: VideoCategory.Advanced, belt: BeltLevel.Brown, description: "Ridge Hand Strike. Striking with the inner edge of the hand (thumb tucked)." },
  { id: "", title: "Washide Uchi", category: VideoCategory.Advanced, belt: BeltLevel.Black, description: "Eagle Hand Strike. Finger tips converged to strike soft targets." },
  { id: "", title: "Kake Uke", category: VideoCategory.Advanced, belt: BeltLevel.Brown, description: "Hooking Block. Using the wrist to hook and control an incoming strike." },

  // --- KATAS ---
  // White Belt
  { id: "O9YlRkv8Su8", title: "Kata 1: Kihon Kata Ichi", category: VideoCategory.Kata, belt: BeltLevel.White },
  { id: "yLjfk3a2sLs", title: "Kata 2: Kihon Kata Ni", category: VideoCategory.Kata, belt: BeltLevel.White },
  { id: "mh-pBNlKcHY", title: "Kata 3: Kihon Kata San", category: VideoCategory.Kata, belt: BeltLevel.White },
  
  // Yellow Belt
  { id: "eW_jHGFLAAI", title: "Kata 4: Kihon Kata Yon", category: VideoCategory.Kata, belt: BeltLevel.Yellow },
  { id: "aCZKFiDtBKY", title: "Kata 5: Kihon Kata Go", category: VideoCategory.Kata, belt: BeltLevel.Yellow },
  { id: "NVG-6aqQcYA", title: "Kata 6: Kihon Kata Roku", category: VideoCategory.Kata, belt: BeltLevel.Yellow },
  { 
    id: "https://www.youtube.com/watch?v=VlHLIrzDCwk&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=1", 
    secondaryId: "rLTZCKjK2v8",
    title: "Heian Nidan", 
    category: VideoCategory.Kata, 
    belt: BeltLevel.Yellow 
  },

  // Orange Belt
  { id: "teMbijIvnig", title: "Kata 7: Kihon Kata Shichi", category: VideoCategory.Kata, belt: BeltLevel.Orange },
  { id: "Sq-u8ZMikS4", title: "Kata 8: Kihon Kata Hachi", category: VideoCategory.Kata, belt: BeltLevel.Orange },
  { id: "NY6tE4Et3vw", title: "Kata 9: Kihon Kata Ku", category: VideoCategory.Kata, belt: BeltLevel.Orange },
  { 
    id: "https://www.youtube.com/watch?v=wGHV1X-9j_k&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=2",
    secondaryId: "1q4n8OYNO3o",
    title: "Heian Sandan", 
    category: VideoCategory.Kata, 
    belt: BeltLevel.Orange 
  },

  // Green Belt - Heian Shodan
  { id: "3l-jrrtoGVs", title: "Kata 10", category: VideoCategory.Kata, belt: BeltLevel.Green },
  { id: "vVKUAVr2hC4", title: "Kata 11", category: VideoCategory.Kata, belt: BeltLevel.Green },
  { id: "8e3XUs_L-C4", title: "Kata 12", category: VideoCategory.Kata, belt: BeltLevel.Green },
  { id: "T-XErnU6muQ", title: "Heian Shodan", category: VideoCategory.Kata, belt: BeltLevel.Green },

  // Blue Belt - Heian Yondan
  { id: "wD--FQkCxG0", title: "Kata 13", category: VideoCategory.Kata, belt: BeltLevel.Blue },
  { id: "W7LWrhb0Nu0", title: "Kata 14", category: VideoCategory.Kata, belt: BeltLevel.Blue },
  { id: "XyM1Xa_FaU8", title: "Kata 15", category: VideoCategory.Kata, belt: BeltLevel.Blue },
  { 
    id: "https://www.youtube.com/watch?v=7Uv6QC0ge5M&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=3",
    secondaryId: "upg5kxMeCD8", 
    title: "Heian Yondan", 
    category: VideoCategory.Kata, 
    belt: BeltLevel.Blue 
  },

  // Brown Belt
  { id: "F0-l1Z6Imug", title: "Kata 16", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "8SkvQ9i3WjQ", title: "Kata 17", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "-rj88UMeD7Q", title: "Kata 18", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "PVOw2cksEHs", title: "Kata 19", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "TpBHNFXsK5E", title: "Kata 20", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { 
    id: "https://www.youtube.com/watch?v=dted7lBq9Tw&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=4",
    secondaryId: "Q3k0QAFbciA",
    title: "Heian Godan", 
    category: VideoCategory.Kata, 
    belt: BeltLevel.Brown 
  },
  { id: "https://www.youtube.com/watch?v=jpzhI_gNFHw&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=5", title: "Naihanchi Shodan", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "4QfcGbexHI4", title: "Jitte", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "7M6pzVCSsC4", title: "Jion", category: VideoCategory.Kata, belt: BeltLevel.Brown },
  { id: "HFnh5r3onlc", title: "Jiin", category: VideoCategory.Kata, belt: BeltLevel.Brown },

  // Black Belt
  { id: "GceAHME0jUk", title: "Black Belt Kata Demonstration", category: VideoCategory.Kata, belt: BeltLevel.Black, description: "Compilation of various black belt katas." },
  { id: "aUrgF39TSAM", title: "Tensho", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "CGVhW1pR5B0", title: "Sanchin", category: VideoCategory.Kata, belt: BeltLevel.Black },
  
  // Major Shito-ryu Black Belt Katas
  { id: "https://www.youtube.com/watch?v=oZN49d3PP1k&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=6", title: "Bassai Dai", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=HzrLrn-BBt0&list=PLQJ34bEd6-BHr-3QzEB0vFWvCmLKJCBtc&index=7", title: "Kosokun Dai", category: VideoCategory.Kata, belt: BeltLevel.Black }, 
  { id: "https://www.youtube.com/watch?v=QaTQSNAz7Qg", title: "Seienchin", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=L8BpNViCAZI", title: "Seipai", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=VsZStD3_51U", title: "Kosokun Sho", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=YLuyUrbVyGc", title: "Kururunfa", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=7mUZ-crgr1M", title: "Nipaipo", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=GAnR_mH65No", title: "Matsumura Rohai", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=YFsGCVqd0GA", title: "Suparinpei", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=Jn9Pjvg_Tqk", title: "Gojushiho", category: VideoCategory.Kata, belt: BeltLevel.Black },
  { id: "https://www.youtube.com/watch?v=gtnAVIGgptQ", title: "Shisochin", category: VideoCategory.Kata, belt: BeltLevel.Black },

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