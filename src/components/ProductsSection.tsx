import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';
import { products, Product } from '@/data/products';

const ProductsSection = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'citrus' | 'fruits' | 'vegetables'>('all');

  const filters = [
    { key: 'all', label: t('filterAll') },
    { key: 'citrus', label: t('filterCitrus') },
    { key: 'fruits', label: t('filterFruits') },
    { key: 'vegetables', label: t('filterVegetables') }
  ];

  const filteredProducts = products.filter(product => 
    activeFilter === 'all' || product.category === activeFilter
  );

  const getMonthName = (monthNumber: number): string => {
    const monthKeys = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
    return t(monthKeys[monthNumber - 1]);
  };

  const formatAvailabilityText = (product: Product): string => {
    if (product.yearRound) {
      return t('yearRound');
    }
    
    const monthNames = product.months.map(month => getMonthName(month));
    return monthNames.join(' • ');
  };

  const generateProductImage = (product: Product): string => {
    // For now, using a placeholder. In a real app, you'd have actual product images
    return `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center&auto=format&q=80`;
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('productsTitle')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {filters.map((filter, index) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-2 transition-all duration-300 hover:scale-105 animate-fade-in ${
                activeFilter === filter.key 
                  ? 'bg-primary text-primary-foreground shadow-soft' 
                  : 'hover:bg-primary/10'
              }`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 animate-fade-in-up group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={generateProductImage(product)}
                  alt={language === 'ar' ? product.nameAr : product.nameEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {language === 'ar' ? product.nameAr : product.nameEn}
                </h3>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{t('availableMonths')}</span>
                  <div className="mt-1 text-xs leading-relaxed">
                    {formatAvailabilityText(product)}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="mt-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    product.category === 'citrus' 
                      ? 'bg-golden-yellow/20 text-golden-yellow' 
                      : product.category === 'fruits'
                      ? 'bg-accent/20 text-accent'
                      : 'bg-fresh-green/20 text-fresh-green'
                  }`}>
                    {t(`filter${product.category.charAt(0).toUpperCase() + product.category.slice(1)}` as any)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {language === 'ar' ? 'لا توجد منتجات في هذه الفئة' : 'No products found in this category'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;