import { Languages } from '@models/models.ts';

export function calculatePercentagesLanguages(languages: Languages) {
  const totalBytes = Object.values(languages).reduce((total, bytes) => total + bytes, 0);

  const percentages: Languages = {};

  for (const language in languages) {
    const percentage = (languages[language] / totalBytes) * 100;
    percentages[language] = parseFloat(percentage.toFixed(1));
  }

  return percentages;
}
