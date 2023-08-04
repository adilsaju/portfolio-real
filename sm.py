
class Product():
    def __init__(self, name, price):
        self.name = name
        self.price = price 

    def __str__(self):
        return self.name


class Cart():
    items = []

    def add(self, product):
        self.items.append(product)

    # def __str__(self):
    #     for item in self.items:
    #         return item.name

    def bill(self):
        return sum(map(lambda i: i.price, self.items))


class Supermarket():

    def __init__(self) -> None:
        self.cartn = Cart()
        self.inventory = { "trimmer": [ Product("trimmer", 5.5), 100], "apple": [ Product("apple", 6.9), 2]}

    def add_to_cart(self, name, quantity):
        if name in self.inventory:
                
            # upd cart
            if (self.inventory[name][1]>=quantity):
                prod1 = self.inventory[name][0]
                for q in range(quantity):
                    self.cartn.add(prod1)
                # upd inventory
                self.inventory[name][1] -= quantity

                print(f"added to cart")
            else:
                print(f"no enough that item")
        else:
            print("item not available")

    def remove_from_cart(self):
        pass

    def calc_bill(self):
        total = self.cartn.bill()
        print(f"total bill: ${total}")


if __name__ == "__main__":
    s = Supermarket()



    s.add_to_cart("apple", 2)
    s.add_to_cart("apple", 1)


    s.calc_bill()