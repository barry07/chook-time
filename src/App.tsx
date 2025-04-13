import React, { useState } from 'react';
import { Clock, Facebook, Instagram, Share2, ChevronDown, Ticket as Chicken } from 'lucide-react';

function App() {
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
  const [cookingTime, setCookingTime] = useState<string>('');

  const calculateCookingTime = () => {
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    // Convert to kg if needed
    let weightInKg = weightNum;
    if (unit === 'lb') {
      weightInKg = weightNum * 0.45359237;
    }
    
    // Calculate cooking time (20 minutes per 500g plus 20 minutes)
    const minutes = Math.ceil((weightInKg * 1000 / 500) * 20 + 20);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    setCookingTime(`${hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ` : ''}${remainingMinutes} minutes`);
  };

  // Use a production URL for sharing (this should be updated when deployed)
  const shareUrl = encodeURIComponent('https://chooktime.com');
  const shareText = encodeURIComponent('Check out Chook Time - The perfect chicken cooking calculator!');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-grow lg:max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Chicken className="w-8 h-8 text-orange-500" />
              <h1 className="text-3xl font-bold text-gray-800">Chook Time</h1>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chicken Weight
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter weight"
                  />
                </div>
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                  </label>
                  <div className="relative">
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as 'kg' | 'lb')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="kg">Kilograms</option>
                      <option value="lb">Pounds</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <button
                onClick={calculateCookingTime}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Calculate Cooking Time
              </button>

              {cookingTime && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Cooking Time</h2>
                  <p className="text-2xl text-orange-600 font-bold">{cookingTime}</p>
                  <p className="text-sm text-gray-600 mt-2">at 180°C (350°F)</p>
                </div>
              )}

              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 mb-4">Share Chook Time:</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.instagram.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad placeholder */}
        <div className="lg:w-80">
          <div className="bg-white rounded-2xl shadow-xl p-4 sticky top-8">
            <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
              <p className="text-gray-400 text-sm">Advertisement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;