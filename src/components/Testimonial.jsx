import React from 'react'

const Testimonial = () => {
  return (
    <section className="py-20 px-4 md:px-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
      <div className="container mx-auto">
        <div className="relative max-w-3xl mx-auto group">
          <div className="absolute -left-8 top-0 text-6xl text-gray-700 opacity-50 group-hover:opacity-100 transition-opacity duration-500">"</div>
          
          <div className="ml-8 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-500/10 to-transparent group-hover:w-full transition-all duration-1000"></span>
            
            <p className="text-2xl md:text-3xl font-medium mb-8 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-white group-hover:to-gray-300 transition-all duration-1000">
                Sanches is patient, responsive and helpful. I highly recommend and would 
              </span>
              <span className="text-gray-400"> be happy to use your service again, an efficient experience.</span>
            </p>
            
            <div className="flex items-center mt-8">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 overflow-hidden relative group">
                {/* Avatar background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h4 className="font-semibold">Mario Rini</h4>
                <p className="text-sm text-gray-400">Digital Design Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial 