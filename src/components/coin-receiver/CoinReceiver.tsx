import style from './CoinReceiver.module.scss'

const CoinReceiver = ({
    onCoinInserted,
    onCoinsReturned
}: {
    onCoinInserted: (amount: number) => void,
    onCoinsReturned: () => void,
}) => {
    return (
        <div className={style.coin_receiver}>
            <div className={style.circle} />
            <div className={style.return_coins_button} onClick={() => onCoinsReturned()} />
            <div className={style.coins}>
                <div className={style.coin} onClick={() => onCoinInserted(0.5)}>
                    <img src="/coins/50cts.png" />
                </div>
                <div className={style.coin} onClick={() => onCoinInserted(1)}>
                    <img src="/coins/1euro.png" />
                </div>
            </div>
        </div>
    )
}

export default CoinReceiver
