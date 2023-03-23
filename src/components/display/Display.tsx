import './Display.css';

const Display = ({text}: {text: string}) => {
  const lines = text.split('\n');
  return (
    <div className="display">
      {lines.map(line => <div>{line}</div>)}
    </div>
  )
}

export default Display