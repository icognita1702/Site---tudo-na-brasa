import { Product, Category } from "./types";

const fixMojibake = (value: string) => {
  if (!/[ÃÂâ]/.test(value)) {
    return value;
  }

  try {
    const bytes = Uint8Array.from(
      Array.from(value),
      (character) => character.charCodeAt(0) & 0xff,
    );
    const decoded = new TextDecoder("utf-8").decode(bytes);

    return decoded.includes("\ufffd") ? value : decoded;
  } catch {
    return value;
  }
};

const RAW_MENU_CATEGORIES: Category[] = [
  { id: "novidades", label: "Novidades" },
  { id: "burgers", label: "Burgers" },
  { id: "combos", label: "Combos" },
  { id: "pizzas", label: "Pizzas" },
  { id: "massas", label: "Massas e Gratinados" },
  { id: "refeicoes", label: "Refeições com Churrasco" },
  { id: "porcoes", label: "Porções e Petiscos" },
  { id: "carnes", label: "Carnes na Brasa" },
  { id: "executivos", label: "Executivos" },
  { id: "saladas", label: "Saladas" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "caldos", label: "Caldos" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "bebidas", label: "Bebidas" },
];

const RAW_PRODUCTS: Product[] = [
  // Novidades
  {
    id: "nov-1",
    name: "Dourado Burguer",
    description:
      "Hambúrguer de tilápia 150g, suculento e grelhado no ponto, com cream cheese cremoso, molho tártaro.",
    price: 29.9,
    image: "https://cdn.accon.app/177231757792408612313131598781-1080p.jpg",
    category: "novidades",
  },

  // Burgers
  {
    id: "burg-1",
    name: "Combo Brasinha (Kids)",
    description:
      "Delicioso pão brioche levemente tostado, recheado com um suculento blend bovino artesanal.",
    price: 29.2,
    image: "https://cdn.accon.app/176021721183424578773499216933-1080p.jpg",
    category: "burgers",
  },
  {
    id: "burg-2",
    name: "Hambúrguer Raposão",
    description:
      "Blend artesanal de Picanha (150g), acomodado em pão brioche, Queijo cheddar e maionese verde.",
    price: 29.9,
    image: "https://cdn.accon.app/175657546447132539108321492627-1080p.jpg",
    category: "burgers",
  },
  {
    id: "burg-3",
    name: "Hambúrguer Galo Doido",
    description:
      "Blend artesanal de Frango (150g), acomodado em pão brioche, molho de mostarda e mel, Queijo cheddar.",
    price: 29.9,
    image: "https://cdn.accon.app/175658077625122432624666671952-1080p.jpg",
    category: "burgers",
  },

  // Combos
  {
    id: "comb-1",
    name: "Combo Ouro Preto",
    description:
      "Blend artesanal de picanha (150g), pão australiano, maionese de bacon do Chef, cheddar, bacon, cebolas caramelizadas. Com fritas e Coca.",
    price: 42.1,
    image: "https://cdn.accon.app/1732308522186995552412657682-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-2",
    name: "Combo Serra do Curral",
    description:
      "Blend artesanal de picanha (150g), pão de brioche, maionese verde, muçarela, crispy de cebola. Com fritas e Coca.",
    price: 35.1,
    image: "https://cdn.accon.app/173230979644833203592827361583-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-3",
    name: "Combo Poços de Caldas",
    description:
      "Blend artesanal de picanha suína (150g), pão australiano, barbecue de goiabada, farofa de bacon, cheddar. Com Batata Crinkler e Refri.",
    price: 35.1,
    image: "https://cdn.accon.app/17327314331102790861658853585-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-4",
    name: "Combo Tiradentes",
    description:
      "Blend de frango frito com purê de batatas (150g), pão de brioche, cream cheese, farofa de bacon, picles de tomate.",
    price: 35.1,
    image: "https://cdn.accon.app/173273083464717292175078151573-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-5",
    name: "Combo Serra da Canastra",
    description:
      "Blend artesanal de picanha (150g), pão de brioche, maionese de bacon, queijo canastra, cebola roxa defumada.",
    price: 42.1,
    image: "https://cdn.accon.app/173230858371448239885319053166-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-6",
    name: "Combo Beagá",
    description:
      "Blend de picanha (120g) artesanal, mussarela derretida, tiras crocantes de bacon e o exclusivo molho verde.",
    price: 21.2,
    image: "https://cdn.accon.app/17317078579099748096520125185-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-7",
    name: "Combo Tudo na Brasa",
    description:
      "Dois blends de picanha (150g), pão australiano, maionese de bacon, bacon em dobro, cheddar derretido. Com Batata crinkle e Refri.",
    price: 52.1,
    image: "https://cdn.accon.app/17247916863934051877613460986-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-8",
    name: "Combo Ouro Branco",
    description:
      "Blend Smash artesanal de Picanha (150g), pão de brioche, molho Chimichurri, mussarela, bacon crocante, tomate e cebola.",
    price: 35.1,
    image: "https://cdn.accon.app/17323086965009039812713166686-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-9",
    name: "Combo Galo Doido",
    description:
      "Blend artesanal de Frango (150g), pão brioche, molho de mostarda e mel, cheddar, tomate e cebola roxa. Com Fritas e Refri.",
    price: 22.1,
    image: "https://cdn.accon.app/17565857155422692877275403234-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-10",
    name: "Combo Raposão",
    description:
      "Blend artesanal de Picanha (150g), pão brioche, cheddar e maionese verde. Com Fritas e Refri.",
    price: 22.1,
    image: "https://cdn.accon.app/17565860229328276497172289394-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-11",
    name: "Combo Aleijadinho",
    description:
      "Blend smash de Picanha (120g), pão australiano, maionese de bacon, bacon, alface, tomate, picles, cebola roxa. Com fritas e refri.",
    price: 32.1,
    image: "https://cdn.accon.app/1724792745822670426609260591-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-12",
    name: "Combo Inhotim",
    description:
      "Blend vegetariano (150g), pão brioche, maionese vegana de caju, rúcula, cheddar, picles de tomate, cebola roxa. Com Batata Crinkle e Refri.",
    price: 42.1,
    image: "https://cdn.accon.app/17327313415135637843736391814-1080p.jpg",
    category: "combos",
  },
  {
    id: "comb-13",
    name: "Combo Tudo na Brasa em Dobro",
    description: "Escolha seu Combo Tudo na Brasa em Dobro.",
    price: 84.2,
    image: "https://cdn.accon.app/17582876485901786047357739069-1080p.jpg",
    category: "combos",
  },

  // Pizzas
  {
    id: "piz-gigante",
    name: "Gigantes 8 Fatias",
    description:
      "Escolha o sabor de sua pizza GG 35 cm. Acompanha Refrigerante.",
    price: 89.9,
    image: "https://cdn.accon.app/17559829709915905722256618262-1080p.jpg",
    category: "pizzas",
  },
  {
    id: "piz-grande",
    name: "Grandes 6 Fatias",
    description: "Escolha o sabor de sua pizza Grande 30 cm.",
    price: 69.9,
    image: "https://cdn.accon.app/172366903756805280641759351101-1080p.jpg",
    category: "pizzas",
  },
  {
    id: "piz-media",
    name: "Médias 4 Fatias",
    description: "Escolha o sabor de sua pizza média 25 cm.",
    price: 49.9,
    image: "https://cdn.accon.app/172366881049649254992369708983-1080p.jpg",
    category: "pizzas",
  },
  {
    id: "piz-doce",
    name: "Pizzas Doces",
    description: "Escolha o sabor da sua pizza doce.",
    price: 45.9,
    image: "https://cdn.accon.app/176825807788008273633949766901-1080p.jpg",
    category: "pizzas",
  },
  {
    id: "piz-1",
    name: "Pizza Grande Calabresa",
    description:
      "Molho ao sugo artesanal, mussarela, calabresa e cebola roxa, finalizada com orégano.",
    price: 59.9,
    image: "https://cdn.accon.app/175796770054806310759284060952-1080p.jpg",
    category: "pizzas",
  },
  {
    id: "piz-2",
    name: "Pizza Grande Marguerita",
    description:
      "Molho ao sugo artesanal, mussarela, tomate cereja, manjericão fresco, parmesão e orégano.",
    price: 59.9,
    image: "https://cdn.accon.app/17692884894766404945613718203-1080p.jpg",
    category: "pizzas",
  },
  {
    id: "piz-3",
    name: "Pizza Grande Milho e Bacon",
    description:
      "Molho ao sugo artesanal, mussarela, milho e bacon, finalizada com orégano.",
    price: 59.9,
    image: "https://cdn.accon.app/17692880420965835370753894868-1080p.jpg",
    category: "pizzas",
  },

  // Saladas
  {
    id: "sal-1",
    name: "Salada Tudo na Brasa",
    description:
      "Combinação fresca de alface, rúcula e agrião, complementada com tomate seco e frango desfiado.",
    price: 39.9,
    image:
      "https://acconstorage.blob.core.windows.net/acconpictures/7899_28913_435_-_Salada_Tu.jpg",
    category: "saladas",
  },
  {
    id: "sal-2",
    name: "Salada de Palmito",
    description:
      "Salada fresca com palmito, alface crocante, tomate suculento e finalizada com nosso molho especial.",
    price: 46.9,
    image:
      "https://acconstorage.blob.core.windows.net/acconpictures/202002141430_OWe1_t.jpg",
    category: "saladas",
  },

  // Sobremesas
  {
    id: "sob-1",
    name: "Pudim Individual",
    description:
      "Clássico pudim de leite condensado, macio e cremoso, coberto com calda de caramelo dourada.",
    price: 14.9,
    image: "https://cdn.accon.app/175694387447849322064917559616-1080p.jpg",
    category: "sobremesas",
  },
  {
    id: "sob-2",
    name: "Panna Cotta",
    description:
      "Sobremesa italiana leve e cremosa, com toque de baunilha e calda de morango.",
    price: 15.9,
    image: "https://cdn.accon.app/176549683023612954786941618912-1080p.jpg",
    category: "sobremesas",
  },
  {
    id: "sob-3",
    name: "Mousse de Maracujá",
    description:
      "Mousse leve, cremoso e refrescante, coberto com calda de maracujá.",
    price: 14.9,
    image: "https://cdn.accon.app/17569438549258563592277819263-1080p.jpg",
    category: "sobremesas",
  },
  {
    id: "sob-4",
    name: "Serenata de Amor",
    description: "Clássico bombom Serenata de Amor em porção individual.",
    price: 2.5,
    image: "https://cdn.accon.app/17569438352202959359974154008-1080p.jpg",
    category: "sobremesas",
  },
  {
    id: "sob-5",
    name: "Brownie",
    description: "Clássico Brownie de chocolate individual, macio e intenso.",
    price: 10.5,
    image: "https://cdn.accon.app/175694377563643227742378949396-1080p.jpg",
    category: "sobremesas",
  },

  // Massas e Gratinados
  {
    id: "mass-1",
    name: "Massas e Gratinados p/ 2 a 3 pessoas",
    description: "Escolha sua Massa ou Refeição.",
    price: 89.9,
    image: "https://cdn.accon.app/17582207711395887193408640323-1080p.jpg",
    category: "massas",
  },

  // Refeições com Churrasco
  {
    id: "ref-1",
    name: "Refeições com Churrasco p/ 2 pessoas",
    description: "Escolha Sua Refeição.",
    price: 119.9,
    image: "https://cdn.accon.app/17582000114415149507524875838-1080p.jpg",
    category: "refeicoes",
  },

  // Porções e Petiscos
  {
    id: "porc-1",
    name: "Porções e Petiscos na Brasa",
    description: "Escolha sua Porção.",
    price: 45.9,
    image: "https://cdn.accon.app/17582003622756926966285306411-1080p.jpg",
    category: "porcoes",
  },

  // Carnes na Brasa
  {
    id: "carn-1",
    name: "Carnes na Brasa (IN NATURA)",
    description: "Escolha sua Carne.",
    price: 69.9,
    image: "https://cdn.accon.app/17619479684057958457384958615-1080p.jpg",
    category: "carnes",
  },

  // Executivos
  {
    id: "exec-1",
    name: "Executivo com Churrasco",
    description: "Escolha seu executivo com Churrasco.",
    price: 35.9,
    image: "https://cdn.accon.app/175828779570406767662553553633-1080p.jpg",
    category: "executivos",
  },
  {
    id: "exec-2",
    name: "Executivo Tudo na Brasa",
    description: "Escolha seu Executivo Tudo na Brasa.",
    price: 39.9,
    image: "https://cdn.accon.app/1758306104856214814101235822-1080p.jpg",
    category: "executivos",
  },

  // Acompanhamentos
  {
    id: "acomp-1",
    name: "Acompanhamentos",
    description: "Escolha seu acompanhamento.",
    price: 15.9,
    image: "https://cdn.accon.app/17617540190272184816789706221-1080p.jpg",
    category: "acompanhamentos",
  },

  // Caldos
  {
    id: "cald-1",
    name: "Caldos",
    description: "Escolha seu Caldo.",
    price: 25.9,
    image: "https://cdn.accon.app/17581996721840036268484939494527-1080p.jpg",
    category: "caldos",
  },

  // Bebidas
  {
    id: "beb-1",
    name: "Refrigerantes 1,5L",
    description: "Diversas opções de refrigerantes.",
    price: 12.9,
    image: "https://cdn.accon.app/1758724112227501514179971233-1080p.jpg",
    category: "bebidas",
  },
  {
    id: "beb-2",
    name: "Refrigerante Lata 350ml",
    description: "Diversas opções de refrigerantes em lata.",
    price: 6.9,
    image: "https://cdn.accon.app/1758725038362022326250580704476-1080p.jpg",
    category: "bebidas",
  },
  {
    id: "beb-3",
    name: "Sucos Naturais 300ml",
    description: "Sucos naturais feitos na hora.",
    price: 8.9,
    image: "https://cdn.accon.app/17587256630803075435705545235-1080p.jpg",
    category: "bebidas",
  },
  {
    id: "beb-4",
    name: "Água Mineral 500ml",
    description: "Água mineral com ou sem gás.",
    price: 4.5,
    image: "https://cdn.accon.app/17587259407963000361460297547-1080p.jpg",
    category: "bebidas",
  },
  {
    id: "beb-5",
    name: "H2O 500ml",
    description: "H2O Limão ou Limoneto.",
    price: 6.5,
    image: "https://cdn.accon.app/17587371268046113861231003104-1080p.jpg",
    category: "bebidas",
  },
];

