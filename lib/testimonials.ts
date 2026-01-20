export type TestimonialTab = 'manufacturer' | 'business' | 'promoter';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export type TestimonialData = Record<TestimonialTab, Testimonial>;

export const testimonialData: TestimonialData = {
  promoter: {
    quote: "We were exploring ways to streamline operations and drive consistent growth. Centilio delivered on both. The platform is intuitive, reliable, and packed with tools that actually work. It's like having a growth team built into our business.",
    name: "Prathesh Kumar",
    title: "Owner",
    company: "VKV Realty"
  },
  business: {
    quote: "Chasing signatures used to delay every deal. With Centilio Sign, contracts that took weeks now close in days. It's professional, legally sound, and clients can sign from anywhere. Our sales cycle shortened by 40%, and the audit trail gives me peace of mind. This tool paid for itself in the first month.",
    name: "Priya Sharma",
    title: "Founder",
    company: "Eco Consulting Services"
  },
  manufacturer: {
    quote: "As a manufacturer, paperwork was killing our efficiency. Centilio Sign transformed our contract process from vendor agreements to client approvals, everything happens digitally now. We've cut our document turnaround time by 70% and saved thousands on printing and courier costs. It's secure, legally compliant, and our clients love the professionalism.",
    name: "Rajesh Mehta",
    title: "Founder",
    company: "Advanced Manufacturing Solutions"
  }
};
