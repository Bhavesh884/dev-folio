export type task = [{ text: string; keywords: string[] }];

export const getTasksTextWithHighlightedKeyword = (text: string, keyword: string[] | []) => {
  if (keyword.length > 0) {
    const escapeRegex = (str: string) =>
      str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special regex chars

    const regex = new RegExp(keyword.map(escapeRegex).join("|"), "gi");

    return text.replace(regex, (match) => `<span class="text-AAsecondary">${match}</span>`);
  }
  return text;
};
