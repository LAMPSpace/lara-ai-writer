const Footer = () => {
    return (
        <footer id="footer" className="footer bg-base-0">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg">
                        <ul className="nav p-0 mx-n3 mb-3 mb-lg-0 d-flex flex-column flex-lg-row">
                            <li className="nav-item d-flex">
                                <a href="#" className="nav-link py-1">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link py-1">
                                    Developers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 col-lg order-2 order-lg-1">
                        <div className="text-muted py-1">© 2023 LAMPSpace</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
