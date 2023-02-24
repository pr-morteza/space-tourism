import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Head from "next/head";
import style from "./layout.module.css"
import Image from "next/image";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { useRouter } from "next/router";


function Layout({children}){
    const router = useRouter().pathname
    return(
        <>
        <Head>
            <title>Space Tourism</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/assets/favicon-32x32.png" />
        </Head>
        <div className={`d-flex flex-column ${style.contain}`}>
            <div style={{height:'4rem'}}>
                <Navbar variant="dark" expand="sm" fixed="top" className={`${style.Navbar}`}>
                    <Container>
                        <Navbar.Brand>
                            <Link href="/">
                                <Image 
                                    src={'/assets/shared/logo.svg'}
                                    width={30}
                                    height={30}
                                    alt='pic'
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className={`nav-link text-white ${router==='/'&&'border-bottom'}`} href="/">00 HOME</Link>
                                <Link className={`nav-link text-white ${router==="/destination"&&'border-bottom'}`} href="/destination">01 DESTINATION</Link>
                                <Link className={`nav-link text-white ${router==="/crew"&&'border-bottom'}`} href="/crew">02 CREW</Link>
                                <Link className={`nav-link text-white ${router==="/technology"&&'border-bottom'}`} href="/technology">03 TECHNOLOGY</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
            {children}
        </div>
    </>
    )
}
export default Layout;