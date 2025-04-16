export default function CardSearch() {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search cards by name..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
