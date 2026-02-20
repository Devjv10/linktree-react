import foto from './assets/kaio-foto.jpeg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

function App() {

  const links = [
    {
      name: "Instagram",
      url: "https://instagram.com/kaionogueira03",
      icon: <FaInstagram />,
      className: "link instagram"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+5583986772863",
      icon: <FaWhatsapp />,
      className: "link whatsapp"
    }
  ]

  return (
    <div className="container">

      <img
        src={foto}
        alt="Foto de perfil"
        className="profile"
      />

      <h1>Kaio Nogueira</h1>

      <p className="subtitle">
         Conecte-se comigo
      </p>

      <div className="links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={link.className}
          >

            <span className="icon">
              {link.icon}
            </span>

            {link.name}

          </a>
        ))}
      </div>

    </div>
  )
}

export default App