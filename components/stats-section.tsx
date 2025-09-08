export function StatsSection() {
  const stats = [
    {
      number: "100+",
      label: "Brand Collaborations",
      description: "Successful partnerships with leading brands",
    },
    {
      number: "2021",
      label: "Calendar Cover Model",
      description: "Face of West Bengal Cover",
    },
    {
      number: "1",
      label: "Company Founded",
      description: "Successful entrepreneurial ventures",
    },
    {
      number: "ISL",
      label: "Sports Presenter",
      description: "Former presenter at Indian Super League",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Achievements & Milestones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey marked by excellence, innovation, and impactful contributions across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-royal-blue to-rose-gold p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-white/90">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
