const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>夏日製冰所</h1>
            <a href = "/">Menu</a>
            <a href="/cart" style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}>購物車</a>
            <a href = "/checkout">結帳</a>
        </nav>
     );
}
 
export default Navbar;