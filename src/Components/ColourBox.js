
export default function ColourBox(props) {
    
    return (
        <span className="colourBox" id="colour" 
        style={{
            backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue}, ${props.alpha /100})`,
            width: '300px',
            height: '300px',
        }} />
    );
}