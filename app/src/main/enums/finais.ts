export const Finais = {
    Bom: 'bom',
    Ruim: 'ruim',
} as const;

export type Finais = typeof Finais[keyof typeof Finais];
