import "./country.css";
import Country from "./Country";

const Countrycontainer = ({ countries }) => {
  console.log(countries);
  return (
    <main className="container">
      <div className="main__content grid__container grid__cols-4">
        {countries.map((country) => {
          return <Country countryData={country} />;
        })}

        {/* <Country />
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
        <Country /> */}
      </div>
    </main>
  );
};

export default Countrycontainer;
