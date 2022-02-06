import React from 'react';
import {
    Typography,
    Breadcrumbs
} from '@material-ui/core';
import Link from "next/link"
import {useRouter} from "next/router";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from "./Breadcrumb.module.css";

const CustomBreadcrumbs = (props) => {
    const { pathname } = useRouter();
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {pathnames.length > 0 ? (
                    <Link href="/">
                        <a className={styles.linkButton}>Home</a>
                    </Link>
                ) :
                (<Typography className={styles.homeButton}> Home </Typography>)}

            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Typography key={index}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Typography>
                ) : (
                    <Link href={name}><a style={{color:"black"}}>{name.charAt(0).toUpperCase() + name.slice(1)}</a></Link>
                );
            })}
        </Breadcrumbs>
    );
}
export default CustomBreadcrumbs;