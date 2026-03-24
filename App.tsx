
import React, { useState, useEffect } from 'react';
import { LoadItem, GlobalSettings, CalculationResults, LoadType } from './types';
import { DEFAULT_SETTINGS } from './constants';
import { calculateSolarSystem } from './utils/calculations';
import LoadInput from './components/LoadInput';
import SettingsInput from './components/SettingsInput';
import ResultsDisplay from './components/ResultsDisplay';
import CableTool from './components/CableTool';
import { SunMedium } from 'lucide-react';

const App: React.FC = () => {
  // State for user inputs
  const [loads, setLoads] = useState<LoadItem[]>([
    { id: '1', name: 'Lampes LED', type: LoadType.AC, power: 10, hours: 6, quantity: 5 },
    { id: '2', name: 'Téléviseur', type: LoadType.AC, power: 80, hours: 4, quantity: 1 },
    { id: '3', name: 'Réfrigérateur', type: LoadType.AC, power: 150, hours: 12, quantity: 1 },
  ]);

  const [settings, setSettings] = useState<GlobalSettings>(DEFAULT_SETTINGS);
  
  // State for results
  const [results, setResults] = useState<CalculationResults>({
    totalEnergyDaily: 0,
    energyAC: 0,
    energyAC_raw: 0,
    energyDC: 0,
    peakPower: 0,
    systemVoltage: 12,
    totalPanels: 0,
    panelsSeries: 0,
    panelsParallel: 0,
    batteryBankCapacity: 0,
    batteryBankCapacityKWh: 0,
    totalBatteries: 0,
    batteriesSeries: 0,
    batteriesParallel: 0,
    regulatorAmps: 0,
    inverterPower: 0,
  });

  const [isCableToolOpen, setIsCableToolOpen] = useState(false);

  // Real-time calculation effect
  useEffect(() => {
    const calc = calculateSolarSystem(loads, settings);
    setResults(calc);
  }, [loads, settings]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 print:bg-white print:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 print:static print:border-none print:shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <SunMedium className="w-8 h-8 text-orange-500 mr-3" />
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Solar<span className="text-orange-500">Dimension</span>
          </h1>
        </div>
      </header>

      <main id="report-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-4 print:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 space-y-6 print:space-y-4">
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-sm mb-6 print:hidden" data-html2canvas-ignore="true">
              <h2 className="font-semibold text-lg">Instructions</h2>
              <p className="text-blue-100 text-sm mt-1">
                Remplissez la liste des appareils et configurez les paramètres de votre site. 
                Le dimensionnement se met à jour automatiquement sur la droite.
              </p>
            </div>
            
            <LoadInput loads={loads} setLoads={setLoads} />
            <SettingsInput settings={settings} setSettings={setSettings} />
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-5 print:mt-8 print:break-before-page">
            <div className="sticky top-24 print:static">
              <ResultsDisplay 
                results={results} 
                openCableTool={() => setIsCableToolOpen(true)}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <CableTool 
        isOpen={isCableToolOpen} 
        onClose={() => setIsCableToolOpen(false)} 
        results={results}
        panelPower={settings.panelPower}
      />
    </div>
  );
};

export default App;
