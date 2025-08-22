import './container.css'
import Inputs from './Inputs.jsx'
import { useState , useEffect} from 'react'
import Table from './Table.jsx'
export default function Container(){
    const [data , setdata] = useState([])
    const [total  , settotal] = useState(0)
    const [myid  , setid] = useState(null)
    const [mood , setmood] = useState(false)
    const [myobjdata , setobjdata] = useState({id:"" , title:"" , price:"" , ads:"" , taxes:""  , discount:""
    , count:"" ,  category:""})

         function handleboolandid(item){
            setid(item.id)
             setmood(true)
              setobjdata({id:item.id , title:item.title , price:item.price , ads:item.ads , taxes:item.taxes , discount:item.discount
    , count:item.count ,  category:item.category})
         }
        

    function Clickme(){
    if(mood){
    
 let newdata = data.map(mydata=> mydata.id == myid ?  { ...myobjdata, Total: total } : mydata)
            setdata(newdata)
            setid(null)
            setmood(false)
            setobjdata({id:"" , title:"" , price:"" , ads:"" , taxes:""  , discount:""
    , count:"" ,  category:""})
      localStorage.setItem("mydata" , JSON.stringify(newdata))
    }else{
                                       
 let myobject = {
        id:data.length +1,
        title:myobjdata.title ,
        price:myobjdata.price,
        ads:myobjdata.ads,
        taxes:myobjdata.taxes,
        discount:myobjdata.discount,
        count:myobjdata.count ,
        category:myobjdata.category,
        Total:total
    }
          setobjdata({id:"" , title:"" , price:"" , ads:"" , taxes:"" , discount:"" , Total:"" , count:"" , category:""})
        let mydata = [...data , myobject]
        setdata(mydata)
        localStorage.setItem("mydata" , JSON.stringify(mydata))
        settotal(0)

    }

        }




useEffect(()=>{
       let sum = (+myobjdata.price + +myobjdata.taxes + +myobjdata.ads) - +myobjdata.discount 
       settotal(sum)
},[myobjdata.price , myobjdata.taxes , myobjdata.ads , myobjdata.discount])


useEffect(()=>{
   let newdata = JSON.parse(localStorage.getItem("mydata")) || []
    setdata(newdata)

},[])


    function delet(id){
        setdata(data.filter(mydata=> mydata.id !== id))
    }

    function deletall(){
        localStorage.clear("mydata")
         let newdata = JSON.parse(localStorage.getItem("mydata")) || []
    setdata(newdata)
        
    }



    function handletitle(event){
        setobjdata({...myobjdata , title:event.target.value})
       
    }
     function handleprice(event){
        setobjdata({...myobjdata , price:event.target.value})
    }
     function handletaxes(event){
        setobjdata({...myobjdata , taxes:event.target.value})
    }
     function handleads(event){
        setobjdata({...myobjdata , ads:event.target.value})
    }
     function handlediscount(event){
        setobjdata({...myobjdata , discount:event.target.value})
    }
    function handlecount(event){
        setobjdata({...myobjdata , count:event.target.value})
    }
    function handlecategory(event){
        setobjdata({...myobjdata , category:event.target.value})
    }

    return(
        <>
        <div className='Container'>
        <Inputs mood={mood} data={data} deletall={deletall}  handlecategory={handlecategory} myobjdata={myobjdata} onClick={Clickme} handletitle={handletitle}  handleprice={handleprice} handletaxes={handletaxes}
         handleads={handleads} handlediscount={handlediscount} handlecount={handlecount}  total={total}/>
         <Table handleboolandid={handleboolandid}  data={data} delet={delet} />
        </div>
        </>
    )
}