export interface Number {
  id?: number
  value?: number
}

export interface Column {
  label?: string
  value?: string
}

export interface Alert {
  title?: string
  confirmed?: Function
}