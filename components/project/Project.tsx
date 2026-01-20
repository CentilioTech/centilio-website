export default function Project() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Project Alpha</h3>
              <p className="text-gray-600 mb-4">
                A revolutionary approach to modern architecture and design.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Project Beta</h3>
              <p className="text-gray-600 mb-4">
                Sustainable development with cutting-edge technology integration.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Project Gamma</h3>
              <p className="text-gray-600 mb-4">
                Innovative solutions for urban development and community building.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}