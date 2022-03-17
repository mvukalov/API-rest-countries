import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v2/name/${name}`);
        const country = await res.json();
        setCountry(country);
        setLoading(true);
        console.log(country);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountryData();
  }, []);

  return (
    <div className="site">
      <Header />
      {loading ? (
        country.map((data) => (
          <div className="country-content" key={data.numnericCode}>
            <div className="country-flag">
              <Link to="/" className="btn btn-dark">
                Back Home
              </Link>
              <h2 className="country-title">{data.name}</h2>
              <img
                className="flag-img"
                src={data.flags.png}
                width="500px"
                height="280px"
                alt={data.name}
              />
            </div>
            <div className="country-data1">
              <h5>
                Official Name: <span>{data.altSpellings[1]}</span>
              </h5>

              <h5>
                Native Name: <span>{data.nativeName}</span>
              </h5>
              <h5>
                First Language: <span>{data.languages[0].name}</span>
              </h5>
              <h5>
                Official Curency: <span>{data.currencies[0].name}</span>
              </h5>
            </div>
            <div className="country-data2">
              <h5>
                Population: <span>{data.population.toLocaleString()}</span>
              </h5>
              <h5>
                Capital: <span>{data.capital}</span>
              </h5>
              <h5>
                Region: <span>{data.region}</span>
              </h5>

              <h5>
                Sub Region: <span>{data.subregion}</span>
              </h5>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default Country;
