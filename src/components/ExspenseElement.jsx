import Card from './Card'
import FilterByYear from './FilterByYear'
import ExpenseList from './ExpenseList'
import { useState } from 'react'

const ExspenseElement = (props) =>{

    const [filterYear,setFilterYear] = useState(props.filterYear);

    const handleTheFilter = (selectDate) =>{
        setFilterYear(selectDate)
    };
    
    const findContextByDate = (props.lists).filter((actualDate) => {
        return actualDate.date.getFullYear().toString() === filterYear;
    });

    return(
        <Card className="Apps">
            <FilterByYear selected={filterYear} onChangeFilterByYear={handleTheFilter}/>

           <ExpenseList lists={findContextByDate} />
      </Card>
    )
}
export default ExspenseElement
