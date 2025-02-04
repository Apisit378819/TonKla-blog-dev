import { useState, useEffect } from "react";
import axios from "axios";

const ApiTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/test"); // เปลี่ยน URL ถ้าจำเป็น
      setData(response.data);
    } catch (err) {
      console.error("Axios Error:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">API Test</h2>
      {error && <p className="text-red-500">Error: {error}</p>}
      {data ? (
        <pre className="bg-gray-200 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchData} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Reload Data
      </button>
    </div>
  );
};

export default ApiTest;
