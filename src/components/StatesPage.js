import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Loader } from 'lucide-react';

const StatesPage = () => {
  const [statesData, setStatesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchStatesData();
  }, []);

  const fetchStatesData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.data.gov.in/resource/15362686-dd5c-46e1-aa54-492c5a7d7826?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json'
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.records) {
        setStatesData(data.records);
        setFilteredData(data.records);
      } else {
        throw new Error('No records found in API response');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStateFilter = (state) => {
    setSelectedState(state);
    if (state === '') {
      setFilteredData(statesData);
    } else {
      const filtered = statesData.filter(item => 
        item.state && item.state.toLowerCase().includes(state.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Get unique states for dropdown
  const uniqueStates = [...new Set(statesData.map(item => item.state).filter(Boolean))].sort();

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <Loader className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading states data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-center">
            <div className="text-red-500 mb-4">
              <MapPin className="h-12 w-12 mx-auto" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Data</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchStatesData}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Indian States Data</h1>
          <p className="text-gray-600">Explore detailed information about Indian states from government data</p>
        </div>

        {/* Filter Section */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => handleStateFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All States</option>
                {uniqueStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <span className="text-sm text-gray-600">
              Showing {filteredData.length} of {statesData.length} records
            </span>
          </div>
        </div>

        {/* Data Display */}
        {filteredData.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="grid gap-4">
              {filteredData.slice(0, 20).map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(item).map(([key, value]) => {
                      if (value && value !== '' && value !== 'null') {
                        return (
                          <div key={key} className="flex flex-col">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                              {key.replace(/_/g, ' ')}
                            </span>
                            <span className="text-sm text-gray-900 mt-1">
                              {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {filteredData.length > 20 && (
              <div className="text-center mt-6">
                <p className="text-gray-500 text-sm">
                  Showing first 20 records of {filteredData.length} total records
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg mb-2">No data found</p>
            <p className="text-gray-400 text-sm">Try selecting a different state filter</p>
          </div>
        )}

        {/* Stats */}
        {statesData.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Data Statistics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{statesData.length}</div>
                <div className="text-sm text-gray-600">Total Records</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{uniqueStates.length}</div>
                <div className="text-sm text-gray-600">Unique States</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {Object.keys(statesData[0] || {}).length}
                </div>
                <div className="text-sm text-gray-600">Data Fields</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatesPage;