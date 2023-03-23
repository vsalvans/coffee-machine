import { useState } from 'react';
import CoinReceiver from '../components/coin-receiver/CoinReceiver';
import Display from '../components/display/Display';
import DrinkDispatcher from '../components/drink-dispatcher/DrinkDispatcher';
import DrinkSelector from '../components/DrinkSelector';
import useAppContext from '../hooks/useAppContext';
import useDrinks from '../hooks/useDrinks';
import Col from '../layout/Col';
import Row from '../layout/Row';
import { generateDisplayMessage } from '../services/messages';

const CoffeMachine = () => {
    const { drink, credit, setDrink, setCredit } = useAppContext();
    const { drinks, fetchDrinkByName } = useDrinks()

    const handleSelectDrink = (drinkName: string) => {
        setDrink(fetchDrinkByName(drinkName))
    }

    const handleCoinInserted = (amount: number) => {
        setCredit((previousCredit) => previousCredit + amount)
    }

    const handleCoinsReturned = () => {
        setCredit(0)
    }

    const handleDrinkServed = (drinkServed: Drink) => {
        setCredit((previousCredit) => previousCredit - drinkServed.price)
        setDrink(null)
    }

    return (
        <div className="coffee-machine">
            <Row>
                <DrinkSelector drinks={drinks} onSelect={handleSelectDrink} />
            </Row>
            <Row>
                <Col col={2}>
                    <Display text={generateDisplayMessage(drink, credit)} />
                </Col>
                <Col col={1}>
                    <CoinReceiver
                        onCoinInserted={handleCoinInserted}
                        onCoinsReturned={handleCoinsReturned}
                    />
                </Col>
            </Row>
            <Row>
                <DrinkDispatcher
                    drinkName={drink?.name}
                    credit={credit}
                    onDrinkServed={handleDrinkServed}
                />
            </Row>
        </div>
    )
}

export default CoffeMachine
