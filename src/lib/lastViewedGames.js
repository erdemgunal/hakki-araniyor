const STORAGE_KEY = 'lastViewedGames';
const MAX_GAMES = 6;
const EXPIRY_TIME = 15 * 60 * 1000; // 15 minutes in milliseconds

const isExpired = (timestamp) => {
  return Date.now() - timestamp > EXPIRY_TIME;
};

export const getLastViewedGames = () => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  const games = JSON.parse(stored);
  // Filter out expired games
  const validGames = games.filter(game => !isExpired(game.timestamp));
  
  // If any games were expired, update storage
  if (validGames.length < games.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(validGames));
  }
  
  return validGames;
};

export const addLastViewedGame = (game) => {
  if (typeof window === 'undefined') return;
  
  const games = getLastViewedGames();
  const updatedGames = [
    { ...game, timestamp: Date.now() }, // Add timestamp
    ...games.filter(g => g.id !== game.id)
  ].slice(0, MAX_GAMES);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGames));
};