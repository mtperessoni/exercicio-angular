import {UnidadeMedida} from './itemEnum';

export class Item {
    id: number = 0;
    nome: string = '';
    unidadeMedida: UnidadeMedida = UnidadeMedida.Litro;
    quantidade: number = 0;
    preco: number = 0.0;
    perecivel: boolean = false;
    dataValidade: Date;
    dataFabricacao: Date = new Date();
}