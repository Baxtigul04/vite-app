import { useState, useEffect } from "react";
import axios from "axios";

const CarDashboard = () => {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/cars");
      setCars(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching cars:", err);
      setError("Mashinalarni yuklashda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/cars", {
        name,
        price: Number(price),
        model,
        year: Number(year),
      });
      setName("");
      setPrice("");
      setModel("");
      setYear("");
      fetchCars();
      setError("");
    } catch (err) {
      console.error("Error adding car:", err);
      setError("Mashina qo'shishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const deleteCar = async (id) => {
    if (!window.confirm("Rostdan ham o'chirmoqchimisiz?")) return;

    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      setCars(cars.filter((car) => car.id !== id));
      setError("");
    } catch (err) {
      console.error("Error deleting car:", err);
      setError("Mashinani o'chirishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Mashinalar</h2>
          <p className="text-gray-600 mb-4">
            Mashina ma'lumotlarini boshqarish
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nomi
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Narxi
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modeli
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Yili
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? "Yuklanmoqda..." : "Qo'shish"}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {loading && cars.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              Yuklanmoqda...
            </div>
          ) : cars.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              Hozircha mashinalar yo'q
            </div>
          ) : (
            cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <button
                    onClick={() => deleteCar(car.id)}
                    className="text-red-500 hover:text-red-700"
                    disabled={loading}
                  >
                    🗑️ O'chirish
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Narxi</p>
                    <p className="font-medium">${car.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Modeli</p>
                    <p className="font-medium">{car.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Yili</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDashboard;
