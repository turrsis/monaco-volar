const loadTheme = async (editor) => {
  const themes = await import("./index2.js");
  return themes.loadTheme(editor);
};
const loadGrammars = async (monaco, editor) => {
  const grammars = await import("./grammars.js");
  return grammars.loadGrammars(monaco, editor);
};
export {
  loadGrammars,
  loadTheme
};
//# sourceMappingURL=index.js.map
