import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "BÙI TUẤN KIỆT",
  role: "YOUR_ROLE",
  introduction: "Aspiring game developer with a passion for creating interactive experiences. I specialize in developing games using Unity",
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
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/buituankiet16071995-dotcom/RougelikeBTK" },
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
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];