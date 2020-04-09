const selection = {};

selection.$ = document.querySelector.bind(document);
selection.$$ = document.querySelectorAll.bind(document);

export const s = selection;