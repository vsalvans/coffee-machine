const DrinkButton = ({name, image, onSelect}: {name: string, image: string, onSelect: (name: string) => void}) => {

    const handleButtonClick = () => onSelect(name);

    return (
    <div className="coffee-machine-drink-button" onClick={handleButtonClick}>
        <img src={image} />
    </div>
    )
}


export default DrinkButton