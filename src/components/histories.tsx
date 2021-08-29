import { useEffect, useState, Fragment } from 'react';
import { getHistories, History } from '../api/api';

export function Histories() {
  const [histories, setHistories] = useState({} as History[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHistories().then((histories) => {
      setHistories(histories);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <progress className='progress is-small is-primary' max='100'>
      15%
    </progress>
  ) : (
    <div className='block'>
      <h2>Top 100 recent visited IPs</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>
              <abbr title='IP'>IP</abbr>
            </th>
            <th>
              <abbr title='City'>City</abbr>
            </th>
            <th>
              <abbr title='Region'>Region</abbr>
            </th>
            <th>
              <abbr title='Login time'>Login time</abbr>
            </th>
          </tr>
        </thead>

        <tbody>
          {histories.map((history) => {
            return (
              <Fragment key={history.id}>
                <tr key={history.id}>
                  <td>{history.ip}</td>
                  <td>{history.city}</td>
                  <td>{history.region}</td>
                  <td>{new Date(history.login_time).toLocaleString()}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
