# Cypress Automation Framework - Galería Mexicana

A professional, robust, and complete Cypress automation testing framework for [Galería Mexicana](https://galeriamexicanacr.com) - an authentic Mexican products e-commerce website.

## 🚀 Features

- **Page Object Model (POM)** - Maintainable and scalable test architecture
- **Multiple Test Types** - Home page, navigation, sections, accessibility, and product functionality
- **Custom Commands** - Reusable Cypress commands for common actions
- **Professional Configuration** - ESLint, multiple browsers, reporting
- **Accessibility Testing** - cypress-axe integration for a11y compliance
- **Cross-browser Testing** - Chrome, Firefox, Edge support
- **CI/CD Ready** - Headless and headed execution modes

## 📁 Project Structure

```
cypress-automation-framework/
├── cypress/
│   ├── e2e/
│   │   ├── accessibility.cy.js    # Accessibility tests
│   │   ├── home.cy.js             # Home page tests
│   │   ├── navigation.cy.js       # Navigation tests
│   │   ├── products.cy.js         # Product functionality tests
│   │   └── sections.cy.js         # Section content tests
│   ├── pages/
│   │   ├── AccessibilityPage.js   # Accessibility page object
│   │   ├── BlogPage.js            # Blog section page object
│   │   ├── BrandsPage.js          # Brands section page object
│   │   ├── FooterPage.js          # Footer page object
│   │   ├── HomePage.js            # Home page object
│   │   ├── NavigationPage.js      # Navigation page object
│   │   ├── ProductsPage.js        # Products page object
│   │   └── ServicesPage.js        # Services section page object
│   └── support/
│       ├── commands.js            # Custom Cypress commands
│       └── e2e.js                 # Global configuration
├── cypress.config.js              # Cypress configuration
├── package.json                   # Dependencies and scripts
├── .eslintrc.js                   # ESLint configuration
└── README.md                      # Project documentation
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/santiago-madriz/cypress-automation-framework.git
cd cypress-automation-framework
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Usage

### Running Tests

```bash
# Open Cypress Test Runner (interactive mode)
npm run test:open

# Run all tests in headless mode
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in specific browser
npm run test:chrome
npm run test:firefox
npm run test:edge

# Run specific test file
npm run test:spec cypress/e2e/home.cy.js
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Reporting

```bash
# Generate test reports
npm run report

# Clean generated files
npm run clean
```

## 🧪 Test Coverage

### Home Page Tests (`home.cy.js`)
- Page title validation
- Header content verification
- Main sections visibility
- Key product display
- Footer contact information

### Navigation Tests (`navigation.cy.js`)
- Products section navigation
- Brands section scrolling
- Services section access
- Blog section visibility
- Footer navigation

### Section Content Tests (`sections.cy.js`)
- Products section content validation
- Product categories and pricing
- Brands section verification
- Services section content
- Blog articles display
- Footer information validation

### Product Functionality Tests (`products.cy.js`)
- Product display with prices
- Add to cart buttons
- Product categories
- Filter functionality
- Product images
- Discount indicators

### Accessibility Tests (`accessibility.cy.js`)
- Home page a11y compliance
- Products section accessibility
- Footer accessibility
- WCAG guidelines validation

## 📋 Page Objects

### HomePage
- Header and main content validation
- Section visibility checks
- Product grid interaction

### ProductsPage
- Product listing and details
- Add to cart functionality
- Category filtering
- Price validation

### BrandsPage
- Brand logo verification
- Brand description validation
- Available brands listing

### ServicesPage
- Service offerings validation
- Service descriptions
- Contact information

### BlogPage
- Blog articles display
- Article navigation
- Blog section validation

### FooterPage
- Contact information
- Social media links
- Payment methods
- Copyright information

## 🔧 Custom Commands

```javascript
// Scroll to section
cy.scrollToSection('Nuestros Productos Mexicanos');

// Verify product details
cy.verifyProductDetails('Tequila Don Julio 1942');

// Check brand existence
cy.verifyBrandExists('Don Julio');

// Validate footer information
cy.validateFooterInfo();

// Wait for page load
cy.waitForPageLoad();
```

## 🌐 Website Features Tested

- **Product Catalog**: Mexican authentic products (tequila, traditional sweets, crafts)
- **Brand Showcase**: Premium Mexican brands (Don Julio, Tecate, Gran Malo, etc.)
- **Services**: Event rentals, payment processing, document shipping
- **Blog**: Product guides and Mexican culture articles
- **Contact**: Phone, location, social media integration
- **E-commerce**: Shopping cart, pricing, product categories

## 📊 Supported Browsers

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Electron (default)

## 🔍 Test Categories

- **Functional Testing**: Core website functionality
- **UI Testing**: User interface elements and interactions
- **Navigation Testing**: Site navigation and user flows
- **Accessibility Testing**: WCAG compliance and a11y standards
- **Content Testing**: Text, images, and media validation
- **Responsive Testing**: Cross-device compatibility

## 🚀 CI/CD Integration

The framework is ready for CI/CD integration with:
- Headless execution mode
- Multiple browser support
- Test reporting generation
- Screenshot and video capture on failures

## 📝 Best Practices Implemented

- **Page Object Model**: Maintainable and reusable page objects
- **Custom Commands**: DRY principle with reusable functions
- **Error Handling**: Robust error handling and uncaught exceptions
- **Code Quality**: ESLint configuration for consistent code style
- **Test Organization**: Logical test grouping and clear naming conventions
- **Accessibility**: Built-in a11y testing with cypress-axe
- **Documentation**: Comprehensive README and code comments

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Santiago Madriz**
- QA Automation Engineer 
- Email: santiagomadrizc@gmail.com
- LinkedIn: [Santiago Madriz](https://linkedin.com/in/santiago-madriz)

