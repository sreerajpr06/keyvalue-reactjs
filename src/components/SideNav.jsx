import '../styles/SideNav.css'
import CompanyLogo from '../img/kv logo.png'
import ListImage from '../img/List.png'

function SideNav() {
    return (
        <aside className='sidebar'>
            <div className="logo">
                <a href="/">
                    <img src={CompanyLogo} alt="KeyValue Logo" className='logo'/>
                </a>
            </div>
            <nav className='sidebar-list'>
                <a href="/employees">
                    <div className="sidebar-emp-list">
                        <img src={ListImage} alt="List Icon" className='list-img'/>
                        <span className='emp-list-link'>Employee List</span>
                    </div>
                </a>
            </nav>
        </aside>
    );
}

export default SideNav;