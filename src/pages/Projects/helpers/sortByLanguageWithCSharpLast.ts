import { Project } from '../types.ts';

export function sortByLanguageWithCSharpLast(array: Project[], field: keyof Project, value: string) {
  return array.sort((a, b) => {
    if (a[field] === value && b[field] !== value) {
      return 1;
    } else if (a[field] !== value && b[field] === value) {
      return -1;
    } else {
      const fieldA = String(a[field]);
      const fieldB = String(b[field]);
      return fieldA.localeCompare(fieldB);
    }
  });
}
