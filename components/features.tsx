'use client';

import { Check } from 'lucide-react';

export function Features() {
  const features = [
    'Peralatan dan produk pembersih profesional',
    'Teknik khusus untuk menghilangkan noda pada sepatu',
    'Pengerjaan cepat dan rapi',
    'Menggunakan bahan yang aman dan ramah lingkungan',
    'Perawatan khusus untuk berbagai material sepatu',
    'Harga transparan tanpa biaya tersembunyi',
  ];

  return (
    <section id="about" className="py-20 bg-linear-to-b from-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6 text-balance">
              Mengapa Memilih Sone Laundry?
            </h3>

            <p className="text-lg text-muted-foreground mb-8">
              Kami menyediakan layanan laundry sepatu dan dry clean profesional
              dengan perhatian pada setiap detail. Sepatu dan barang favorit
              Anda akan dibersihkan dengan teknik khusus agar tetap terjaga
              kualitas dan tampil seperti baru kembali.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-600/20 via-blue-200/20 to-blue-600/20 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👟</div>
              <p className="text-foreground font-semibold">
                Perawatan Profesional untuk Sepatu Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
