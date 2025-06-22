export declare const loadTheme: (editor: typeof import("monaco-editor-core").editor) => Promise<{
    dark: string;
    light: string;
}>;
export declare const loadGrammars: (monaco: typeof import("monaco-editor-core"), editor: import("monaco-editor-core").editor.IStandaloneCodeEditor) => Promise<void>;
