import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import { products, Product } from "@/data/products";

const ProductsSection = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "citrus" | "fruits" | "vegetables"
  >("all");

  const filters = [
    { key: "all", label: t("filterAll") },
    { key: "citrus", label: t("filterCitrus") },
    { key: "fruits", label: t("filterFruits") },
    { key: "vegetables", label: t("filterVegetables") },
  ];

  const filteredProducts = products.filter(
    (product) => activeFilter === "all" || product.category === activeFilter
  );

  const getMonthName = (monthNumber: number): string => {
    const monthKeys = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return t(monthKeys[monthNumber - 1]);
  };

  const formatAvailabilityText = (product: Product): string => {
    if (product.yearRound) {
      return t("yearRound");
    }

    const monthNames = product.months.map((month) => getMonthName(month));
    return monthNames.join(" • ");
  };

  const generateProductImage = (product: Product): string => {
    // Map each product to a specific image from the images folder
    const imageMap: { [key: string]: string } = {
      // Citrus
      "navel-orange": "imgi_35_fr08.gif",
      "baladi-orange": "imgi_36_fr07.gif",
      "sweet-orange": "imgi_37_fr06.gif",
      "valencia-orange": "imgi_38_fr05.gif",
      "eureka-lemon": "imgi_39_fr04.gif",
      limes: "imgi_40_fr02.gif",
      mandarin: "imgi_41_fr03.gif",
      clementine: "imgi_42_fr01.gif",

      // Fruits
      strawberry: "imgi_35_fr08.gif",
      grapes: "imgi_36_fr07.gif",
      pomegranate: "imgi_37_fr06.gif",
      mango: "imgi_38_fr05.gif",
      peach: "imgi_39_fr04.gif",
      apricot: "imgi_40_fr02.gif",
      melon: "imgi_41_fr03.gif",
      watermelon: "imgi_42_fr01.gif",
      pear: "imgi_35_fr08.gif",
      plums: "imgi_36_fr07.gif",
      guava: "imgi_37_fr06.gif",

      // Vegetables
      "green-beans": "imgi_3_veg10.gif",
      "snow-peas": "imgi_4_veg03.gif",
      onion: "imgi_5_veg04.gif",
      "spring-onion": "imgi_6_veg08.gif",
      "fresh-garlic": "imgi_7_veg28.gif",
      "sweet-potato": "imgi_8_veg01.gif",
      pepper: "imgi_9_veg13.gif",
      broccoli: "imgi_10_veg14.gif",
      lettuce: "imgi_11_veg19.gif",
      "white-cabbage": "imgi_12_veg18.gif",
      "red-cabbage": "imgi_13_veg23.gif",
      okra: "imgi_14_veg07.gif",
      celery: "imgi_15_veg32.gif",
      "hot-chili": "imgi_16_veg22.gif",
      basil: "imgi_17_veg09.gif",
      cucumber: "imgi_18_veg06.gif",
      tomatoes: "imgi_19_veg05.gif",
      asparagus: "imgi_20_veg30.gif",
      eggplant: "imgi_21_veg31.gif",
    };

    const imageName = imageMap[product.id];
    return imageName ? `/images/${imageName}` : "/placeholder.svg";
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("productsTitle")}
          </h2>
          <div
            className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {filters.map((filter, index) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-2 transition-all duration-300 hover:scale-105 animate-fade-in ${
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "hover:bg-primary/10"
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
                  alt={language === "ar" ? product.nameAr : product.nameEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {language === "ar" ? product.nameAr : product.nameEn}
                </h3>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{t("availableMonths")}</span>
                  <div className="mt-1 text-xs leading-relaxed">
                    {formatAvailabilityText(product)}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mt-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      product.category === "citrus"
                        ? "bg-golden-yellow/20 text-golden-yellow"
                        : product.category === "fruits"
                        ? "bg-accent/20 text-accent"
                        : "bg-fresh-green/20 text-fresh-green"
                    }`}
                  >
                    {t(
                      `filter${
                        product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)
                      }` as any
                    )}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {language === "ar"
                ? "لا توجد منتجات في هذه الفئة"
                : "No products found in this category"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
