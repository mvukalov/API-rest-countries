import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${name}?fields=name,flags,languages,currencies,population,capital,region,subregion,cca3`,
        );

        if (!res.ok) {
          setCountry([]);
          setLoading(false);
          return;
        }

        const data = await res.json();
        const normalized = Array.isArray(data) ? data : data ? [data] : [];
        setCountry(normalized);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setCountry([]);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <div className="site">
      <Header />

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : country.length === 0 ? (
        <div className="no-data">No data</div>
      ) : (
        country.map((data) => (
          <div className="country-content" key={data.cca3}>
            <div className="country-flag">
              <Link to="/" className="btn btn-dark">
                Back Home
              </Link>
              <h2 className="country-title">{data.name?.common ?? "-"}</h2>
              <img
                className="flag-img"
                src={data.flags?.png}
                width="500"
                height="280"
                alt={data.name?.common ?? "Country"}
              />
            </div>

            <div className="country-data1">
              <h5>
                Official Name: <span>{data.name?.official ?? "-"}</span>
              </h5>
              <h5>
                Native Name: <span>{data.name?.nativeName ? Object.values(data.name.nativeName)[0]?.common : "-"}</span>
              </h5>
              <h5>
                First Language: <span>{data.languages ? Object.values(data.languages)[0] : "-"}</span>
              </h5>
              <h5>
                Official Currency: <span>{data.currencies ? Object.values(data.currencies)[0]?.name : "-"}</span>
              </h5>
            </div>

            <div className="country-data2">
              <h5>
                Population: <span>{(data.population ?? 0).toLocaleString()}</span>
              </h5>
              <h5>
                Capital: <span>{data.capital?.[0] ?? "-"}</span>
              </h5>
              <h5>
                Region: <span>{data.region ?? "-"}</span>
              </h5>
              <h5>
                Sub Region: <span>{data.subregion ?? "-"}</span>
              </h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Country;
