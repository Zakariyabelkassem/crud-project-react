import './table.css'

export default function Table({ handleboolandid , data , delet}){

        let mytable = data.map((tb)=>{
            if(tb.title != "" && tb.price != ""){
                 return(
            <>
            <tr>
                <th>{tb.id}</th>
                    <th>{tb.title}</th>
                    <th>{tb.price}</th>
                    <th>{tb.taxes}</th>
                    <th>{tb.ads}</th>
                    <th>{tb.discount}</th>
                    <th>{tb.Total}</th>
                    <th>{tb.category}</th>
                    <th><button onClick={()=> delet(tb.id)} className="delete">delete</button></th>
                    <th><button onClick={()=> handleboolandid(tb)} className="update">update</button></th>
            </tr>
            </>
        )
            }else{
                return
            }
       
    }) 

    return(
       <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>taxes</th>
                    <th>ads</th>
                    <th>discount</th>
                    <th>total</th>
                    <th>category</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
                <tbody id="tbody">

               {mytable}


                </tbody>
            </table>
    )
}