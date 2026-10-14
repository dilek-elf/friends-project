import { useRef, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#characters", label: "Characters" },
  { href: "#quotes", label: "Quotes" },
  { href: "#quiz", label: "Quiz" },
  { href: "#facts", label: "Facts" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeMenuWithEscape = (event) => {
    if (event.key !== "Escape" || !isOpen) return;

    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="site-header">
      <nav
        className="nav-shell"
        aria-label="Main navigation"
        onKeyDown={closeMenuWithEscape}
      >
        <a
          className="brand"
          href="#top"
          aria-label="Friends Central Perk fan page home"
        >
          <span className="brand-mark" aria-hidden="true">
            CP
          </span>
          <span>
            <span className="brand-script">Friends</span>
            <span className="brand-subtitle">Central Perk fan cafe</span>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          ref={menuButtonRef}
        >
          <span className="menu-icon" aria-hidden="true"></span>
          Menu
        </button>

        <ul
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          id="site-navigation"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
