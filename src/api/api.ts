const SERVER_URL = 'https://sleepy-beyond-27321.herokuapp.com/api';

export async function getIPInfo(): Promise<IPInfo> {
  const response = await fetch(`${SERVER_URL}/info`);
  const info = await response.json();

  return info as unknown as IPInfo;
}

export async function getHistories(): Promise<History[]> {
  const response = await fetch(`${SERVER_URL}/history`);
  const histories = await response.json();

  return histories as unknown as History[];
}

export interface Location {
  accuracy_radius: number;
  latitude: number;
  longitude: number;
  time_zone: string;
}

export interface IPInfo {
  ip: string;
  city: string;
  region: string;
  location: Location;
}

export interface History {
  id: number;
  ip: string;
  city: string;
  region: string;
  login_time: Date;
}
