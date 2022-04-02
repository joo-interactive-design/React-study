//convention is to make the function name repeat the file name
//to apply css, use className instead of class
//we can use opening and closing curly braces to run basic js expressions

import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from './Card'

//Q.How do we get access to the values defined in the place where we use our custom components(</ExpenseItem>in App.js)
//A.parameter: react will ensure that we get one parameter in every component
function ExpenseItem(props) {
    /* passing data via "Props".
   the data should not be stored inside of them, but instead, received from outside.
*/
    const clickHandler = () => {
        console.log('Click!!!!');

    }

    return (
        <Card className='expense-item'>
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date={props.date} /> {/*if there is no content between <ExpenseDate>, </ExpenseDate>, I can use <ExpenseDate /> instead.*/}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick = {clickHandler}> unclicked </button>
        </Card>
    );

}

export default ExpenseItem;