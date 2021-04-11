import random

def generate_element_updates(elements_per_update, symbols):
    element_update_dict = []
    
    for i in range(elements_per_update):
        element_object = {}
        symbol = symbols[random.randint(0, len(symbols)-1)]
        price = random.randint(0,50001)
        element_object["symbol"] = symbol
        element_object["price"] = price
        element_update_dict.append(element_object)

    return element_update_dict