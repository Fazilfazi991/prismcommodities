import { Map, Flag, Globe } from "lucide-react";

export default function GlobalFootprintPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Footprint</h1>
                    <p className="text-xl max-w-2xl font-medium text-gray-300">
                        Connecting continents through a vast network of origination, logistics, and distribution.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">A World Without Borders</h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Our operations are designed to be limitless. We have established key operational hubs in strategic locations to ensure that we are always close to the source and the consumer.
                            </p>
                            <div className="space-y-6">
                                <div className="flex bg-gray-50 p-4 rounded-xl">
                                    <Map className="h-6 w-6 text-secondary mt-1 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-primary">Strategic Hubs</h3>
                                        <p className="text-gray-600 text-sm">Located in major trade centers to facilitate efficient logistics.</p>
                                    </div>
                                </div>
                                <div className="flex bg-gray-50 p-4 rounded-xl">
                                    <Globe className="h-6 w-6 text-accent mt-1 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-primary">Global Origination</h3>
                                        <p className="text-gray-600 text-sm">Sourcing directly from producers across multiple continents.</p>
                                    </div>
                                </div>
                                <div className="flex bg-gray-50 p-4 rounded-xl">
                                    <Flag className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-primary">Local Presence</h3>
                                        <p className="text-gray-600 text-sm">Understanding local markets to deliver tailored solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Placeholder */}
                        <div className="w-full h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 hover:opacity-30 transition-opacity duration-700" />
                            <div className="relative z-10 text-center">
                                <Globe className="h-24 w-24 text-primary/50 mx-auto mb-4" />
                                <p className="text-gray-500 font-bold text-xl px-4">Interactive Global Network Map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
