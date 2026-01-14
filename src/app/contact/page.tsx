"use client";

import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-300">
                        We look forward to hearing from you. Get in touch with our team for inquiries and partnerships.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
                                <p className="text-gray-600 mb-8">
                                    Whether you have a question about our products, services, or want to discuss a potential partnership, our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-6">
                                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Visit Us</h3>
                                        <p className="text-gray-600">P.O Box 450885, Office No. 147</p>
                                        <p className="text-gray-600">B-Block, Emarat Atrium, Sheikh Zayed Road, Dubai</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Email Us</h3>
                                        <a href="mailto:info@prismcommodities.com" className="text-gray-600 hover:text-secondary transition-colors">info@prismcommodities.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Business Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 09:00 am – 05:00 pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                                        <MessageSquare className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">WhatsApp</h3>
                                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Chat with us directly</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Integration */}
            <section className="h-[450px] w-full bg-gray-100 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.123456789!2d55.270782!3d25.196924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433400000000%3A0x0000000000000000!2sEmarat%20Atrium!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae&q=Emarat+Atrium,+Sheikh+Zayed+Road,+Dubai"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Prism Commodities Location"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
            </section>
        </div>
    );
}
