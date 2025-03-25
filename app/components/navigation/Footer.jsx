import { Church, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-navy text-snow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-sage" />
              <span className="text-xl font-bold font-serif">Full Gospel Tabernacle</span>
            </div>
            <p className="text-slate">A welcoming church community dedicated to sharing God's love and grace.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate hover:text-sage transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate hover:text-sage transition-colors">About</Link></li>
              <li><Link href="/new-here" className="text-slate hover:text-sage transition-colors">New Here</Link></li>
              <li><Link href="/contact" className="text-slate hover:text-sage transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-slate">
              <li>Sunday: 9:00 AM & 11:00 AM</li>
              <li>Wednesday: 7:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate">
                <MapPin className="h-5 w-5" />
                <span>123 Church Street, City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-slate">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-slate">
                <Mail className="h-5 w-5" />
                <span>info@fullgospeltabernacle.church</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate">
          <p className="text-center text-slate">&copy; {new Date().getFullYear()} Full Gospel Tabernacle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;