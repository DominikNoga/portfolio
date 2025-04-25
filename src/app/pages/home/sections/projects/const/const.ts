import { Project } from "../model/model";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'ISD-Conference App',
    description: `Collaborative app developed with a team of 4 during my studies. I led the group as the only person experienced in Angular, setting up the project structure, performing code reviews, and mentoring others. The app supports organizing academic conferences with a clean UI and role-based access.`,
    img: 'isd.png',
    links: {
      repo: 'https://github.com/DominikNoga/ISD-conference-web-app',
      app: 'https://isd-conference-2025.onrender.com/',
    },
  },
  {
    id: 2,
    name: 'CSS Challenges Gallery',
    description: `A personal project inspired by the 100 Days CSS challenge (100dayscss.com). I created this app to improve and showcase my mastery of core CSS concepts. Each challenge is a standalone visual task focused on animations, layout, and design consistency.`,
    img: 'css-challenges.png',
    links: {
      repo: 'https://github.com/DominikNoga/css-challenges',
      app: 'https://css-challenge-gallery.onrender.com/',
    },
  },
  {
    id: 3,
    name: 'Diep.io Multiplayer Game',
    description: `A study project recreating a multiplayer experience similar to Diep.io. It runs on a local network, with a backend written in Python and a TypeScript frontend. Real-time gameplay is enabled through WebSocket communication.`,
    img: 'diep.png',
    links: {
      repo: 'https://github.com/DominikNoga/diep.io-online/',
      app: '',
    },
  },
  {
    id: 4,
    name: 'Gift Drawer',
    description: `A Secret Santa planner for friend groups. Users can create an event, invite participants, and draw names anonymously. Each participant can add wishlists with links to help their Secret Santa choose a gift.`,
    img: 'gift-drawer.png',
    links: {
      repo: 'https://github.com/DominikNoga/gift-drawer-react',
      app: 'https://gift-drawer.cyclic.app/',
    },
  },
];
