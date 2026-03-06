'use client';

import { Check } from 'lucide-react';

export function Features() {
  const features = [
    'Professional-grade equipment and products',
    'Expert stain removal specialists',
    'Same-day service available',
    'Eco-friendly and sustainable practices',
    'Delicate fabric expertise',
    'Transparent pricing with no hidden fees',
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6 text-balance">
              Why Choose Sone Laundry?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              With over a decade of experience, we've perfected the art of professional laundry care. Our commitment to excellence and customer satisfaction sets us apart.
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
              <div className="text-6xl mb-4">🧺</div>
              <p className="text-foreground font-semibold">Professional Care, Every Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
