import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "BÙI TUẤN KIỆT",
  role: "YOUR_ROLE",
  introduction: "Aspiring game developer with a passion for creating interactive experiences. I specialize in developing games using Unity and C#.",
  description: `Hey, I'm Kiet! I've been gaming my whole life, and making games has always been my dream. Recently, I decided to go all in—took some Udemy and Youtube courses, started practicing, and committed to making it happen.

My goal is to create games me and my friends love, wacky survival games, fun idle games for mobile, and even a side-scrolling MMORPG.

Right now, I’m looking to join a company where I can sharpen my skills, learn from others, and build some awesome games.`,
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/NAME",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/NAME",
  }
};

export const games: Game[] = [
  {
    name: "ROUGELIKE BTK",
    description: "A simple rougelike topdown shooter",
    genres: ["Topdown shooter", "Rougelike"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    skills: ["Object Pooling", "Singleton", "Events", "Scriptable Object"],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/kiet16071995/RougelikeBTK" },
      { source: LinkImageSource.ItchIo, url: "https://kiet16071995.itch.io/rougelike-btk?secret=b340rEih6tz2pY8fqr3swPO1Vo" },
    ],
    media: [
      { source: "/images/games/rougelike-btk/Untitled.jpg", type: MediaType.Image },
      { source: "/images/games/rougelike-btk/Untitled1.jpg", type: MediaType.Image },
      { source: "/images/games/rougelike-btk/Untitled2.jpg", type: MediaType.Image },
      { source: "/images/games/rougelike-btk/Untitled4.jpg", type: MediaType.Image },
      { source: "/images/games/rougelike-btk/Untitled3.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "LUA LANDER",
    description: "A simple game about landing a lander",
    genres: ["Casual"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    skills: ["Singleton", "Events"],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/kiet16071995/LuaLanderCM" },
      { source: LinkImageSource.ItchIo, url: "https://kiet16071995.itch.io/lua-lander?secret=XSoFozhBpPWD6gMATNJr6lYVOWc" },
    ],
    media: [
      { source: "/images/games/lua-lander/Untitled.jpg", type: MediaType.Image },
      { source: "/images/games/lua-lander/Untitled1.jpg", type: MediaType.Image },
      { source: "/images/games/lua-lander/Untitled2.jpg", type: MediaType.Image },
      { source: "/images/games/lua-lander/Untitled3.jpg", type: MediaType.Image },
      { source: "/images/games/lua-lander/Untitled4.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "ROUGELIKE TURN BASED DUNGEON CRAWLER",
    description: "A simple game about trying to see how far you can go in a procedurally generated dungeon",
    genres: ["Casual", "Rougelike", "Dungeon Crawler"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    skills: ["Singleton", "Procedurally Generated"],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/kiet16071995/RoguelikeGameUL" },
      { source: LinkImageSource.ItchIo, url: "https://kiet16071995.itch.io/rougelike-turnbased-dungeon-crawler?secret=g1EM9ODHZu9tOquQy6lGXcvpsk" },
    ],
    media: [
      { source: "/images/games/rougelike-turn-based/Untitled.jpg", type: MediaType.Image },
      { source: "/images/games/rougelike-turn-based/Untitled1.jpg", type: MediaType.Image },
      { source: "/images/games/rougelike-turn-based/Untitled2.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "TURN BASED STRATEGY GAME",
    description: "An XCOM-like turn based strategy game",
    genres: ["Turn based Strategy", "Strategy"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    skills: ["Singleton", "Events", "Grid System", "Pathfinding"],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/kiet16071995/ARandomTBSG" },
      { source: LinkImageSource.ItchIo, url: "https://kiet16071995.itch.io/turn-based-strategy-game?secret=QhlFxamJL6wfaXl7VB9UE8rFz0" },
    ],
    media: [
      { source: "/images/games/turn-based-stratergy/Untitled.jpg", type: MediaType.Image },
      { source: "/images/games/turn-based-stratergy/Untitled1.jpg", type: MediaType.Image },
      { source: "/images/games/turn-based-stratergy/Untitled2.jpg", type: MediaType.Image },
      { source: "/images/games/turn-based-stratergy/Untitled3.jpg", type: MediaType.Image },
      { source: "/images/games/turn-based-stratergy/Untitled4.jpg", type: MediaType.Image },
      { source: "/images/games/turn-based-stratergy/Untitled5.jpg", type: MediaType.Image },
      { source: "/images/games/turn-based-stratergy/Untitled6.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "KITCHEN CHAOS",
    description: "A restaurant kind of game that can be played by yourself or with others.",
    genres: ["Simulation", "Multiplayer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    skills: ["Singleton", "Events","Scriptable Object", "Netcode for Unity", "Lobby", "Relay"],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/kiet16071995/KitchenChaosCM" },
      { source: LinkImageSource.ItchIo, url: "https://kiet16071995.itch.io/kitchen-chaos?secret=vv21m8jP3jD6CAn7xyzkfz0KoQ" },
    ],
    media: [
      { source: "/images/games/kitchen-chaos/Untitled.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled1.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled2.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled3.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled4.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled5.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled6.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled7.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled8.jpg", type: MediaType.Image },
      { source: "/images/games/kitchen-chaos/Untitled9.jpg", type: MediaType.Image },
    ],
  },
];