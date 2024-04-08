import { wireTmGrammars } from "monaco-editor-textmate";
import { Registry } from "monaco-textmate";
async function dispatchGrammars(scopeName) {
  switch (scopeName) {
    case "source.vue":
      return {
        format: "json",
        content: await import("./vue.tmLanguage.js")
      };
    case "source.ts":
      return {
        format: "json",
        content: await import("./typescript.tmLanguage.js")
      };
    case "source.js":
      return {
        format: "json",
        content: await import("./javascript.tmLanguage.js")
      };
    case "text.html.basic":
      return {
        format: "json",
        content: await import("./html.tmLanguage.js")
      };
    case "source.css":
      return {
        format: "json",
        content: await import("./css.tmLanguage.js")
      };
    default:
      return {
        format: "json",
        content: {
          scopeName: "source",
          patterns: []
        }
      };
  }
}
async function loadGrammars(monaco, editor) {
  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      const dispatch = await dispatchGrammars(scopeName);
      return JSON.parse(JSON.stringify(dispatch));
    }
  });
  const grammars = /* @__PURE__ */ new Map();
  grammars.set("vue", "source.vue");
  grammars.set("javascript", "source.js");
  grammars.set("typescript", "source.ts");
  grammars.set("css", "source.css");
  grammars.set("html", "text.html.basic");
  for (const lang of grammars.keys()) {
    monaco.languages.register({
      id: lang
    });
  }
  await wireTmGrammars(monaco, registry, grammars, editor);
}
export {
  loadGrammars
};
//# sourceMappingURL=grammars.js.map
