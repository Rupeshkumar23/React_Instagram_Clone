import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null); // Ensure setCurrentUser is never undefined
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return {
    currentUser,
  };
};

export default useAuth;
