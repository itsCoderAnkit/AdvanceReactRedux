import { Fragment, useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';
import { fetchCartData } from './store/cart-actions';
let isInitial = true


function App() {
const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state => state.cart))
  const notification = useSelector(state => state.ui.notification)


  useEffect(()=>{
    dispatch(fetchCartData)

  },[dispatch])


  useEffect(()=>{
    // const sendCartData = async ()=>{

      // dispatch(uiActions.showNotification({
      //   status:'pending',
      //   title:'sending...',
      //   message:'sending cart data'
      // }))
      // const response =await fetch('url',{
      //   method:'PUT',
      //   body:JSON.stringify(cart)
   
      // })

      // if(!response.ok){
      //   throw new Error('Sending cart data failed')
       
      // }
      //const responseData = await response.json()

      // dispatch(uiActions.showNotification({
      //   status:'success',
      //   title:'success',
      //   message:'sent cart data successfully'
      // }))
    //}

    if(isInitial){
      isInitial=false
      return
    }
if(cart.changed){
  dispatch(sendCartData(cart))
}

    
    
  //  sendCartData().catch(error =>{
  //   // dispatch(uiActions.showNotification({
  //   //   status:'error',
  //   //   title:'error',
  //   //   message:'sending cart data failed'
  //   // }))
  //  })
  },[cart,dispatch])
  
  return (
    <Fragment>
     {notification && <Notification 
     status={notification.status}
     title={notification.title}
     message={notification.message}
     />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
