import Card from "./Card"
import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
    return (
        <Card className="expense-body">
            {
                props.expenses.map((item) => (
                    <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
                ))
            }
        </Card>
    )
}

export default Expenses