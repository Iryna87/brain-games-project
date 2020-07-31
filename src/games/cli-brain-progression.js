// brain-progresion.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const build = () => {
  const progressionStep = findRundomNumber(1, 11);
  const progressionStart = findRundomNumber(1, 90);
  const hiddenNumber = findRundomNumber(0, 10);
  const progressionBuild = [progressionStart + progressionStep];
  for (let i = 1; i < 10; i += 1) {
    progressionBuild[i] = progressionBuild[i - 1] + progressionStep;
  }
  progressionBuild.splice(hiddenNumber, 1, '..');
  const question = String(progressionBuild).replace(/[,]/g, ' ');
  let correctAnswer = 0;
  if (hiddenNumber === 0) {
    correctAnswer = progressionBuild[hiddenNumber + 1] - progressionStep;
  } if (hiddenNumber === 9) {
    correctAnswer = progressionBuild[hiddenNumber - 1] + progressionStep;
  } else {
    correctAnswer = progressionBuild[hiddenNumber + 1] - progressionStep;
  }
  const result = [String(correctAnswer), question];
  return result;
};
const task = 'What number is missing in the progression?';

const playBrainProgression = () => {
  runEngine(build, task);
};
export default playBrainProgression;
