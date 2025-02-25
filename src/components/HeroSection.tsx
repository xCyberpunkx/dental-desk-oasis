
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Your Smile, Our Priority
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience exceptional dental care with our team of experienced professionals. Book your appointment today.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-dental-600 hover:bg-dental-700">
              <Calendar className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
