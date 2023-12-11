import React, { useEffect, useState } from 'react'
import './Searchbar.css'
import searchicon from '../../Images/searchicon.png'
import Country from '../Country/Country';

function Searchbar() {

    const [query, setQuery] = useState('inr');
    const [result, setResult] = useState([]);

    useEffect(() => {

        if(query==='') {
            fetch('https://restcountries.com/v3.1/currency/inr')
            .then(res => res.json())
            .then(data => setResult(data))
            return;
        }
        
        const timerId = setTimeout(() => {
            fetch(`https://restcountries.com/v3.1/currency/${query}`)
            .then(res => res.json())
            .then((data) => {
                if(data.message==='Not Found') {
                    setResult([])
                } else {
                    setResult(data)
                }
            })
        }, 1000);

        return () => clearInterval(timerId);
        
    }, [query]);

  return (
    <div className='searchbarCont'>

        <h2 className='h2tag'>Search Country by Currency Code or Currency Name</h2>

        <div className='inputCont'>
            <div>
                <img src={searchicon} alt="" />
                <input type="text" placeholder='Search By currency INR, EUR' 
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>

        <div className='resultCont'>
            {
                result.length === 0 ? 
                <h2 style={{textAlign:'center', marginTop:'10px', color:'red'}}>No Country Found</h2> 
                : <div className='resultInnerCont'>
                    {
                        result.map((ele, ind) => (
                            <Country ele={ele} key={'country'+ind}/>
                        ))
                    }
                </div>
            }
        </div>

    </div>
  )
}

export default Searchbar;