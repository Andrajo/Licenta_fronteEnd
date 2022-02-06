import React, { Component, useState, useEffect } from 'react';
import topsection from './TopSection.module.css';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function TopSection(props) {
    const {basket, countBasketProducts} = props;
    const [isOpen, setIsOpen] = useState(false);

    function openNav() {
        document.getElementById("tabletSidebar").style.width = "350px";
        document.getElementById("tabletSidebar").style.display = "block";
        setIsOpen(true);
    }

    function closeNav() {
        document.getElementById("tabletSidebar").style.width = "0";
        document.getElementById("tabletSidebar").style.display = "none";
        setIsOpen(false);
    }

    return (
        <div className={styles.header}>
            {/*Navigation bar*/}
            <div className={topsection.navbar}>
                <ul className={topsection.nav}>

                    <li className={topsection.elem} id={topsection.elementMenuButton}>
                        <div id={topsection.main}>
                            <button className={topsection.openbtn} onClick={isOpen ? closeNav : openNav}>☰ Menu</button>
                        </div>
                    </li>

                    <li className={topsection.elem} id={topsection.elementLogo}>
                        <Link href="/">
                            <a> Store </a>
                        </Link>
                    </li>

                    <li className={topsection.elem} id={topsection.labelGelato}>
                        <Link href="/games">
                            <a>Games</a>
                        </Link>
                    </li>

                    <li className={topsection.elem} id={topsection.labelGelatoS}>
                        <Link href="/merch">
                            <a>Merch</a>
                        </Link>
                    </li>

                    <li className={topsection.elem} id={topsection.labelDonuts}>
                        <Link href="/user">
                            <a>User</a>
                        </Link>
                    </li>

                    <li className={topsection.elem} id={topsection.labelDonutsS}>
                        <Link href="/settings">
                            <a>Settings</a>
                        </Link>
                    </li>

                    <div className={topsection.navbarright}>
                        <Link href="/accountLogin">
                            <li className={topsection.btnAccount}>
                                <div className={topsection.accountLabel}>Account</div>
                            </li>
                        </Link>

                        <Link href="/basket">
                            <li className={topsection.btnBasket}>
                                <div className={topsection.basketLabel}>
                                    Basket
                                    <i id = "basketBadge" data-count = {0}  className={topsection.badge}/>
                                </div>
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>


            {/*Sidebar for tablet and mobile versions */}

            <div id="tabletSidebar" className={topsection.sidebar}>

                <button className={topsection.closebtn} onClick={closeNav}>&#x2715;</button>

                <center>
                    <div className={topsection.sidebarElement}>Menu</div>
                </center>

                <div>
                    <hr className={topsection.breakLineTitle}></hr>
                </div>

                <Link href="/"><a className={topsection.sidebarListElement}>Home</a></Link>
                <Link href="/games"><a className={topsection.sidebarListElement}>Games</a></Link>
                <Link href="/games"><a className={topsection.sidebarListElement}>Games for you</a></Link>
                <Link href="/merch"><a className={topsection.sidebarListElement}>Merch</a></Link>
                <Link href="/merch"><a className={topsection.sidebarListElement}>Merch for you</a></Link>

                <div className={topsection.bottomSidebar}> {/*contains Account and Basket buttons*/}

                    <div>
                        <hr className={topsection.breakLine}/>
                    </div>

                    <Link href="/accountLogin"><a className={topsection.btnMenuAccount}>
                        <div className={topsection.labelMenu}>Account</div>
                    </a></Link>

                    <div>
                        <hr className={topsection.breakLine}/>
                    </div>

                    <Link href="/basket">
                        <a className={topsection.btnMenuBasket}>
                            <div className={topsection.labelMenu}>Basket</div>
                        </a>
                    </Link>
                </div>
            </div>

        </div>);
}
