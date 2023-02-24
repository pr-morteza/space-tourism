
import Layout from "../component/layout";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DATA from '../public/data.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import { Col, SSRProvider, Table } from "react-bootstrap";
import style from '../styles/Home.module.css'
import { useState } from "react";

export async function getStaticProps(){
    const Data = DATA.destinations;
    return {
    props: {
      Data,
    },
  };
}

export default function Destination({Data}) {
    
    return (
    <SSRProvider>
    <Layout>
        <div className={style.despg}></div>
        <span className="ms-md-auto container text-md-start text-center mt-md-5 d-block"><span className="text-white-50">01</span> PIC YOUR DESTINATION</span>
        <div className="d-flex flex-grow-1 align-items-center">
            <div className="container mt-2">
                <Tabs
                defaultActiveKey="Moon"
                id="uncontrolled-tab-example"
                className={`mb-3 border-0 col-md-5 mx-lg-0 mx-auto ms-lg-auto py-md-0 py-2`}
                fill
                variant="pills"
                >
                    { Data.map(x=>{
                        return (
                        <Tab 
                            tabClassName={`border-0 btn text-uppercase`}
                            key={x.name} 
                            eventKey={x.name} 
                            title={x.name}
                        >
                            <div className='d-lg-flex justify-content-around'>
                                {/* images */}
                                <Col lg={4} md={7} xs={8} className='my-lg-0 my-4 mx-lg-0 mx-auto '>
                                    <Image 
                                        className="d-block "
                                        src={x.images.png}
                                        width={1000}
                                        height={1000}
                                        style={{width:'100%',height:'auto'}}
                                        alt='des'  
                                    />
                                </Col>
                                {/* article */}
                                <Col lg={4} >
                                    <h1 className="text-lg-start text-center display-1 text-uppercase">{x.name}</h1>
                                    <p className="text-lg-start text-center">{x.description}</p><br></br>
                                    <Table borderless className="text-uppercase border-top border-secondary">
                                        <thead>
                                            <tr className="small">
                                                <td>AVG.DISTANCE</td>
                                                <td>EST.TIME TRAVEL</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><h3>{x.distance}</h3></td>
                                                <td><h3>{x.travel}</h3></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </div>
                        </Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    </Layout>
    </SSRProvider>
  );
}




