import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-100 to-blue-100 text-slate-700">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Experience Premium Laundry Care?
        </h3>

        <p className="text-lg text-slate-700 mb-8 max-w-xl mx-auto">
          Join hundreds of satisfied customers who trust Sone Laundry for
          their fabric care needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-linear-to-b from-blue-700 to-blue-500 hover:bg-linear-to-t text-white cursor-pointer px-8 py-6 text-lg">
            Book Now
          </Button>

          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 bg-linear-to-b from-blue-100 to-blue-50 hover:bg-linear-to-t hover:text-blue-600 cursor-pointer px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}