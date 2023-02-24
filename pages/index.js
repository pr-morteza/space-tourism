
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Link from 'next/link';
import Layout from '../component/layout';
import { useEffect, useState } from 'react';
import { Alert, Button, Col } from 'react-bootstrap';



export default function Home() {


  return (
    <Layout>
      <div className="d-flex flex-grow-1 align-items-lg-center container">
        <div className={styles.indexpg}></div>
        <div className='d-flex flex-lg-row flex-column justify-content-around'>
          <Col lg={4} className='text-lg-start text-center'>
            <span className={`w-100 ${styles.para1} `}>SO, YOU WANT TO TRAVEL TO </span>
            <h1 className={`my-lg-0 my-4 text-lg-start text-center ${styles.font}`}>SPACE</h1>
            <p className='text-lg-start text-center'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </Col>
          <Link href="/destination" className='text-decoration-none align-self-center'><Button variant='light' className={`mt-lg-0 mt-5 rounded-circle d-flex align-items-center justify-content-center ${styles.circle} m-lg-0 mx-auto`}><h2 className='text-dark m-0'>EXPLORE</h2></Button></Link>
        </div>
      </div>
    </Layout>
  )
}
