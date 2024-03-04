export interface SnackActionButton {
  text: string,
  onclick: Function,
}

export interface Snack {
  text: string,
  timeout?: number, // ignored if keepOpen is true
  keepOpen?: boolean,
  // color?: string|undefined,
  actions?: SnackActionButton[],
}
