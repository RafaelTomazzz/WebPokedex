import { Elemento } from '../enums/elemento';
import { SegundoElemento } from '../enums/segundo-elemento';

export interface Pokemon {
    altura: number;
    codigo: number;
    descricao: String;
    elemento: Elemento;
    imagem: String;
    maxAtaque: number;
    maxDefesa: number;
    maxVelocidade: number;
    maxVida: number;
    minAtaque: number;
    minDefesa: number;
    minVelocidade: number;
    minVida: number;
    nome: String;
    peso: number;
    segundoElemento: SegundoElemento;
}
