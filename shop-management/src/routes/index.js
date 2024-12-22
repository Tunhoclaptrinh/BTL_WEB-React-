
import Home from '../pages/Home';

import Product from '../pages/Product';
import Category from '../pages/Category';
import ProductRelated from '../pages/ProductRelated/ProductRelated';
import Cart from '../pages/Cart/Cart';
import Payment from '../pages/Payment';
import Delivery from '../pages/Delivery';


import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage'

import NotFoundPage from "../pages/NotFoundPage";
import AdminLayout from '../pages/Admin/AdminLayout';


export const routes = [
   {
    path: "/",
    page: Home,
    isShowHeader: true
   },
//    {
//     path: "/order",
//     page: OrderPage,
//     isShowHeader: true
//    }, 
   {
    path: "/products",
    page: Product,
    isShowHeader: true,
    isShowFooter: true
   },
   {
    path: "/category",
    page: Category,
    isShowHeader: true,
    isShowFooter: true
   },
   {
    path: "/related-products",
    page: ProductRelated,
    isShowHeader: true,
    isShowFooter: true
   },
   {
    path: "/cart",
    page: Cart,
    isShowHeader: true,
    isShowFooter: true
   },
   {
    path: "/payment",
    page: Payment,
    isShowHeader: true,
    isShowFooter: true
   },
   {
    path: "/delivery",
    page: Delivery,
    isShowHeader: true,
    isShowFooter: true
   },
   {
    path: "/Home",
    page: Home,
    isShowHeader: true,
    isShowFooter: true
   },
   {
   path: "/sign-in",
   page: SignInPage,
   isShowHeader: false,
   isShowFooter: false,
   },
   {
   path: "/sign-up",
   page: SignUpPage,
   isShowHeader: false,
   isShowFooter: false,
   },



//Admin
   {
      path: "/admin",
      page: AdminLayout,
      isShowHeader: true,
      isShowFooter: true
     },




//    Phần không phải của trang
   {
    path: "*",
    page: NotFoundPage
   }
]