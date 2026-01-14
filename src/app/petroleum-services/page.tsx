import { Droplet, Flame, Settings, Truck, Anchor } from "lucide-react";

export default function PetroleumPage() {
    const services = [
        { name: "Bunker Supplies", desc: "Extensive service for bunkering needs.", icon: Anchor },
        { name: "Diesel (Oil Gas)", desc: "Dependable supply for fuel and lubricant deliveries.", icon: Truck },
        { name: "Petroleum Products", desc: "Refined crude oil-based essential substances.", icon: Droplet },
        { name: "Lubricants", desc: "Diverse range of lubricants, both bulk and packaged.", icon: Settings },
        { name: "Naphtha", desc: "Trading in the petrochemical industry.", icon: Flame },
        { name: "Gasoline", desc: "Pivotal for vehicle owners and transport.", icon: Truck },
        { name: "Fuel Oil HSFO & LSFO", desc: "Trading influenced by economic and regulatory factors.", icon: Droplet },
        { name: "Base Oil", desc: "Continuous supply for manufacturing.", icon: Settings },
        { name: "Bitumen", desc: "Supply for infrastructure and construction.", icon: Settings },
        { name: "Furnace Oil", desc: "Continuous supply catering to industrial needs.", icon: Flame },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Header */}
            <section className="bg-accent text-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center space-x-4 mb-4 opacity-80">
                        <Droplet className="h-6 w-6" />
                        <span className="uppercase tracking-wider font-semibold">Energy Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Petroleum & Energy Services</h1>
                    <p className="text-xl max-w-2xl font-medium">
                        Powering industries with reliable energy supplies and strategic partnerships.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-primary mb-6">Fueling Growth</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Prism Commodities has expanded into the petroleum and energy sector, leveraging deep expertise to provide dependable sourcing and trading of energy products. We ensure that our clients have access to the fuel and resources they need to drive their operations forward.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Services & Products</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-2">{service.name}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jupiter Petroleum Mention */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Strategic Integration</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our energy services are enhanced by our strategic integration with Jupiter Petroleum, combining extensive market knowledge with operational excellence.
                    </p>
                </div>
            </section>
        </div>
    );
}
