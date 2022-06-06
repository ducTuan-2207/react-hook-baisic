import { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);

  const [err, setErrr] = useState(false);

  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(30, "days");

  useEffect(() => {
    // setTimeout(() => {
    try {
      async function fetchAsync() {
        let res = await fetch(
          `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
        );

        let data = await res.json();
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });

          data = data.reverse();
        } //if data and data > 0 => map qua set lai date
        console.log(">>check data:", data);
        setDataCovid(data);
        setLoading(false);
        setErrr(false);
        return data;
      }
      fetchAsync();
    } catch (e) {
      // }, 2000);
      setErrr(true);
      setLoading(false);
    }
  }, []);

  return (
    // background-color: #aec1e6;
    <div style={{ backgroundColor: "aec1e6" }}>
      <h3>Covid Hôm Nay</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {err === false &&
            loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr colSpan="5" style={{ textAlign: "center" }}>
              Loading.....
            </tr>
          )}

          {err === true && (
            <tr colSpan="5" style={{ textAlign: "center" }}>
              Something wrong....
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Covid;
