# 🌱 El Mustafa Import & Export - مكتب المصطفى للاستيراد والتصدير

<div align="center">
  <img src="public/logo.png" alt="El Mustafa Import & Export Logo" width="300" />
</div>

A modern, bilingual (Arabic/English) React web application showcasing El Mustafa Import & Export company's agricultural services and product offerings.

## 🏢 About El Mustafa Import & Export

El Mustafa Import & Export is a leading Egyptian agricultural trading company with **15 years of experience** specializing in:

- **Export Operations**: Fresh and frozen fruits and vegetables from Egypt to global markets
- **Import Services**: Premium produce from Italy, Greece, China, and France
- **International Reach**: Serving Arab countries (Saudi Arabia, Kuwait, Oman, UAE) and international markets (Netherlands, India, Ukraine, Bosnia & Herzegovina, Bangladesh)
- **Product Range**: Comprehensive selection of citrus fruits, seasonal fruits, and fresh vegetables

## ✨ Key Features

- 🌐 **Bilingual Support**: Full Arabic and English localization
- 📱 **Responsive Design**: Mobile-first, modern UI/UX
- 🍊 **Product Catalog**: Interactive showcase with seasonal availability
- 📅 **Harvest Calendar**: Real-time product availability by month
- 🚚 **Logistics Services**: Comprehensive shipping and customs clearance information
- 📞 **Contact Integration**: Direct communication channels
- 🎨 **Modern Interface**: Built with shadcn/ui components and smooth animations

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/alihatem361/el-mustafa.git
   cd el-mustafa
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**: Navigate to `http://localhost:5173`

## 🛠️ Technology Stack

### Frontend Framework

- **React 18** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Lightning-fast build tool and dev server

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality components built on Radix UI
- **Lucide React** - Beautiful, customizable icons
- **CSS Animations** - Smooth transitions and hover effects

### State Management & Data

- **React Context** - Language switching and global state
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form validation and handling

### Routing & Navigation

- **React Router** - Client-side routing
- **Browser History** - SEO-friendly URLs

## 📁 Project Structure

```text
el-mustafa/
├── public/
│   ├── images/          # Product and company images
│   ├── favicon.ico      # Site favicon
│   └── logo.png         # Company logo
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageProvider.tsx # i18n context
│   ├── data/
│   │   └── products.ts  # Product catalog with seasonal data
│   ├── pages/
│   │   ├── Index.tsx    # Main landing page
│   │   └── NotFound.tsx # 404 error page
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── assets/          # Static images and resources
│   └── App.tsx          # Main application component
└── package.json         # Dependencies and scripts
```

## 📦 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build optimized production bundle
- **`npm run build:dev`** - Build development version
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality

## 🌐 Internationalization (i18n)

The application supports both Arabic and English languages with:

- **RTL/LTR Support**: Proper text direction handling
- **Dynamic Language Switching**: Real-time language toggle
- **Localized Content**: All text, product names, and UI elements
- **Cultural Adaptation**: Appropriate formatting and layout

## 🍎 Product Categories

The application showcases three main product categories:

1. **🍊 Citrus Fruits**: Navel oranges, lemons, grapefruits, tangerines
2. **🍎 Seasonal Fruits**: Apples, grapes, pomegranates, mangoes
3. **🥬 Fresh Vegetables**: Potatoes, onions, garlic, peppers

Each product includes:

- Seasonal availability calendar
- Arabic and English names
- High-quality product images
- Export specifications

## 🚚 Services Offered

- **Customs Clearance**: Professional import/export documentation
- **Sea Freight**: Cost-effective ocean shipping solutions
- **Air & Land Freight**: Fast delivery options
- **Quality Assurance**: Premium product selection and handling
- **Logistics Coordination**: End-to-end supply chain management

## 📞 Contact Information

**General Manager**: Mr. Nader Omran  
**Company**: El Mustafa Import & Export  
**Experience**: 15+ years in agricultural trading  
**Specialization**: Fresh and frozen produce export/import

## 🔒 License

This project is proprietary software owned by **El Mustafa Import & Export Company**.  
All rights reserved. Unauthorized reproduction or distribution is prohibited.

---

Built with ❤️ for the agricultural export industry | مبني بحب لصناعة التصدير الزراعي
