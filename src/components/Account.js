import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Button } from "react-bootstrap";
import { async } from "@firebase/util";

const Account = () => {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(true);
  const [edad, setEdad] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersCollectionRef = collection(db, "users");
      const data = await getDocs(usersCollectionRef);
      const users1 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setUsers(users1);
    };
    getUsers();
  }, [flag]);

  const handleDelete = async (id) => {
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
    setFlag(!flag);
  };

  const addAge = async (id, index, nombre, correo) => {
    const docRef = doc(db, "users", id);
    const payload = {
      nombre,
      correo,
      acceso: true,
      edad: edad[index],
    };
    await setDoc(docRef, payload);

    setFlag(!flag);
  };
  const handleChange = (event) => {
    const { value, id } = event.target;
    const edad1 = [...edad];
    edad1[id] = value;
    setEdad(edad1);
  };

  useEffect(() => {
    let edadInicial = [];
    for (let index = 0; index < 100; index++) {
      edadInicial = [...edadInicial, 0];
    }
    setEdad(edadInicial);
  }, []);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>
                  {user.edad ? (
                    user.edad
                  ) : (
                    <div>
                      <input
                        id={index}
                        type="text"
                        value={edad[index]}
                        onChange={handleChange}
                      />
                      <Button
                        onClick={() =>
                          addAge(user.id, index, user.nombre, user.correo)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                        </svg>
                      </Button>
                    </div>
                  )}
                </td>
                <td>
                  <Button id={index} onClick={(e) => handleDelete(index)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
