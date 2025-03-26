import { Church, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-navy text-snow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <div className="justify-center mb-2">
  <img 
    src="/images/TabMono.png"
    alt="Full Gospel Tabernacle Logo" 
    className="w-[6.5rem] h-[6.5rem] object-contain"
  />
</div>
            <p className="text-slate">We Are The Church At the Heart Of The City, With The City At Heart</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate hover:text-sage transition-colors">Hear The Hearbeat</Link></li>
              <li><Link href="/about" className="text-slate hover:text-sage transition-colors">Feel The Heartbeat</Link></li>
              <li><Link href="/new-here" className="text-slate hover:text-sage transition-colors">Be The Heartbeat</Link></li>
              <li><Link href="/contact" className="text-slate hover:text-sage transition-colors">Connect With Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-slate">
              <li>Sunday: 9:30 AM</li>
              <li>Wednesday: 6:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate">
                <MapPin className="h-5 w-5" />
                <span>Corner Povall & Currie Roads Berea, Durban, 4062</span>
              </li>
              <li className="flex items-center space-x-2 text-slate">
                <Phone className="h-5 w-5" />
                <span>(031) 201 8398</span>
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