const footerElement = document.getElementById("footer");

const footer = `
    <div id="footer-inner-wrapper">

        <div class="footer-column">
            <a href="mailto:hi@hellouniverse.co">
                hi@hellouniverse.co
            </a>
            <br>
            <a target="_blank" href="https://github.com/hey-universe">
                gh/hey-universe
            </a>
        </div>

        <div class="footer-column">
            <h3 id="footer-logo">
                <a href="/">
                    hello<br>universe
                </a>
            </h3>
            <p>we do things.</p>
        </div>

        <div class="footer-column">
            
        </div>

        <div class="footer-column">
            
        </div>

    </div>
`;

footerElement.innerHTML = footer;
