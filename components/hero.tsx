import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-100 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight">
          Pristine Cleanliness Meets Expert Care
        </h2>

        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Experience the difference of professional laundry service. We handle
          your fabrics with precision and care, ensuring they come back looking
          fresh and new.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-linear-to-b from-blue-700 to-blue-500 hover:bg-linear-to-t text-white cursor-pointer px-8 py-6 text-lg">
            Get Started
          </Button>

          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 bg-linear-to-b from-blue-100 to-blue-50 hover:bg-linear-to-t hover:text-blue-600 cursor-pointer px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
