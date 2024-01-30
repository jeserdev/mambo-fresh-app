import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Platano macho',
      slug: 'platano',
      category: 'Fruta verde',
      image:
        'https://res.cloudinary.com/dpzl8vc4h/image/upload/v1706581782/hblw8ejhhajocnuzs7in.jpg',
      price: 20,
      brand: 'Hartón',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Colombia',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Banano Maduro caja',
      slug: 'banano',
      category: 'Fruta Madura',
      image:
        'https://res.cloudinary.com/dpzl8vc4h/image/upload/v1706624274/fkynrilagqoqf8a5h5tk.jpg',
      price: 23.2,
      brand: 'Chica',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'Colombia',
      isFeatured: true,
    },
    {
      name: 'Tomate',
      slug: 'tomate',
      category: 'Verdura',
      image:
        'https://res.cloudinary.com/dpzl8vc4h/image/upload/v1706624517/r9fznkymqvw0nhvwwsom.jpg',
      price: 15,
      brand: 'Pera',
      rating: 3.5,
      numReviews: 7,
      countInStock: 120,
      description: 'Colombia',
      isFeatured: true,
    },
    {
      name: 'Pitaya',
      slug: 'Pitaya',
      category: 'Fruta Tropical',
      image:
        'https://res.cloudinary.com/dpzl8vc4h/image/upload/v1706624625/rfck6nrwv0chlifnmdwx.jpg',
      price: 45,
      brand: 'Amarilla',
      rating: 2.4,
      numReviews: 14,
      countInStock: 45,
      description: 'Colombia',
      isFeatured: true,
    },
    {
      name: 'Naranja',
      slug: 'naranja',
      category: 'Fruta Tropical',
      image:
        'https://res.cloudinary.com/dpzl8vc4h/image/upload/v1706624717/hks5x67go4i8ifcne6j6.jpg',
      price: 19,
      brand: 'Tangelo',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Honduras',
      isFeatured: true,
    },
    {
      name: 'Avocado',
      slug: 'avocado',
      category: 'Fruta Verde',
      image:
        'https://res.cloudinary.com/dpzl8vc4h/image/upload/v1706624364/rj6g4dtztdwpfowwycmy.jpg',
      price: 22,
      brand: 'Hass',
      rating: 3.2,
      numReviews: 10,
      countInStock: 45,
      description: 'Costa Rica',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
  ],
}

export default data
