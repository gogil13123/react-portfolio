import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="logo">NIKA UTALISHVILI</div>
            <div className="year">© {new Date().getFullYear()} — Video Editor</div>
        </footer>
    );
};

export default Footer;
