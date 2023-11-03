export function calculatePercentagesLanguages(languages: { [key: string]: number }) {
  const totalBytes = Object.values(languages).reduce((total, bytes) => total + bytes, 0);

  const percentages: { [key: string]: number } = {};

  for (const language in languages) {
    const percentage = (languages[language] / totalBytes) * 100;
    percentages[language] = parseFloat(percentage.toFixed(1));
  }

  return percentages;
}
