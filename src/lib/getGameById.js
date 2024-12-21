import gamesData from '@/data/games.json';

export async function getGameById(id) {
    return new Promise((resolve) => {
        if (!/^\d+$/.test(id)) {
            resolve(null);
            return;
        }
        const game = gamesData.find(game => game.id === parseInt(id));
        resolve(game);
    });
}