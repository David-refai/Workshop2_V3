
function NavBar(){
    return`
    <header class="navbar">
        <div class="container header-inner">
            <a href="#" class="logo">DATORGANG</a>

            <nav class="nav" aria-label="Main Navigation">
                <a href="#" class="nav-link">Shop</a>
                <span class="nav-separator">/</span>
                <a href="#" class="nav-link">About</a>
                <span class="nav-separator">/</span>

                <button class="icon-btn" type ="button" aria-label="Open menu">☰</button>
                <button class="icon-btn" type ="button" aria-label="Open cart">🛒</button>
            </nav>
        </div>
    </header>
    `
    ;
}
export default NavBar();
