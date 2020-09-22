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

export const menuCategories = [
  { id: 1, title: 'Animais', childrenCategories: [] },
  { id: 2, title: 'Bebé', childrenCategories: [{ id: 1, title: 'Teste' }] },
  {
    id: 3,
    title: 'Bebidas',
    childrenCategories: [
      { id: 1, title: 'Águas' },
      { id: 2, title: 'Cervejas' },
      { id: 3, title: 'Chá, Café e Achocolatados' },
      { id: 4, title: 'Destilados' },
    ],
  },
  { id: 4, title: 'Bioĺógicas', childrenCategories: [] },
  { id: 5, title: 'Cabazes', childrenCategories: [] },
  { id: 6, title: 'Charcutaria Alentejana', childrenCategories: [] },
  { id: 7, title: 'Charcutaria e Frescos', childrenCategories: [] },
  { id: 8, title: 'Citrinos', childrenCategories: [] },
  {
    id: 9,
    title: 'Congelados',
    childrenCategories: [{ id: 1, title: 'Teste' }],
  },
  { id: 10, title: 'Frutas da Época', childrenCategories: [] },
  { id: 11, title: 'Frutas', childrenCategories: [] },
  { id: 12, title: 'Gelados e Sobremesas', childrenCategories: [] },
  { id: 13, title: 'Gomas e Doces', childrenCategories: [] },
  {
    id: 14,
    title: 'Hortículas',
    childrenCategories: [
      { id: 1, title: 'Alfaces' },
      { id: 2, title: 'Cenouras' },
    ],
  },
  { id: 15, title: 'Leguminosas', childrenCategories: [] },
  { id: 16, title: 'Leite e Derivados', childrenCategories: [] },
  {
    id: 17,
    title: 'Limpeza',
    childrenCategories: [
      { id: 1, title: 'Produtos de Limpeza' },
      { id: 2, title: 'Desinfetantes' },
    ],
  },
  {
    id: 18,
    title: 'Mercearia',
    childrenCategories: [{ id: 1, title: 'Teste' }],
  },
  {
    id: 19,
    title: 'Pão e Ovos',
    childrenCategories: [
      { id: 1, title: 'Pão Francês' },
      { id: 1, title: 'Ovos da Granja' },
    ],
  },
  { id: 20, title: 'Produtos de Higiene Pessoal', childrenCategories: [] },
  { id: 21, title: 'Saúde e Bem Estar', childrenCategories: [] },
  { id: 22, title: 'Tropicais', childrenCategories: [] },
];
