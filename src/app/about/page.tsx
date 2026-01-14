import { Target, Eye, Heart, BarChart3, Globe2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Driven by excellence, we are a global leader in agricultural and energy supply chains.
                    </p>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="inline-flex items-center justify-center p-4 bg-secondary/10 text-secondary rounded-full mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                            <p className="text-gray-600">
                                To provide reliable, sustained global sourcing and supply of critical commodities, bridging the gap between producers and markets with integrity and efficiency.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="inline-flex items-center justify-center p-4 bg-accent/10 text-accent rounded-full mb-6">
                                <Eye className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the most trusted global partner in the commodities sector, recognized for our diverse portfolio and unwavering commitment to quality.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-6">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
                            <p className="text-gray-600">
                                We prioritize sustainability, transparency, and partnership. Our success is built on the trust we cultivate with our clients and stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network & Expertise */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-primary">An Integrated Global Network</h2>
                            <p className="text-gray-600 text-lg">
                                Prism Commodities operates an extensive origination network that spans continents. Our strategic presence in key markets allows us to source the highest quality products directly from producers.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Our global marketing strategies are designed to optimize distribution, ensuring that our partners receive timely and consistent supplies regardless of market fluctuations.
                            </p>

                            <div className="flex items-center space-x-4 pt-4">
                                <div className="flex items-center text-primary font-medium">
                                    <Globe2 className="mr-2 h-5 w-5 text-secondary" /> Global Reach
                                </div>
                                <div className="flex items-center text-primary font-medium">
                                    <BarChart3 className="mr-2 h-5 w-5 text-accent" /> Market Insight
                                </div>
                            </div>
                        </div>

                        {/* Visual Placeholder */}
                        <div className="bg-white p-2 rounded-2xl shadow-xl h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <span className="text-gray-400 font-medium">[Image: Global Logistics Network]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Unrivaled Expertise</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 text-lg mb-8">
                            With years of experience in both agricultural and energy sectors, we have cultivated deep partnerships with globally renowned producers. Our expertise extends beyond trading; we manage the entire supply chain from origination to delivery.
                        </p>
                        <p className="text-gray-600 text-lg">
                            This integrated approach allows us to mitigate risks, ensure quality control, and deliver exceptional value to our clients effectively.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
