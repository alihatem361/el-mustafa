export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'citrus' | 'fruits' | 'vegetables';
  months: number[];
  yearRound?: boolean;
}

export const products: Product[] = [
  // Citrus
  {
    id: 'navel-orange',
    nameAr: 'برتقال نافل',
    nameEn: 'Navel Orange',
    category: 'citrus',
    months: [1, 2, 11, 12]
  },
  {
    id: 'baladi-orange',
    nameAr: 'برتقال بلدي',
    nameEn: 'Baladi Orange',
    category: 'citrus',
    months: [1, 2, 12]
  },
  {
    id: 'sweet-orange',
    nameAr: 'برتقال سكري',
    nameEn: 'Sweet Orange',
    category: 'citrus',
    months: [1, 2]
  },
  {
    id: 'valencia-orange',
    nameAr: 'برتقال فالنسيا',
    nameEn: 'Valencia Orange',
    category: 'citrus',
    months: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'eureka-lemon',
    nameAr: 'ليمون يوريكا',
    nameEn: 'Eureka Lemon',
    category: 'citrus',
    months: [1, 2, 11, 12]
  },
  {
    id: 'limes',
    nameAr: 'ليمون أخضر',
    nameEn: 'Limes',
    category: 'citrus',
    months: [1, 2, 9, 10, 11, 12]
  },
  {
    id: 'mandarin',
    nameAr: 'يوسفي',
    nameEn: 'Mandarin',
    category: 'citrus',
    months: [1, 2, 3, 4, 5, 6, 11, 12]
  },
  {
    id: 'clementine',
    nameAr: 'كليمنتين',
    nameEn: 'Clementine',
    category: 'citrus',
    months: [1, 2, 12]
  },

  // Fruits
  {
    id: 'strawberry',
    nameAr: 'فراولة',
    nameEn: 'Strawberry',
    category: 'fruits',
    months: [1, 2, 12]
  },
  {
    id: 'grapes',
    nameAr: 'عنب',
    nameEn: 'Grapes',
    category: 'fruits',
    months: [5, 6, 7, 8, 9]
  },
  {
    id: 'pomegranate',
    nameAr: 'رمان',
    nameEn: 'Pomegranate',
    category: 'fruits',
    months: [7, 8, 9, 10, 11]
  },
  {
    id: 'mango',
    nameAr: 'مانجو',
    nameEn: 'Mango',
    category: 'fruits',
    months: [5, 6, 7, 8, 9, 10]
  },
  {
    id: 'peach',
    nameAr: 'خوخ',
    nameEn: 'Peach',
    category: 'fruits',
    months: [5, 6, 7]
  },
  {
    id: 'apricot',
    nameAr: 'مشمش',
    nameEn: 'Apricot',
    category: 'fruits',
    months: [5, 6, 7, 8]
  },
  {
    id: 'melon',
    nameAr: 'شمام جاليا',
    nameEn: 'Gallia Melon',
    category: 'fruits',
    months: [5, 6, 7, 8, 9]
  },
  {
    id: 'watermelon',
    nameAr: 'بطيخ',
    nameEn: 'Watermelon',
    category: 'fruits',
    months: [5, 6, 7, 8]
  },
  {
    id: 'pear',
    nameAr: 'كمثرى',
    nameEn: 'Pear',
    category: 'fruits',
    months: [6, 7, 8, 9]
  },
  {
    id: 'plums',
    nameAr: 'برقوق',
    nameEn: 'Plums',
    category: 'fruits',
    months: [6, 7]
  },
  {
    id: 'guava',
    nameAr: 'جوافة',
    nameEn: 'Guava',
    category: 'fruits',
    months: [6, 7, 8, 9, 10, 11, 12]
  },

  // Vegetables
  {
    id: 'green-beans',
    nameAr: 'فاصوليا خضراء',
    nameEn: 'Green Beans',
    category: 'vegetables',
    months: [1, 2, 3, 4, 10, 11, 12]
  },
  {
    id: 'snow-peas',
    nameAr: 'بسلة',
    nameEn: 'Snow Peas',
    category: 'vegetables',
    months: [1, 2, 3, 12]
  },
  {
    id: 'onion',
    nameAr: 'بصل',
    nameEn: 'Onion',
    category: 'vegetables',
    months: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'spring-onion',
    nameAr: 'بصل أخضر',
    nameEn: 'Spring Onion',
    category: 'vegetables',
    months: [1, 2, 3, 10, 11, 12]
  },
  {
    id: 'fresh-garlic',
    nameAr: 'ثوم طازج',
    nameEn: 'Fresh Garlic',
    category: 'vegetables',
    months: [1, 2, 3, 4, 5]
  },
  {
    id: 'sweet-potato',
    nameAr: 'بطاطا حلوة',
    nameEn: 'Sweet Potato',
    category: 'vegetables',
    months: [8, 9, 10, 11, 12, 1, 2, 3]
  },
  {
    id: 'pepper',
    nameAr: 'فلفل',
    nameEn: 'Pepper',
    category: 'vegetables',
    months: [8, 9, 10, 11, 12, 1, 2, 3, 4]
  },
  {
    id: 'broccoli',
    nameAr: 'بروكلي',
    nameEn: 'Broccoli',
    category: 'vegetables',
    months: [10, 11, 12, 1, 2]
  },
  {
    id: 'lettuce',
    nameAr: 'خس',
    nameEn: 'Lettuce',
    category: 'vegetables',
    months: [12, 1, 2, 3]
  },
  {
    id: 'white-cabbage',
    nameAr: 'كرنب أبيض',
    nameEn: 'White Cabbage',
    category: 'vegetables',
    months: [7, 8, 9, 10, 11, 12, 1, 2]
  },
  {
    id: 'red-cabbage',
    nameAr: 'كرنب أحمر',
    nameEn: 'Red Cabbage',
    category: 'vegetables',
    months: [7, 8, 9, 10, 11, 12, 1, 2]
  },
  {
    id: 'okra',
    nameAr: 'بامية',
    nameEn: 'Okra',
    category: 'vegetables',
    months: [11, 12, 1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 'celery',
    nameAr: 'كرفس',
    nameEn: 'Celery',
    category: 'vegetables',
    yearRound: true,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: 'hot-chili',
    nameAr: 'فلفل حار',
    nameEn: 'Hot Chili',
    category: 'vegetables',
    yearRound: true,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: 'basil',
    nameAr: 'ريحان',
    nameEn: 'Basil',
    category: 'vegetables',
    months: [12, 1, 2, 3]
  },
  {
    id: 'cucumber',
    nameAr: 'خيار',
    nameEn: 'Cucumber',
    category: 'vegetables',
    yearRound: true,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: 'tomatoes',
    nameAr: 'طماطم',
    nameEn: 'Tomatoes',
    category: 'vegetables',
    yearRound: true,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: 'asparagus',
    nameAr: 'هليون',
    nameEn: 'Asparagus',
    category: 'vegetables',
    months: [1, 2, 3, 4]
  },
  {
    id: 'eggplant',
    nameAr: 'باذنجان',
    nameEn: 'Eggplant',
    category: 'vegetables',
    yearRound: true,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
];