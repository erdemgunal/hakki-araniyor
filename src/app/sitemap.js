import gamesData from "@/data/games.json";

export default function sitemap() {
    const currentDate = new Date();
    
    const staticPages = [
        {
            url: process.env.NEXT_PUBLIC_DOMAIN,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/rules`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/terms`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ];

    const gamePages = gamesData.map((game) => ({
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/games/${game.id}`,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 0.9,
    }));

    return [...staticPages, ...gamePages];
}