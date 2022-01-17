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
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[2]._id,
    //   description:
    //     "",
    //   image: 'kids/.jpeg',
    //   price: .99,
    //   quantity: 30
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[3]._id,
    //   description:
    //     "",
    //   image: 'shoes/',
    //   price: .99,
    //   quantity: 60
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // },
    // {
    //   name: '',
    //   category: categories[4]._id,
    //   description:
    //     "",
    //   image: 'accessories/',
    //   price: 142.99,
    //   quantity: 600
    // }
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
