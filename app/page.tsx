const benefits = [
  {
    title: "Thoughtful & Nuanced",
    description:
      "Claude engages deeply with complex topics, providing balanced and well-reasoned responses rather than oversimplified answers.",
  },
  {
    title: "Safe & Honest",
    description:
      "Built with safety at its core, Claude is transparent about its limitations and avoids harmful or misleading outputs.",
  },
  {
    title: "Highly Capable",
    description:
      "From coding and analysis to creative writing and research, Claude excels across a wide range of tasks.",
  },
  {
    title: "Long Context Understanding",
    description:
      "Claude can process and reason over very long documents, making it ideal for summarization, review, and in-depth analysis.",
  },
  {
    title: "Multilingual",
    description:
      "Claude communicates fluently in many languages, enabling global accessibility and cross-language assistance.",
  },
  {
    title: "Collaborative Partner",
    description:
      "Claude works with you iteratively, adapting to feedback and refining outputs to match your needs.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Welcome to Claude
        </h1>
        <p className="text-center text-gray-500 text-lg mb-12">
          An AI assistant built for safety, honesty, and capability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
