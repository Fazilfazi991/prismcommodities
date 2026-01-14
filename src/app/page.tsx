import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Leaf, Droplet, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Service Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions across agricultural and energy sectors, delivering quality and reliability worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Agricultural Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                <Leaf className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Agricultural Commodities</h3>
              <p className="text-gray-600 mb-6">
                Sourcing and supplying premium agricultural products including sugar, rice, wheat, oils, and animal feed to global markets.
              </p>
              <Link href="/agricultural-commodities" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Petroleum Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <Droplet className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Petroleum & Energy</h3>
              <p className="text-gray-600 mb-6">
                Expert trading and supply of crude oil derivatives, lubricants, bitumen, and fuels, ensuring energy security and efficiency.
              </p>
              <Link href="/petroleum-services" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                View Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary font-medium text-sm">
                Global Network
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">
                Connecting Markets Across the Globe
              </h2>
              <p className="text-gray-600 text-lg">
                With a robust origination network and strategic partnerships, we facilitate seamless trade flows between producers and consumers worldwide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 rounded-full bg-secondary mr-3" />
                  Strategic origination hubs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 rounded-full bg-secondary mr-3" />
                  Efficient logistics and distribution
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 rounded-full bg-secondary mr-3" />
                  Global market insights
                </li>
              </ul>
              <Link
                href="/global-footprint"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors mt-4"
              >
                View Global Reach
              </Link>
            </div>

            {/* Visual Placeholder for Map */}
            <div className="flex-1 w-full bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50" />
              <Globe className="h-32 w-32 text-gray-300 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 font-medium">Interactive Map Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how Prism Commodities can support your business needs with our reliable supply chain solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-secondary text-primary font-bold text-lg hover:bg-white transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
