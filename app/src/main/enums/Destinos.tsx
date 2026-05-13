export const Destinos = {
    PatioPrincipal: 'patio-principal',
    Igreja: 'igreja',
    Necroterio: 'necroterio',
    Mausoleus: 'mausoleus',
} as const;

export type Destinos = typeof Destinos[keyof typeof Destinos];
