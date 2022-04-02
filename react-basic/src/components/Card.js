import './Card.css';

function Card(props){

    const classes = '.card ' + props.className

    // {props.children} is a value I wanna output
    // children is a reserved name which we don't set a children
    // the value of the children props will always be the content between the opening and closing tags on ExpenseItem.js line 20-24

    return <div className={classes}>{props.children}</div>;

}

export default Card;