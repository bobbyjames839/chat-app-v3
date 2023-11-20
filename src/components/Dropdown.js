import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../config/Firebase';

export const Dropdown = () => {
  const [names, setNames] = useState([]);
  const usersRef = collection(db, 'users');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(usersRef);
        const namesArray = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name && data.name !== auth.currentUser.displayName) {
            namesArray.push(data.name);
          }
        });
        setNames(namesArray);
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };
    fetchData();
  }, []);


  return (
      <select className='dropdown'>
        {names.map((name) => (
          <option>
            {name}
          </option>
        ))}
      </select>
  );
};


