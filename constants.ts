import { GlobalSettings } from './types';

export const DEFAULT_SETTINGS: GlobalSettings = {
  irradiation: 5, // kWh/m²/j (avg for sunny regions)
  autonomyDays: 2,
  batteryVoltage: 12,
  batteryCapacity: 200,
  panelPower: 300,
  panelVoltage: 30, // Typical Vmp for a 24V panel or similar
  inverterEfficiency: 0.90,
  kFactor: 0.65,
  dischargeLimit: 0.80, // Deep cycle lead acid
};

export const RESISTIVITY_COPPER = 0.017; // ohm mm²/m approx for copper

export const BATTERY_PRESETS = [
  // ─── Plomb GEL 12V ───────────────────────────────────────────────────────────
  { label: 'Victron Energy GEL Deep Cycle 12V 60Ah',  voltage: 12, capacity:  60, discharge: 0.50, type: 'lead' },
  { label: 'Victron Energy GEL Deep Cycle 12V 90Ah',  voltage: 12, capacity:  90, discharge: 0.50, type: 'lead' },
  { label: 'Victron Energy GEL Deep Cycle 12V 110Ah', voltage: 12, capacity: 110, discharge: 0.50, type: 'lead' },
  { label: 'Victron Energy GEL Deep Cycle 12V 130Ah', voltage: 12, capacity: 130, discharge: 0.50, type: 'lead' },
  { label: 'Victron Energy GEL Deep Cycle 12V 165Ah', voltage: 12, capacity: 165, discharge: 0.50, type: 'lead' },
  { label: 'Victron Energy GEL Deep Cycle 12V 200Ah', voltage: 12, capacity: 200, discharge: 0.50, type: 'lead' },
  { label: 'Victron Energy GEL Deep Cycle 12V 220Ah', voltage: 12, capacity: 220, discharge: 0.50, type: 'lead' },
  { label: 'Haze HZY12-65 GEL 12V 65Ah',             voltage: 12, capacity:  65, discharge: 0.50, type: 'lead' },
  { label: 'Haze HZY12-100 GEL 12V 100Ah',           voltage: 12, capacity: 100, discharge: 0.50, type: 'lead' },
  { label: 'Narada 6-GFM-100 GEL 12V 100Ah',         voltage: 12, capacity: 100, discharge: 0.50, type: 'lead' },
  { label: 'Generic GEL 12V 50Ah',                   voltage: 12, capacity:  50, discharge: 0.50, type: 'lead' },
  { label: 'Generic GEL 12V 150Ah',                  voltage: 12, capacity: 150, discharge: 0.50, type: 'lead' },
  { label: 'Generic GEL 12V 250Ah',                  voltage: 12, capacity: 250, discharge: 0.50, type: 'lead' },

  // ─── Plomb AGM 12V ───────────────────────────────────────────────────────────
  { label: 'Victron SuperCycle AGM 12V 25Ah',        voltage: 12, capacity:  25, discharge: 0.50, type: 'lead' },
  { label: 'Victron SuperCycle AGM 12V 50Ah',        voltage: 12, capacity:  50, discharge: 0.50, type: 'lead' },
  { label: 'Victron SuperCycle AGM 12V 90Ah',        voltage: 12, capacity:  90, discharge: 0.50, type: 'lead' },
  { label: 'Victron SuperCycle AGM 12V 130Ah',       voltage: 12, capacity: 130, discharge: 0.50, type: 'lead' },
  { label: 'Victron SuperCycle AGM 12V 180Ah',       voltage: 12, capacity: 180, discharge: 0.50, type: 'lead' },
  { label: 'Victron SuperCycle AGM 12V 230Ah',       voltage: 12, capacity: 230, discharge: 0.50, type: 'lead' },
  { label: 'Trojan T105-AGM 6V 225Ah',               voltage:  6, capacity: 225, discharge: 0.50, type: 'lead' },
  { label: 'Rolls AGM S6-460 6V 460Ah',              voltage:  6, capacity: 460, discharge: 0.50, type: 'lead' },
  { label: 'Haze HZB12-100 AGM 12V 100Ah',          voltage: 12, capacity: 100, discharge: 0.50, type: 'lead' },
  { label: 'Generic AGM 12V 75Ah',                   voltage: 12, capacity:  75, discharge: 0.50, type: 'lead' },
  { label: 'Generic AGM 12V 150Ah',                  voltage: 12, capacity: 150, discharge: 0.50, type: 'lead' },
  { label: 'Generic AGM 12V 200Ah',                  voltage: 12, capacity: 200, discharge: 0.50, type: 'lead' },

  // ─── OPzS 2V (tubulaire noyé – industriel) ───────────────────────────────────
  { label: 'OPzS 2V 200Ah (tubulaire noyé)',         voltage:  2, capacity:  200, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 250Ah (tubulaire noyé)',         voltage:  2, capacity:  250, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 400Ah (tubulaire noyé)',         voltage:  2, capacity:  400, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 500Ah (tubulaire noyé)',         voltage:  2, capacity:  500, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 600Ah (tubulaire noyé)',         voltage:  2, capacity:  600, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 800Ah (tubulaire noyé)',         voltage:  2, capacity:  800, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 1000Ah (tubulaire noyé)',        voltage:  2, capacity: 1000, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 1500Ah (tubulaire noyé)',        voltage:  2, capacity: 1500, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 2000Ah (tubulaire noyé)',        voltage:  2, capacity: 2000, discharge: 0.50, type: 'lead' },
  { label: 'OPzS 2V 3000Ah (tubulaire noyé)',        voltage:  2, capacity: 3000, discharge: 0.50, type: 'lead' },

  // ─── OPzV 2V (gel tubulaire – industriel) ────────────────────────────────────
  { label: 'OPzV GEL 2V 200Ah (gel tubulaire)',      voltage:  2, capacity:  200, discharge: 0.50, type: 'lead' },
  { label: 'OPzV GEL 2V 300Ah (gel tubulaire)',      voltage:  2, capacity:  300, discharge: 0.50, type: 'lead' },
  { label: 'OPzV GEL 2V 500Ah (gel tubulaire)',      voltage:  2, capacity:  500, discharge: 0.50, type: 'lead' },
  { label: 'OPzV GEL 2V 800Ah (gel tubulaire)',      voltage:  2, capacity:  800, discharge: 0.50, type: 'lead' },
  { label: 'OPzV GEL 2V 1000Ah (gel tubulaire)',     voltage:  2, capacity: 1000, discharge: 0.50, type: 'lead' },
  { label: 'OPzV GEL 2V 1500Ah (gel tubulaire)',     voltage:  2, capacity: 1500, discharge: 0.50, type: 'lead' },
  { label: 'OPzV GEL 2V 2000Ah (gel tubulaire)',     voltage:  2, capacity: 2000, discharge: 0.50, type: 'lead' },

  // ─── LiFePO4 12V ─────────────────────────────────────────────────────────────
  { label: 'Victron LiFePO4 12.8V 100Ah',           voltage: 12, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'Victron LiFePO4 12.8V 200Ah',           voltage: 12, capacity: 200, discharge: 0.80, type: 'lithium' },
  { label: 'Victron LiFePO4 12.8V 300Ah',           voltage: 12, capacity: 300, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 12V 50Ah',              voltage: 12, capacity:  50, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 12V 100Ah',             voltage: 12, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 12V 150Ah',             voltage: 12, capacity: 150, discharge: 0.80, type: 'lithium' },

  // ─── LiFePO4 24V ─────────────────────────────────────────────────────────────
  { label: 'Victron LiFePO4 25.6V 100Ah',           voltage: 24, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'Victron LiFePO4 25.6V 200Ah',           voltage: 24, capacity: 200, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 24V 50Ah',              voltage: 24, capacity:  50, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 24V 100Ah',             voltage: 24, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 24V 200Ah',             voltage: 24, capacity: 200, discharge: 0.80, type: 'lithium' },

  // ─── LiFePO4 48V – Modules rack ──────────────────────────────────────────────
  { label: 'Pylontech US2000C LiFePO4 48V 50Ah (2.4kWh)',  voltage: 48, capacity:  50, discharge: 0.80, type: 'lithium' },
  { label: 'Pylontech US3000C LiFePO4 48V 74Ah (3.5kWh)',  voltage: 48, capacity:  74, discharge: 0.80, type: 'lithium' },
  { label: 'Pylontech US5000 LiFePO4 48V 100Ah (5kWh)',    voltage: 48, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'Victron LiFePO4 51.2V 200Ah (10.2kWh)',        voltage: 48, capacity: 200, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 48V 50Ah',                     voltage: 48, capacity:  50, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 48V 100Ah',                    voltage: 48, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 48V 150Ah',                    voltage: 48, capacity: 150, discharge: 0.80, type: 'lithium' },
  { label: 'Generic LiFePO4 48V 200Ah',                    voltage: 48, capacity: 200, discharge: 0.80, type: 'lithium' },

  // ─── LiFePO4 Haute Tension ────────────────────────────────────────────────────
  { label: 'BYD HVS 5.1kWh LiFePO4 102V 50Ah',            voltage: 102, capacity:  50, discharge: 0.80, type: 'lithium' },
  { label: 'BYD HVS 10.2kWh LiFePO4 102V 100Ah',          voltage: 102, capacity: 100, discharge: 0.80, type: 'lithium' },
  { label: 'BYD HVM 8.28kWh LiFePO4 204V 40.5Ah',         voltage: 204, capacity:  41, discharge: 0.80, type: 'lithium' },
  { label: 'Pylontech Force H1 LiFePO4 48V 200Ah (10kWh)', voltage:  48, capacity: 200, discharge: 0.80, type: 'lithium' },
  { label: 'Pylontech Force H2 LiFePO4 48V 400Ah (19.2kWh)', voltage: 48, capacity: 400, discharge: 0.80, type: 'lithium' },
];