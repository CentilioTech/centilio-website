export default function Aboutus() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-lg text-gray-700">
          Centilio is your trusted growth engine — a single platform of ready-to-use
          digital products and services for businesses that are ready to scale.
        </p>
        <p className="text-lg text-gray-700">
          Most growing businesses struggle to manage marketing, sales, operations,
          and HR with the right tools and the right support. Centilio exists to
          simplify growth by bringing those tools together in one place, so you can
          move faster and with less friction.
        </p>
        <p className="text-lg text-gray-700">
          Our products work side by side: <strong>Centilio Sign</strong> for digital
          signatures, <strong>Centilio SEO Bot</strong> for content automation, plus
          HR and email-outreach agents — designed for manufacturers, business
          owners, and promoters who want to grow with results that speak for
          themselves.
        </p>
        <p className="text-sm text-gray-500 pt-6">
          Have a question or want to talk to a growth expert?{' '}
          <a href="/contact" className="text-blue-700 hover:underline">
            Get in touch
          </a>
          .
        </p>
      </div>
    </div>
  )
}
