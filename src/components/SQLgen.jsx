
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import FadeInFromLeft from '../FadeInFromLeft';

export default function SQLgen() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const [databaseType, setDatabaseType] = useState('');
  const generatorRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !question || !databaseType) {
      return alert("Please provide file, question, and select database type.");
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('question', question);
    formData.append('database_type', databaseType); // Add this

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      setResponse(res.data);
    } catch (err) {
      console.error(err);
      setResponse({ error: "Something went wrong!" });
    }
  };

  return (
    <>
      <FadeInFromLeft>
        <div className=" heading text-gray-100 text-center items-center justify-center mt-90 text-3xl ">AI-Powered SQL Generator</div>
        <div id='sql-gen' className="text-gray-100 p-6 border-solid border-2 border-gray-100 rounded-2xl shadow-md max-w-3xl mx-auto mb-8 mt-10 bg-[radial-gradient(800px_circle_at_50%_10px,#2a1345,transparent),radial-gradient(800px_circle_at_50%_600px,#113a4f,transparent),radial-gradient(800px_circle_at_50%_2000px,#2a1345,transparent)] shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-400 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-center">Text to SQL Query</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p>Input*</p>
              <p className='font-bold'>Please enter your query in no more than 50 words</p>
              <input
                type="text"
                placeholder="eg: Show me all employees where salary is above 50000..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="mt-3 w-full border rounded px-4 py-3 h-20 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* ⬇️ Database Type Dropdown */}
            <div>
              <p className="font-medium">Choose Database Type*</p>
              <select
                value={databaseType}
                onChange={(e) => setDatabaseType(e.target.value)}
                className="mt-2 w-full border rounded px-4 py-2 bg[radial-gradient(120px_circle_at_5%_2px,#191647,transparent)]"
              >
                <option value="" disabled>Select a database</option>
                <option className='bg-black/80' value="SQLite">SQLite</option>
                <option className='bg-black/80' value="MySQL">MySQL</option>
                <option className='bg-black/80' value="PostgreSQL">PostgreSQL</option>
                <option className='bg-black/80' value="Oracle Database">Oracle Database</option>
                <option className='bg-black/80' value="Microsoft SQL Server">Microsoft SQL Server</option>
                <option className='bg-black/80' value="MariaDB">MairaDB</option>
                <option className='bg-black/80' value="IBM DB2">IBM DB2</option>
                <option className='bg-black/80' value="SAP HANA">SAP HANA</option>
                <option className='bg-black/80' value="REDIS">Redis</option>
                <option className='bg-black/80' value="Amazon RDS ">Amazon RDS</option>
              </select>
            </div>

            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border rounded px-4 py-2"
            />

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Generate SQL
            </button>
          </form>

          {response && (
            <div className="mt-6 text-gray-100 p-4 rounded shadow">
              {response.sql && (
                <div>
                  <h3 className="font-semibold text-2xl">Generated SQL:</h3>
                  <pre className="bg-gray-200/10 p-2 rounded text-sm p-5 my-2 overflow-auto">{response.sql}</pre>
                </div>
              )}

              {response.result && (
                <div className="mt-4">
                  <h3 className="font-semibold">Query Result:</h3>
                  <pre className="bg-gray-200/10 p-2 my-2 rounded text-sm overflow-auto">
                    {JSON.stringify(response.result, null, 2)}
                  </pre>
                </div>
              )}

              {response.error && (
                <div className="text-red-500 mt-4">❌ {response.error}</div>
              )}
            </div>
          )}
        </div>
      </FadeInFromLeft>
    </>
  );
}
