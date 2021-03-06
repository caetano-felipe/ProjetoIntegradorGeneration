import { Categoria } from './Categoria';

export class Produto {
    public id: number;
    public nome: string;
    public tipo: string;
    public valorHora: number;
    public localidade: string;
    public imagem: string;
    public categoria: Categoria;
}
