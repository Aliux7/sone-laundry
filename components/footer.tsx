import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-linear-to-t from-slate-100 to-blue-100 text-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Sone Laundry</h4>
            <p className="text-slate-800/80">
              Professional laundry service dedicated to excellence and customer satisfaction.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-slate-800/80">
              <li>
                <a href="#services" className="hover:text-slate-800 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-800 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-800 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className='text-right flex flex-col justify-end items-end'>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <div className="space-y-3 text-slate-800/80">
              <div className="flex items-center justify-between gap-4">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Mail size={18} />
                <span>hello@sonelaundry.com</span>
              </div> 
              <div className="flex items-center justify-between gap-4">
                <MapPin size={18} />
                <span>Jl. Tanah Tinggi III No. 15F, Jakarta Pusat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/20 pt-8 text-center text-slate-800/80">
          <p>&copy; 2026 Sone Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
