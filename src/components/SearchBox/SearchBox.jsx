const SearchBox = ({value, onFilter}) => {
    return (
        <>
            <label>Find contacts by name
                <input type="text" value={value} onChange={(event) => onFilter(event.target.value)} />
            </label>
        </>
    )
}

export default SearchBox