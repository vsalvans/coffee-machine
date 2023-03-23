import React, { Dispatch, SetStateAction, useState } from "react";

type AppContextProps = {
    credit: number,
    drink: Drink|null,
    setCredit: Dispatch<SetStateAction<number>>,
    setDrink: Dispatch<SetStateAction<Drink | null>>
}

export const AppContext = React.createContext<AppContextProps>(null!);

const AppProvider = ({children}: {children: React.ReactNode}) => {
    const [credit, setCredit] = useState<number>(0)
    const [drink, setDrink] = useState<Drink | null>(null)

    const props = {
        credit,
        drink,
        setCredit,
        setDrink
    }

    return <AppContext.Provider value={props}>{children}</AppContext.Provider>
}

export default AppProvider;