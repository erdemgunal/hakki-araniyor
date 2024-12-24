import gamesData from "@/data/games.json";

export default function sitemap() {
    const currentDate = new Date();
    
    const staticPages = [
        {
            url: 'https://hakki-araniyor.vercel.app',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: 'https://hakki-araniyor.vercel.app/about',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://hakki-araniyor.vercel.app/privacy',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://hakki-araniyor.vercel.app/rules',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://hakki-araniyor.vercel.app/terms',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ];

    const gamePages = gamesData.map((game) => ({
        url: `https://hakki-araniyor.vercel.app/games/${game.id}`,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 0.9,
    }));

    return [...staticPages, ...gamePages];
}