
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/f48b8964-576f-43d6-b6b5-26309febba51.png" 
                alt="Ramdani Dental Center" 
                className="h-10 mr-2" 
              />
            </div>
            <p className="text-sm text-gray-600">
              Providing exceptional dental care with a focus on patient comfort and satisfaction.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#services" className="hover:text-dental-600">Services</a>
              </li>
              <li>
                <a href="#book" className="hover:text-dental-600">Book Appointment</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-dental-600">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-900">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-dental-500 hover:text-dental-600 hover:bg-dental-50">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-dental-500 hover:text-dental-600 hover:bg-dental-50">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-dental-500 hover:text-dental-600 hover:bg-dental-50">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-900">Newsletter</h4>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for updates and dental care tips.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-dental-200 px-3 py-2 text-sm"
              />
              <Button className="bg-dental-500 hover:bg-dental-600 text-purple-900 font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-dental-100 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Ramdani Dental Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
