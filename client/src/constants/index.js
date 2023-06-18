import { 
    avatar1, avatar2, banner1, banner2, features1, features2, features3, features4, kyc, verify, stake, fund, cap, participant, initial, team, staking, advisors, liquidity, ecosystem, marketing, privateSale,
    team1, team2, team3, team4, team5, team6, team7, team8,
    partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15,
    projectLive1, projectLive2, projectComplete1, projectComplete2, projectComplete3, projectComplete4, projectComplete5, icon1, icon2, icon3, icon4
} from "../assets"
import {FaTelegram, FaTwitter, FaMedium} from "react-icons/fa"

export const navlinks = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Projects", url: "projects" },
    { id: 3, title: "Roadmap", url: "roadmap" },
    { id: 4, title: "Blog", url: "blog" },
    { id: 5, title: "Earn", url: "earn" },
    { id: 6, title: "KYC", url: "kyc" },
]


export const featuredProjects = [
    { 
        id: 1, 
        banner: banner1, 
        avatar: avatar1, 
        title: 'Ukranian Village', 
        desc: 'lorem ipsum dolor kilor', 
        totalRaised: "$400.000 / $500.000", 
        progress: 30,
       
    },
    { 
        id: 1, 
        banner: banner2, 
        avatar: avatar2, 
        title: 'Shamans Jungle', 
        desc: 'lorem ipsum dolor kilor', 
        totalRaised: "$1.400.000 / $500.000", 
        progress: 60,
        
    },
]


export const features = [
    { 
        id: 1, 
        title: "Decentralized", 
        desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.", 
        icon: features1 
    },
    { 
        id: 2, 
        title: "Fair Allocations", 
        desc: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best.", 
        icon: features2 
    },
    { 
        id: 3, 
        title: "Autopilot Liquidity", 
        desc: "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently.", 
        icon: features3 
    },
    { 
        id: 4, 
        title: "Connect with the world", 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.", 
        icon: features4 
    },
]


export const verifications = [
    { 
        id: 1, 
        title: 'Submit KYC', 
        desc: "all the project have to be passed the KYC check.",
        img: kyc 
    },
    { 
        id: 2, 
        title: 'Verify Wallet', 
        desc: "once the KYC check passed, you can start verify your wallet.",
        img: verify 
    },
    { 
        id: 3, 
        title: 'Launch Project', 
        desc: "the last step is launch your project",
        img: stake 
    },
]


export const tokenomics = {
    projects: [
        { title: "Funded Projects", ['img']: fund, value: "359" },
        { title: "Unique Participants", ['img']: participant, value: "742" },
        { title: "Raised Capital", ['img']: cap, value: "17M" },
        { title: "nitial Market Cap", ['img']: initial, value: "32M" }
    ],
    allocations: [
        { title: "Team", ['img']: team, value: "7.5%" },
        { title: "Staking", ['img']: staking, value: "9.5%" },
        { title: "Advisors", ['img']: advisors, value: "10.0%" },
        { title: "Liquidity", ['img']: liquidity, value: "12.0%" },
        { title: "Ecosystem", ['img']: ecosystem, value: "16.33%" },
        { title: "Marketing", ['img']: marketing, value: "16.33%" },
        { title: "Private Sale", ['img']: privateSale, value: "30.0%" },
    ]
}


export const teams = [
    { id: 1, name: "Darrell Steward", position: "Senior Designer", avatar: team1 },
    { id: 2, name: "Kristin Watson", position: "Senior Designer", avatar: team2 },
    { id: 3, name: "Jacob Jones", position: "Senior Designer", avatar: team3 },
    { id: 4, name: "Jane Cooper", position: "Senior Designer", avatar: team4 },
    { id: 5, name: "Jenny Wilson", position: "Senior Designer", avatar: team5 },
    { id: 6, name: "Dianne Russell", position: "Senior Designer", avatar: team6 },
    { id: 7, name: "Devon Lane", position: "Senior Designer", avatar: team7 },
    { id: 8, name: "Robert Fox", position: "Senior Designer", avatar: team8 },
]


export const partners = [
    { id: 1, img: partner1 },
    { id: 2, img: partner2 },
    { id: 3, img: partner3 },
    { id: 4, img: partner4 },
    { id: 5, img: partner5 },
    { id: 6, img: partner6 },
    { id: 7, img: partner7 },
    { id: 8, img: partner8 },
    { id: 9, img: partner9 },
    { id: 10, img: partner10 },
    { id: 11, img: partner11 },
    { id: 12, img: partner12 },
    { id: 13, img: partner13 },
    { id: 14, img: partner14 },
    { id: 15, img: partner15 },
]


