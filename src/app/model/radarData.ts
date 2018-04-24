import {RadarObject} from "./radarObject";

export interface RadarData {
  object?: RadarObject;
  canBeBoarded?: boolean;
  distance?: number;
}
