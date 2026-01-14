import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Prism Commodities</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Global supplier of agricultural commodities and petroleum energy services. Connecting markets with reliability and excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
                            <li><Link href="/agricultural-commodities" className="hover:text-secondary">Agricultural</Link></li>
                            <li><Link href="/petroleum-services" className="hover:text-secondary">Petroleum</Link></li>
                            <li><Link href="/global-footprint" className="hover:text-secondary">Global Footprint</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                                <span>P.O Box 450885, Office No. 147, B-Block, Emarat Atrium, Sheikh Zayed Road, Dubai</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <a href="mailto:info@prismcommodities.com" className="hover:text-secondary">info@prismcommodities.com</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <span>+971 4 321 4567</span> {/* Placeholder or actual if in PRD (PRD only has address/email/hours) */}
                            </li>
                        </ul>
                    </div>

                    {/* Legal/Copyright */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                        <p className="text-gray-300 text-sm">Monday - Friday<br />09:00 am – 05:00 pm</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Prism Commodities. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
