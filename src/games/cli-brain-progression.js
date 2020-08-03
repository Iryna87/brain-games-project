// brain-progresion.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const findProgression = (progressionBuild, hiddenNumber, progressionStep) => {
  let correctAnswer = 0;
  if (hiddenNumber === 9) {
    correctAnswer = progressionBuild[hiddenNumber - 1] + progressionStep;
  } else {
    correctAnswer = progressionBuild[hiddenNumber + 1] - progressionStep;
  }
  return correctAnswer;
};

const build = () => {
  const progressionStep = findRundomNumber(1, 11);
  const progressionStart = findRundomNumber(1, 90);
  const hiddenNumber = findRundomNumber(0, 10);
  const progressionBuild = [progressionStart + progressionStep];
  for (let i = 1; i < 10; i += 1) {
    progressionBuild[i] = progressionBuild[i - 1] + progressionStep;
  }
  progressionBuild.splice(hiddenNumber, 1, '..');
  const question = progressionBuild.join(' ');
  return [String(findProgression(progressionBuild, hiddenNumber, progressionStep)), question];
};

const task = 'What number is missing in the progression?';

const playBrainProgression = () => {
  runEngine(build, task);
};
export default playBrainProgression;
