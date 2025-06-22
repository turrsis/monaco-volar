import { Uri, editor, IDisposable } from "monaco-editor-core";
export declare function debounce(fn: Function, n?: number): (...args: any[]) => void;
export declare function getOrCreateModel(uri: Uri, lang: string | undefined, value: string): editor.ITextModel;
export declare function asDisposable(disposables: IDisposable[]): IDisposable;
export declare function disposeAll(disposables: IDisposable[]): void;
export declare function createDisposable(cb: () => void): IDisposable;
export declare function normalizePath(path: string): string;
