export interface Recipe {
    creator: string;
    difficulty: number;
    classification: number;
    ingredients: Ingredient[];
    image: string;
    name: string;
    medTime: number;
    steps: Step[];
    desc: string;
    tags?: string[];
    comments: Comment[]
}

export interface Ingredient {
    name: string;
    quantity: number | string;
    measure?: string;
}

export interface Recipes {
    [id: number]: Recipe
}

export interface Step {
    step: string;
    image?: string;
}

export interface Comment {
    comment: string;
    author: string;
}

export let RecipesObject: Recipes = {
    0: {
        name: 'Picadinho de Frango',
        difficulty: 3,
        creator: 'GordonRamsay',
        classification: 4,
        ingredients: [
            {
                name: 'Peitos de frango',
                quantity: 3
            },
            {
                name: 'Manteiga',
                quantity: '100g',
            },
            {
                name: 'Limões',
                quantity: 3,
            },
            {
                name: 'Salsa',
                quantity: '100g',
            }
        ],
        image: 'https://img.taste.com.au/7PtDfK_I/w720-h480-cfill-q80/taste/2017/07/quick-and-easy-meal-planner-128684-2.jpg',
        medTime: 40,
        steps: [
            {
                step: 'Obtenha um frango e corte o mesmo em cubos',
                image: 'https://thumbs.dreamstime.com/b/raw-chicken-knife-wooden-board-gradient-background-66123725.jpg'
            },
            {
                step: 'Aqueça uma panela, em fogo médio, com a margarina e doure os cubos de frango. Adicione a cebola, o pimentão e a cenoura e refogue por 5 minutos. Acrescente a abobrinha e refogue por 5 minutos ou até amaciar. Tempere com sal, pimenta e salsa e sirva acompanhado de arroz branco e salada verde.',
                image: 'https://cdn3.tmbi.com/toh/GoogleImages/Chicken-Piccata-with-Lemon-Sauce_EXPS_DSBZ17_26212_B01_13_5b.jpg',
            },

        ],
        tags: ['carne', 'frango', 'salsa', 'limoes'],
        desc: 'Picadinho de Frango é um dos meus pratos favoritos. Peito de galinha tenrinho mergulhado num molho de limão e grelhado até ficar dourado, yum!',
        comments: [{
            comment: 'Super Cool!',
            author: 'ClaireBA',
        },
        {
            comment: 'Bom trabalho, delicioso ficou',
            author: 'YodaBestCook',
        },
        {
            comment: 'OMG! Isto é perfeito!',
            author: 'Trishaa',
        },
        {
            comment: 'Its dry!',
            author: 'GordonRamsay',
        }]
    },
    1: {
        name: 'Panquecas de Banana',
        difficulty: 3,
        creator: 'YodaBestCook',
        classification: 4,
        ingredients: [
            {
                name: 'Banana Madura',
                quantity: 1
            },
            {
                name: 'Ovos',
                quantity: '2',
            },
            {
                name: 'Canela',
                quantity: '1 Colher de chá',
            },

        ],
        image: 'https://abrilmdemulher.files.wordpress.com/2018/08/panquecas-de-banana.jpg?quality=90&strip=info&w=654&h=436&crop=1',
        medTime: 15,
        steps: [
            {
                step: 'Numa tigela grande esmague as bananas. Junte o iogurte, ovos, açúcar e baunilha e misture bem. Polvilhe as farinhas, fermento e bicarbonato por cima. Misture tudo com um garfo e reserve até necessitar.',
                image: 'https://www.asweetpeachef.com/wp-content/uploads/2016/05/banana-chia-pudding-8.jpg'
            },
            {
                step: 'Aqueça uma frigideira grande anti-aderente em lume médio e unte com manteiga. Use uma colher de gelado para todas as panquecas ficarem do mesmo tamanho – deite 3 ou 4 porções da massa na frigideira e cozinhe por 1 a 2 minutos ou até começar a dourar. Vire e cozinhe por mais um minuto ou até ficarem prontas.',
                image: 'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/1576/letterbox_Sweet-pancakes593.jpg',

            }

        ],
        tags: ['panquecas', 'banana', 'ovos', 'canela', 'saudável', 'pequeno-almoço', 'doce'],

        desc: 'A receita de hoje é Panquecas de Banana, uma receita que não tem nem açúcar nem farinha ou leite. Só tem três ingredientes: bananas, ovos e canela. As bananas dão-lhes o toque doce necessário e, além disso, estas panquecas são ricas em proteínas, baixas em calorias (yupi!), sem glúten e, o melhor de tudo, são deliciosas. ',
        comments: [{
            comment: 'Super Saudável!',
            author: 'ClaireBA',
        }, {
            comment: 'nope',
            author: 'GordonRamsay',
        },
        {
            comment: 'Bom trabalho, saudável ficou',
            author: 'YodaBestCook',
        },
        {
            comment: 'Para a semana vou experimentar esta receita!',
            author: 'Trishaa',
        },
        {
            comment: 'gdsik ksvdo',
            author: 'AlienWoman',
        }
        ]
    },
    2: {
        name: 'Geleia de Framboesa',
        difficulty: 3,
        creator: 'Trishaa',
        classification: 4,
        ingredients: [
            {
                name: 'Framboesas congeladas',
                quantity: '5kg'
            },
            {
                name: 'Açúcar',
                quantity: '960g',
            },
            {
                name: 'Limão',
                quantity: '1',
            },

        ],
        image: 'https://www.iguaria.com/wp-content/uploads/2013/04/iguaria-geleia-de-framboesas.jpg',
        medTime: 90,
        steps: [
            {
                step: 'Enxague as framboesas ao tirar do freezer, em seguida coloque as frutas em uma panela com metade do açúcar.',
                image: 'https://t2.rg.ltmcdn.com/pt/images/3/0/2/geleia_de_framboesa_caseira_7203_paso_1_600.jpg'
            },
            {
                step: 'Deixe cozinhar em fogo médio-baixo e, à medida que for esquentando, a geleia formará uma espuma que deverá ser retirada ao máximo ao longo de todo o cozimento.É de suma importância a retirada dessa espuma, caso contrário resultará em uma geleia de framboesa amarga e pouco brilhante. Após esse processo coloque o restante do açúcar e mexa sempre. Nesse momento a formação de espuma diminuirá bastante, porém a atenção voltada a ela tem que ser a mesma. Vá mexendo sempre até a espuma acabar totalmente, desligue o fogo e deixe a geleia de framboesa caseira amornar.',
                image: 'https://t1.rg.ltmcdn.com/pt/images/3/0/2/geleia_de_framboesa_caseira_7203_paso_4_600.jpg'
            },
            {
                step: 'A preparação dos vidros para conservar a geleia é feita do seguinte jeito: coloque os vidros e tampas para ferver, após levantar fervura baixe o fogo e deixe por 45 minutos. Em seguida, com exceção das tampas, leve os potes ao forno médio por 20 minutos, para secar.Coloque a geleia já morna no vidro e tampe bem. Leve de novo à fervura em água já quente e deixe ferver por 15 minutos, para que se forme vácuo no interior e a geleia possa ser armazenada durante meses. Retire, deixe esfriar por completo e decore a gosto.',
                image: 'https://t1.rg.ltmcdn.com/pt/images/3/0/2/geleia_de_framboesa_caseira_7203_paso_6_600.jpg'
            },

        ],
        tags: ['geleia', 'fambroesa', 'caseiro', 'doce'],
        desc: 'A framboesa é um fruto vermelho rico em antioxidantes, o que significa que atua no combate ao envelhecimento das células, ajudando a prevenir doenças como câncer. Além disso a framboesa é deliciosa com o seu sabor delicado e aromático. Se você gosta desta frutinha, preste atenção nesta receita de geleia de framboesa caseira passo a passo e prepare para vender ou oferecer!',
        comments: [{
            comment: 'Espero que gostem!',
            author: 'Trishaa',
        },{
            comment: 'Sugiro um pouco de raspas de limão para dar mais sabor!',
            author: 'ClaireBA',
        },
        {
            comment: 'gdanjkm ioakmOX0 P+ AKJdo',
            author: 'AlienWoman',
        }, {
            comment: 'Finalmente uma receita semi ok',
            author: 'GordonRamsay',
        },
        
        ]
    },
    3: {
        name: 'Mousse de Limão',
        difficulty: 1,
        creator: 'GrampaCarl',
        classification: 5,
        ingredients: [
            {
                name: 'Leite Condensado',
                quantity: '1 lata'
            },
            {
                name: 'Natas',
                quantity: '500 ml',
            },
            {
                name: 'Sumo de limão',
                quantity: '4 limões',
            },
        ],
        image: 'http://www.beetsandbones.com/wp-content/uploads/2015/01/lemon-mousse.jpg',
        medTime: 30,
        steps: [
            {
                step: 'Numa tigela misture bem o leite condensado e as natas até ficar um creme homogéneo.',
                image: 'https://www.iguaria.com/wp-content/uploads/2013/07/natas-bem-batidas.jpg'
            },
            {
                step: 'Junte lentamente o sumo dos limões, em fio e mexendo sempre até que o ácido do limão engrosse as natas.',
                image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2014%2F03%2F32ae7ce516baa22d46b13d59453c83ea2f1d6a8f.jpeg'
            },
            {
                step: 'Coloque em 8 taças individuais e leve ao frio durante 50 minutos.',
                image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2016/05/Lemon_Cream_Mousse.jpg'
            },
        ],
        tags: ['limão', 'mousse', 'doce', 'snack', 'sobremesa'],
        desc: 'Uma sobremesa leve e deliciosa, ideal para o final de uma refeição com pratos elaborados. Sirva a mousse de limão bem fresca.',
        comments: [{
            comment: 'Muito bom! ',
            author: 'Trishaa',
        },
        {
            comment: '8NJXWEJU89 C4E8N MCX,M9CRJ nksvdo!',
            author: 'AlienWoman',
        }
        ]
    },
    4: {
        name: 'Muffin de Bróculos e Cheddar',
        difficulty: 3,
        creator: 'AlienWoman',
        classification: 2,
        ingredients: [
            {
                name: 'Muffins',
                quantity: '4'
            },
            {
                name: 'Bróculos picados',
                quantity: '1 chávena',
            },
            {
                name: 'Queijo cheddar ralado',
                quantity: '1/2 chávena',
            },
        ],
        image: 'https://acozinhadaavomaria.files.wordpress.com/2017/02/muffinslegumes.jpg',
        medTime: 100,
        steps: [
            {
                step: 'faça muffin de brocolis',
                image: 'https://t2.rg.ltmcdn.com/pt/images/3/7/7/muffin_de_brocolis_fit_e_sem_gluten_8773_paso_4_600.jpg'
            },
            {
                step: 'adicione queijo cheddar',
                image: 'http://www.nechiocongelados.com.br/produtos/Diversos_01.jpg'
            },

        ],
        tags: ['Fácil', 'queijo', 'saudável', 'muffins', 'salgado', 'vegetariano', 'profissional'],
        desc: `Nem todo muffin precisa ser doce! Eu não sei quanto a vocês, mas eu tenho uma queda maior por salgados do que por doces! E também tenho loucura por muffins, acho a textura deles fantástica! Por isso tenho algumas receitinhas de muffins salgados deliciosos que quero dividir com vocês. \n
         Essa receita de muffin de brócolis e cheddar é uma preferidinha, e ela pode ser facilmente alterada, trocando o brocólis por outro legumes ou adicionando bacon ou linguiça, por exemplo. Imaginação na cozinha é tudo! E é sem glúten, por que não precisamos comer glutezinho todo dia não é mesmo? \n
        Continue lendo para saber como fazer muffin de brócolis fit e sem glúten, uma ótima sugestão de lanche da tarde salgado e saudável. Confira o preparo passo a passo em fotos e experimente!`,
        comments: [{
            comment: 'tão bom aspecto!',
            author: 'Trishaa',
        },
        {
            comment: 'kfw9cmoij4 nec ?? 9O  BMJMOnans AJdo',
            author: 'AlienWoman',
        }]
    },
    5: {
        name: 'Macarrão e queijo com leite de amêndoas',
        difficulty: 2,
        creator: 'GordonRamsay',
        classification: 4,
        ingredients: [
            {
                name: 'Leite de amêndoas',
                quantity: '2 chávenas'
            },
            {
                name: 'Macarrão',
                quantity: '1 chávena',
            },
            {
                name: 'Queijo ralado',
                quantity: '1/2 chávena',
            },
        ],
        image: 'https://thestayathomechef.com/wp-content/uploads/2019/02/Macaroni-and-Cheese-1.jpg',
        medTime: 40,
        steps: [
            {
                step: 'Em uma panela média, refogue a cebola e o alho picados com o óleo de coco e o sal até que fiquem levemente dourados. Adicione o a cebola e o alho refogados, o leite de amêndoas, a levedura nutricional e a pimenta do reino em um liquidificador e bata até obter uma mistura bem homogênea. Prove e ajuste os temperos, caso ache necessário.',
                image: 'https://www.seriouseats.com/2018/04/20180418-stockpots-vicky-wasik-oven-mitts-1500x1125.jpg'
            },
            {
                step: 'Adicione o polvilho doce no liquidificador e bata novamente até que ele se misture ao restante dos ingredientes. Leve a mistura para uma panela e cozinhe em fogo médio até o molho engrossar. Sirva com o macarrão de sua preferência ou em outros pratos, como lasanhas e tortas salgadas.',
                image: 'https://i0.wp.com/www.plantte.com/wp-content/uploads/2018/10/Mac-and-Cheese-Vegano-Macarr%C3%A3o-ao-Molho-de-Queijo-2.jpg?resize=750%2C1000&ssl=1'
            },

        ],
        tags: ['macarrão', 'vegetariano', 'quejo', 'amêndoa', 'vegetais'],
        desc: `Eis a receita mais repetida aqui em casa: Mac and Cheese Vegano, ou, em português, Macarrão ao Molho de Queijo Vegano. Fazemos já há alguns anos e, deixa eu dizer, foi uma feliz descoberta. Servimos em diferentes ocasiões para familiares e amigos e é sucesso sempre. Simples, fácil de fazer e cheinho de sabor. \n

        Ele fica especialmente ótimo quando servido com ervas frescas e Parmesão Vegano. Pode ser preparado como prato principal ou como acompanhamento para outro prato. O molho pode até ser usado em outros tipos de preparações, como tortas salgadas e lasanhas. Use e abuse de sua criatividade. 🙂`,
        comments: [{
            comment: 'I want it all!',
            author: 'Trishaa',
        },
        {
            comment: 'gd s i k  k s v890do',
            author: 'AlienWoman',
        }]
    },
    6: {
        name: 'Cheesecake',
        difficulty: 2,
        creator: 'GrampaCarl',
        classification: 5,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '3'
            },
            {
                name: 'Chocolate branco derretido',
                quantity: '200g',
            },
            {
                name: 'Creme de queijo ',
                quantity: '800g',
            },
            {
                name: 'Açúcar ',
                quantity: '150g',
            },
            {
                name: 'Natas ',
                quantity: '150ml',
            },
            {
                name: 'Biscoitos de chocolate',
                quantity: '500g',
            },
        ],
        image: 'https://portal-amb-imgs.clubedaana.com.br/2018/10/Cheese-cake-600x400.jpg',
        medTime: 60,
        steps: [
            {
                step: `Derrete-se a manteiga em lume muito brando.
                Coloca-se os biscoitos num saco de plástico, quebrando-os utilizando o rolo da massa. O “farelo” obtido é misturado muito bem com a manteiga previamente derretida.
                Cobre-se o fundo de uma forma redonda (já forrada com papel vegetal untado com margarina) e deita-se neste a mistura anterior.
                Derrete-se o chocolate branco em banho-maria.
                À parte mistura-se o queijo fresco com o açúcar, mexendo com uma colher de pau, obtendo uma massa homogénea. Não deixando de mexer, junta-se as natas, depois os ovos batidos e, finalmente o chocolate.
                Verte-se o preparo anterior sobre a base de biscoito e vai a cozer, 40 minutos, em forno pré-aquecido a 180ºC.
                Finda a cozedura deixa-se o bolo arrefecer e passa-se, então, este para um prato.`,
                image: 'https://i.ytimg.com/vi/uAwxcKOlvD4/hqdefault.jpg'
            },
        ],
        tags: ['cheesecake', 'sobremesa', 'chocolate-branco', 'saudável', 'doce'],
        desc: 'Olá! Hoje trago-lhe uma receita nova. Desta vez uma sobremesa deliciosa! Cheesecake, gosta? Não está sozinho! Eu adoro! É simplesmente maravilhoso. Então, mãos à obra! Delicie-se e delicie toda a família com esta iguaria que é tão saborosa e, ao mesmo tempo, super fácil de fazer!',
        comments: [{
            comment: 'Isto sim é uma boa receita!',
            author: 'Trishaa',
        },
        {
            comment: 'vu3qam9 n ,m hj,r9854jw',
            author: 'AlienWoman',
        }]
    },
    7: {
        name: 'Suspiros',
        difficulty: 2,
        creator: 'Trishaa',
        classification: 3,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '3'
            },
            {
                name: 'Açúcar',
                quantity: '1 chávena de chá',
            },
        ],
        image: 'https://www.receitax.com/wp-content/uploads/2016/01/suspiro.jpg',
        medTime: 20,
        steps: [
            {
                step: 'Comece a bater as claras com um pouco de açúcar. Bata na velocidade mínima/média. Assim que estiver com uma textura de mousse, aumente a velocidade do batedeira e despeje/verta o açúcar aos poucos até as claras montarem em neve/castelo.',
                image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091226.jpg'
            },
            {
                step: 'Caso bata a mão, sentirá as claras mais densas e apertadas. Bata até que se forme o que chamamos de "bico do pássaro". Essa é uma excelente dica para ver a textura.',
                image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091227.jpg'
            },
            {
                step: 'Imediatamente, coloque então as claras montadas com açúcar no saco pasteleiro e faça os suspiros (forre a forma com papel vegetal/manteiga).',
                image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091228.jpg'
            },
            {
                step: 'Leve ao forno a 120°C durante 1h15min, e passado esse tempo, desligue-o e deixe os suspiros secarem no interior do forno por algumas horas : eles estarão perfeitamente cozidos!',
                image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091229.jpg'
            },
        ],
        tags: ['suspiros', 'doce', 'sobremesa', 'pequeno-almoço', 'almoço', 'jantar', 'snack'],
        desc: `Você ainda tem claras de ovo? Não as jogue fora! Faça esses deliciosos suspiros :-) Uma receita ideal e anti-desperdício para acompanhar o seu chá ou café.
        Com apenas 2 ingredientes, faça esta receita com nossas instruções passo a passo abaixo`,
        comments: [
            {
                comment: '56789 890 99?OOF',
                author: 'AlienWoman',
            }]
    },
    8: {
        name: 'Brigadeiro de chocolate',
        difficulty: 4,
        creator: 'GrampaCarl',
        classification: 4,
        ingredients: [
            {
                name: 'Leite Condensado',
                quantity: '1 lata'
            },
            {
                name: 'Chocolate em pó',
                quantity: '2 colheres',
            },
            {
                name: 'Manteiga',
                quantity: '1 colher',
            },
            {
                name: 'Manteiga',
                quantity: '1 colher',
            },
        ],
        image: 'https://avidadoce.com/wp-content/uploads/2016/02/brigadeiro-gourmet-receita-e1530740232254.jpg',
        medTime: 1,
        steps: [
            {
                step: 'Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.',
                image: 'https://ak1.picdn.net/shutterstock/videos/1019075821/thumb/1.jpg'
            },
            {
                step: 'Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.',
                image: 'https://previews.123rf.com/images/fotosmurf/fotosmurf1010/fotosmurf101000020/8071210-brunette-taking-the-cake-out-of-the-oven.jpg'
            },
            {
                step: 'Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.',
                image: 'http://www.receitasnestle.com.br/images/default-source/recipes/brigadeiro_alta.jpg'
            }

        ],
        tags: ['doce'],
        desc: `O brigadeiro é um dos mais tradicionais doces do Brasil, mas é apreciado em todo o mundo, e Portugal não é excepção! Aprenda a fazê-los!`,
        comments: [{
            comment: '5AFWCSNO  KLM6789 890 99?OOF',
            author: 'AlienWoman',
        }]
    },
    9: {
        name: 'Panini',
        difficulty: 2,
        creator: 'AlienWoman',
        classification: 5,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '1'
            },
            {
                name: 'Requeijão',
                quantity: '2 colheres',
            },
            {
                name: 'Fermento',
                quantity: '1 colher de chá',
            },
        ],
        image: 'https://t1.rg.ltmcdn.com/pt/images/3/5/7/panini_na_frigideira_8753_600.jpg',
        medTime: 40,
        steps: [
            {
                step: 'Em um recipiente, bata primeiro o ovo bem com um garfo, depois acrescente os outros ingredientes e bata por aproximadamente 1 minuto ou mais até ficar homogêneo.Leve ao micro-ondas por 3 minutos (dependendo da potência do seu micro-ondas, acrescente mais).',
                image: 'https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2013/08/09/microwave-oven-interior.jpg'
            },
            {
                step: 'Em seguida, recheie a gosto e leve a sanduicheira ou doure na frigideira.Opções de recheio: queijo, tomate e orégano. ',
                image: 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/recipe-images/sargento/1446-Provolone-Panini-with-Prosciutto.jpg'
            },
        ],
        tags: ['salgado', 'saudável'],
        desc: `Olá pessoal, a receita que ensinaremos hoje é um bom panini low carb

        Ela é uma ótima receita para comer de café da manhã e começar seu dia maravilhosamente bem com essa receita que eu amo!
        
        E pro seu bem, ele também se encaixa na dieta low carb
        
        Eu particularmente amo essa receita, ela é super simples, prática e rápida de se fazer
        
        Além de ela ser super deliciosa e crocante!!
        
        Ele fica super macio e crocante, além de ser delicioso
        
        Vamos a receita então!`,
        comments: [{
            comment: '.´.+-.+. GF´+..L',
            author: 'AlienWoman',
        } ,{
            comment: 'Adorei',
            author: 'Trishaa',
        }]
    },
    10: {
        name: 'Frozen yogurt de framboesa',
        difficulty: 2,
        creator: 'YodaBestCook',
        classification: 5,
        ingredients: [
            {
                name: 'Iogurte',
                quantity: '1'
            },
            {
                name: 'Frutas vermelhas congeladas',
                quantity: '1 chávena',
            },
            {
                name: 'Adoçante',
                quantity: 'a gosto',
            },
        ],
        image: 'http://cdn.blogdamimis.com.br/wp-content/uploads/2012/09/frozen.jpeg',
        medTime: 50,
        steps: [
            {
                step: 'Bata tudo com o mixer ou no liquidificador e sirva em seguida com algumas frutas por cima.',
                image: 'https://st3.depositphotos.com/9145908/17635/i/1600/depositphotos_176358654-stock-photo-raspberries-in-the-blender-on.jpg'
            },
        ],
        desc: `Essa é a receita mais fácil que já realizei!

        Perfeita para um lanche da tarde, ou uma sobremesa saudável.
        
        Você pode usar frutas da sua preferência!`,
        comments: [{
            comment: '5-+.´Ç432.90 99?OOF',
            author: 'AlienWoman',
        }]
    },
    11: {
        name: 'Barra energética',
        difficulty: 3,
        creator: 'YodaBestCook',
        classification: 3,
        ingredients: [
            {
                name: 'Tâmaras sem caroço',
                quantity: '1 chávena'
            },
            {
                name: 'Frutas secas',
                quantity: '1 chávena',
            },
            {
                name: 'Castanhas',
                quantity: '1 chávena',
            },
        ],
        image: 'https://cdn.e-konomista.pt/uploads/2019/07/barras-energticas_1519212565-425x318.jpg',
        medTime: 40,
        steps: [
            {
                step: 'Comece por reunir os ingredientes necessários ao preparo desta receita para esportistas. Se você não encontrar algum destes ingredientes, pode substituir por outro do mesmo gênero (por exemplo: uva-passa, baga goji, tâmara, avelã, amêndoa, etc).',
                image: 'https://t2.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_0_600.jpg'
            },
            {
                step: 'Pique todos os ingredientes no liquidificador ou em um processador, até que virem uma pasta pegajosa.',
                image: 'https://t1.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_1_600.jpg'
            },
            {
                step: 'Transfira a massa para uma folha de papel manteiga em uma superfície lisa. Cubra com outra folha de papel manteiga e esmague com um rolo de cozinha, até que a massa fique fina.',
                image: 'https://t2.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_2_600.jpg'
            },
            {
                step: 'https://t2.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_2_600.jpg',
                image: 'https://t2.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_2_600.jpg'
            },
            {
                step: 'Após o tempo indicado, corte em retângulos do tamanho que preferir.',
                image: 'https://t2.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_4_600.jpg'
            },
            {
                step: 'Suas barras de frutas energéticas estão prontas! Consuma ao café da manhã, lanche, antes ou durante um treino e acompanhadas de, por exemplo, suco de laranja e limão. Experimente e diga-nos o que achou!',
                image: 'https://t1.rg.ltmcdn.com/pt/images/1/4/8/barra_de_frutas_energetica_2841_paso_5_600.jpg'
            },

        ],
        tags: [''],
        desc: `Manter a forma não é tarefa fácil: exige disciplina, força de vontade, consciência e foco. É, ainda, preciso concordar que o objetivo pode parecer impossível de alcançar quando comemos de forma errada ou, ainda pior, quando seguimos uma dieta que não nos agrada. Se se identifica com problema e é fã dos snacks inteligentes, vai gostar de experimentar as nossas receitas de barras energéticas para fazer em casa.

        Sim, estes são um dos melhores snacks para complementar uma dieta e acompanhar uma rotina de exercício físico, e se está farto de comprar as suas, coloque mãos à obra e descubra como preparar estas pequenas delícias fit na sua cozinha.`,
        comments: [{
            comment: '´2N3QF9H HK0L.º+ºÇ ´Ç',
            author: 'AlienWoman',
        }]
    },
    12: {
        name: 'Massa de pizza',
        difficulty: 1,
        creator: 'GordonRamsay',
        classification: 5,
        ingredients: [

            {
                name: 'sal',
                quantity: '1 colher',
            },
            {
                name: 'Farinha com fermento',
                quantity: '1 chávena',
            },
        ],
        image: 'https://portal-amb-imgs.clubedaana.com.br/2016/08/massa-de-pizza-de-inhame-21406.jpg',
        medTime: 120,
        steps: [
            {
                step: 'Comece por reservar um dia do mês para poder fazer esta receita',
                image: 'https://cdn9.dissolve.com/p/D2115_201_503/D2115_201_503_1200.jpg'
            },
            {
                step: 'Medite até atingir um estado de perfeita harmonia e equilibrio entre o seu eu interior e o universo que o rodeia',
                image: 'https://www.dailydot.com/wp-content/uploads/db4/41/6e8734dfe00c1b1d-2048x1024.jpg'
            },
            {
                step: 'Desloque-se ao Mar mais próximo de si e recolhe Sal',
                image: 'https://st4.depositphotos.com/1653005/20976/i/1600/depositphotos_209763158-stock-photo-stack-sea-salt-farm.jpg'
            },
            {
                step: 'Viage até Itália e observe os profissionais em Massa de Pizza em acção. Veja se eles lhe dão algum fermento.',
                image: 'https://st4.depositphotos.com/1725497/21589/i/1600/depositphotos_215894270-stock-photo-motion-blur-pizza-chef-makes.jpg'
            },
            {
                step: 'Partilhe a experiência com os seus amigos juntamente com o plano que elaborou para fazer a sua própia massa de pizza. Anote todas as sugestões e críticas que receber.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCP4D8stOcSlH_n7KSIzkD80Y-2KFU2eb7m4flnefZhCtb55CoQ&s'
            },
            {
                step: 'Aperceba-se que deixou o sal em Itália e já não pode cozinhar nada agora. Você é uma vergonha para a sua família e todos os chefes do mundo',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxvOj_15OLIX7epljuwihvAHdJzyU3hGLpg4BuenVctdXJzUNqA&s'
            },
            {
                step: 'Visite o seu Continente mais próximo e compre a massa de pizza mais barata',
                image: 'https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/470637/medium_KeWgiCcG6U.jpg'
            },
        ],
        tags: ['salgado'],
        desc: `É bom`,
        comments: [{
            comment: '56BWSVD 000000000000000000000789 890 99?OOF',
            author: 'AlienWoman',
        }]
    },
    13: {
        name: 'Mousse de chocolate',
        difficulty: 2,
        creator: 'TodTheMan',
        classification: 5,
        ingredients: [
            {
                name: 'Chocolate de culinária',
                quantity: '200g'
            },
            {
                name: 'Ovos',
                quantity: '6',
            },
            {
                name: 'Açúcar',
                quantity: '100g',
            },
            {
                name: 'Manteiga',
                quantity: '50g',
            },
        ],
        image: 'https://images-gmi-pmc.edge-generalmills.com/fe558022-4544-458f-aaa0-eda0de1bcf99.jpg',
        medTime: 30,
        steps: [
            {
                step: 'Pique a tablete de chocolate em pedaços pequeninos e coloque numa taça de pirex',
                image: 'https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/holiday/H2_Holidays_Chocolate_Chopping_2.jpg'
            },
            {
                step: 'Leve a derreter em banho-maria o chocolate com a manteiga',
                image: 'https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/holiday/H2_Holidays_Chocolate_Just_Melted_4.jpg',

            },
            {
                step: 'À parte, numa batedeira, bata as gemas com o açúcar até obter uma mistura cremosa',
                image: 'https://www.iguaria.com/wp-content/uploads/2015/01/Bater-Bolo-Castela-Verde.jpg',

            },
            {
                step: 'Incorpore o chocolate que reservou',
                image: 'https://4.bp.blogspot.com/-DZvgJYMKvkQ/W7SuH7p6vpI/AAAAAAAAEus/oARK7HP0pj4nh4k1cYEeswieO4wU8jQQACLcBGAs/s1600/IMG_1215.JPG',

            }
            ,
            {
                step: 'Bata as claras em castelo e envolva manualmente no preparado anterior, até que fique um creme homogéneo',
                image: 'https://2.bp.blogspot.com/-c6yYZiaRGog/W7Suc8iLp0I/AAAAAAAAEvI/GQlcJCh0sxQfDXLHHEZf8wgrjpQvvaaDACEwYBhgL/s1600/IMG_1216.JPG',

            },
            {
                step: 'Distribua por ´tacinhas`, leve ao frigorífico umas horas e está pronto a servir!',
                image: 'https://images-gmi-pmc.edge-generalmills.com/fe558022-4544-458f-aaa0-eda0de1bcf99.jpg',

            },

        ],
        tags: ['sobremesa', 'saudável'],
        desc: `É uma mousse de chocolate super fácil e que agradará toda a família!`,
        comments: [{
            comment: 'Delicioso, mas podia ter mais açúcar',
            author: 'Trishaa',
        },{
            comment: 'tHEY ARE COMMING',
            author: 'AlienWoman',
        },
        {
            comment: 'My dog can do better than that',
            author: 'GordonRamsay',
        }]
    },
    14: {
        name: 'Patê de Atum',
        difficulty: 2,
        creator: 'TodTheMan',
        classification: 3,
        ingredients: [
            {
                name: 'Atum em óleo',
                quantity: '2 lata'
            },
            {
                name: 'maionese',
                quantity: '100g',
            },
            {
                name: 'cebola',
                quantity: '1/2 unidades',
            },
            {
                name: 'ervas',
                quantity: 'qb',
            },
        ],
        image: 'https://t2.rg.ltmcdn.com/pt/images/6/6/5/pate_de_atum_caseiro_6566_600.jpg',
        medTime: 30,
        steps: [
            {
                step: 'Para fazer esta receita é muito simples, primeiramente tire todo o óleo do atum, coloque o mesmo numa tigela grande, adicione o restante dos ingredientes e misture bem.',
                image: 'https://mangacompimenta.com/wp-content/uploads/2018/05/patedeatum-3.jpg'
            },
            {
                step: 'colocar no frigorifico e em seguida está pronto a servir!',
                image: 'https://t2.rg.ltmcdn.com/pt/images/6/6/5/pate_de_atum_caseiro_6566_600.jpg',

            },
        ],
        tags: ['peixe', 'saudável', 'salgado'],
        desc: `É sempre bom ter algumas latas de atum no armário da cozinha para quando quiser preparar uma receita prática, rápida e deliciosa, como é o caso do paté de atum. Este preparado é ótimo para fazer quando receber convidados e quiser servir uma entradinha ou mesmo para barrar em sandes e acompanhar as saladas do dia-a-dia.

        Para além de ser uma receita simples e saborosa, ainda vai tirar partido do valor nutricional do atum, que é um peixe rico em proteínas, potássio, magnésio, para além de outros minerais e vitaminas importantes para a saúde. Sempre que possível, prefira utilizar o atum fresco à versão em lata, pois é ainda mais saudável.`,
        comments: [{
            comment: 'Bóculos',
            author: 'AlienWoman',
        }]
    },
    15: {
        name: 'Patê de Peito de Peru',
        difficulty: 2,
        creator: 'TodTheMan',
        classification: 2,
        ingredients: [
            {
                name: 'Peito de peru defumado',
                quantity: '100g'
            },
            {
                name: 'Creme de queijo',
                quantity: '1 colher de chá',
            },
        ],
        image: 'https://img.itdg.com.br/tdg/images/recipes/000/049/442/135927/135927_original.jpg?mode=crop&width=710&height=400',
        medTime: 30,
        steps: [
            {
                step: 'Picar o peito de peru e misturá-lo com o creme de queijo',
                image: 'https://img.itdg.com.br/tdg/images/recipes/000/049/442/135927/135927_original.jpg?mode=crop&width=710&height=400'
            },
            {
                step: 'colocar no frigorifico e em seguida está pronto a servir!',
                image: 'https://img.itdg.com.br/tdg/images/recipes/000/049/442/135927/135927_original.jpg?mode=crop&width=710&height=400',

            },
        ],
        tags: ['salgado', 'saudável', 'carne'],
        desc: `Simples de fazer e toda a gente adora <3`,
        comments: [{
            comment: 'Não gostei :/',
            author: 'Trishaa',
        }]
    },
    16: {
        name: 'Molho para Carne',
        difficulty: 1,
        creator: 'AlienWoman',
        classification: 5,
        ingredients: [
            {
                name: 'copo de vinho branco seco',
                quantity: '250 ml'
            },
            {
                name: 'cebola picada',
                quantity: '1/2 unidades',
            },
            {
                name: 'creme de leite',
                quantity: '55 ml',
            },
            {
                name: 'manteiga picada',
                quantity: '100 g',
            },
            {
                name: 'tomate picado (sem pele)',
                quantity: '50 g',
            },
            {
                name: 'sal',
                quantity: 'qb',
            },
            {
                name: 'pimenta',
                quantity: 'qb',
            },
        ],
        image: 'https://t2.rg.ltmcdn.com/pt/images/4/7/2/img_molho_simples_para_frango_5274_600.jpg',
        medTime: 45,
        steps: [
            {
                step: 'comece por aquecer uma frigideira em fogo médio. Adicione a cebola e o vinho branco e tempere com sal e pimenta. Deixe a mistura ferver.',
                image: 'https://t1.rg.ltmcdn.com/pt/images/4/7/2/img_molho_simples_para_frango_5274_paso_0_600.jpg'
            },
            {
                step: 'De seguida, baixe a temperatura para fogo médio baixo e junte o creme de leite. Cozinhe por 2 minutos, remova a frigideira do fogão e adicione a manteiga aos poucos, batendo sempre com um fouet. Volte a temperar com sal e pimenta do reino e adicione o molho de pimenta e o molho inglês.',
                image: 'https://t2.rg.ltmcdn.com/pt/images/4/7/2/img_molho_simples_para_frango_5274_paso_1_600.jpg',

            },
            {
                step: 'Passe o molho por uma peneira fina e coloque o líquido na frigideira de novo. Adicione o tomate e, se desejar, as alcaparras. Misture bem e sirva de seguida.',
                image: '',

            },
            {
                step: 'O seu molho para frango simples está pronto a servir! O seu sabor sofisticado é ideal para complementar um frango grelhado suculento.',
                image: 'https://t2.rg.ltmcdn.com/pt/images/4/7/2/img_molho_simples_para_frango_5274_paso_3_600.jpg',

            },
        ],
        tags: ['salgado'],
        desc: `As receitas de carne ficam ainda mais saborosas se forem servidas com um molho caseiro que complementa ou intensifica o sabor da carne escolhida. Existem várias receitas de molhos para carne que você pode experimentar, mas esta é a melhor!!!`,
        comments: [{
            comment: 'sim',
            author: 'AlienWoman',
        }]
    },
    17: {
        name: 'Biscoitos de banana e aveia',
        difficulty: 3,
        creator: 'YodaBestCook',
        classification: 1,
        ingredients: [
            {
                name: 'Bananas',
                quantity: '2'
            },
            {
                name: 'Aveia',
                quantity: '1 chávena',
            },
        ],
        image: 'https://www.guiadasemana.com.br/contentFiles/image/2018/09/FEA/thumbnail/48283_w380h235_1537207893shutterstock-716366560.jpg',
        medTime: 40,
        steps: [
            {
                step: 'Amasse as bananas e acrescente a aveia, misturando bem. Depois, faça bolinhas no formato de pequenos biscoitos.',
                image: 'http://2.bp.blogspot.com/-z76HK5d0XFg/Uc9-1u90OvI/AAAAAAAAGJA/bbNYTJIpUQc/s640/DSCF5995.JPG',

            },
            {
                step: 'coloque para assar em uma forma untada por 15 minutos em forno pré-aquecido a 175 graus.',
                image: 'https://www.harpyja.com.br//imagens/uploads/2018/11/foto%20capa%20forno.jpg',

            },
        ],
        tags: ['saudável', 'doce'],
        desc: `
        Os cookies de banana e aveia são uma opção saudável, simples e rápida para quem busca um lanche ou café da manhã nutritivo e saboroso. Como são naturalmente doces, não é necessário acrescentar açúcar. Além disso, estes biscoitinhos de banana são ainda perfeitos para vegetarianos ou veganos. Se você gostaria de saber como preparar esse cookie saudável, veio ao sitío certo!`,
        comments: [{
            comment: '567 aa a aaaaaa',
            author: 'AlienWoman',
        },{
            comment: 'Yodabest is the best',
            author: 'Trishaa',
        }]
    },
    18: {
        name: 'Bombocado',
        difficulty: 1,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'Coco ralado',
                quantity: '500g'
            },
            {
                name: 'Leite condensado',
                quantity: '1 lata',
            },
        ],
        image: 'https://www.dicasdemulher.com.br/wp-content/uploads/2018/12/brigadeiro-branco-16-730x449.jpg',
        medTime: 15,
        steps: [
            {
                step: 'Coloque todos os ingredientes no liquidificador e misture durante 1 minuto.',
                image: 'https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/1551447923037-beijinho-de-colher.jpg',

            },
            {
                step: 'Faça pequenas bolas com a mistura. Passe as bolinhas por uma tacinha de coco ralado e coloque-as num tabuleiro de servir.',
                image: 'https://www.iguaria.com/wp-content/uploads/2018/02/Iguaria-Beijos-com-Coco.jpg',

            }, {
                step: 'Leve ao frigorífico até ficarem firmes',
                image: 'https://mediad.publicbroadcasting.net/p/wual/files/styles/x_large/public/201401/cold-winter.jpg',

            },
        ],
        tags: ['doce'],
        desc: `O bombocado é um daqueles doces que dá vontade de comer aos montes. Seja no café-da-manhã ou no lanche da tarde, este docinho é demais!`,
        comments: [{
            comment: 'côco',
            author: 'AlienWoman',
        }]
    },
    19: {
        name: 'Torta de nutella',
        difficulty: 2,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'pacote de biscoitos de chocolate',
                quantity: '1'
            },
            {
                name: 'Nutella',
                quantity: '300g',
            },
            {
                name: 'Clara de ovo',
                quantity: '3'
            },
            {
                name: 'margarina',
                quantity: '100g',
            },
            {
                name: 'açúcar',
                quantity: '150g'
            },

        ],
        image: 'https://abrilmdemulher.files.wordpress.com/2016/10/receita-torta-macia-de-nutella.jpg?quality=90&strip=info',
        medTime: 50,
        steps: [
            {
                step: 'No liquidificador, bata os biscoitos até formar uma farinha. Em seguida junte a manteiga',
                image: 'http://3.bp.blogspot.com/_1Gw2CObkHTg/SwW7RWiikCI/AAAAAAAAAxo/fWPHsu__8UM/s1600/IMG_2975.JPG',

            },
            {
                step: 'Forre o fundo de uma forma de 18 cm de diâmetro e asse no forno, preaquecido, a 200 ºC, por 10 minutos. Em seguida deixe arrefecer.',
                image: 'http://4.bp.blogspot.com/_1Gw2CObkHTg/SwW1xz5By8I/AAAAAAAAAw4/-nom9Z6xnC4/s1600/IMG_2977.JPG',

            }, {
                step: 'Numa panela, misture o açúcar e a água. Leve ao fogo brando (160 ºC) e deixe ferver até dar ponto de calda',
                image: 'https://1.bp.blogspot.com/-phj5v7tsXsI/XBe_XcUdvXI/AAAAAAAAGSk/cOkx1bquDmMFw4zrs4Vo_UjnH4wlqRxSACLcBGAs/s1600/receita-calda-acucar.jpg',

            },
            {
                step: 'Bata as claras em neve, continue batendo e junte a calda em fio até dar ponto de marshmallow',
                image: 'http://1.bp.blogspot.com/-v5YwTFxmFio/T2KGTCgmdwI/AAAAAAAAAM0/8paRyFTV_zY/s1600/mars.jpg',

            }, {
                step: 'Coloque a Nutella® em um recipiente e amoleça em banho-maria. Junte o rum e o marshmallow. Coloque sobre a massa e leve à geladeira por, no mínimo, 5 horas.',
                image: 'https://www.dicascaseiras.org/wp-content/uploads/2016/01/creme-denutella.png',

            },
        ],
        tags: ['doce'],
        desc: `Uma das melhores sobremesas da vida!!! É cremosa, é geladinha e é doce na medida, aquela receita pra quem ama Nutella assim como eu!`,
        comments: [{
            comment: 'nutella',
            author: 'AlienWoman',
        },{
            comment: 'Uau!',
            author: 'Trishaa',
        }]
    },

    20: {
        name: 'Bolo de Canela',
        difficulty: 2,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'pacote de biscoitos de chocolate',
                quantity: '1'
            },
            {
                name: 'canela',
                quantity: '3g',
            },
            {
                name: 'Clara de ovo',
                quantity: '3'
            },
            {
                name: 'margarina',
                quantity: '100g',
            },
            {
                name: 'açúcar',
                quantity: '150g'
            },

        ],
        image: 'https://mamapaleo.blogs.nit.pt/wp-content/uploads/2016/12/bolo.jpg',
        medTime: 60,
        steps: [
            {
                step: 'Misture todos os ingredientes no liquidificador',
                image: 'https://mamapaleo.blogs.nit.pt/wp-content/uploads/2016/12/bolo.jpg',

            },
            {
                step: 'ponha no forno, preaquecido, a 180ºC, por 45 minutos. Em seguida deixe arrefecer.',
                image: 'https://mamapaleo.blogs.nit.pt/wp-content/uploads/2016/12/bolo.jpg',

            },
        ],
        tags: ['doce', 'bolo'],
        desc: `Bolo feito especialmente para amantes de canela`,
        comments: [{
            comment: 'caneca?',
            author: 'AlienWoman',
        }]
    },

    21: {
        name: 'Bolo de chololate',
        difficulty: 2,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'pacote de biscoitos de chocolate',
                quantity: '1'
            },
            {
                name: 'Nutella',
                quantity: '300g',
            },
            {
                name: 'Clara de ovo',
                quantity: '3'
            },
            {
                name: 'margarina',
                quantity: '100g',
            },
            {
                name: 'açúcar',
                quantity: '150g'
            },

        ],
        image: 'https://www.foodfromportugal.com/content/uploads/2017/02/bolo-chocolate-cafe.jpg',
        medTime: 60,
        steps: [
            {
                step: 'Misture todos os ingredientes no liquidificador',
                image: 'https://mamapaleo.blogs.nit.pt/wp-content/uploads/2016/12/bolo.jpg',

            },
            {
                step: 'ponha no forno, preaquecido, a 180ºC, por 45 minutos. Em seguida deixe arrefecer.',
                image: 'https://mamapaleo.blogs.nit.pt/wp-content/uploads/2016/12/bolo.jpg',

            },
        ],
        tags: ['doce', 'bolo'],
        desc: `Bolo feito especialmente para amantes de chocolate`,
        comments: [{
            comment: 'qnoca bolo 0-+.ç',
            author: 'AlienWoman',
        }]
    },

    22: {
        name: 'Bolo de brocólos',
        difficulty: 2,
        creator: 'AlienWoman',
        classification: 5,
        ingredients: [

            {
                name: 'bróculos',
                quantity: '300g',
            },
            {
                name: 'Clara de ovo',
                quantity: '3'
            },
            {
                name: 'margarina',
                quantity: '100g',
            },
            {
                name: 'açúcar',
                quantity: '150g'
            },

        ],
        image: 'https://portal-amb-imgs.clubedaana.com.br/2018/11/bolo-verde-de-gelatina-e-iogurte-1-1920x1080.jpg',
        medTime: 60,
        steps: [
            {
                step: 'Misture todos os ingredientes no liquidificador',
                image: 'https://portal-amb-imgs.clubedaana.com.br/2018/11/bolo-verde-de-gelatina-e-iogurte-1-1920x1080.jpg',

            },
            {
                step: 'ponha no forno, preaquecido, a 180ºC, por 45 minutos. Em seguida deixe arrefecer.',
                image: 'https://portal-amb-imgs.clubedaana.com.br/2018/11/bolo-verde-de-gelatina-e-iogurte-1-1920x1080.jpg',

            },
            {
                step: 'Já está pronto a servir!',
                image: 'https://portal-amb-imgs.clubedaana.com.br/2018/11/bolo-verde-de-gelatina-e-iogurte-1-1920x1080.jpg',

            },
        ],
        tags: ['doce', 'bolo', 'saudável'],
        desc: `Bolo feito especialmente para amantes de bróculos`,
        comments: [{
            comment: 'bróculos sim',
            author: 'AlienWoman',
        },{
            comment: 'Sabe a saudável',
            author: 'Trishaa',
        }]
    },

    23: {
        name: 'Massa com Atum',
        difficulty: 1,
        creator: 'TodTheMan',
        classification: 5,
        ingredients: [
            {
                name: 'Massa',
                quantity: '200g'
            },
            {
                name: 'lada de atúm',
                quantity: '1',
            },

        ],
        image: 'https://cozinhaalacarte.com/wp-content/uploads/2019/05/massaatum-1139x641.jpg',
        medTime: 15,
        steps: [
            {
                step: 'coza a massa seguindo as instruções do pacote',
                image: 'https://www.reluctantgourmet.com/wp-content/uploads/2018/04/g_how_not_to_make_pasta.jpg',

            },
            {
                step: 'Junte o atum.',
                image: 'https://www.dicasonline.com/wp-content/uploads/receitas-com-atum-em-lata-758x474.jpg',

            },
            {
                step: 'Pronto a servir!',
                image: 'https://cozinhaalacarte.com/wp-content/uploads/2019/05/massaatum-1139x641.jpg',

            },
        ],
        tags: ['salgado'],
        desc: `fácil e salgado`,
        comments: [
            {
                comment: 'humm.. é... fácil! ',
                author: 'Trishaa',
            },{
                comment: '546jrtyfg ',
                author: 'AlienWoman',
            },
            {
                comment: 'É uma boa primeira receita!',
                author: 'ClaireBA',
            },
        ]
    },

    24: {
        name: 'Bolo de Limão',
        difficulty: 2,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'pacote de biscoitos de chocolate',
                quantity: '1'
            },
            {
                name: 'limão',
                quantity: '1',
            },
            {
                name: 'Clara de ovo',
                quantity: '3'
            },
            {
                name: 'margarina',
                quantity: '100g',
            },
            {
                name: 'açúcar',
                quantity: '150g'
            },

        ],
        image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9F3F686F-4D60-414D-9AC9-733C31385588/Derivates/0BB06147-B56E-4D1F-BC35-CC0BB7E14404.jpg',
        medTime: 60,
        steps: [
            {
                step: 'Misture todos os ingredientes no liquidificador',
                image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9F3F686F-4D60-414D-9AC9-733C31385588/Derivates/0BB06147-B56E-4D1F-BC35-CC0BB7E14404.jpg',

            },
            {
                step: 'ponha no forno, preaquecido, a 180ºC, por 45 minutos. Em seguida deixe arrefecer.',
                image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9F3F686F-4D60-414D-9AC9-733C31385588/Derivates/0BB06147-B56E-4D1F-BC35-CC0BB7E14404.jpg',

            },
        ],
        tags: ['doce', 'bolo'],
        desc: `Bolo feito especialmente para amantes de limão`,
        comments: [{
            comment: 'alien',
            author: 'AlienWoman',
        },{
            comment: 'Mais açucar!',
            author: 'Trishaa',
        }]
    },
}

