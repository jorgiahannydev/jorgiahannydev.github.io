export default function Contact() {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          Contacto
        </h2>
        <div className="w-12 h-1 bg-pink-300 rounded mx-auto mb-10" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 max-w-lg mx-auto">
          <p className="font-bold text-slate-800 text-lg mb-4">Jorgiahanny Almea Martínez</p>

          <ul className="space-y-3 mb-6 text-gray-600 text-sm">
            <li>
              📧{" "}
              <a
                href="mailto:jorgiahannya@gmail.com"
                className="text-pink-400 hover:underline"
              >
                jorgiahannya@gmail.com
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:+56975895960" className="text-pink-400 hover:underline">
                +56 975 895 960
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://wa.me/56926947724"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline"
              >
                WhatsApp: +56 926 947 724
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/jorgiahanny-almea-0b3b852ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jorgiahannydev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              GitHub
            </a>
            <a
              href="/cv.pdf"
              download
              className="bg-pink-400 hover:bg-pink-400 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
