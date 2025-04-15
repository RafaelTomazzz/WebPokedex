import { Elemento } from '../enums/elemento';
import { SegundoElemento } from '../enums/segundo-elemento';

export interface Pokemon {
    Id: number;
    Nome: String;
    Peso: number;
    Altura: number;
    Codigo: number;
    MinVida: number;
    MaxVida: number;
    MinAtaque: number;
    MaxAtaque: number;
    MinDefesa: number;
    MaxDefesa: number;
    MinVelocidade: number;
    MaxVelocidade: number;
    Elemento: Elemento;
    SegundoElemento: SegundoElemento;
    Descricao: String;
    Imagem: String;
}
