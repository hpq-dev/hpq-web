type props =  {
    title: string
    width: number
    height: number
    src: string
    description: string
    images?: string[]
    link?: string
}

const store: props[] = [
    {
        link: 'https://restaurant.hpq.ro/',
        title: 'restaurant',
        width: 600,
        height: 400,
        src: '/projects/restaurant.png',
        description: ''
    },
    {
        link: 'https://en.nextwp.ro/',
        title: 'nextwp.ro',
        width: 600,
        height: 500,
        src: '/projects/nextwp.png',
        description: ''
    },
    {
        link: 'https://atlantis.mp/',
        title: 'atlantis.mp',
        width: 600,
        height: 500,
        src: '/projects/atlantis.png',
        description: ''
    },
    {
        title: 'Vehicles UI (GTA V)',
        width: 400,
        height: 400,
        description: `Dynamic and immersive, our GTA 5 RP server boasts a cutting-edge personal vehicle system. Players can choose from a diverse fleet of vehicles, each with unique attributes. Whether cruising in luxury cars or tearing through the city in high-speed sports cars, the system offers an authentic and customizable experience. With realistic fuel consumption, maintenance, and an economy-driven market, players engage in a true-to-life virtual world. The server's roleplay environment enhances interaction, creating a thrilling and realistic GTA 5 experience for all players.`,
        src: '/projects/cars.webp',
        images: [
            '/projects/cars/0.png',
        ]
    },
    {
        title: 'House UI (GTA V)',
        width: 400,
        height: 400,
        description: `Experience the epitome of realism in our GTA 5 RP server's housing system. Immerse yourself in a dynamic virtual world with a diverse range of customizable homes. From sleek apartments to luxurious mansions, players can personalize their living spaces, fostering a unique roleplay experience. Engage in a thriving in-game real estate market, where buying, selling, and even decorating homes impact the virtual economy. With realistic property management features, players navigate mortgages, upkeep, and unique neighborhood dynamics. Elevate your GTA 5 roleplay adventure with our intricately designed housing system, offering unparalleled immersion and endless possibilities.`,
        src: '/projects/house.webp',
        images: [
            '/projects/houses/0.png',
            '/projects/houses/1.png',
            '/projects/houses/2.png',
            '/projects/houses/3.png'
        ]
    },
    {
        title: 'Skins UI (GTA V)',
        width: 400,
        height: 300,
        description: ``,
        src: '/projects/skins.webp'
    },
    {
        title: 'Battle Pass UI (GTA V)',
        width: 400,
        height: 300,
        description: `Dive into the heart of action with our GTA 5 RP server's innovative Battle Pass system. Elevate your roleplay experience by completing challenges, missions, and events to unlock exclusive rewards. Whether it's unique vehicles, weaponry, or character enhancements, the Battle Pass adds depth and excitement to the virtual realm. Engage in intense competitions, collaborate with fellow players, and climb the ranks to showcase your prowess. The dynamic Battle Pass not only enhances gameplay but also fuels the immersive narrative, making your GTA 5 RP journey unforgettable. Unleash your potential, conquer challenges, and reap the rewards in this thrilling and rewarding server feature.`,
        src: '/projects/bp.webp',
        images: [
            '/projects/bp/0.png',
            '/projects/bp/1.png',
            '/projects/bp/2.png',
            '/projects/bp/3.png',
            '/projects/bp/4.png',
            '/projects/bp/5.png'
        ]
    },
    {
        title: 'Special Quest UI (GTA V)',
        width: 400,
        height: 300,
        description: `Embark on enchanting quests with our GTA 5 RP server's unique 'Grandma's Magic' system. Granny, the mystical NPC, bestows whimsical missions upon players, weaving a magical narrative. Engage in fantastical adventures, from mystical artifact hunts to potion brewing challenges, earning mystical rewards. Grandma's Magic adds a touch of whimsy to the roleplay, offering a delightful blend of fantasy and crime-infused storytelling. Immerse yourself in a world where the ordinary meets the extraordinary, as Granny's quests unlock hidden realms and fantastical surprises, making your GTA 5 RP journey truly enchanting`,
        src: '/projects/quest1.webp',
        images: [
            '/projects/quest/0.png',
            '/projects/quest/1.png',
            '/projects/quest/2.png'
        ]
    },
    {
        title: 'Clan UI (GTA V)',
        width: 400,
        height: 300,
        description: `Forge alliances and dominate the city in our GTA 5 RP server's Clan System. Unleash the power of organized gameplay by creating or joining clans, where camaraderie and strategy reign supreme. Engage in turf wars, heists, and exclusive missions with your clanmates, fostering a dynamic and immersive roleplay experience. Customize your clan's identity, from emblems to hideouts, and establish your presence in the virtual realm. Rise through the ranks, accumulate territory, and leave your mark on the city's criminal landscape. The Clan System transforms GTA 5 RP into a collaborative adventure, blending strategy, teamwork, and intense storytelling for an unparalleled gaming experience.`,
        src: '/projects/clan.webp',
        images: [
            '/projects/clan/0.png',
            '/projects/clan/1.png',
            '/projects/clan/2.png',
            '/projects/clan/3.png',
            '/projects/clan/4.png',
            '/projects/clan/5.png'
        ]
    },
    {
        title: 'Skills UI (GTA V)',
        width: 500,
        height: 300,
        description: ``,
        src: '/projects/skills.webp'
    },
    {
        title: 'Bank UI (GTA V)',
        width: 300,
        height: 300,
        description: `Immerse yourself in financial intrigue with our GTA 5 RP server's cutting-edge Bank System. Experience a realistic virtual banking environment where players can deposit, withdraw, and transfer in-game currency securely. Engage in dynamic financial activities such as loans, investments, and heist planning, shaping the city's economic landscape. With robust security measures, the Bank System adds depth to the roleplay, allowing players to navigate financial challenges, accumulate wealth, or engage in thrilling heists. Explore a virtual world where every transaction counts, and financial strategy becomes a crucial aspect of your GTA 5 RP journey.`,
        src: '/projects/bank.webp',
        images: [
            '/projects/bank/0.png',
            '/projects/bank/1.png',
            '/projects/bank/2.png',
            '/projects/bank/3.png',
            '/projects/bank/4.png',
            '/projects/bank/5.png'
        ]
    },
    {
        title: 'Menu UI (GTA V)',
        width: 500,
        height: 300,
        description: `Dive into seamless immersion with our GTA 5 RP server's Main Menu System. Experience intuitive navigation and easy access to a myriad of roleplay features. From character customization to property management, the Main Menu is your gateway to a dynamic virtual world. Effortlessly explore job opportunities, engage in server events, and manage your in-game assets with just a few clicks. The Main Menu System streamlines the player experience, ensuring a user-friendly interface that enhances the overall enjoyment of your GTA 5 RP adventure. Maximize your roleplay potential with a centralized hub that puts the city at your fingertips.`,
        src: '/projects/menu.webp',
        images: [
            '/projects/menu/0.png',
            '/projects/menu/1.png',
            '/projects/menu/2.png',
            '/projects/menu/3.png'
        ]
    },
    {
        title: 'Poker UI (GTA V)',
        width: 500,
        height: 300,
        description: `Elevate the stakes in our GTA 5 RP server with the immersive Poker System. Engage in thrilling card games within the virtual city, showcasing your strategic prowess. Whether it's high-stakes tournaments or casual rounds with fellow players, the Poker System offers a realistic and dynamic gambling experience. Customize your avatar, read opponents, and partake in virtual betting, adding an exciting layer to the roleplay narrative. With an authentic atmosphere and seamless gameplay, the Poker System creates a vibrant social space within the server, where luck and skill intertwine for an unforgettable GTA 5 RP gaming experience.`,
        src: '/projects/poker_og.webp'
    }
]

export default store