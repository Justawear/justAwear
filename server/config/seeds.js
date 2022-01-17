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
      name: 'Black Sweater',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'women/home_wear.webp',
      price: 67.99,
      quantity: 20
    },
    {
      name: 'The North Face Hoodie',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'women/hoodie_tnf.webp',
      price: 63.99,
      quantity: 50
    },
    {
      name: 'Pink Sweater',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'women/training_s.webp',
      price: 44.99,
      quantity: 100
    },
    {
      name: 'Kids Polo',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'kids/polo_shirt.jpeg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'TNF Long-Sleeve',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'kids/shirt.webp',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'FitBit',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'accessories/fitness_tracker_1.webp',
      price: 149.99,
      quantity: 1000
    },
    {
      name: 'Gold Necklace',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'accessories/nicklace.webp',
      price: 749.99,
      quantity: 100
    },
    {
      name: 'Wireless Headphones',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'accessories/headphones.webp',
      price: 142.99,
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
