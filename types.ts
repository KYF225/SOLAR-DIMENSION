
export enum LoadType {
  AC = 'AC',
  DC = 'DC'
}

export interface LoadItem {
  id: string;
  name: string;
  type: LoadType;
  power: number; // Watts
  hours: number; // Hours/day
  quantity: number;
}

export interface GlobalSettings {
  irradiation: number; // kWh/m²/j
  autonomyDays: number;
  batteryVoltage: number; // V (e.g., 12)
  batteryCapacity: number; // Ah (e.g., 200)
  panelPower: number; // Wp (e.g., 300)
  panelVoltage: number; // Vmp (e.g., 30)
  inverterEfficiency: number; // 0.9 default
  kFactor: number; // 0.65 default
  dischargeLimit: number; // 0.8 (80%) default for Lead Acid
}

export interface CableSegment {
  id: string;
  name: string;
  length: number; // meters
  current: number; // Amps (calculated)
  voltage: number; // Volts (system voltage)
  dropPercentage: number; // usually 2% or 3%
}

export interface CalculationResults {
  totalEnergyDaily: number; // Wh/j
  energyAC: number; // Corrected AC energy (with inverter losses)
  energyAC_raw: number; // Raw AC energy (appliances only)
  energyDC: number;
  peakPower: number; // Wc
  systemVoltage: number; // 12, 24, 48 V
  totalPanels: number;
  panelsSeries: number;
  panelsParallel: number;
  batteryBankCapacity: number; // Ah
  batteryBankCapacityKWh: number; // kWh
  totalBatteries: number;
  batteriesSeries: number;
  batteriesParallel: number;
  regulatorAmps: number;
  inverterPower: number; // W
}
