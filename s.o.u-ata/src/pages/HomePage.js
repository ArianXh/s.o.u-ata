import React from 'react'

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to ATA High Schoolseeee</h1>
            <p className="mt-4 text-lg md:text-2xl">Empowemaskaerring the ldasdedededeaders of tomorrow through quality education</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Activities & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Sports Events', 'Art Competitions', 'Science Projects', 'Community Service', 'Awards & Certificates', 'Special Projects'].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={`/images/activity-${index + 1}.jpg`}
                  alt={item}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Post 1', 'Post 2', 'Post 3'].map((post, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={`/images/blog-${index + 1}.jpg`}
                  alt={post}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <button className="mt-4 text-blue-500 hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage