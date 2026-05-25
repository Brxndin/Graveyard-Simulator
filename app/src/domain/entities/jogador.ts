export interface JogadorProps {
    id?: number;
    energia: number;
    dinheiro: number;
    energiaMaxima: number;
    diaAtual: number;
    assombrometroAtual: number;
}

export class Jogador {
    private props: JogadorProps = {
        energia: 0,
        dinheiro: 0,
        energiaMaxima: 0,
        diaAtual: 0,
        assombrometroAtual: 0,
    };

    constructor(props: JogadorProps) {
        this.id = props.id;
        this.energiaMaxima = props.energiaMaxima;
        this.energia = props.energia;
        this.dinheiro = props.dinheiro;
        this.diaAtual = props.diaAtual;
        this.assombrometroAtual = props.assombrometroAtual;
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

    get diaAtual(): number {
        return this.props.diaAtual;
    }

    get assombrometroAtual(): number {
        return this.props.assombrometroAtual;
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

    set diaAtual(diaAtual: number) {
        this.props.diaAtual = diaAtual;
    }

    set assombrometroAtual(assombrometroAtual: number) {
        this.validaAssombrometroAtual(assombrometroAtual);

        this.props.assombrometroAtual = assombrometroAtual;
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
            throw new Error('A energia máxima não pode ser menor do que a energia atual!');
        }
    }

    public validaAssombrometroAtual(assombrometroAtual: number) {
        if (assombrometroAtual < 0) {
            throw new Error('O assombrômetro atual não pode ser menor do que 0!');
        }

        if (assombrometroAtual > 100) {
            throw new Error('O assombrômetro atual não pode ser maior do que 100!');
        }
    }

    public varrer(): string {
        if (this.energia < 10) {
            return 'Você tenta, mas está muito cansado para fazer qualquer coisa.';
        }

        this.energia -= 10;
        this.dinheiro += 100;

        return 'Você varre as folhas secas do pátio, que inevitavelmente ficará sujo novamente com a força do tempo e do vento.';
    }

    public acenderVelas(): string {
        if (this.energia < 5) {
            return 'Você tenta, mas está muito cansado para fazer qualquer coisa.';
        }

        this.energia -= 5;
        this.dinheiro += 50;

        return 'Você acende as velas e fica olhando elas dançarem, criando diversas sombras nos arredores que parecem vivas.';
    }

    public exorcizar(): string {
        if (this.energia < 80) {
            return 'Você tenta, mas está muito cansado para fazer qualquer coisa.';
        }

        this.energia -= 80;
        this.dinheiro += 300;

        return 'Você começa a ajudar o padre no exorcismo. Apesar de muito assustado, você segue o que lhe é dito e, no meio das vozes graves e gritos de agonia, o exorcismo é finalizado com sucesso.';
    }

    public descansar(medoCausado: number): string {
        this.energia = this.energiaMaxima;
        this.diaAtual += 1;
        this.assombrometroAtual += medoCausado;

        return 'Você descansa e se prepara para mais uma longa noite em meio aos espíritos.';
    }

    public isGameOver(): boolean {
        return this.assombrometroAtual >= 100;
    }

    public isVencedor(): boolean {
        return this.diaAtual >= 20;
    }
}
