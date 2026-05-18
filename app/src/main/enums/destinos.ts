export const Destinos = {
    PatioPrincipal: 'patio-principal',
    Igreja: 'igreja',
    Funeraria: 'funeraria',
    Mausoleus: 'mausoleus',
} as const;

export type Destinos = typeof Destinos[keyof typeof Destinos];
