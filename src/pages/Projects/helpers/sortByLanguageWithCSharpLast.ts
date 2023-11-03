function sortByLanguageWithCSharpLast(array: any[]) {
  array.sort((a, b) => {
    if (a.language === 'C#' && b.language !== 'C#') {
      return 1; // Поместить объект с языком "C#" в конец
    } else if (a.language !== 'C#' && b.language === 'C#') {
      return -1; // Поместить объект с языком "C#" в начало
    } else {
      return a.language.localeCompare(b.language); // Сортировать по языку
    }
  });
}
