import React, { useState } from "react";
import './Orders.css';
import { db } from "../../firebase";
import {useStateValue} from '../../services/StateProvider';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{basket, user}, dispatch] = useStateValue();
  
  useEffect(() => {
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot =>{
          setOrders(snapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data();
          })))
      })
    return () => {};
  }, []);
  return <div className="orders"></div>;
}

export default Orders;