const RAW_CONTACT_INFO = {
  address: "Av. dos Engenheiros, 1104 - Castelo, Belo Horizonte - MG",
  phone: "+55 31 8401-8846",
  hours: "Terça a Domingo: 11:30 - 23:00",
  whatsapp: "553184018846",
  instagram:
    "https://www.instagram.com/tudonabrasabh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/tudonabrasa/?locale=pt_BR",
  ifood:
    "https://www.ifood.com.br/delivery/belo-horizonte-mg/tudo-na-brasa-churrascaria-castelo/e23aa9f7-77de-4596-96fa-686825550bd9",
  getin: "https://getinapp.com.br/",
  maps: "https://www.google.com/maps/search/?api=1&query=Tudo+na+Brasa+Castelo+Belo+Horizonte",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Tudo+na+Brasa+Castelo+Belo+Horizonte",
};

export const MENU_CATEGORIES: Category[] = RAW_MENU_CATEGORIES.map(
  (category) => ({
    ...category,
    label: fixMojibake(category.label),
  }),
);

export const PRODUCTS: Product[] = RAW_PRODUCTS.map((product) => ({
  ...product,
  name: fixMojibake(product.name),
  description: fixMojibake(product.description),
  category: fixMojibake(product.category),
}));

export const CONTACT_INFO = {
  ...RAW_CONTACT_INFO,
  address: fixMojibake(RAW_CONTACT_INFO.address),
  phone: fixMojibake(RAW_CONTACT_INFO.phone),
  hours: fixMojibake(RAW_CONTACT_INFO.hours),
};
