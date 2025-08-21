import './inputs.css'


export default function Inputs({ deletall , handlecategory,  myobjdata , handletitle ,handleprice ,
     handletaxes , handleads , handlediscount, handlecount , onClick , total}){
    return(
        <div className='myinpo'>
            <input value={myobjdata.title} type="text"  id='title' placeholder='Title' onChange={handletitle}/>
            <div className='inpogrp'>
                <input value={myobjdata.price} type="number" placeholder='Price' onChange={handleprice}/>
                 <input value={myobjdata.taxes} type="number" placeholder='Taxes' onChange={handletaxes}/>
                  <input value={myobjdata.ads} type="number"  placeholder='ads' onChange={handleads}/>
                   <input value={myobjdata.discount} type="number" placeholder='Discount' onChange={handlediscount}/>
                    <p>Total:<span>{total}</span></p>
            </div>
            <input value={myobjdata.count} type="number" id='count'placeholder='Count' onChange={handlecount}/>
             <input value={myobjdata.category} type="text" id='count'placeholder='Category' onChange={handlecategory}/>
            <button onClick={onClick} className='add'>add</button>
            <button onClick={deletall} className='add'>delete All</button>
        </div>
    )


}