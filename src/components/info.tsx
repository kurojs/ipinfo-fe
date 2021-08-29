import React, { useEffect, useState } from 'react';
import { getIPInfo, IPInfo } from '../api/api';

export function Info() {
  const [info, setInfo] = useState({} as IPInfo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIPInfo().then((info) => {
      setInfo(info);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <progress className='progress is-small is-primary' max='100'>
      15%
    </progress>
  ) : (
    <div className='block'>
      <h2>Your IP is {info.ip}</h2>
      <ul>
        <li>City: {info.city}</li>
        <li>Region: {info.region}</li>
        <li>Time zone: {info.location.time_zone}</li>
        <li>Longitude: {info.location.longitude}</li>
        <li>Latitude: {info.location.latitude}</li>
      </ul>
    </div>
  );
}
