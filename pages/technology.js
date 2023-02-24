import Layout from "../component/layout";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DATA from '../public/data.json';
import Image from "next/image";
import style from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

export async function getStaticProps(){
    const Data = DATA.technology;
    return {
    props: {
      Data,
    },
  };
}


export default function Technology({Data}){
    const [show, setShow]=useState("Launch vehicle")

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
    const [size,setSize]=useState(typeof window !== "undefined" ? window.innerWidth : null)
           
    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setSize(window.innerWidth)
        })
        return ()=> removeEventListener('resize', ()=> {
            setSize(window.innerWidth)
        })
     }, [])
    
    return(
        <Layout> 
            <div className={style.techpg}></div>
            <span className="text-md-start container text-center mt-md-5 d-block"><span className="text-white-50">03</span> SPACE LAUNCH 101</span>
            <div className="d-flex flex-grow-1 align-items-center">
                {/* all contnent */}
                <Col md={11} className="d-md-flex align-items-center flex-row-reverse justify-content-between ms-md-auto">
                    {/* images */}
                    {Data.map(x=>{
                    return(
                        <Col lg={4} md={5} key={x.name} hidden={x.name===show ? false : true}>
                            <Image
                                id={`${x.name}-image`}
                                className="d-block "
                                src={size<768 ? x.images.landscape : x.images.portrait}
                                width={1000}
                                height={1000}
                                style={{width:'100%',height:'auto'}}
                                alt="First slide"
                            />
                        </Col>) 
                    })}
                    {/* articles and buttons */}
                    <div className="d-md-flex col-md">
                        {/* buttons */}
                        <div className="d-flex me-md-5 my-md-0 my-4 flex-md-column justify-content-center" role="tablist" aria-label="crew member list" >
                            {Data.map((x, index)=>{
                                return (
                                    <button
                                    key={x.name} 
                                    onClick={()=>setShow(x.name)}  
                                    aria-selected={x.name===show ? true : false} 
                                    aria-controls={x.name} 
                                    role="tab" 
                                    data-image={`${x.name}-image`} 
                                    tabIndex={x.name===show ? '0' : '-1'} 
                                    className={`my-md-3 mx-md-0 mx-3 btn text-center border border-2 border-white rounded-circle ${style.techbtn} ${x.name===show && 'text-bg-light'}`} 
                                    >
                                        {index+1}
                                    </button>
                                )
                            })}
                        </div>
                        {/* articles */}
                        {Data.map(x=>{ 
                        return( 
                            <Col lg={6} md={7} as='article' key={x.name} className="align-self-center px-md-0 px-3" hidden={x.name===show ? false : true} id={x.name} role="tabpanel" tabIndex={x.name===show ? '0' : '-1'}>
                                <p className="text-md-start text-center">THE TERMINOLOGY ...</p> 
                                <h1 className="text-md-start text-center text-uppercase">{x.name}</h1>
                                <p className="text-md-start text-center">{x.description}</p>
                            </Col>
                        )
                        })}
                    </div>
                </Col>
            </div>         
        </Layout>
    )
} 