export const UserRecipes = (username: string): Recipes => {
    return {
        25: {
            name: 'Croissants',
            difficulty: 1,
            creator: username,
            classification: 4,
            ingredients: [
                {
                    name: 'Massa Folhada',
                    quantity: '200g'
                },
            ],
            image: 'https://www.pingodoce.pt/wp-content/uploads/2017/05/croissants_step39.jpg',
            medTime: 20,
            steps: [
                {
                    step: 'cortar a massa folhada',
                    image: 'https://www.pingodoce.pt/wp-content/uploads/2017/05/croissants_step31.jpg',
                },
                {
                    step: 'colocar no forno em 200 ºC até dourar',
                    image: 'https://www.pingodoce.pt/wp-content/uploads/2017/05/croissants_step39.jpg',
                },

            ],
            tags: ['doce'],
            desc: 'A Receita mais simples que provavelmente irá encontrar',
            comments: []
        },
        26: {
            name: 'ovo recheado',
            difficulty: 1,
            creator: username,
            classification: 4,
            ingredients: [
                {
                    name: 'ovo',
                    quantity: '4'
                },
                {
                    name: 'mayonese',
                    quantity: '100gml',
                },
            ],
            image: 'https://images.media-allrecipes.com/userphotos/560x315/3275386.jpg',
            medTime: 100,
            steps: [
                {
                    step: 'Coza os ovos em agua a ferver por 10 minutos. deixe-os arrefecer e em seguida corte-os ao meio',
                    image: 'https://images.glaciermedia.ca/polopoly_fs/1.2217581.1459075810!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/new-new-c1-027-akis-jpg.jpg',
                },
                {
                    step: 'retire a gema, misture com a mayonese e volte a colocar nas metades das claras de ovo',
                    image: 'https://images.media-allrecipes.com/userphotos/560x315/3275386.jpg',
                },

            ],
            tags: ['salgado'],
            desc: 'Entrada simples que agradará a todos.',
            comments: []
        },
        27: {
            name: 'Mousse de chocolate light',
            difficulty: 2,
            creator: username,
            classification: 5,
            ingredients: [
                {
                    name: 'Chocolate de culinária',
                    quantity: '200g'
                },
                {
                    name: 'Ovos',
                    quantity: '6',
                },
                {
                    name: 'Açúcar',
                    quantity: '100g',
                },
                {
                    name: 'Manteiga',
                    quantity: '50g',
                },
            ],
            image: 'https://images.vidaativa.pt/articles/850_400_chocolate-mousse_1492986627.jpg',
            medTime: 30,
            steps: [
                {
                    step: 'Pique a tablete de chocolate em pedaços pequeninos e coloque numa taça de pirex',
                    image: 'https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/holiday/H2_Holidays_Chocolate_Chopping_2.jpg'
                },
                {
                    step: 'Leve a derreter em banho-maria o chocolate com a manteiga',
                    image: 'https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/holiday/H2_Holidays_Chocolate_Just_Melted_4.jpg',

                },
                {
                    step: 'À parte, numa batedeira, bata as gemas com o açúcar até obter uma mistura cremosa',
                    image: 'https://www.iguaria.com/wp-content/uploads/2015/01/Bater-Bolo-Castela-Verde.jpg',

                },
                {
                    step: 'Incorpore o chocolate que reservou',
                    image: 'https://4.bp.blogspot.com/-DZvgJYMKvkQ/W7SuH7p6vpI/AAAAAAAAEus/oARK7HP0pj4nh4k1cYEeswieO4wU8jQQACLcBGAs/s1600/IMG_1215.JPG',

                }
                ,
                {
                    step: 'Bata as claras em castelo e envolva manualmente no preparado anterior, até que fique um creme homogéneo',
                    image: 'https://2.bp.blogspot.com/-c6yYZiaRGog/W7Suc8iLp0I/AAAAAAAAEvI/GQlcJCh0sxQfDXLHHEZf8wgrjpQvvaaDACEwYBhgL/s1600/IMG_1216.JPG',

                },
                {
                    step: 'Distribua por ´tacinhas`, leve ao frigorífico umas horas e está pronto a servir!',
                    image: 'https://images-gmi-pmc.edge-generalmills.com/fe558022-4544-458f-aaa0-eda0de1bcf99.jpg',

                },

            ],
            tags: ['sobremesa', 'saudável'],
            desc: `É uma mousse de chocolate super fácil e que agradará toda a família!`,
            comments: []
        },
        28: {
            name: 'Bifanas',
            difficulty: 1,
            creator: username,
            classification: 4,
            ingredients: [
                {
                    name: 'bifanas',
                    quantity: '600g'
                },
                {
                    name: 'dentes de alho',
                    quantity: '4',
                },
                {
                    name: 'cerveja branca',
                    quantity: '100ml',
                },
            ],
            image: 'https://www.teleculinaria.pt/wp-content/uploads/2016/01/Bifanas-no-pão-à-Moda-Vendas-Novas-CHLM-3.jpg',
            medTime: 50,
            steps: [
                {
                    step: 'misture todos os ingredientes e coloque numa frigideira em lume brando até completamente bem passadas',
                    image: 'https://www.teleculinaria.pt/wp-content/uploads/2016/01/Bifanas-no-pão-à-Moda-Vendas-Novas-CHLM-3.jpg',
                },

            ],
            tags: ['carne', 'salgado'],
            desc: 'bom e barato',
            comments: []
        },
        29: {
            name: 'Suspiros da Terrinha',
            difficulty: 2,
            creator: username,
            classification: 3,
            ingredients: [
                {
                    name: 'Ovos',
                    quantity: '3'
                },
                {
                    name: 'Açúcar',
                    quantity: '1 chávena de chá',
                },
            ],
            image: 'https://www.gazetadopovo.com.br/bomgourmet/wp-content/uploads/2019/07/suspiros-1-670x430.jpg',
            medTime: 20,
            steps: [
                {
                    step: 'Comece a bater as claras com um pouco de açúcar. Bata na velocidade mínima/média. Assim que estiver com uma textura de mousse, aumente a velocidade do batedeira e despeje/verta o açúcar aos poucos até as claras montarem em neve/castelo.',
                    image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091226.jpg'
                },
                {
                    step: 'Caso bata a mão, sentirá as claras mais densas e apertadas. Bata até que se forme o que chamamos de "bico do pássaro". Essa é uma excelente dica para ver a textura.',
                    image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091227.jpg'
                },
                {
                    step: 'Imediatamente, coloque então as claras montadas com açúcar no saco pasteleiro e faça os suspiros (forre a forma com papel vegetal/manteiga).',
                    image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091228.jpg'
                },
                {
                    step: 'Leve ao forno a 120°C durante 1h15min, e passado esse tempo, desligue-o e deixe os suspiros secarem no interior do forno por algumas horas : eles estarão perfeitamente cozidos!',
                    image: 'https://pt.petitchef.com/imgupl/recipe-step/454977s2091229.jpg'
                },
            ],
            tags: ['suspiros', 'doce', 'sobremesa', 'pequeno-almoço', 'almoço', 'jantar', 'snack'],
            desc: `Você ainda tem claras de ovo? Não as jogue fora! Faça esses deliciosos suspiros :-) Uma receita ideal e anti-desperdício para acompanhar o seu chá ou café.
        Com apenas 2 ingredientes, faça esta receita com nossas instruções passo a passo abaixo`,
            comments: []
        },
    }
}