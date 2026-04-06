
import { Product, Category } from './types';

export const MENU_CATEGORIES: Category[] = [
  { id: 'novidades', label: 'Novidades' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'combos', label: 'Combos' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'saladas', label: 'Saladas' },
  { id: 'sobremesas', label: 'Sobremesas' }
];

export const PRODUCTS: Product[] = [
  // Novidades
  {
    id: 'nov-1',
    name: 'Dourado Burguer',
    description: 'Hambúrguer de tilápia 150g, suculento e grelhado no ponto, com cream cheese cremoso, molho tártaro.',
    price: 29.90,
    image: 'https://cdn.accon.app/177231757792408612313131598781-1080p.jpg',
    category: 'novidades'
  },
  
  // Burgers
  {
    id: 'burg-1',
    name: 'Combo Brasinha (Kids)',
    description: 'Delicioso pão brioche levemente tostado, recheado com um suculento blend bovino artesanal.',
    price: 29.20,
    image: 'https://cdn.accon.app/176021721183424578773499216933-1080p.jpg',
    category: 'burgers'
  },
  {
    id: 'burg-2',
    name: 'Hambúrguer Raposão',
    description: 'Blend artesanal de Picanha (150g), acomodado em pão brioche, Queijo cheddar e maionese verde.',
    price: 29.90,
    image: 'https://cdn.accon.app/175657546447132539108321492627-1080p.jpg',
    category: 'burgers'
  },
  {
    id: 'burg-3',
    name: 'Hambúrguer Galo Doido',
    description: 'Blend artesanal de Frango (150g), acomodado em pão brioche, molho de mostarda e mel, Queijo cheddar.',
    price: 29.90,
    image: 'https://cdn.accon.app/175658077625122432624666671952-1080p.jpg',
    category: 'burgers'
  },

  // Combos
  {
    id: 'comb-1',
    name: 'Combo Ouro Preto',
    description: 'Blend artesanal de picanha (150g), pão australiano, maionese de bacon do Chef, cheddar, bacon, cebolas caramelizadas. Com fritas e Coca.',
    price: 42.10,
    image: 'https://cdn.accon.app/1732308522186995552412657682-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-2',
    name: 'Combo Serra do Curral',
    description: 'Blend artesanal de picanha (150g), pão de brioche, maionese verde, muçarela, crispy de cebola. Com fritas e Coca.',
    price: 35.10,
    image: 'https://cdn.accon.app/173230979644833203592827361583-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-3',
    name: 'Combo Poços de Caldas',
    description: 'Blend artesanal de picanha suína (150g), pão australiano, barbecue de goiabada, farofa de bacon, cheddar. Com Batata Crinkler e Refri.',
    price: 35.10,
    image: 'https://cdn.accon.app/17327314331102790861658853585-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-4',
    name: 'Combo Tiradentes',
    description: 'Blend de frango frito com purê de batatas (150g), pão de brioche, cream cheese, farofa de bacon, picles de tomate.',
    price: 35.10,
    image: 'https://cdn.accon.app/173273083464717292175078151573-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-5',
    name: 'Combo Serra da Canastra',
    description: 'Blend artesanal de picanha (150g), pão de brioche, maionese de bacon, queijo canastra, cebola roxa defumada.',
    price: 42.10,
    image: 'https://cdn.accon.app/173230858371448239885319053166-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-6',
    name: 'Combo Beagá',
    description: 'Blend de picanha (120g) artesanal, mussarela derretida, tiras crocantes de bacon e o exclusivo molho verde.',
    price: 21.20,
    image: 'https://cdn.accon.app/17317078579099748096520125185-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-7',
    name: 'Combo Tudo na Brasa',
    description: 'Dois blends de picanha (150g), pão australiano, maionese de bacon, bacon em dobro, cheddar derretido. Com Batata crinkle e Refri.',
    price: 52.10,
    image: 'https://cdn.accon.app/17247916863934051877613460986-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-8',
    name: 'Combo Ouro Branco',
    description: 'Blend Smash artesanal de Picanha (150g), pão de brioche, molho Chimichurri, mussarela, bacon crocante, tomate e cebola.',
    price: 35.10,
    image: 'https://cdn.accon.app/17323086965009039812713166686-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-9',
    name: 'Combo Galo Doido',
    description: 'Blend artesanal de Frango (150g), pão brioche, molho de mostarda e mel, cheddar, tomate e cebola roxa. Com Fritas e Refri.',
    price: 22.10,
    image: 'https://cdn.accon.app/17565857155422692877275403234-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-10',
    name: 'Combo Raposão',
    description: 'Blend artesanal de Picanha (150g), pão brioche, cheddar e maionese verde. Com Fritas e Refri.',
    price: 22.10,
    image: 'https://cdn.accon.app/17565860229328276497172289394-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-11',
    name: 'Combo Aleijadinho',
    description: 'Blend smash de Picanha (120g), pão australiano, maionese de bacon, bacon, alface, tomate, picles, cebola roxa. Com fritas e refri.',
    price: 32.10,
    image: 'https://cdn.accon.app/1724792745822670426609260591-1080p.jpg',
    category: 'combos'
  },
  {
    id: 'comb-12',
    name: 'Combo Inhotim',
    description: 'Blend vegetariano (150g), pão brioche, maionese vegana de caju, rúcula, cheddar, picles de tomate, cebola roxa. Com Batata Crinkle e Refri.',
    price: 42.10,
    image: 'https://cdn.accon.app/17327313415135637843736391814-1080p.jpg',
    category: 'combos'
  },

  // Pizzas
  {
    id: 'piz-1',
    name: 'Pizza Grande Calabresa',
    description: 'Molho ao sugo artesanal, mussarela, calabresa e cebola roxa, finalizada com orégano.',
    price: 59.90,
    image: 'https://cdn.accon.app/175796770054806310759284060952-1080p.jpg',
    category: 'pizzas'
  },
  {
    id: 'piz-2',
    name: 'Pizza Grande Marguerita',
    description: 'Molho ao sugo artesanal, mussarela, tomate cereja, manjericão fresco, parmesão e orégano.',
    price: 59.90,
    image: 'https://cdn.accon.app/17692884894766404945613718203-1080p.jpg',
    category: 'pizzas'
  },
  {
    id: 'piz-3',
    name: 'Pizza Grande Milho e Bacon',
    description: 'Molho ao sugo artesanal, mussarela, milho e bacon, finalizada com orégano.',
    price: 59.90,
    image: 'https://cdn.accon.app/17692880420965835370753894868-1080p.jpg',
    category: 'pizzas'
  },

  // Saladas
  {
    id: 'sal-1',
    name: 'Salada Tudo na Brasa',
    description: 'Combinação fresca de alface, rúcula e agrião, complementada com tomate seco e frango desfiado.',
    price: 39.90,
    image: 'https://acconstorage.blob.core.windows.net/acconpictures/7899_28913_435_-_Salada_Tu.jpg',
    category: 'saladas'
  },
  {
    id: 'sal-2',
    name: 'Salada de Palmito',
    description: 'Salada fresca com palmito, alface crocante, tomate suculento e finalizada com nosso molho especial.',
    price: 46.90,
    image: 'https://acconstorage.blob.core.windows.net/acconpictures/202002141430_OWe1_t.jpg',
    category: 'saladas'
  },

  // Sobremesas
  {
    id: 'sob-1',
    name: 'Pudim Individual',
    description: 'Clássico pudim de leite condensado, macio e cremoso, coberto com calda de caramelo dourada.',
    price: 14.90,
    image: 'https://cdn.accon.app/175694387447849322064917559616-1080p.jpg',
    category: 'sobremesas'
  },
  {
    id: 'sob-2',
    name: 'Panna Cotta',
    description: 'Sobremesa italiana leve e cremosa, com toque de baunilha e calda de morango.',
    price: 15.90,
    image: 'https://cdn.accon.app/176549683023612954786941618912-1080p.jpg',
    category: 'sobremesas'
  },
  {
    id: 'sob-3',
    name: 'Mousse de Maracujá',
    description: 'Mousse leve, cremoso e refrescante, coberto com calda de maracujá.',
    price: 14.90,
    image: 'https://cdn.accon.app/17569438549258563592277819263-1080p.jpg',
    category: 'sobremesas'
  },
  {
    id: 'sob-4',
    name: 'Serenata de Amor',
    description: 'Clássico bombom Serenata de Amor em porção individual.',
    price: 2.50,
    image: 'https://cdn.accon.app/17569438352202959359974154008-1080p.jpg',
    category: 'sobremesas'
  },
  {
    id: 'sob-5',
    name: 'Brownie',
    description: 'Clássico Brownie de chocolate individual, macio e intenso.',
    price: 10.50,
    image: 'https://cdn.accon.app/175694377563643227742378949396-1080p.jpg',
    category: 'sobremesas'
  }
];

export const CONTACT_INFO = {
  address: "Av. dos Engenheiros, 1104 - Castelo, Belo Horizonte - MG",
  phone: "+55 31 8401-8846",
  hours: "Terça a Domingo: 11:30 - 23:00",
  whatsapp: "553184018846",
  instagram: "https://www.instagram.com/tudonabrasabh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/tudonabrasa/?locale=pt_BR",
  ifood: "https://www.ifood.com.br/delivery/belo-horizonte-mg/tudo-na-brasa-churrascaria-castelo/e23aa9f7-77de-4596-96fa-686825550bd9",
  getin: "https://getinapp.com.br/"
};
