
import { Stethoscope, Sparkles, Clock, Heart, Smile, HeartPulse } from "lucide-react";
import { ServiceCard } from "./ui/card-service";

const services = [
  {
    title: "General Checkups",
    description: "Comprehensive dental examinations and preventive care to maintain your oral health.",
    icon: Stethoscope,
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
    icon: Sparkles,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency dental services when you need immediate attention.",
    icon: Clock,
  },
  {
    title: "Family Dentistry",
    description: "Comprehensive dental care for your entire family, from children to adults.",
    icon: Heart,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and other cosmetic procedures.",
    icon: Smile,
  },
  {
    title: "Preventive Care",
    description: "Regular cleanings and preventive treatments to keep your smile healthy.",
    icon: HeartPulse,
  },
];

export function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-dental-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive dental care tailored to your needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
