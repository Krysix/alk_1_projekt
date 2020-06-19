// Creating Cart class

export class Cart {

  constructor() {
      this.key = 'IT_SPA_CART';

      if (!this.exists()) {
          this.setItSpaCart([]);
      }
  }

  get() {
      const cookies = document.cookie.split(';');
      // Returns ("IT_SPA_CART=variable") or undefined
      return cookies.find(cookie => cookie.startsWith(this.key));
  }

  exists() {
      return this.get() !== undefined;
  }


  getItSpaCart() {
      const cookieValue = this.get().slice(12);
      const parsedValue = JSON.parse(cookieValue);

      return parsedValue;
  }

  setItSpaCart(value) {
      const stringifiedValue = JSON.stringify(value);
      document.cookie = `${this.key}=${stringifiedValue}`;
  }

  // Adding item to the cart
  add(item) {
      const cartValue = this.getItSpaCart();
      this.setItSpaCart([...cartValue, item]);
  }
  // Removing item from the cart
  remove(item) {
      const cartValue = this.getItSpaCart();
      const itemInCart = cartValue.findIndex(
                              val => val.name === item.name
                          );

      if (itemInCart !== -1) {
          cartValue.splice(itemInCart, 1);
          this.setItSpaCart(cartValue);
      }
  }
}
