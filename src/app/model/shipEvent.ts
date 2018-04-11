export interface ShipManualEvent {
  hull?: number;
  air?: number;
  engine?: number;
  cargo?: string;
  airUsers?: number;
  message?: string;
  anchorSwitch?: boolean;
  coordX?: number;
  coordY?: number;
  speed?: number;
  direction?: string;
  transmitterDisabledTurns?: number;
}
