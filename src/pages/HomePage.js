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
        const res = await fetch(`https://restcountries.com/v2/all`);
        const countries = await res.json();
        setCountries(countries);
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
                <tr key={country.name}>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "#1594D0" }}
                      to={`/countries/${country.name}`}
                    >
                      {country.name}
                    </Link>
                  </td>
                  <td>{country.population.toLocaleString()}</td>
                  <td>{country.capital}</td>
                  <td>{country.languages[0].name}</td>
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
