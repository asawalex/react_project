const FilterByYear = (props) =>{

    const handleFilterByYear = (event) =>{
    props.onChangeFilterByYear(event.target.value)
    }

    return(
        <div>
            <label>Filter By Year</label>
            <select value={props.selected} onCanPlay={handleFilterByYear}>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
            </select>
        </div>
    )
}
export default FilterByYear