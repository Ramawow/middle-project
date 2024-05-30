import brand from '../img/brand.png';

class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <div class="container">
        <nav class="navbar">
            <div class="container-fluid justify-content-center">
                <a class="navbar-brand fw-bold text-black" href="#">
                    CovInfo
                </a>
                - Information about Covid-19 in Indonesia
                
            </div>
        </nav>
    </div>`;
    }
}

customElements.define('nav-bar', Navbar);