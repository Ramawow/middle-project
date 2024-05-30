// CPU
export interface cpuDropdownInterface {
  manufacturer: boolean
  series: boolean
  codeName: boolean
  coreCount: boolean
  coreClock: boolean
  threadCount: boolean
  tdp: boolean
  releaseDate: boolean
  socket: boolean
}

export interface cpuFilterInterface {
  manufacturer: Array<string | number>
  series: Array<string | number>
  codeName: Array<string | number>
  coreCount: number[]
  coreClock: number[]
  threadCount: number[]
  tdp: number[]
  releaseDate: Array<string | number>
  socket: Array<string | number>
}

export type cpuDropdownType =
  | 'manufacturer'
  | 'series'
  | 'codeName'
  | 'coreCount'
  | 'threadCount'
  | 'tdp'
  | 'releaseDate'
  | 'socket'
  | 'coreClock'

// MOTHERBOARD
export interface motherboardDropdownInterface {
  manufacturer: boolean
  formFactor: boolean
  memoryType: boolean
  memorySlot: boolean
  socket: boolean
}

export interface motherboardFilterInterface {
  manufacturer: Array<string | number>
  formFactor: Array<string | number>
  memoryType: Array<string | number>
  memorySlot: number[]
  socket: Array<string | number>
}

export type motherboardDropdownType =
  | 'manufacturer'
  | 'formFactor'
  | 'memoryType'
  | 'memorySlot'
  | 'socket'

// GPU
export interface gpuDropdownInterface {
  manufacturer: boolean
  chipset: boolean
  memoryType: boolean
  memory: boolean
  coreClock: boolean
  boostClock: boolean
  interface: boolean
  tdp: boolean
}

export interface gpuFilterInterface {
  manufacturer: Array<string | number>
  chipset: Array<string | number>
  memoryType: Array<string | number>
  memory: number[]
  coreClock: number[]
  boostClock: number[]
  interface: Array<string | number>
  tdp: number[]
}

export type gpuDropdownType =
  | 'manufacturer'
  | 'chipset'
  | 'memoryType'
  | 'memory'
  | 'coreClock'
  | 'boostClock'
  | 'interface'
  | 'tdp'

// RAM
export interface ramDropdownInterface {
  manufacturer: boolean
  type: boolean
  speed: boolean
  module: boolean
}

export interface ramFilterInterface {
  manufacturer: Array<string | number>
  type: Array<string | number>
  module: Array<string | number>
  speed: number[]
}

export type ramDropdownType = 'manufacturer' | 'type' | 'speed' | 'module'

// STORAGE
export interface storageDropdownInterface {
  manufacturer: boolean
  capacity: boolean
  interface: boolean
  formFactor: boolean
  nvme: boolean
}

export interface storageFilterInterface {
  manufacturer: Array<string | number>
  capacity: number[]
  interface: Array<string | number>
  formFactor: Array<string | number>
  nvme: Array<string | number>
}

export type storageDropdownType =
  | 'manufacturer'
  | 'capacity'
  | 'formFactor'
  | 'interface'
  | 'nvme'

// PSU
export interface psuDropdownInterface {
  manufacturer: boolean
  efficiency: boolean
  wattage: boolean
  modular: boolean
  type: boolean
}

export interface psuFilterInterface {
  manufacturer: Array<string | number>
  efficiency: Array<string | number>
  wattage: number[]
  modular: Array<string | number>
  type: Array<string | number>
}

export type psuDropdownType =
  | 'manufacturer'
  | 'efficiency'
  | 'wattage'
  | 'modular'
  | 'type'

// MONITOR
export interface monitorDropdownInterface {
  manufacturer: boolean
  screenSize: boolean
  refreshRate: boolean
  resulution: boolean
  panelType: boolean
}

export interface monitorFilterInterface {
  manufacturer: Array<string | number>
  screenSize: number[]
  refreshRate: number[]
  resulution: Array<string | number>
  panelType: Array<string | number>
}

export type monitorDropdownType =
  | 'manufacturer'
  | 'screenSize'
  | 'refreshRate'
  | 'resulution'
  | 'panelType'

// CPU COOLER
export interface cpuCoolerDropdownInterface {
  manufacturer: boolean
  height: boolean
  socket: boolean
  waterCooled: boolean
}

export interface cpuCoolerFilterInterface {
  manufacturer: Array<string | number>
  height: number[]
  socket: Array<string | number>
  waterCooled: Array<string | number>
}

export type cpuCoolerDropdownType = 'manufacturer' | 'height' | 'socket' | 'waterCooled'

// CPU CASE
export interface caseDropdownInterface {
  manufacturer: boolean
  formFactor: boolean
}

export interface caseFilterInterface {
  manufacturer: Array<string | number>
  formFactor: Array<string | number>
}

export type caseDropdownType = 'manufacturer' | 'formFactor'
