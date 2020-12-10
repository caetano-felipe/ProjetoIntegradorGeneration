import { Produto } from './Produto';

export class Categoria {
    public id: number;
    public nome: string;
    public descricao: string;
    public ramo: string;
    public produto: Produto[];
}
