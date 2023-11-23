// export const ProviderClients = ({ children }) => {
//     const url = `http://localhost:5000/clients`;
//     const [clientes, setClientes] = useState({});
//     const [ordenes, setOrdenes] = useState({});

//     const mostrarClientes = async () => {
//       try {
//         const { data } = await axios.get(url);
//         console.log(data);
//         setClientes(data);
//         setOrdenes(data.orders);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     useEffect(() => {
//       //Almacenar datos en LocalStorage

//       //Trae datos del backEnd
//       mostrarClientes();
//     }, []);
//   };

// userReducer.js
import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const ContextClients = createContext();

export const useContextClients = () => {
  return useContext(ContextClients);
};

const url = `http://localhost:5000/clients`;

const initialState = {
  clients: [],
  currentClient: null,
  loading: false,
  error: null,
};

const actionTypes = {
  FETCH_CLIENTS_REQUEST: "FETCH_CLIENTS_REQUEST",
  FETCH_CLIENTS_SUCCESS: "FETCH_CLIENTS_SUCCESS",
  FETCH_CLIENTS_FAILURE: "FETCH_CLIENTS_FAILURE",
  VIEW_CLIENT: "VIEW_CLIENT",
  ADD_CLIENT: "ADD_CLIENT",
  EDIT_CLIENT: "EDIT_CLIENT",
  DELETE_CLIENT: "DELETE_CLIENT",
};

const clientReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };
    case actionTypes.FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.VIEW_CLIENT:
      return {
        ...state,
        currentClient: action.payload,
      };
    case actionTypes.ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    case actionTypes.EDIT_CLIENT:
      return {
        ...state,
        clients: state.clients.map((client) => (client.id === action.payload.id ? action.payload : client)),
        currentClient: null,
      };
    case actionTypes.DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.payload),
        currentClient: null,
      };
    default:
      return state;
  }
};

export const ClienteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clientReducer, initialState);

  useEffect(() => {
    const fetchClients = async () => {
      dispatch({ type: actionTypes.FETCH_CLIENTS_REQUEST });

      try {
        const response = await axios.get(url);
        dispatch({
          type: actionTypes.FETCH_CLIENTS_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.FETCH_CLIENTS_FAILURE,
          payload: "Error al obtener usuarios.",
        });
      }
    };

    fetchClients();
  }, []);

  const contextValue = {
    state,
    dispatch,
  };

  return <ClientsContext.Provider value={contextValue}>{children}</ClientsContext.Provider>;
};
