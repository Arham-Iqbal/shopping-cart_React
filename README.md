
# Shopping Cart App

This is a simple **Shopping Cart App** built with **React** and **Context API**. The app allows users to add and remove products from a shopping cart, and it dynamically updates the cart contents globally.

## Features

- Add products to the cart from a predefined list.
- Remove products from the cart.
- Display the total items in the cart.
- Global cart state management using Context API.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/shopping-cart_React.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd shopping-cart-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

The app should now be running at `http://localhost:3000`.

## Usage

- **Adding items to the cart:**  
  On the home page, you'll see a list of products. Each product has an "Add to Cart" button. Click the button to add the product to your shopping cart.
  
- **Viewing and removing items from the cart:**  
  The cart section will show all items currently added to the cart. Each item has a "Remove" button that allows you to remove it from the cart.

## Project Structure

```
/src
  ├── /components
  │     ├── ProductList.js      # Displays products to add to the cart
  │     ├── Cart.js             # Shows items in the cart and allows removal
  ├── /context
  │     └── CartContext.js      # Handles global cart state with Context API
  ├── App.js                    # Main component wrapping everything with CartProvider
  ├── index.js                  # Entry point for the app
  └── App.css                   # Basic styling for the app
```

## Code Overview

### `CartContext.js`
This file manages the cart's global state using the Context API. It provides two main functions:

- `addItemToCart`: Adds an item to the cart.
- `removeItemFromCart`: Removes an item from the cart.

### `ProductList.js`
This component displays a list of predefined products. Each product has an "Add to Cart" button that adds the item to the cart.

### `Cart.js`
This component displays the contents of the cart. It lists the items in the cart and provides a "Remove" button for each item to delete it from the cart.

## Technologies Used

- **React**: For building the UI.
- **Context API**: For managing global state (the shopping cart).

## Contributing

Feel free to fork this repository and contribute to the project by submitting a pull request. Any suggestions and improvements are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

---

