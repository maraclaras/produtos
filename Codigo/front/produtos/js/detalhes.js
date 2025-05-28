function mostrarDetalhes(nome) {
 const produto = detalhesProdutos[nome];
 if (!produto) {
    console.error("Produto não encontrado para o nome:", nome);
    return;
  }

 document.getElementById("nome-bolo").textContent = produto.nome.toUpperCase();
 document.querySelector("#detalhes img").src = produto.imagem;
 document.querySelector("#detalhes img").alt = produto.nome;
 document.querySelector("#detalhes p").textContent = produto.descricao;

 // Display price
 const priceElement = document.getElementById("detalhes-preco"); // Assuming you'll add an element for price
 if (typeof produto.preco === "number") {
   priceElement.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
 } else {
   priceElement.textContent = `Preço: ${produto.preco}`; // For "Consultar tabela" or similar
 }


 mostrarSecao("detalhes");
}
const detalhesProdutos = {
    "Brigadeiro": {
        nome: "Brigadeiro",
        descricao: "Um clássico irresistível da culinária brasileira, nosso brigadeiro é preparado com o mais puro leite condensado e chocolate de alta qualidade, finalizado com granulado. É a doçura perfeita para qualquer momento, que remete à infância e à alegria das festas, garantindo um sabor autêntico e inesquecível a cada mordida.",
        imagem: "/Codigo/front/produtos/image/doces/doce6.png",
        preco: 5.00 // Adjusted price
    },
    "Beijinho": {
        nome: "Beijinho",
        descricao: "Nosso beijinho é uma celebração do sabor tropical, feito com coco fresco ralado e leite condensado, cozido até atingir a consistência perfeita e delicadamente enrolado em açúcar cristal. Com sua textura macia e sabor doce e suave, é o acompanhamento ideal para brigadeiros ou como uma guloseima individual, trazendo a leveza e o aroma do coco em cada pedacinho.",
        imagem: "/Codigo/front/produtos/image/doces/doce3.png",
        preco: 5.00 // Adjusted price
    },
    "Docinho Gourmet": {
        nome: "Docinho Gourmet",
        descricao: "Prepare-se para uma experiência sublime com nossos docinhos gourmet. Cada um é uma obra de arte, utilizando ingredientes selecionados e combinações de sabores inovadoras. Desde o chocolate belga até recheios exóticos e coberturas sofisticadas, estes docinhos são feitos para impressionar e encantar os paladares mais exigentes, elevando qualquer ocasião a um novo nível de elegância.",
        imagem: "/Codigo/front/produtos/image/doces/doce5.jpg",
        preco: 7.50 // Adjusted price
    },
    "Natal": {
        nome: "Natal",
        descricao: "Celebre o Natal com a magia dos nossos doces natalinos. Cada item é preparado com o espírito da festividade, combinando sabores clássicos e decorações temáticas que transformam sua mesa em um banquete de alegria. De biscoitos decorados a panetones recheados e troncos de Natal, nossos doces são a estrela da sua ceia, trazendo o aconchego e o sabor inconfundíveis da época mais esperada do ano.",
        imagem: "/Codigo/front/produtos/image/datas/data2.png",
        preco: 120.00 // Example price for a festive item
    },
    "Páscoa Ovos": {
        nome: "Páscoa Ovos",
        descricao: "Nossos ovos de Páscoa são verdadeiras joias de chocolate, cuidadosamente elaborados para adoçar sua celebração. Com uma variedade de recheios e coberturas, desde o clássico chocolate ao leite até opções mais sofisticadas com brigadeiro gourmet, trufas e castanhas, cada ovo é uma experiência única. Perfeitos para presentear ou para compartilhar, são a essência da Páscoa em forma de doce.",
        imagem: "/Codigo/front/produtos/image/datas/data3.png",
        preco: 85.00 // Example price for an egg
    },
    "Páscoa Cestas": {
        nome: "Páscoa Cestas",
        descricao: "Presenteie com o encanto das nossas cestas de Páscoa, recheadas com uma seleção especial de doces e surpresas. Cada cesta é montada com carinho, incluindo ovos de Páscoa variados, bombons artesanais, coelhinhos de chocolate e outras delícias que farão a alegria de quem as receber. Uma opção perfeita para celebrar a data com abundância e sabor.",
        imagem: "/Codigo/front/produtos/image/datas/data5.png",
        preco: 150.00 // Example price for a basket
    },
    "Ganache 1": {
        nome: "Ganache de Chocolate Belga",
        descricao: "Um bolo elegantemente coberto com uma ganache rica e brilhante de chocolate belga, proporcionando uma experiência de sabor intensa e sofisticada. A textura suave e aveludada do ganache complementa perfeitamente a maciez da massa, criando um equilíbrio delicioso. Ideal para quem aprecia a profundidade e a qualidade do chocolate puro.",
        imagem: "/Codigo/front/produtos/html/ganache/bolo13.jpg",
        preco: 180.00 // Example price for a standard size cake
    },
    "Ganache 2": {
        nome: "Ganache com Frutas Silvestres",
        descricao: "Este bolo é uma harmoniosa combinação de ganache de chocolate, decorado com uma cascata de frutas silvestres frescas como morangos, mirtilos e framboesas. A acidez das frutas contrasta maravilhosamente com a doçura do chocolate, criando uma explosão de sabores e uma apresentação visualmente deslumbrante.",
        imagem: "/Codigo/front/produtos/html/ganache/bolo14.jpg",
        preco: 220.00 // Example price, slightly higher due to fresh fruits
    },
    "Ganache 3": {
        nome: "Ganache e Caramelo Salgado",
        descricao: "Uma tentação para os amantes de contrastes, este bolo apresenta uma cobertura de ganache de chocolate combinada com fios de caramelo salgado artesanal. A união do doce, amargo e salgado proporciona uma complexidade de sabor que é simplesmente irresistível, com cada pedaço sendo uma nova descoberta.",
        imagem: "/Codigo/front/produtos/html/ganache/bolo15.jpg",
        preco: 195.00 // Example price
    },
    "Ganache 4": {
        nome: "Ganache com Texturas",
        descricao: "Um bolo inovador onde a ganache de chocolate é aplicada de forma a criar diferentes texturas, desde a suavidade do creme até pequenos relevos crocantes. A decoração minimalista, mas impactante, foca na beleza do chocolate em suas diversas formas, ideal para quem busca uma experiência sensorial completa.",
        imagem: "/Codigo/front/produtos/html/ganache/bolo3.png",
        preco: 210.00 // Example price for decorative elements
    },
    "Ganache 5": {
        nome: "Ganache Clássica com Dourado",
        descricao: "Um bolo com cobertura clássica de ganache, adornado com detalhes em dourado que conferem um toque de luxo e sofisticação. Perfeito para celebrações especiais, este bolo não só agrada ao paladar com seu sabor intenso de chocolate, mas também encanta os olhos com sua elegância e brilho.",
        imagem: "/Codigo/front/produtos/html/ganache/bolo7.jpg",
        preco: 250.00 // Example price for premium decoration
    },
    "Chantininho 1": {
        nome: "Chantininho Florido",
        descricao: "Um bolo delicadamente decorado com flores vibrantes feitas de chantininho, criando um jardim comestível que é uma obra de arte. A suavidade do chantininho e o sabor delicado das flores de manteiga complementam a massa escolhida, perfeito para casamentos, aniversários e celebrações que exigem um toque de beleza natural e um sabor suave.",
        imagem: "/Codigo/front/produtos/html/chantininho/bolo6.jpg",
        preco: 170.00 // Example price
    },
    "Chantininho 2": {
        nome: "Chantininho Degradê Azul",
        descricao: "Este bolo apresenta um visual encantador com seu chantininho em tons de azul degradê, que vão do claro ao escuro, criando um efeito visual que lembra o céu ou o oceano. A cobertura leve e aerada proporciona uma textura macia e um sabor delicioso, tornando este bolo ideal para chás de bebê, festas temáticas ou qualquer evento que peça uma explosão de cor e frescor.",
        imagem: "/Codigo/front/produtos/html/chantininho/bolo1.png",
        preco: 165.00 // Example price
    },
    "Chantininho 3": {
        nome: "Chantininho Rústico com Frutas",
        descricao: "Um bolo com acabamento rústico em chantininho, que realça a beleza natural da cobertura com pequenas imperfeições charmosas. Decorado com frutas frescas e ramos de alecrim ou menta, oferece um contraste delicioso entre a doçura e a acidez, ideal para eventos ao ar livre ou para quem busca uma estética mais descontraída, mas elegante.",
        imagem: "/Codigo/front/produtos/html/chantininho/bolo11.jpg",
        preco: 190.00 // Example price, higher due to fresh fruits
    },
    "Chantininho 4": {
        nome: "Chantininho com Gotas de Chocolate",
        descricao: "Um bolo clássico e reconfortante, coberto com chantininho e adornado com generosas gotas de chocolate derretido que escorrem pelas laterais. A combinação da cremosidade do chantininho com o sabor intenso do chocolate cria uma experiência deliciosa e satisfatória, perfeita para qualquer ocasião em que se deseja um toque de indulgência.",
        imagem: "/Codigo/front/produtos/html/chantininho/bolo2.png",
        preco: 175.00 // Example price
    },
    "Chantininho 5": {
        nome: "Chantininho Temático Infantil",
        descricao: "Um bolo de chantininho vibrante e divertido, decorado com personagens e temas infantis que farão a alegria das crianças. Personalizado com cores e elementos que remetem ao universo da imaginação, este bolo é a estrela de qualquer festa de aniversário infantil, garantindo sorrisos e momentos memoráveis para os pequenos e seus convidados.",
        imagem: "/Codigo/front/produtos/html/chantininho/bolo5.jpg",
        preco: 200.00 // Example price for thematic decoration
    },
    "Pasta Americana 1": {
        nome: "Pasta Americana Clássica",
        descricao: "Um bolo revestido com a clássica pasta americana, que proporciona um acabamento liso e impecável, ideal para decorações detalhadas e artísticas. Este bolo é uma tela em branco para a criatividade, permitindo a criação de formas e texturas perfeitas que transformam o bolo em uma verdadeira obra de arte comestível, digna de grandes celebrações.",
        imagem: "/Codigo/front/produtos/html/pastaAmericana/bolo10.jpg",
        preco: 280.00 // Example price, higher due to complexity of pasta americana
    },
    "Pasta Americana 2": {
        nome: "Pasta Americana Temática",
        descricao: "Perfeito para festas personalizadas, este bolo é decorado com pasta americana para criar um tema específico, como personagens, cenários ou hobbies. A precisão dos detalhes e a vivacidade das cores tornam este bolo o centro das atenções, refletindo a personalidade do homenageado e tornando a celebração ainda mais especial e inesquecível.",
        imagem: "/Codigo/front/produtos/html/pastaAmericana/bolo18.jpg",
        preco: 320.00 // Example price, even higher for thematic work
    },
    "Pasta Americana 3": {
        nome: "Pasta Americana com Renda Comestível",
        descricao: "Um bolo elegante adornado com delicadas rendas comestíveis de pasta americana, que conferem um toque de sofisticação e requinte. A beleza intrincada das rendas, aliada ao acabamento perfeito da pasta americana, torna este bolo ideal para casamentos, bodas e eventos formais que demandam um visual luxuoso e atemporal.",
        imagem: "/Codigo/front/produtos/html/pastaAmericana/bolo24.jpg",
        preco: 350.00 // Example price for intricate details
    },
    "Pasta Americana 4": {
        nome: "Pasta Americana com Efeito Mármore",
        descricao: "Com um design moderno e sofisticado, este bolo apresenta uma cobertura de pasta americana com um deslumbrante efeito mármore. As nuances de cores e o brilho sutil criam uma estética de luxo e minimalismo, perfeita para eventos contemporâneos e para quem busca uma peça central que combine arte e sabor.",
        imagem: "/Codigo/front/produtos/html/pastaAmericana/bolo25.jpg",
        preco: 300.00 // Example price
    },
    "Pasta Americana 5": {
        nome: "Pasta Americana com Textura Acolchoada",
        descricao: "Um bolo com cobertura de pasta americana que imita uma textura acolchoada, adicionando volume e um toque de aconchego visual. Comumente decorado com pérolas comestíveis em cada intersecção, este bolo é sinônimo de elegância e detalhe, ideal para festas de debutantes, chás de panela e eventos charmosos.",
        imagem: "/Codigo/front/produtos/html/pastaAmericana/bolo26.jpg",
        preco: 310.00 // Example price for textured design
    },
    "Linha Diet 1": {
        nome: "Bolo de Chocolate Diet com Frutas",
        descricao: "Um delicioso bolo de chocolate da nossa linha diet, sem adição de açúcar, mas com todo o sabor que você espera. A massa fofinha de chocolate é complementada por um recheio leve e frutas frescas, como morangos e mirtilos, que adicionam um toque de acidez e frescor. Ideal para quem busca uma opção mais saudável sem abrir mão do prazer de um bom doce.",
        imagem: "/Codigo/front/produtos/html/linhaDiet/bolo22.jpg",
        preco: 190.00 // Example price for diet options
    },
    "Linha Diet 2": {
        nome: "Bolo de Cenoura Diet com Cobertura Leve",
        descricao: "Nosso bolo de cenoura diet é uma explosão de sabor e leveza. Preparado sem açúcar e com ingredientes selecionados, ele mantém a umidade e o sabor característico da cenoura. A cobertura, à base de cream cheese light ou cacau, é suave e equilibrada, proporcionando um contraste delicioso sem pesar. Perfeito para o café da tarde ou para quem busca uma sobremesa consciente.",
        imagem: "/Codigo/front/produtos/html/linhaDiet/bolo23.jpg",
        preco: 185.00 // Example price
    },
    "Linha Diet 3": {
        nome: "Bolo de Coco Diet com Calda Cítrica",
        descricao: "Uma opção refrescante e deliciosa para a linha diet, este bolo de coco é leve e aromático, com a doçura natural do coco realçada. Acompanha uma calda cítrica vibrante, feita com suco de limão ou laranja, que adiciona um toque de acidez e umidade. É a escolha ideal para quem ama sabores tropicais e busca uma sobremesa nutritiva e saborosa.",
        imagem: "/Codigo/front/produtos/html/linhaDiet/bolo27.jpg",
        preco: 195.00 // Example price
    },
    "Linha Diet 4": {
        nome: "Bolo de Amêndoas Diet com Castanhas",
        descricao: "Para os apreciadores de texturas e sabores marcantes, apresentamos nosso bolo de amêndoas diet, rico em fibras e proteínas. A massa é macia e úmida, com o sabor delicado das amêndoas, e é salpicada com castanhas crocantes que adicionam uma camada extra de sabor e textura. Uma excelente opção para quem busca um doce sofisticado e amigo da dieta.",
        imagem: "/Codigo/front/produtos/html/linhaDiet/bolo28.jpg",
        preco: 210.00 // Example price for premium ingredients
    },
    "Linha Diet 5": {
        nome: "Bolo de Frutas Vermelhas Diet com Iogurte",
        descricao: "Este bolo da linha diet é um convite à leveza e ao sabor. Recheado com um creme de iogurte natural e uma generosa quantidade de frutas vermelhas frescas — morangos, framboesas, mirtilos —, oferece um equilíbrio perfeito entre a doçura natural das frutas e a acidez do iogurte. Uma escolha refrescante e deliciosa, ideal para qualquer hora do dia.",
        imagem: "/Codigo/front/produtos/html/linhaDiet/bolo29.jpg",
        preco: 205.00 // Example price
    }
};