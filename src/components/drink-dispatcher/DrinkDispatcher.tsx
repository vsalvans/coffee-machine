import { useEffect, useState } from 'react'
import useDrinks from '../../hooks/useDrinks'
import './DrinkDispatcher.css'

const DrinkDispatcher = ({
    drinkName,
    credit,
    onDrinkServed,
}: {
    drinkName?: string,
    credit: number,
    onDrinkServed: (drink: Drink) => void;
}) => {
    const [showDrink, setShowDrink] = useState<Drink|null>(null);
    const { fetchDrinkByName } = useDrinks();

    useEffect(() => {
        if (drinkName) {
            const drink = fetchDrinkByName(drinkName);
            if (drink && credit >= drink.price) {
                setShowDrink(drink);
                setTimeout(() => {
                    setShowDrink(null);
                    onDrinkServed(drink);
                }, 3000);
            }
        }
    },  [drinkName, credit]);

    return (
        <div className="drink-dispatcher">
            {showDrink && <div className="cup"><img src={showDrink.image} /></div>}
        </div>
    )
}

export default DrinkDispatcher
