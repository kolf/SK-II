var PRODUCTS = {
	id: '0',
	name: "SKII New Product",
	title: "SK-II releases 3 new products",
	content:
	  "<p>My skin dullness is more obvious in the next morning when I had a lack of sleep, under stress or drank too much last night…</p><p>Strengthen the original skin power to make it resistant against lack of sleep or stress, and make vibrant skin.</p>",
	  newList: [
	  {
		  id: "1",
		  name: 'Skin Reset',
		  title: 'SK-II SKIN RESET ESSENCE',
		  subTitle: 'Vibrant Life with Radiant Skin',
		  price: '140',
		  size: '30ml',
		  imgUrl: "[% GraphicsPath() %]/img/category1.png",
		  bgUrl: "[% GraphicsPath() %]/img/FTE_image.jpg",
		  content: "<p>SK-II newly proposed, “First-Attack (Senkou) essence”, it is used first prior to to other skin-treatment products. </p><p>SK-II discovered that lack of sleep and/or irregular hours makes a “layer of dullness” inside skin, inhibits skin care products over days, and makes skin look unhealthy.</p><p>Concentrated Pitera and moisturizing ingredients are freshly kept in the dual package. They are activated by mixing them on your palm. Then, it “resets” the “layer” in your skin.</p><p>Only adding this product takes your skin care  to new heights!</p > "
	  },
	  {
		  id: "2",
		  name: 'Skin Supplement',
		  title: 'SK-II SKIN-SUPPLEMENT ESSENCE',
		  subTitle: 'No more disturbed by troubles',
		  price: '140',
		  size: '30ml',
		  imgUrl: "[% GraphicsPath() %]/img/category1.png",
		  bgUrl: "[% GraphicsPath() %]/img/FTE_image.jpg",
		  content: "<p>SK-II newly proposed, “Multi-essence”, it contains many essential ingredients.</p ><p>The balance of skin is sometimes disrupted as if lack of sleep and/or diet causes imbalance.  Such unbalanced condition of skin surface causes skin troubles suddenly. </p ><p>Concentrated vitamins and Pitera complex are filled in a dual package. They are activated by mixing on your palm, and makes your skin well-balanced.</p ><p>You are no more disturbed by troubles in a busy life.</p > "
	  },
	  {
		  id: "3",
		  name: 'Jewel Drop',
		  title: 'SK-II SKIN-SUPPLEMENT ESSENCE',
		  subTitle: 'No more disturbed by troubles',
		  price: '140',
		  size: '30ml',
		  imgUrl: "[% GraphicsPath() %]/img/category1.png",
		  bgUrl: "[% GraphicsPath() %]/img/FTE_image.jpg",
		  content: "<p>SK-II newly proposed, “First-Attack (Senkou) essence”, it is used first prior to to other skin-treatment products. </p><p>SK-II discovered that lack of sleep and/or irregular hours makes a “layer of dullness” inside skin, inhibits skin care products over days, and makes skin look unhealthy.</p><p>Concentrated Pitera and moisturizing ingredients are freshly kept in the dual package. They are activated by mixing them on your palm. Then, it “resets” the “layer” in your skin.</p><p>Only adding this product takes your skin care  to new heights!</p > "
	  }
  ],
	list: [
	  {
		id: "4",
		name: "Bestsellers",
		title: "SKIN RESET ESSENCE",
		subTitle: "Crystal clear skin after one bottle.",
		price: "100",
		size: "Pre-Serum 15,000円 30mL",
		imgUrl: "[% GraphicsPath() %]/img/skin_reset essence.png",
		bgUrl: "[% GraphicsPath() %]/img/FTE_image.jpg",
		content:
		  "<p>SK-II newly propose an advanced skincare product “Jewel-Drop”.</p><p>My skin sometimes has dullness even if I use a lot of products. I didn’t have such condition before… It is because lack of sleep and/or irregular hours weaken your skin-power.</p><p>This is a drop-type skin care product; condensed ingredients in 2 chambers make a drop on hand and shines like a jewel. They are activated by mixing on your palm. It wakes up your natural radiance, and starts brightening within.</p><p>The beautiful bare-skin can simplify your skin care & make-up steps.</p><p>* This new form skin care product allows flexible usages; you can have this product only after Clear Lotion, and/or mix it with other product.</p>"
	  },
	  {
		id: "5",
		name: "FTE",
		title: "Facial Treatment Essence",
		subTitle: "Crystal clear skin after one bottle.",
		price: "120",
		size: "Essence (Clear Lotion) 17,000円 160mL",
		imgUrl: "[% GraphicsPath() %]/img/FTE.png",
		bgUrl: "[% GraphicsPath() %]/img/FTE_image.jpg",
		content:
		  "<p>Unchanged for over 35 years. Facial Treatment Essence is SK-II’s signature and most awarded bestseller with more than 90% PITERA™, a natural bio-ingredient containing vitamins, amino acids, and minerals. </p><p>Facial Treatment Essence transforms your skin to crystal clear, boosting skin’s texture, radiance and firmness. </p><p>Experience the power of PITERA™.</p>"
	  },
	  {
		id: "6",
		name: "GAE",
		title: "Genoptics Aura Essence",
		subTitle: "Crystal clear skin after one bottle.",
		price: "110",
		size: "Whitening Essence 16,000円 30mL",
		imgUrl: "[% GraphicsPath() %]/img/GAE.png",
		bgUrl: "[% GraphicsPath() %]/img/GAE_BE.jpg",
		content:
		  "<p>Reveal your aura from within¹ with our signature product from SK-II's award-winning whitening boutique</p><p>Re-coded with PITERA™ infused GenOptics Aura Complex, it reduces hidden and visible spot　formations in skin to reveal your aura glow. This leaves skin looking radiant and brighter from within.</p>"
	  },
	  {
		id: "7",
		name: "AA_BE",
		title: "R.N.A. Power Radical New Age Essence",
		subTitle: "Crystal clear skin after one bottle.",
		price: "40",
		size: "Pre-Serum 15,000円 30mL",
		imgUrl: "[% GraphicsPath() %]/img/RNA_power_BE.png",
		bgUrl: "[% GraphicsPath() %]/img/RNAPower_BE.jpg",
		content:
		  "<p>Improves firmness and texture for bouncy, pore-less skin so you look younger even as you age</p><p>The beautiful bare-skin can simplify your skin care & make-up steps.</p><p>Immediately upon application, each drop fills the gaps in your skin, making it firm, resilient, and feeling plump. Skin becomes smooth and tinged with a fresh morning glow the next day. One bottle reduces the appearance of pores and wrinkles. </p>"
	  },
	  {
		id: "8",
		name: "cream",
		title: "R.N.A. Power Radical New Age Airy Milky Lotion",
		subTitle: "Crystal clear skin after one bottle.",
		price: "100",
		size: "Beauty Milky Lotion 11,500円 50g",
		imgUrl: "[% GraphicsPath() %]/img/Airly_ML.png",
		bgUrl: "[% GraphicsPath() %]/img/RNA_Cream.jpg",
		content:
		  "<p>Improves your skin beauty even as you age.</p><p>The beautiful bare-skin can simplify your skin care & make-up steps.</p><p>Featuring the RNArchitect Complex² and an innovative structure to lock in moisture, R.N.A. Power Radical New Age Airy Milky Lotion helps to rebuild beauty from within³. Wake up to supple and revitalised skin the morning after and look forward to youthful radiance with continued use.</p>"
	  }
	]
  }
  
  var PATH = "[% GraphicsPath() %]";