import Link from "next/link";

export default function ToolsGrid() {
  const tools = [
    {
      title: "Password Generator",
      desc: "Generate strong and secure passwords instantly.",
      link: "/tools/password-generator",
    },
    {
      title: "Word Counter",
      desc: "Count words, characters and sentences easily.",
      link: "/tools/word-counter",
    },
    {
      title: "Loan Calculator",
      desc: "Calculate EMI and loan repayment quickly.",
      link: "/tools/loan-calculator",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Popular Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.link}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">
                {tool.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {tool.desc}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}