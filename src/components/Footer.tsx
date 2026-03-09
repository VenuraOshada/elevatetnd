const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">
            Elevate T&amp;D
          </h3>
          <p className="text-sm leading-relaxed">
            Corporate training programs focused on professional
            growth, compliance, and industry best practices.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: elevatetand@gmail.com</li>
            <li>Phone: +94 74 232 3437</li>
            <li>Location: Sri Lanka</li>
          </ul>
        </div>

        {/* Quick Info */}
        <div>
          <h4 className="mb-3 font-semibold text-white">
            Training Focus
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Medical Delegate Training</li>
            <li>Sales Team Training </li>
            <li>Corporate Training</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs">
        © {year} Elevate T&amp;D. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
