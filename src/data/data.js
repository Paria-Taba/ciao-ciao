const menuDishes = [
	{
	  id: 1,
	  name: "Bruschetta",
	  description: "Grillat bröd toppat med tomat, vitlök och basilika.",
	  ingredients: ["Bröd", "Tomat", "Vitlök", "Basilika", "Olivolja"],
	  price: 55,
	  image: "https://example.com/images/bruschetta.jpg"
	},
	{
	  id: 2,
	  name: "Insalata Caprese",
	  description: "Sallad med tomater, mozzarella och basilika.",
	  ingredients: ["Tomater", "Mozzarella", "Basilika", "Olivolja", "Salt"],
	  price: 75,
	  image: "https://example.com/images/caprese.jpg"
	},
	{
	  id: 3,
	  name: "Margherita Pizza",
	  description: "Pizza med tomatsås, mozzarella och basilika.",
	  ingredients: ["Tomatsås", "Mozzarella", "Basilika", "Pizzadeg"],
	  price: 95,
	  image: "https://example.com/images/margherita.jpg"
	},
	{
	  id: 4,
	  name: "Pasta Carbonara",
	  description: "Pasta med pancetta, parmesan och ägg.",
	  ingredients: ["Pasta", "Pancetta", "Parmesan", "Ägg", "Svartpeppar"],
	  price: 120,
	  image: "https://example.com/images/carbonara.jpg"
	},
	{
	  id: 5,
	  name: "Risotto ai Funghi",
	  description: "Risotto med svamp och parmesan.",
	  ingredients: ["Risottoris", "Champinjoner", "Parmesan", "Vitt vin", "Lök", "Smör"],
	  price: 110,
	  image: "https://example.com/images/risotto.jpg"
	},
	{
	  id: 6,
	  name: "Lasagna al Forno",
	  description: "Ugnsbakad lasagne med köttfärs och ost.",
	  ingredients: ["Lasagneplattor", "Köttfärs", "Tomatsås", "Bechamelsås", "Ost"],
	  price: 135,
	  image: "https://example.com/images/lasagna.jpg"
	},
	{
	  id: 7,
	  name: "Fettuccine Alfredo",
	  description: "Fettuccine med grädde och parmesan.",
	  ingredients: ["Fettuccine", "Smör", "Grädde", "Parmesan", "Vitlök"],
	  price: 115,
	  image: "https://example.com/images/alfredo.jpg"
	},
	{
	  id: 8,
	  name: "Gnocchi al Pesto",
	  description: "Potatisgnocchi med hemgjord pestosås.",
	  ingredients: ["Gnocchi", "Basilika", "Pinjenötter", "Vitlök", "Parmesan", "Olivolja"],
	  price: 105,
	  image: "https://example.com/images/gnocchi.jpg"
	},
	{
	  id: 9,
	  name: "Pollo alla Cacciatora",
	  description: "Kycklinggryta med tomat, oliver och örter.",
	  ingredients: ["Kyckling", "Tomat", "Oliver", "Vitlök", "Rosmarin", "Lök"],
	  price: 130,
	  image: "https://example.com/images/pollo.jpg"
	},
	{
	  id: 10,
	  name: "Melanzane alla Parmigiana",
	  description: "Auberginegratäng med tomatsås och mozzarella.",
	  ingredients: ["Aubergine", "Tomatsås", "Mozzarella", "Parmesan", "Basilika"],
	  price: 110,
	  image: "https://example.com/images/melanzane.jpg"
	}
  ];


  const desserts = [
	{
	  id: 11,
	  name: "Tiramisu",
	  description: "Dessert med kaffe, mascarpone och kakao.",
	  ingredients: ["Mascarpone", "Espresso", "Savoiardikex", "Kakao", "Ägg", "Socker"],
	  price: 65,
	  image: "https://example.com/images/tiramisu.jpg"
	},
	{
	  id: 12,
	  name: "Panna Cotta",
	  description: "Len gräddpudding med vanilj och hallonsås.",
	  ingredients: ["Grädde", "Vanilj", "Socker", "Gelatin", "Hallon"],
	  price: 60,
	  image: "https://example.com/images/pannacotta.jpg"
	},
	{
	  id: 13,
	  name: "Cannoli Siciliani",
	  description: "Friterade rör fyllda med ricottakräm.",
	  ingredients: ["Ricotta", "Citronskal", "Socker", "Vetemjöl", "Vanilj"],
	  price: 70,
	  image: "https://example.com/images/cannoli.jpg"
	},
	{
	  id: 14,
	  name: "Gelato",
	  description: "Italiensk glass – välj mellan choklad, jordgubb eller pistage.",
	  ingredients: ["Mjölk", "Socker", "Äggula", "Smaksättning"],
	  price: 50,
	  image: "https://example.com/images/gelato.jpg"
	},
	{
	  id: 15,
	  name: "Zabaglione",
	  description: "Dessertkräm med vin, socker och ägg.",
	  ingredients: ["Marsalavin", "Ägg", "Socker"],
	  price: 58,
	  image: "https://example.com/images/zabaglione.jpg"
	},
	{
	  id: 16,
	  name: "Torta della Nonna",
	  description: "Vaniljfylld paj med pinjenötter och florsocker.",
	  ingredients: ["Mjöl", "Smör", "Vaniljkräm", "Pinjenötter", "Socker"],
	  price: 62,
	  image: "https://example.com/images/torta.jpg"
	},
	{
	  id: 17,
	  name: "Affogato",
	  description: "Vaniljglass överhälls med het espresso.",
	  ingredients: ["Vaniljglass", "Espresso"],
	  price: 45,
	  image: "https://example.com/images/affogato.jpg"
	},
	{
	  id: 18,
	  name: "Budino al Cioccolato",
	  description: "Chokladpudding med mörk choklad och vispgrädde.",
	  ingredients: ["Mörk choklad", "Mjölk", "Socker", "Maizena", "Vanilj"],
	  price: 63,
	  image: "https://example.com/images/budino.jpg"
	}
  ];

  const drinks = [
	{
	  id: 19,
	  name: "Limonata",
	  description: "Italiensk citronläsk – söt och syrlig.",
	  ingredients: ["Citron", "Socker", "Kolsyrat vatten"],
	  price: 35,
	  image: "https://example.com/images/limonata.jpg"
	},
	{
	  id: 20,
	  name: "San Pellegrino",
	  description: "Kolsyrat mineralvatten från Italien.",
	  ingredients: ["Mineralvatten"],
	  price: 28,
	  image: "https://example.com/images/sanpellegrino.jpg"
	},
	{
	  id: 21,
	  name: "Espresso",
	  description: "Stark italiensk kaffe, serveras liten men kraftfull.",
	  ingredients: ["Espressobönor", "Vatten"],
	  price: 30,
	  image: "https://example.com/images/espresso.jpg"
	},
	{
	  id: 22,
	  name: "Cappuccino",
	  description: "Espresso med varm mjölk och skum.",
	  ingredients: ["Espresso", "Mjölk"],
	  price: 38,
	  image: "https://example.com/images/cappuccino.jpg"
	},
	{
	  id: 23,
	  name: "Aperol Spritz",
	  description: "Italiensk fördrink med bubbel och apelsinsmak.",
	  ingredients: ["Aperol", "Prosecco", "Sodavatten", "Apelsin"],
	  price: 75,
	  image: "https://example.com/images/aperol.jpg"
	},
	{
	  id: 24,
	  name: "Rödvin – Chianti",
	  description: "Klassiskt rödvin från Toscana.",
	  ingredients: ["Druvor (Sangiovese)"],
	  price: 85,
	  image: "https://example.com/images/chianti.jpg"
	},
	{
	  id: 25,
	  name: "Prosecco",
	  description: "Mousserande vin från norra Italien.",
	  ingredients: ["Druvor (Glera)"],
	  price: 80,
	  image: "https://example.com/images/prosecco.jpg"
	}
  ];