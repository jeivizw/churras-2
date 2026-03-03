let categorias = [
    {id: 1, nome: "Churrasco"},
    {id: 2, nome: "Entradinhas"},
    {id: 3, nome: "Bebidas"},
];

let produtos = [
    { categoriaId: 1,
    nome: "Churrasco de Picanha",
    preco: 59.90,
    descrição:"Delicioso churrasco de picanha, acompanhado de farofa e vinagrete",
    imagem:"https://i.ytimg.com/vi/KgoqcbuZEBg/maxresdefault.jpg"},

    { categoriaId: 2,
    nome: "Torresmo Crocante",
    preco: 30.00,
    descrição:"Torresmo crocante, servido com molho de pimenta e limão",
    imagem:"https://midias.agazeta.com.br/2024/04/30/festival-torresmofest-no-boulevard-shopping-em-vila-velha---2089478-article.jpg"},

    { categoriaId: 3,
    nome: "Refrigerante 350ml",
    preco: 7.50,
    descrição:"Refrigerante em lata de 350ml, escolha entre Coca-Cola, Guaraná ou Sprite",
    imagem:"https://horasagradamc.meucatalogofacil.com/_core/_uploads/14/2020/11/111328112016gk25fh0h.jpeg"},s


];

module.exports = { categorias, produtos };