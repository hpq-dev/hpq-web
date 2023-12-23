interface props {
    width: number
    height: number
    src: string
    images?: string[]
}

const store: props[] = [
    {
        width: 300,
        height: 300,
        src: '/projects/jobs.webp'
    },
    {
        width: 400,
        height: 400,
        src: '/projects/cars.webp'
    },
    {
        width: 400,
        height: 400,
        src: '/projects/house.webp',
        images: [
            '/projects/houses/0.png',
            '/projects/houses/1.png',
            '/projects/houses/2.png',
            '/projects/houses/3.png'
        ]
    },
    {
        width: 400,
        height: 300,
        src: '/projects/skins.webp'
    },
    {
        width: 400,
        height: 300,
        src: '/projects/bp.webp'
    },
    {
        width: 400,
        height: 300,
        src: '/projects/quest1.webp'
    },
    {
        width: 400,
        height: 300,
        src: '/projects/clan.webp'
    },
    {
        width: 500,
        height: 300,
        src: '/projects/skills.webp'
    },
    {
        width: 300,
        height: 500,
        src: '/projects/phone.webp'
    },
    {
        width: 300,
        height: 300,
        src: '/projects/bank.webp'
    },
    {
        width: 500,
        height: 300,
        src: '/projects/menu.webp'
    },
    {
        width: 500,
        height: 300,
        src: '/projects/poker_og.webp'
    },
    {
        width: 300,
        height: 800,
        src: '/projects/freq.webp'
    }
]

export default store