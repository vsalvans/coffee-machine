const useDrinks = () => {
    const drinks: Drink[] = [
        {
            name: 'coffee',
            image: '/coffee.png',
            price: 1,
        },
        {
            name: 'tea',
            image: '/tea.png',
            price: 1.5,
        },
        {
            name: 'chocolate',
            image: '/chocolate.png',
            price: 2.5,
        },
    ]

    return {
        drinks,
        fetchDrinkByName: (name: string) =>
            drinks.find((drink) => drink.name === name) ?? null,
    }
}

export default useDrinks