export const projectLives = [
    { 
        id: 1, 
        title: "Pixels Run", 
        price: "0.22 BUSD", 
        chain: icon1, 
        raised: "$30,999.70 / $100,000", 
        allocations: "500 BUSD Max", 
        participants: "5555 Max",
        sale: "90%", 
        img: projectLive1 
    },
    { 
        id: 2, 
        title: "Metaverse Ware V2", 
        price: "3.88 BUSD", 
        chain: icon2, 
        raised: "$220,485.00 / $350,000", 
        allocations: "500 BUSD Max", 
        sale: "95%",
        participants: "5555 Max", 
        img: projectLive2 
    },
]

export const projectComplete = [
    { 
        id: 1, 
        title: "KyberDyne",
        price: "0.59 BUSD", 
        chain: icon1, 
        endsIn: "3 Hours Ago",
        targetRaise: "100.000 BUSD", 
        progress: "92%",
        img: projectComplete1 
    },
    { 
        id: 2, 
        title: "Galaxy War",
        price: "0.89 BUSD", 
        chain: icon2, 
        endsIn: "9 Hours Ago",
        targetRaise: "510.000 BUSD", 
        progress: "82%",
        img: projectComplete2 
    },
    { 
        id: 3, 
        title: "Kingdom X",
        price: "0.33 BUSD", 
        chain: icon3, 
        endsIn: "3 Days Ago", 
        targetRaise: "100.000 BUSD", 
        progress: "70%",
        img: projectComplete3 
    },
    { 
        id: 4, 
        title: "Cyber City",
        price: "0.45 BUSD", 
        chain: icon4, 
        endsIn: "5 Days Ago", 
        targetRaise: "450.000 BUSD", 
        progress: "80%",
        img: projectComplete4 
    },
    { 
        id: 5, 
        title: "Child Class",
        price: "0.09 BUSD", 
        chain: icon4, 
        endsIn: "10 Hours Ago",
        targetRaise: "150.000 BUSD", 
        progress: "90%",
        img: projectComplete5 
    },
]


export const footers = {
    contact: [
        { id: 1, title: "Address", value: "1901 Thornridge Cir. Shiloh, Hawaii 81063" },
        { id: 2, title: "Phone", value: "+33 7 00 55 57 60" },
        { id: 3, title: "Email", value: "arbverse@support.com" },
    ],
    socials: [
        { Icon: FaTelegram },
        { Icon: FaTwitter },
        { Icon: FaMedium },
    ]
}

export const projectInfos = {
    chains: [
        { id: 1, chain: "Binance Smart Chain" },
        { id: 2, chain: "Ethereum" },
        { id: 3, chain: "Solana" },
        { id: 4, chain: "Arbitrum" },
        { id: 5, chain: "Kavalanche" },
        { id: 6, chain: "Polygon (Matic)" },
    ],
    statuses: [
        { id: 1, status: "Just an initial idea" },
        { id: 2, status: "Idea with White Paper" },
        { id: 3, status: "In early development" },
        { id: 4, status: "Ready to launch" },
    ],
    funds: [
        { id: 1, funded: "Yes" },
        { id: 2, funded: "No" },
    ],
    teams: [
        { id: 1, status: "Anon" },
        { id: 2, status: "Fully Public" },
        { id: 3, status: "mixed" },
    ]

}



export const roadmaps = {
    q1: [
        { id: 1, title: "Launch website", status: "open" },
        { id: 2, title: "Private sale", status: "open" },
        { id: 3, title: "Staking", status: "open" },
        { id: 4, title: "DEX Listing", status: "open" },
    ],
    q2: [
        { id: 1, title: "Launchpad release", status: "open" },
        { id: 2, title: "NFT Marketplace", status: "open" },
        { id: 3, title: "Game Launch", status: "open" },
        { id: 4, title: "Contract Audit", status: "open" },
    ],
    q3: [
        { id: 1, title: "Launch on arbpad", status: "open" },
        { id: 2, title: "Access for indie game developers", status: "open" },
        { id: 3, title: "New Staking Tiers", status: "open" },
        { id: 4, title: "More To Come", status: "open" },
    ],
}