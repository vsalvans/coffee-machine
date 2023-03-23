import DrinkButton from './DrinkButton'

const DrinkSelector = ({drinks, onSelect}: {drinks: Drink[], onSelect: (name: string) => void}) => {
    return (
        <div className="drink-selector">
            {drinks.map(drink => <DrinkButton name={drink.name} image={drink.image} onSelect={onSelect}/>)}
        </div>
    )
}

export default DrinkSelector