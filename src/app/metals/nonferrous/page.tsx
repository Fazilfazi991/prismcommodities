import Image from "next/image";

const aluminiumProducts = [
  { name: "ACSR", img: "assets/img/project/acsr.jpg" },
  { name: "6061", img: "assets/img/project/6061.jpg" },
  { name: "Mill Finish", img: "assets/img/project/mill-finish.jpg" },
  { name: "Extrusion 95/5", img: "assets/img/project/extrusion-95-5.jpg" },
  { name: "Aluminium Dross", img: "assets/img/project/aluminium-dross.jpg" },
  { name: "Talon", img: "assets/img/project/talon.jpg" },
  { name: "Extrusion", img: "assets/img/project/extrusion.jpg" },
  { name: "Litho Sheets", img: "assets/img/project/litho-sheets.jpg" },
  { name: "Talk", img: "assets/img/project/talk.jpg" },
  { name: "Trump", img: "assets/img/project/trump.jpg" },
  { name: "Tense", img: "assets/img/project/tanse.jpg" },
  { name: "Wheels", img: "assets/img/project/wheels.jpg" },
  { name: "Radiator / Tally", img: "assets/img/project/radiator.jpg" },
  { name: "Taint Tabor", img: "assets/img/project/taint-tabor.jpg" },
  { name: "Utensil", img: "assets/img/project/utensil.jpg" },
  { name: "Zorba", img: "assets/img/project/zorba.jpg" },
  { name: "UBC", img: "assets/img/project/UBC.jpg" },
  { name: "Aluminium Billets", img: "assets/img/project/aluminium-billets.jpg" },
  { name: "Aluminium Ingots", img: "assets/img/project/aluminium-ingots.jpg" },
  { name: "Alu Cables", img: "assets/img/project/alu-cables.jpg" },
  { name: "Wire", img: "assets/img/project/wire.jpg" },
  { name: "Foil", img: "assets/img/project/foil.jpg" },
  { name: "Aluminium Punching", img: "assets/img/project/aluminium-punching.jpg" }
];

export default function NonFerrousPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Non Ferrous Metals</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Explore our comprehensive range of high-quality aluminium products.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">ALUMINIUM</h2>
                        <div className="h-1 w-20 bg-secondary rounded mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {aluminiumProducts.map((product) => (
                            <div key={product.name} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-white p-4">
                                    <Image
                                        src={`https://www.alatrading.com/${product.img}`}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 text-center border-t mt-auto">
                                    <h3 className="text-lg font-bold text-primary">{product.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
