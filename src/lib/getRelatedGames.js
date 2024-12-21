import gamesData from '@/data/games.json';

export async function getRelatedGames(tags, currentGameId, limit=12){
    const relatedGames = gamesData.filter(game => 
        game.id !== currentGameId && 
        game.tags.some(tag => tags.includes(tag))
    );

    relatedGames.sort((a, b) => {
        const aTagMatches = a.tags.filter(tag => tags.includes(tag)).length;
        const bTagMatches = b.tags.filter(tag => tags.includes(tag)).length;
        return bTagMatches - aTagMatches;
    });

    return relatedGames.slice(0, limit);
}