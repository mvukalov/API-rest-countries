import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,capital,languages");
        const text = await res.text();
        console.log("STATUS:", res.status);
        console.log("BODY:", text);

        const data = JSON.parse(text);
        setCountries(Array.isArray(data) ? data : []);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="site">
      <Header />
      {loading ? (
        <div className="table">
          <Table striped bordered hover variant="dark">
            <thead className="table-head">
              <tr>
                <th>Name</th>
                <th>Population</th>
                <th>Capital</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => (
                <tr key={country.name.common}>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "#1594D0" }}
                      to={`/countries/${encodeURIComponent(country.name.common)}`}
                    >
                      {country.name.common}
                    </Link>
                  </td>
                  <td>{country.population.toLocaleString()}</td>
                  <td>{country.capital?.[0] ?? "-"}</td>
                  <td>{country.languages ? Object.values(country.languages)[0] : "-"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
