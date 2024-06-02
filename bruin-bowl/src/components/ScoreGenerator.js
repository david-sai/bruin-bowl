import { GAME_MODE_TIMES } from '../context/GameContext.js';

export const calculateScore = (remainingTime, gameMode) => {
    const maxTime = GAME_MODE_TIMES[gameMode];
    const score = (remainingTime * 10) / maxTime * 100;  // remainingTime returns deciseconds so convert them to seconds
    return Math.round(score);
};