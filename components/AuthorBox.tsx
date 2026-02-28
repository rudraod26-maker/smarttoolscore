export default function AuthorBox() {
  return (
    <div className="border rounded-xl p-6 mt-12 bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">
        About the Author
      </h3>

      <p className="text-gray-700">
        <strong><a href="/author/rudra" className="underline">
    Rudra
  </a></strong> is the founder of SmartToolScore and
        a researcher in AI tools and financial calculators.
        He focuses on building practical digital tools that help users
        make smarter financial and productivity decisions.
      </p>
    </div>
  );
}