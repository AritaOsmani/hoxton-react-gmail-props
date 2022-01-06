import './Search.css'

function Search(props) {
    return <div className="search">
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            const val = e.target.searchVal.value;
            props.setSearch(val);
            e.target.reset()
        }}>
            <input className="search-bar" type='text' placeholder="Search mail" name='searchVal' />
        </form>

    </div>
}
export default Search