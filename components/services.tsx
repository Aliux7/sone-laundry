import { Sparkles, Footprints, Shirt } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Footprints,
    title: "Laundry Sepatu",
    description:
      "Pembersihan sepatu secara menyeluruh dengan teknik khusus untuk menjaga bentuk, warna, dan kualitas material.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Membersihkan noda membandel, kotoran, dan bau pada sepatu hingga ke bagian terdalam agar kembali segar seperti baru.",
  },
  {
    icon: Shirt,
    title: "Dry Clean",
    description:
      "Layanan dry clean profesional untuk tas, topi, dan perlengkapan lainnya dengan perawatan yang aman untuk berbagai material.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 min-h-screen bg-linear-to-t from-white to-blue-100 flex justify-center items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Layanan Kami
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi perawatan sepatu dan dry clean profesional untuk menjaga
            barang favorit Anda tetap bersih dan terawat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg transition-shadow"
              >
                <CardContent>
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>

                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
