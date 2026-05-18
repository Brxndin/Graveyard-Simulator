export const AssombracaoTipo = {
    Vampiro: 1,
    Fantasma: 2,
    Zumbi: 3,
    Esqueleto: 4,
    Demonio: 5,
} as const;

export type AssombracaoTipo = typeof AssombracaoTipo[keyof typeof AssombracaoTipo];

export interface AssombracaoProps {
    id?: number;
    nome: string;
    tipo: AssombracaoTipo,
    mausoleu: null,
}

export class Assombracao {
    private props: AssombracaoProps;

    constructor(props: AssombracaoProps) {
        this.validaNome(props.nome);

        this.props = props;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get tipo(): AssombracaoTipo {
        return this.props.tipo;
    }

    set id(id: number) {
        this.props.id = id;
    }

    set nome(nome: string) {
        this.validaNome(nome);

        this.props.nome = nome;
    }

    set tipo(tipo: AssombracaoTipo) {
        this.props.tipo = tipo;
    }

    public validaNome(nome: string) {
        if (nome.length > 200) {
            throw new Error('O nome não pode ter mais de 200 caracteres!');
        }
    }
}
