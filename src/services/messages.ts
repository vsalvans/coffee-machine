import { formatPrice } from "../utils/price"

export const generateDisplayMessage = (drink: Drink|null, credit: number): string => {

    if (!drink) {
        return `Select a drink! \n credit ${formatPrice(credit)}`;
    };

    return `${drink.name} ${formatPrice(drink.price)} \n insert ${formatPrice(drink.price - credit)}`;
}