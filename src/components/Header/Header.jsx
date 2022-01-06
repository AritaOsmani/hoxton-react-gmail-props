import HeaderLeftMenu from '../HeaderLeftMenu/HeaderLeftMenu';
import Search from '../Search/Search';
import './Header.css'
function Header(props) {
    return <header className="header">

        <HeaderLeftMenu />

        <Search
            setSearch={props.setSearch}
        />
    </header>
}
export default Header