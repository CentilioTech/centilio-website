export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Careers</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Join our team and be part of something extraordinary.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Current Openings</h3>
            <p className="text-gray-700">Explore exciting opportunities with us.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Why Join Us?</h3>
            <p className="text-gray-700">Discover the benefits of working at Fairfield.</p>
          </div>
        </div>
      </div>
    </div>
  )
}