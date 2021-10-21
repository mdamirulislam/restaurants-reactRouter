import React from 'react';
import { useHistory } from 'react-router';
import './Contract.css'
const Contrat = () => {
    const history = useHistory();
    const handleHistory = () =>{
        history.push('/home')
    }
    return (
        <div>
            <form action="submit">
                <input className='contract-input' type="text" placeholder='Your Name ' /> <br />
                <input className='contract-input' type="text" placeholder='Whtat aer you say ' /><br />
                <input className='contract-submit' type="submit" value="submit" onClick={handleHistory} />
            </form>
        </div>
    );
};

export default Contrat;