export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          About SmartToolsCore
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Building a modern platform focused on simplicity, clarity, and smarter digital experiences powered by AI.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-24">
        <div className="bg-linear-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-10 md:p-14 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Who We Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            SmartToolsCore is a modern digital platform created with a simple vision — 
            to make everyday tasks easier, faster, and more efficient using intelligent technology. 
            We focus on building clean, reliable, and accessible solutions that anyone can use 
            without complexity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-24">

        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify digital experiences through thoughtful design 
            and intelligent systems. We aim to remove friction, save time, and make 
            powerful technology accessible to everyone in a seamless way.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where technology feels effortless — where users can 
            achieve more with less effort, and where digital tools work naturally 
            alongside people to enhance productivity and creativity.
          </p>
        </div>

      </section>

      {/* Our Goals */}
      <section className="mb-24">

        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Our Goals
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border border-gray-100 p-7 rounded-3xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              Simplicity First
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create products that are easy to use, clean in design, and free from unnecessary complexity.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-7 rounded-3xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              Continuous Improvement
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Constantly evolve and improve based on user needs, feedback, and changing technology.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-7 rounded-3xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              Accessibility for All
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ensure that our platform remains usable and valuable for a wide range of users globally.
            </p>
          </div>

        </div>

      </section>

      {/* Support */}
      <section className="text-center bg-gray-900 text-white rounded-3xl p-12 shadow-sm">

        <h2 className="text-2xl font-semibold mb-4">
          Need Help?
        </h2>

        <p className="text-gray-300 mb-4">
          For any questions, feedback, or support, feel free to reach out to us.
        </p>

        <p className="text-lg font-medium">
          support@smarttoolscore.com
        </p>

      </section>

    </main>
  );
}