export function sortByLanguageWithCSharpLast<T extends { [K in keyof T]: string }>(
  array: T[],
  languageField: keyof T,
  cSharpValue: string,
): T[] {
  return array.sort((a, b) => {
    if (a[languageField] === cSharpValue && b[languageField] !== cSharpValue) {
      return 1;
    } else if (a[languageField] !== cSharpValue && b[languageField] === cSharpValue) {
      return -1;
    } else {
      return a[languageField].localeCompare(b[languageField]);
    }
  });
}
