// brain-progresion.js

import getAnswer from '../index.js';
import getRundomNumber from '../utils.js';

const generateProgression = (progressionStart, progressionStep) => {
  const progressions = [progressionStart];
  const stepsCount = 10;
  for (let i = 1; i < stepsCount; i += 1) {
    progressions.push(progressionStart + (i * progressionStep));
  }
  return progressions;
};

const buildGame = () => {
  const progressionStep = getRundomNumber(1, 11);
  const progressionStart = getRundomNumber(1, 90);
  const hiddenNumberIndex = getRundomNumber(0, 10);
  const items = generateProgression(progressionStart, progressionStep);
  const result = items[hiddenNumberIndex];
  items.splice(hiddenNumberIndex, 1, '..');
  const question = items.join(' ');
  return [String(result), question];
};

const text = 'What number is missing in the progression?';

const playBrainProgression = () => {
  getAnswer(buildGame, text);
};
export default playBrainProgression;
