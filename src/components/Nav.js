// style
import { Link } from 'react-router-dom';

// style
import './Nav.css';

export default function Nav({ links }) {
  // a navigation for Tablet and Desktop viewports

  return (
    <nav className="nav-large-screen">
      {/* nav links */}
      <ul className="list">
        {links && links.map(link => (
          <li key={link.title}>
            <Link to={link.href} className={`a a-${link.className}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
