import { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Provide AuthContext values to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate fetching user data (replace this with real auth logic)
    setTimeout(() => {
      const fetchedUser = {
        name: "Admin User",
        isAdmin: true, // Set this based on your authentication logic
      };
      setUser(fetchedUser);
      setLoading(false); // Set loading to false after fetching user data
    }, 1000); // Simulating delay
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
