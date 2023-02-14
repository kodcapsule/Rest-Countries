import "./country.css";
import Country from "./Country";

const Countrycontainer = ({ countries }) => {
  console.log(countries);
  return (
    <main className="container">
      <div className="main__content grid__container grid__cols-4">
        <Country countryData={countries[0]} />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
      </div>
    </main>
  );
};

export default Countrycontainer;
