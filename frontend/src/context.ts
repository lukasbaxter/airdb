import { createContext, useContext } from "react";

export interface Airport {
  code: string;
  icao: string;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  timezone: string;
  type: string;
}

interface AirportsContextType {
  airports: Airport[];
  setAirports: (airports: Airport[]) => void;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  employeeId: string;
  role: string;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

export const AirportsContext = createContext<AirportsContextType | undefined>(undefined);
export const UserContext = createContext<UserContextType | undefined>(undefined);

export function useAirports() {
  const useAirportsContext = useContext(AirportsContext);
  if (!useAirportsContext) {
    throw new Error("useAirports must be used within an AirportsProvider");
  }
  return useAirportsContext;
}

export function useUser() {
  const useUserContext = useContext(UserContext);
  if (!useUserContext) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return useUserContext;
}


