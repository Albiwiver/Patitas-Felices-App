import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";
import { useEffect, useState } from "react";

interface ProfileCountryPostalCodeProps {
  country: string;
  postalCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CountryAPIResponse {
  name: {
    common: string;
  };
  cca2: string;
  translations?: {
    spa?: {
      common: string;
    };
  };
}

export const ProfileCountryPostalCode: React.FC<
  ProfileCountryPostalCodeProps
> = ({ country, postalCode, onChange }) => {
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const fetchCountryCode = async () => {
      if (!country) return;

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: CountryAPIResponse[] = await response.json();
        const countryData = data.find((c) => {
          const nameEn = c.name.common.toLowerCase();
          const nameEs = c.translations?.spa?.common?.toLowerCase();
          const input = country.toLowerCase();

          return nameEn === input || nameEs === input;
        });

        if (countryData) {
          setCountryCode(countryData.cca2);
        } else {
          setCountryCode("");
        }
      } catch (error) {
        console.error("Error fetching country code:", error);
        setCountryCode("");
      }
    };

    fetchCountryCode();
  }, [country]);

  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-1">
        <Label title="País" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          {countryCode && (
            <img
              src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
              alt={`Bandera de ${country}`}
              className="w-6 h-4 ml-2"
            />
          )}
          <Input
            type="text"
            name="country"
            id="country"
            value={country}
            placeholder=""
            className="placeholder-primary/60 ml-2 text-primary/60 outline-none"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-1">
        <Label title="Código Postal" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <Input
            type="text"
            name="postalCode"
            id="postalCode"
            value={postalCode}
            placeholder=""
            className="placeholder-primary/60 text text-primary/60 outline-none ml-2"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
