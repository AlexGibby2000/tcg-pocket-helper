export default function CardFilter() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <select className="p-2 border rounded-md">
        <option value="">All Collections</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
      </select>
      <select className="p-2 border rounded-md">
        <option value="">All Packs</option>
        <option value="Pack 1">Pack 1</option>
        <option value="Pack 2">Pack 2</option>
      </select>
      <select className="p-2 border rounded-md">
        <option value="">All Types</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
      </select>
      <select className="p-2 border rounded-md">
        <option value="">All Rarities</option>
        <option value="Common">Common</option>
        <option value="Rare">Rare</option>
      </select>
    </div>
  );
}
