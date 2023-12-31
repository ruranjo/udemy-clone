import React from 'react'
import { useSidebarContext } from '../context/sidebar_context'
import { useCartContext } from '../context/cart_context';
import {MdMenu, MdShoppingCart} from "react-icons/md";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {openSidebar, isSidebarOpen, closeSidebar} = useSidebarContext();
    const {total_items, cart} = useCartContext();

  return (
    <NavbarWrapper className='bg-white flex'>
        <div className='container w-100'>
            <div className='brand-and-toggler flex flex-between w-100'>
                <Link to="/udemy-clone/" className='navbar-brand text-uppercase ls-1 fw-8'>
                    <span>C</span>ourse - <span>R</span>ubens
                </Link>

                <div className='navbar-btns flex'>
                    <Link to = "/udemy-clone/cart" className='cart-btn'>
                        <MdShoppingCart />
                        <span className='item-count-badge'>{total_items}</span>
                    </Link>
                    <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
                        <MdMenu />
                    </button>
                </div>
            </div>
        </div>
      
 ``       
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.nav`
    height: 80px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

    .navbar-brand{
        font-size:23px;
        font-weight: 700;

        span{
            color: var(--clr-orange)
        }

        .cart-btn{
            margin-right: 18px;
            font-size: 23px;
            position: relative;
            .item-count-badge{
              background-color: var(--clr-orange);
              position: absolute;
              right: -10px;
              top: -10px;
              font-size: 12px;
              font-weight: 700;
              display: block;
              width: 23px;
              height: 23px;
              color: var(--clr-white);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
        }

        .sidebar-open-btn{
            transition: all 300ms ease-in-out;
            &:hover{
              opacity: 0.7;
            }
        }


    }

`