"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [country, setCountry] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function detectLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const detectedCountry = data?.country_code || null;
        setCountry(detectedCountry);

        if (detectedCountry === "NG") {
          setCurrency("NGN");
        } else {
          setCurrency("USD");
        }
      } catch {
        setCountry(null);
        setCurrency("NGN");
      } finally {
        setLoading(false);
      }
    }

    detectLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        country,
        currency,
        setCurrency,
        loading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
