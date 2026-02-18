# 🌿 Lush Horizons

A modern e-commerce web application for plant enthusiasts, offering a wide selection of plants, seeds, and gardening tools. Built with React and Redux, Lush Horizons provides an intuitive shopping experience for all your gardening needs.

## ✨ Features

- **Product Catalog**: Browse through extensive collections of plants, seeds, and gardening tools
- **Product Categories**: 
  - 🌱 Plants (Snake Plant, Aloe Vera, Money Plant, Peace Lily, and more)
  - 🌾 Seeds (Vegetable, Flower, and Herb seeds)
  - 🛠️ Gardening Tools and Accessories
- **Shopping Cart**: Add, remove, and manage items with a sliding cart interface
- **Product Details**: Detailed information and images for each product
- **Responsive Design**: Fully responsive layout that works on all devices
- **Blog Section**: Gardening tips and plant care guides
- **Contact Form**: Easy way to reach out for inquiries
- **About Us**: Learn more about the Lush Horizons mission

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1
- **State Management**: Redux Toolkit & React Context API
- **Routing**: React Router DOM v7
- **UI Framework**: Bootstrap 5.3.3 & React Bootstrap 2.10.6
- **Icons**: React Icons & Bootstrap Icons
- **Styling**: CSS & SCSS
- **Build Tool**: Create React App

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Lush_Horizons
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The application will open automatically in your browser at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)  
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder.  
Optimizes the build for best performance and the build is minified.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 📁 Project Structure

```
Lush_Horizons/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and media files
│   │   ├── carouselimages/
│   │   ├── plantsimages/
│   │   ├── seedimages/
│   │   └── tools-image/
│   ├── common/
│   │   └── mockdata/    # Product data
│   ├── components/      # Reusable components
│   │   ├── CartContext.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetails.tsx
│   │   └── SlidingCart.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Aboutus.tsx
│   │   ├── Blog.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Products.tsx
│   │   ├── plants.tsx
│   │   ├── seeds.tsx
│   │   └── tools.tsx
│   ├── Redux/           # Redux store and slices
│   │   └── Reducer/
│   ├── styles/          # CSS stylesheets
│   ├── App.js           # Main application component
│   └── index.js         # Application entry point
├── package.json
└── README.md
```

## 🌐 Routes

- `/` - Home page with featured products
- `/products` - All products page
- `/plants` - Plants category
- `/seeds` - Seeds category
- `/tools` - Gardening tools category
- `/aboutus` - About Us page
- `/blog` - Blog and gardening tips
- `/contactus` - Contact form
- `/product/:id` - Individual product details
- `/cookies` - Cookie policy
- `/privacy-policy` - Privacy policy

## 🎨 Key Components

- **Header**: Navigation bar with cart icon and menu
- **Footer**: Site information and links
- **ProductCard**: Reusable product display component
- **SlidingCart**: Side panel shopping cart
- **CartContext**: Global state management for shopping cart
- **ProductDetails**: Detailed product information page

## 🔄 State Management

The application uses a combination of:
- **Redux Toolkit** for global application state
- **React Context API** for cart management
- **Local state** for component-specific data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and proprietary.

## 📧 Contact

For any inquiries or support, please use the contact form on the website or reach out through the About Us page.

---

**Made with 💚 by Lush Horizons Team**