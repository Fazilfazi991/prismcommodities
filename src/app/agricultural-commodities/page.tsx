import { Leaf, Wheat, Truck, ShieldCheck } from "lucide-react";

export default function AgriculturalPage() {
    const categories = [
        {
            title: "Commodities",
            items: ["Sugar", "Rice", "Wheat", "Wheat Flour", "Pasta", "Pulses", "Oilseeds & Nuts", "Vegetable Oils", "Canned Products"]
        },
        {
            title: "Animal Feed",
            items: ["Wheat Bran", "Rice Bran", "Rice Husk", "Cottonseeds", "Cottonseed Cake/Meal", "Sugar Beet Pulp Pellets", "Rapeseed Meal", "Sunflower Meal"]
        },
        {
            title: "Food Aid",
            items: ["Food Parcels", "Wheat Flour", "Pasta", "Rice", "Salt", "Edible Oils", "Tomato Paste"]
        },
        {
            title: "Raw Materials & Fertilizers",
            items: ["Milk Powder", "Cement", "Cement Clinker", "Fertilizers"]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Header */}
            <section className="bg-secondary text-primary py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center space-x-4 mb-4 opacity-80">
                        <Leaf className="h-6 w-6" />
                        <span className="uppercase tracking-wider font-semibold">Our Expertise</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Agricultural Commodities</h1>
                    <p className="text-xl max-w-2xl font-medium">
                        Sourcing the finest products from around the globe to feed the world.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-primary mb-6">Feeding Global Markets</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Prism Commodities stands at the forefront of the agricultural sector. We connect farmers and producers with international buyers, ensuring a seamless flow of essential food products and raw materials. Our commitment to quality and sustainability drives every transaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Product Range</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <h3 className="text-xl font-bold text-secondary mb-4 border-b border-gray-100 pb-2">{cat.title}</h3>
                                <ul className="space-y-2">
                                    {cat.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                                            <span className="mr-2 text-secondary">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supply Chain Info */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Supply Chain Excellence</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 text-secondary">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality Control</h3>
                            <p className="text-gray-300 text-sm">Rigorous inspection and testing at every stage to ensure compliance with international standards.</p>
                        </div>
                        <div className="p-6">
                            <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 text-secondary">
                                <Truck className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Efficient Logistics</h3>
                            <p className="text-gray-300 text-sm">Optimized shipping and inland transportation networks for timely and cost-effective delivery.</p>
                        </div>
                        <div className="p-6">
                            <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 text-secondary">
                                <Wheat className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Risk Management</h3>
                            <p className="text-gray-300 text-sm">Comprehensive strategies to mitigate market volatility and supply chain disruptions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
