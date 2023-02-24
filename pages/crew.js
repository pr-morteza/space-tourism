import Layout from "../component/layout";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DATA from '../public/data.json';
import Image from "next/image";
import style from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";


export async function getStaticProps(){
    const Data = DATA.crew;
    return {
    props: {
      Data,
    },
  };
}
export default function Crew({Data}){
    const [show, setShow]=useState('Douglas Hurley')
    useEffect(()=>{     
        let i=0
        const change = setInterval(() => {
            i++
            if(i==Data.length) i=0
            let elem = Data[i].name
            setShow(elem)
            }, 5000);
        return ()=> clearInterval(change)
    },[Data])

    return(
        <Layout>
            <div className={style.crewpg}></div>
            <span className="ms-lg-auto container text-lg-start text-center mt-md-5 d-block"><span className="text-white-50">02</span> MEET YOUR CREW</span>
            <div className="d-flex flex-grow-1 align-items-lg-end align-items-center">
                {/* all contnent */}
                <div className="d-lg-flex flex-row-reverse justify-content-between container">
                    {/* images */}
                    {Data.map(x=>{
                    return (
                        <Col lg={6} className={`${style.images}`} key={x.name} hidden={x.name===show ? false : true}>    
                            <Image
                                id={`${x.name}-image`}
                                className="d-block"
                                src={x.images.png}
                                fill
                                style={{objectFit:'contain'}}
                                alt="crew"
                            />
                        </Col>
                    )
                    })}
                    {/* articles and buttons */}
                    <div className="d-lg-flex flex-column-reverse justify-content-around">
                        {/* buttons */}
                        <Col sm={3} xs={4} className="d-flex my-lg-0 my-4 mx-lg-0 mx-auto" role="tablist" aria-label="crew member list" >
                            {Data.map((x)=>{
                            return (
                                <button
                                    key={x.name} 
                                    onClick={()=>setShow(x.name)}  
                                    aria-selected={x.name===show ? true : false} 
                                    aria-controls={x.name} role="tab" 
                                    data-image={`${x.name}-image`} 
                                    tabIndex={x.name===show ? '0' : '-1'} 
                                    className={`border-0 mx-auto ${style.crewButton} rounded-circle ${x.name===show ? 'bg-light' : 'bg-secondary'}`} 
                                > 
                                </button>
                            )
                            })}
                        </Col>
                        {/* articles */}
                        {Data.map(x=>{ 
                        return( 
                            <Col as='article' lg={8} key={x.name} hidden={x.name===show ? false : true} id={x.name} role="tabpanel" tabIndex={x.name===show ? '0' : '-1'}> 
                                <h3 className="text-lg-start text-center text-uppercase text-white-50">{x.role}</h3> 
                                <h1 className="text-lg-start text-center text-uppercase">{x.name}</h1>
                                <p className="text-lg-start text-center">{x.bio}</p>
                            </Col> 
                        )
                        })}
                    </div>
                </div>    
            </div>
        </Layout>
    )
}
   
 