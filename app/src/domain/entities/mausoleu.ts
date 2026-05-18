export interface MausoleuProps {
    id?: number | undefined;
    nome: string;
    lugares: number;
}

export class Mausoleu {
    private props: MausoleuProps;

    constructor(props: MausoleuProps) {
        this.props = props;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get lugares(): number {
        return this.props.lugares;
    }

    set id(valor: number) {
        this.props.id = valor;
    }

    set nome(valor: string) {
        if (valor.length > 200) {
            throw new Error('O nome não pode ter mais de 200 caracteres!');
        }

        this.props.nome = valor;
    }

    set lugares(valor: number) {
        // criar validação do número máximo de lugares
        // vai servir pro upgrade

        this.props.lugares = valor;
    }
}
