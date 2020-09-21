import abobora from '~/assets/products/abobora@2x.png';
import agua1l from '~/assets/products/agua1l@2x.png';
import azeite from '~/assets/products/azeite@2x.png';
import frito from '~/assets/products/frito@2x.png';
import graos from '~/assets/products/graos@2x.png';
import maça from '~/assets/products/maça@2x.png';
import nata from '~/assets/products/nata@2x.png';
import pacote from '~/assets/products/pacote@2x.png';
import pao from '~/assets/products/pao@2x.png';
import suco from '~/assets/products/suco@2x.png';
import vinho from '~/assets/products/vinho@2x.png';

export default [
  {
    id: 1,
    picture: agua1l,
    title: 'Água com Gás Mineral Natural Gaseificada 25 cl Castello PH de 20º',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 2,
  },
  {
    id: 2,
    picture: abobora,
    title: 'Abóbora',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 6,
  },
  {
    id: 3,
    picture: azeite,
    title: 'Azeite de Oliva Extra Virgem',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 2,
  },
  {
    id: 4,
    picture: frito,
    title: 'Croquete',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 5,
  },
  {
    id: 5,
    picture: graos,
    title: 'Grãos Diversos',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 1,
  },
  {
    id: 6,
    picture: maça,
    title: 'Maça Verde Kg',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 7,
  },
  {
    id: 7,
    picture: nata,
    title: 'Nata Parmalat',
    oldPrice: '10.99',
    newPrice: '9.80',
    amount: 8,
  },
  {
    id: 8,
    picture: pacote,
    title: 'Engradado',
    oldPrice: '2.99',
    newPrice: '1.80',
    amount: 12,
  },
  {
    id: 9,
    picture: pao,
    title: 'Pão',
    oldPrice: '32.99',
    newPrice: '30.80',
    amount: 7,
  },
  {
    id: 10,
    picture: suco,
    title: 'Suco de Manga 1L',
    oldPrice: '7.99',
    newPrice: '5.50',
    amount: 8,
  },
  {
    id: 11,
    picture: vinho,
    title: 'Vinho Português 1L',
    oldPrice: '29.99',
    newPrice: '12.50',
    amount: 3,
  },
];

export const categories = [
  {
    id: 1,
    name: 'Frutas',
    image: maça,
  },
  {
    id: 2,
    name: 'Horta e Couves',
    image: abobora,
  },
  {
    id: 3,
    name: 'Pão e Ovos',
    image: pao,
  },
  {
    id: 4,
    name: 'Sumos e Néctares',
    image: suco,
  },
  {
    id: 5,
    name: 'Vinhos',
    image: vinho,
  },
  {
    id: 6,
    name: 'Águas',
    image: agua1l,
  },
  {
    id: 7,
    name: 'Leite e Derivados',
    image: nata,
  },
  {
    id: 8,
    name: 'Mercearia',
    image: azeite,
  },
  {
    id: 9,
    name: 'Leguminosas',
    image: graos,
  },
  {
    id: 10,
    name: 'Produtos de Higiene Pessoal',
    image: pacote,
  },
];
