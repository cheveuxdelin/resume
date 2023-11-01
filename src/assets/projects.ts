type project = {
    name: string;
    description: string;
    image: string;
    url?: string;
    githubUrl: string;
};

const sampleImgUrl = "https://images.pexels.com/photos/891607/pexels-photo-891607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const projects: project[] = [
    {
        name: "portfolio",
        description: "This website!",
        image: sampleImgUrl,
        url: "https://portfolio-orcin-two-43.vercel.app",
        githubUrl: "https://github.com/cheveuxdelin/portfolio",
    },
    {
        name: "Spotify Stats",
        description: "Listening stats of spotfy!",
        image: sampleImgUrl,
        url: "https://spotify-stats-one.vercel.app/",
        githubUrl: "https://github.com/cheveuxdelin/spotify-stats",
    },
    {
        name: "Poochiechat",
        description: "A Chat App!",
        image: sampleImgUrl,
        url: "https://poochiechat.vercel.app/",
        githubUrl: "https://github.com/cheveuxdelin/poochiechat",
    },
    {
        name: "Pathfinding Visualizer",
        description: "Visualizing Dijkstra!",
        image: sampleImgUrl,
        url: "https://pathfinding-theta.vercel.app",
        githubUrl: "https://github.com/cheveuxdelin/pathfinding",
    },
    {
        name: "Keychain",
        description: "Powerful & safe CLI Password-Manager!",
        image: sampleImgUrl,
        githubUrl: "https://github.com/cheveuxdelin/keychain",
    },
    {
        name: "Cipher",
        description: "Online Api and Encryption Service!",
        image: sampleImgUrl,
        url: "https://cipher-e7737.web.app",
        githubUrl: "https://github.com/cheveuxdelin/cipher",
    },
    {
        name: "Minesweeper",
        description: "A minesweeper game!",
        image: sampleImgUrl,
        url: "https://minesweeper-svelte-nine.vercel.app/",
        githubUrl: "https://github.com/cheveuxdelin/minesweeper-svelte",
    },
    {
        name: "Tapiclipboard",
        description: "Powerful CLI clipboard enhancer!",
        image: sampleImgUrl,
        githubUrl: "https://github.com/cheveuxdelin/tapiclipboard",
    },
    {
        name: "Tapiworlde",
        description: "Yet another worlde!",
        image: sampleImgUrl,
        githubUrl: "https://github.com/cheveuxdelin/tapiwordle",
    },
];

export default projects;