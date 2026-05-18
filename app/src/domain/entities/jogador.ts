export interface JogadorProps {
    id?: number;
    energia: number;
    dinheiro: number;
    energiaMaxima: number;
}

export class Jogador {
    private props: JogadorProps = {
        energia: 0,
        dinheiro: 0,
        energiaMaxima: 0,
    };

    constructor(props: JogadorProps) {
        this.id = props.id;
        this.energiaMaxima = props.energiaMaxima;
        this.energia = props.energia;
        this.dinheiro = props.dinheiro;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get energia(): number {
        return this.props.energia;
    }

    get dinheiro(): number {
        return this.props.dinheiro;
    }

    get energiaMaxima(): number {
        return this.props.energiaMaxima;
    }

    set id(id: number | undefined) {
        this.props.id = id;
    }

    set energia(energia: number) {
        this.validaEnergia(energia);

        this.props.energia = energia;
    }

    set dinheiro(dinheiro: number) {
        this.validaDinheiro(dinheiro);

        this.props.dinheiro = dinheiro;
    }

    set energiaMaxima(energiaMaxima: number) {
        this.validaEnergiaMaxima(energiaMaxima);

        this.props.energiaMaxima = energiaMaxima;
    }

    public validaEnergia(energia: number) {
        if (energia < 0) {
            throw new Error('Você está muito cansado e precisa descansar!');
        }

        if (energia > (this.energiaMaxima ?? 0)) {
            throw new Error('A energia não pode ultrapassar a energia máxima!');
        }
    }

    public validaDinheiro(dinheiro: number) {
        if (dinheiro < 0) {
            throw new Error('Você não tem dinheiro suficiente!');
        }
    }

    public validaEnergiaMaxima(energiaMaxima: number) {
        if (energiaMaxima < 0) {
            throw new Error('A energia máxima não pode ser menor do que 0!');
        }

        if (energiaMaxima < (this.energia ?? 0)) {
            console.log(energiaMaxima, (this.energia ?? 0))

            throw new Error('A energia máxima não pode ser menor do que a energia atual!');
        }
    }
}
