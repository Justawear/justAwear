const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Kids' },
    { name: 'Shoes' },
    { name: 'Accessories' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Wool-Cashmere Peacoat',
      category: categories[0]._id,
      description:
        'This season, Purple Label modernizes the iconic peacoat with clean lines and a soft shoulder. It is expertly tailored in Italy from a double-faced fabric and finished with leather trim. This style is available in additional colors, fabrics, or materials through our Made-to-Order service. For more information, please book an appointment with your local Ralph Lauren store.',
      image: 'men/peacoat.jpeg',
      price: 248.99,
      quantity: 600
    },
    {
      name: 'Navy Jacket',
      category: categories[0]._id,
      description:
        'Sleek, lightweight Japanese taffeta and premium down fill give this biker-inspired jacket trans-seasonal appeal.',
      image: 'men/jacket.jpeg',
      price: 153.99,
      quantity: 600
    },
    {
      name: 'Wool Sweater',
      category: categories[0]._id,
      description:
        'This sweater combines a dimensional Aran-knit design with supple suede shoulder patches for a sophisticated take on texture.',
      image: 'men/woolsweater.jpeg',
      price: 87.99,
      quantity: 600
    },
    {
      name: 'Chino Pants',
      category: categories[0]._id,
      description:
        'A wear-with-anything essential, these lightweight pants are tailored from ultrasoft cotton twill that has a hint of stretch for extra comfort.',
      image: 'men/bluepants.jpeg',
      price: 125.99,
      quantity: 600
    },
    {
      name: 'Twill Suit',
      category: categories[0]._id,
      description:
        'The Polo Soft fit puts a modern spin on classic preppy style with a natural shoulder and a half-canvassed construction. This suit is tailored in Italy from English wool twill and treated with a proprietary finish.',
      image: 'men/twillsuit.jpeg',
      price: 1425.99,
      quantity: 600
    },
    {
      name: 'Black Suit',
      category: categories[0]._id,
      description:
        "The Gregory combines lightweight full canvassing and a modern silhouette with Purple Label's unparalleled quality and fine Italian craftsmanship. At the start of construction, pattern pieces are hand-cut by expert tailors, ensuring precision of the highest caliber. Exclusive to Ralph Lauren, this tuxedo's lightweight wool offers superior breathability, natural stretch, and crease-resistant properties.",
      image: 'men/blacksuit.jpeg',
      price: 2199.99,
      quantity: 600
    },
    {
      name: 'Black Robe',
      category: categories[0]._id,
      description:
        '',
      image: 'men/blackrobe.jpeg',
      price: 112.99,
      quantity: 600
    },
    {
      name: 'Birdseye Polo',
      category: categories[0]._id,
      description:
        "An American style standard since 1972, the Polo shirt has been imitated but never matched. Over the decades, Ralph Lauren has reimagined his signature style in a wide array of colors and fits, yet all retain the quality and attention to detail of the iconic original. New for Spring 2021, this Polo shirt is crafted from stretch birdseye mesh, which is defined by its textural hand and two-tone yarn.",
      image: 'men/whitepolo.jpeg',
      price: 79.99,
      quantity: 600
    },
    {
      name: 'Cotton Polo',
      category: categories[0]._id,
      description:
        "An American style standard since 1972, the Polo shirt has been imitated but never matched. Over the decades, Ralph Lauren has reimagined his signature style in a wide array of colors and fits, yet all retain the quality and attention to detail of the iconic original. This roomy version is made from luxe cotton interlock with an ultrasoft finish.",
      image: 'men/bluepolo.jpeg',
      price: 69.99,
      quantity: 600
    },
    {
      name: 'Slim White Jean',
      category: categories[0]._id,
      description:
        "Trim at the seat and the thigh and with a tapered leg, the Sullivan Slim offers a lean silhouette with room to move. This pair is made from stretch cotton and treated to achieve a crisp white hue.",
      image: 'men/slimwhitejean.jpeg',
      price: 120.99,
      quantity: 600
    },
    {
      name: 'Dress Shirt',
      category: categories[0]._id,
      description:
        "A multistep process that includes high-tension yarn-spinning gives this shirt's pure cotton fabric a dose of stretch for ease of movement.",
      image: 'men/bluebutton.jpeg',
      price: 79.99,
      quantity: 600
    },
    {
      name: 'Brown Dress Shirt',
      category: categories[0]._id,
      description:
        "This shirt from Polo Ralph Lauren combines a modern Slim Fit with a textured cotton fabric.",
      image: 'men/brownshirt.jpeg',
      price: 115.99,
      quantity: 600
    },
    {
      name: 'Cashmere Dress',
      category: categories[1]._id,
      description:
        'Soft, lightweight cashmere creates the fluid drape of this cowlneck dress, which features an alluring slit at the left hem and an attached self-belt that spotlights the waist. Its cowl neckline can be styled to be worn on or off the shoulders.',
      image: 'women/browndress.jpeg',
      price: 767.99,
      quantity: 20
    },
    {
      name: 'Bear Sweatshirt',
      category: categories[1]._id,
      description:
        "This soft fleece sweatshirt is defined by the Polo Bear, which was first introduced in 1991. Here, our iconic mascot dons signature Ralph Lauren pieces, including a flight suit, an ascot scarf, and leather accessories.",
      image: 'women/womensweat.jpeg',
      price: 89.99,
      quantity: 20
    },
    {
      name: 'Denim Trouser',
      category: categories[1]._id,
      description:
        "Cut from lightweight cotton twill and washed for a light indigo hue, these straight-fitting pants are pleated for a tapered fit above the ankles. A removable self-belt spotlights the waist",
      image: 'women/denimtrouser.jpeg',
      price: 99.99,
      quantity: 20
    },
    {
      name: 'Tie-Cuff Shirtdress',
      category: categories[1]._id,
      description:
        "Printed all over with the season's block-inspired motif, this fit-and-flare shirtdress gets a modern update with self-ties that cinch the cuffs of its blouson sleeves.",
      image: 'women/shirtdress.jpeg',
      price: 134.99,
      quantity: 20
    },
    {
      name: 'Fleece Hoodie',
      category: categories[1]._id,
      description:
        "Detailed with a lace-up placket and cotton twill trim, this oversize fleece hoodie features dropped sleeves and elongated vents at the hem.",
      image: 'women/fleecehoodie.jpeg',
      price: 65.99,
      quantity: 20
    },
    {
      name: 'Cashmere Turtleneck',
      category: categories[1]._id,
      description:
        "Knit from pure cashmere, this medium-weight turtleneck is designed for a relaxed fit through the sleeves and body with tapered rib-knit trim at the cuffs and hem.",
      image: 'women/turtleneck.jpeg',
      price: 229.99,
      quantity: 20
    },
    {
      name: 'High-Rise Jeans',
      category: categories[1]._id,
      description:
        "Inspired by a heritage style from the Ralph Lauren archives, this version of our Callen High-Rise Slim features a medium indigo wash with heavy abrasions and hand-sanded whiskering. The soft denim character is achieved through authentic ring-spun construction.",
      image: 'women/highrisejean.jpeg',
      price: 85.99,
      quantity: 20
    },
    {
      name: 'Corduroy Overall',
      category: categories[1]._id,
      description:
        "Relaxed-fitting overalls made from 9.4 oz. indigo-dyed eight-wale corduroy woven in Japan. Inspired by a '40s overall. Hand-repaired with five- and 10-wale corduroy. Finished with American-made metal buttons.",
      image: 'women/overall.jpeg',
      price: 349.99,
      quantity: 20
    },
    {
      name: 'Wide-Leg Pants',
      category: categories[1]._id,
      description:
        "Stretch-infused right-hand-twill denim and a cropped, wide-leg silhouette unite to create this ultrachic style. It features a Lauren Ralph Lauren engraved horn-effect button for a signature finish.",
      image: 'women/widepant.jpeg',
      price: 59.99,
      quantity: 20
    },
    {
      name: 'Faux-Shearling Shirt',
      category: categories[1]._id,
      description:
        "Rendered in cozy high-pile fleece and cut for an oversize silhouette, this shirt is realized in the season's cream color palette.",
      image: 'women/oversizeshirt.jpeg',
      price: 210.99,
      quantity: 20
    },
    {
      name: 'Crepe Short',
      category: categories[1]._id,
      description:
        "Luxurious matte crepe and crisp pleats lend smart sophistication to these shorts, which are belted at the waist with a removable striped webbed belt.",
      image: 'women/crepeshort.jpeg',
      price: 99.99,
      quantity: 20
    },
    {
      name: 'Wrap Dress',
      category: categories[1]._id,
      description:
        "Designed with a true wrap silhouette for fluid movement, this dress is crafted from lightweight fabric with a delicate crinkled texture and a watercolor-inspired floral print.",
      image: 'women/wrapdress.jpeg',
      price: 180.99,
      quantity: 20
    },
    {
      name: 'Winter Jacket',
      category: categories[2]._id,
      description:
        "This quilted jacket is made from recycled nylon and filled with PrimaLoft® ThermoPlume® insulation, reinforcing Ralph Lauren's aim to create the highest-quality products with minimal harm to the environment. It also reverses between two solid-hued sides for versatility.",
      image: 'kids/boysjacket.jpeg',
      price: 135.99,
      quantity: 30
    },
    {
      name: 'V-Neck Cardigan',
      category: categories[2]._id,
      description:
        "Knit from long-staple cotton and washed, this lightweight cardigan is ideal for layering in any season.",
      image: 'kids/boyscardigan.jpeg',
      price: 44.99,
      quantity: 30
    },
    {
      name: 'Striped Tee',
      category: categories[2]._id,
      description:
        "Classic stripes and soft cotton jersey make this tee perfect for any day of the week.",
      image: 'kids/boystee.jpeg',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Mesh Polo Shirt',
      category: categories[2]._id,
      description:
        "This Polo shirt is crafted from comfortable cotton mesh and finished with our signature embroidered Pony.",
      image: 'kids/boyspolo.jpeg',
      price: 45.99,
      quantity: 30
    },
    {
      name: 'Paint-Splatter Short',
      category: categories[2]._id,
      description:
        "In our modern Sullivan Slim fit, these lightweight denim shorts get a playful update with frayed hems and allover paint splatters.",
      image: 'kids/paintshort.jpeg',
      price: 44.99,
      quantity: 30
    },
    {
      name: 'Swim Trunk',
      category: categories[2]._id,
      description:
        "These lined swim trunks feature watercolor-inspired stripes and our signature embroidered Pony.",
      image: 'kids/swimshort.jpeg',
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Jogger Pants',
      category: categories[2]._id,
      description:
        "Made from soft cotton-blend fleece and finished with our signature embroidered pony, these cozy jogger pants are sure to be a fast favorite.",
      image: 'kids/boyssweat.jpeg',
      price: 43.99,
      quantity: 30
    },
    {
      name: 'Slim Jeans',
      category: categories[2]._id,
      description:
        "Inspired by our men's Sullivan Slim jeans, this faded pair is made from lightweight stretch denim for all-day comfort.",
      image: 'kids/boysjean.jpeg',
      price: 67.99,
      quantity: 30
    },
    {
      name: 'Chino Shirtdress',
      category: categories[2]._id,
      description:
        "With a classic fit-and-flare silhouette and a matching belt, this chino shirtdress is a charming pick for parties and family photos.",
      image: 'kids/chinodress.jpeg',
      price: 67.99,
      quantity: 30
    },
    {
      name: 'Long Down Jacket',
      category: categories[2]._id,
      description:
        "Ideal for rainy or windy days, this quilted jacket is crafted with a water-repellent shell, warm 650-fill-power down, and a longer silhouette to help keep her warm and dry. It's finished with a signature print at the hem and an interior patch featuring the Polo Bear.",
      image: 'kids/kidsjacket.jpeg',
      price: 185.99,
      quantity: 30
    },
    {
      name: 'Western Shirt',
      category: categories[2]._id,
      description:
        "A Polo must-have, this Western-style shirt is made from lightweight cotton chambray and washed for a broken-in look",
      image: 'kids/westernshirt.jpeg',
      price: 34.99,
      quantity: 30
    },
    {
      name: 'Cotton Sweater',
      category: categories[2]._id,
      description:
        "Inspired by a men's style, this version of our signature cricket sweater gets a playful update with colorful contrasting stripes.",
      image: 'kids/cricketjacket.jpeg',
      price: 24.99,
      quantity: 30
    },
    {
      name: 'Chelsea Boot',
      category: categories[3]._id,
      description:
        "A refined take on the classic Chelsea boot, the Penfield is meticulously crafted in Italy from supple French calfskin.",
      image: 'shoes/chelseaboot.jpeg',
      price: 234.99,
      quantity: 60
    },
    {
      name: 'White Sneakers',
      category: categories[3]._id,
      description:
        "A luxurious take on an athletic style, the Severn is meticulously crafted from calfskin in Italy. Hand-stitched detailing and a classic cupsole construction ensure exceptional durability and comfort.",
      image: 'shoes/whiteshoes.jpeg',
      price: 46.99,
      quantity: 60
    },
    {
      name: 'Slippers',
      category: categories[3]._id,
      description:
        "Designed for warmth and comfort, the Yarmond slipper features a luxurious shearling lining and a durable leather sole. This iteration is styled with a wool-and-alpaca herringbone upper and finished with leather laces.",
      image: 'shoes/slippers.jpeg',
      price: 35.99,
      quantity: 60
    },
    {
      name: 'Boots',
      category: categories[3]._id,
      description:
        "The Bryson unites the refined styling of a cap-toe dress boot with the rugged durability of a rubber lug sole. This version is realized in oiled roughout suede.",
      image: 'shoes/captoeboots.jpeg',
      price: 120.99,
      quantity: 60
    },
    {
      name: 'Calfskin Boot',
      category: categories[3]._id,
      description:
        "Crafted from Italian sueded calfskin, the Zoe boot is designed with a slender heel, a buckled ankle strap, and signature D-ring hardware.",
      image: 'shoes/ladyboots.jpeg',
      price: 200.99,
      quantity: 60
    },
    {
      name: 'Brown Loafer',
      category: categories[3]._id,
      description:
        "Part of the Ralph Lauren Welington Collection, the Audrey is modeled after a classic menswear loafer but updated to evoke Ralph Lauren's equestrian heritage. Utilizing a footwear construction known as Bologna, which allows for more flexibility and comfort, this shoe is crafted from burnished calfskin. The Italian-made style is finished with double-needle stitching at the upper and a calfskin strap that loops through a polished gold-tone stirrup buckle and secures at the vamp with a stud and keeper.",
      image: 'shoes/ladyloafer.jpeg',
      price: 83.99,
      quantity: 60
    },
    {
      name: 'Black Heels',
      category: categories[3]._id,
      description:
        "This essential pointy-toe pump is crafted from luxe suede and designed with a comfortable heel.",
      image: 'shoes/ladyheels.jpeg',
      price: 230.99,
      quantity: 60
    },
    {
      name: 'Suede Sneaker',
      category: categories[3]._id,
      description:
        "Inspired by a '30s military physical-training sneaker. Made from suede with a vulcanized rubber outsole. Constructed on a custom Double RL last. Available in men's sizes from 5 to 13. We suggest women order two sizes smaller than their usual size. Please see the size chart for a conversion guide.",
      image: 'shoes/suedesneaker.jpeg',
      price: 76.99,
      quantity: 60
    },
    {
      name: 'Blue Sneaker',
      category: categories[3]._id,
      description:
        "A modern minimalist take on a classic running shoe silhouette, the Ethan is realized in supple calf suede. Tonal laces and detailing lend this Italian-made shoe an elegant look, while the Vibram® rubber sole provides superior traction.",
      image: 'shoes/bluesneaker.jpeg',
      price: 70.99,
      quantity: 60
    },
    {
      name: 'Leather Sandals',
      category: categories[3]._id,
      description:
        "Made in Portugal from Italian vachetta leather, this sandal is designed with a contemporary slotted construction and a feminine buckled ankle strap. The endlessly versatile heel height is paired with a padded leather insole, promising unparalleled comfort.",
      image: 'shoes/ladysandal.jpeg',
      price: 110.99,
      quantity: 60
    },
    {
      name: 'Black Sandals',
      category: categories[3]._id,
      description:
        "Each element of the Jacie is thoroughly considered, like the treatment of the calfskin, which is aniline-dyed to emphasize its natural texture and grains, to the polished gold-tone stirrup buckle, which nods to Ralph Lauren's signature equestrian style. Made in Italy, this timeless slide silhouette is designed with a squared, open toe and a meticulously woven vamp.",
      image: 'shoes/blacksandals.jpeg',
      price: 15.99,
      quantity: 60
    },
    {
      name: 'Hiking Boots',
      category: categories[3]._id,
      description:
        "Inspired by an original Polo Sport urban hiking boot from the '90s, this high-top sneaker is crafted from rugged oiled suede. An EVA midsole and a rubber lug outsole provide support and traction.",
      image: 'shoes/hikingboots.jpeg',
      price: 224.99,
      quantity: 60
    },
    {
      name: 'Gold Watch',
      category: categories[4]._id,
      description:
        "Gold Tone Stainless Steel Bracelet with Deployant Closure",
      image: 'accessories/versacewatch.webp',
      price: 642.99,
      quantity: 600
    },
    {
      name: 'Fitness Watch',
      category: categories[4]._id,
      description:
        "Meet our most advanced fitness & health tracker with tools like an on-wrist ECG app for heart health,** EDA Scan app for stress management and more.",
      image: 'accessories/fitness_tracker_1.webp',
      price: 172.99,
      quantity: 600
    },
    {
      name: 'Wireless Headphones',
      category: categories[4]._id,
      description:
        "Uses Qualcomm chipsets to create sound waves that mirror outside noise, cancelling out the ambient sound without compromising the source audio",
      image: 'accessories/headphones.webp',
      price: 217.99,
      quantity: 600
    },
    {
      name: 'Chain Bracelet',
      category: categories[4]._id,
      description:
        "A funfetti sprinkling of hand painted hearts, the Haven Heart Chain Bracelet is the sweetest stack reminder to gift, or to get.",
      image: 'accessories/bracelet.webp',
      price: 72.99,
      quantity: 600
    },
    {
      name: 'Diamond Ring',
      category: categories[4]._id,
      description:
        "Since 1895, founder Daniel Swarovski’s mastery of crystal cutting has defined the company. His enduring passion for innovation and design has made it the world’s premier jewelry and accessory brand.",
      image: 'accessories/diamondring.webp',
      price: 782.99,
      quantity: 600
    },
    {
      name: 'Brown Belt',
      category: categories[4]._id,
      description:
        "Timeless Ralph Lauren style—dresses, tops, denim, accessories, and more—for work, the weekend, and every moment in between.",
      image: 'accessories/ladybelt.jpeg',
      price: 24.99,
      quantity: 600
    },
    {
      name: 'Sunglasses',
      category: categories[4]._id,
      description:
        "Saint Laurent eyewear fully represents the house’s distinctive fashion attitude; timeless style and contemporary luxury. The collections are a fine selection of unique products distinguished by an outstanding quality.",
      image: 'accessories/sunglasses.webp',
      price: 351.99,
      quantity: 600
    },
    {
      name: 'Smart Watch',
      category: categories[4]._id,
      description:
        "His namesake company, established in 1981, has over 950 stores in more than 100 countries worldwide, as well as wholesale distribution to top department stores around the globe",
      image: 'accessories/smartwatch.webp',
      price: 742.99,
      quantity: 600
    },
    {
      name: 'Backpack',
      category: categories[4]._id,
      description:
        "Hailing from the small town of Örnsköldsvik in Sweden, a place where mountains and forest meet the sea, Fjällräven is an outdoor clothing and equipment company that’s committed to making nature more accessible. In true Swedish style, we focus on simplicity and practicality, and we have the utmost respect for the environment",
      image: 'accessories/backpack.webp',
      price: 62.99,
      quantity: 600
    },
    {
      name: 'Hiking Backpack',
      category: categories[4]._id,
      description:
        "Founded in 2009 by brothers Jamie and Lyndon Cormack, Herschel Supply Co. adopted the name of the town where three generations of their family grew up.",
      image: 'accessories/supplybag.webp',
      price: 156.99,
      quantity: 600
    },
    {
      name: 'Beanie',
      category: categories[4]._id,
      description:
        "We are named for the coldest, most unforgiving side of a mountain. We have helped explorers reach the most unfathomable heights of the Himalayas.",
      image: 'accessories/beanie.webp',
      price: 33.99,
      quantity: 600
    },
    {
      name: 'Fedora',
      category: categories[4]._id,
      description:
        "Our collections showcase our use of innovative and classic textiles to not only highlight the glamour of women, but also the sophistication of the modern man.",
      image: 'accessories/fedora.jpeg',
      price: 177.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
