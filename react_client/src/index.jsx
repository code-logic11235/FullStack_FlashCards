import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/forms/Forms.jsx';

function App(props){
  const [deckisOpen, setDeckIsOpen] = useState(false);
  const [cards, updateCards] = useState('');

  // function getCards() {
  //   const [cards, updateCards] = useState('');
  //   useEffect(()=>{
  //     $.ajax({
  //       type: 'GET',
  //       url: '/api/cards',
  //       success: (results)=>{
  //         if (results.length === 0) {
            
  //         } else {
  //           updateCards(results)
  //         }
  //       },
  //       error: (err)=>{
  //         console.log('Error inside GET request, ', err);
  //       }
  //     })
  //   })
  //   return cards;
  // } 
  return (
    <>
    <div id='navbar'>
      <span>FlashCards </span>

      <a className='nav btn signup' href = '#'>Register</a>
      <a className='nav btn signin' href='#'>Sign Up</a>

      
    </div>

    <Forms/>
    </>

    // <div className = 'app'> 
    //    {/* {console.log(getCards)} */}
    //    <div className="nav">
    //      <span className="logo">FlashCards</span>
    //    </div>
    //    <div className="main">
    //      {/* <div className='buttondiv1'>
    //        <img className='writingicon' src="https://image.flaticon.com/icons/png/512/2983/2983705.png" font-size = '2em' alt="writing hand" />
    //        <button className = 'newdeckbtn' >  Create New Deck</button>
    //      </div>


    //      <div className='buttondiv2'>
    //        <img className='writingicon' src="https://image.flaticon.com/icons/png/512/4509/4509552.png" font-size = '2em' alt="flashcards" />
    //        <button className = 'viewcardsbtn' > View Decks</button>
    //      </div> */}
    //     <Forms/>
         
    //    </div>
    //   </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'));