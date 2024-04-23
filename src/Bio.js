import ganesh from './ganesha.png';
import girl from './girl.jpg';
const biodata = require("./biodata.json")
const family = require("./family.json")


function Bio(props) {

    return ( 
        <>
   
        <div style = {{backgroundColor: "#FFFDD0", height: "1600px", width: "1000px", align: "center", marginLeft: "100px", border: "20px solid #9B3922" ,borderRadius:"50px", boxShadow:"5px 10px #888888"}}>

    

        <div>
        <img src = { ganesh } style = {{border: "10px solid transparent",padding: "15px",height: "170px", width: "150px", marginLeft: "400px" }}/>
        </div>

            <div>
            <h1 style = {{ color: "red", textAlign: "center",marginTop:"-10px", fontFamily:"Georgia"}}> || SHREE GANESHAYA NAMAH || </h1> 
            <img src = { girl } style = {{border: "5px solid black",height: "250px", width: "200px",marginLeft: "750px",marginTop:"10px", borderRadius:"50%"}}/>
            <h2 style = {{ color: "#F2613F", textAlign: "center", marginTop:"-200px", fontFamily:"Georgia" }}><u>BIO DATA</u>  </h2> 
            </div>

            {
                biodata.map((bioitem)=>{
                    return(
                        <table class="table" style={{height: "0px"}} >
                            <tbody>
                                <tr>
                                <th scope="row" style={{backgroundColor:"#FFFDD0"}}>
                                    <td>
                                        <div style={{width:"300px", height:"10px"}}>
                                        <h3 style={{marginLeft:"20px", marginTop:"10px", paddingTop:"20px"}}>{bioitem.key} : </h3>
                                        </div>
                                        
                                    </td>
                                    
                                    <td>
                                        <div style={{width:"500px", height:"10px"}}>
                                        <h3 style = {{color: "#8B0000", marginLeft:"20px", marginTop:"10px", paddingTop:"20px"}}>{bioitem.value}</h3>
                                        </div>
                                        
                                    </td>
                                </th>
                                </tr> 
                                          
                            </tbody>
                            <tr >
                            
                            </tr>
                        </table>
                    )
                    
                })
            }
                <br/>
                <br/>

            <h2 style = {{ color: "#F2613F", textAlign: "center", fontFamily:"Georgia" }}> <u> FAMILY DETAILS </u></h2>
            <br/>
            {
                family.map((family)=>{
                    return(
                        <table class="table " style={{height: "0px"}}>
                            <tbody class="">
                                <tr >
                                <th scope="row" style={{backgroundColor:"#FFFDD0"}}>
                                    <td>
                                        <div style={{width:"300px", height:"10px"}}>
                                        <h3 style={{marginLeft:"20px", marginTop:"10px", paddingTop:"20px"}}>{family.key} : </h3>
                                        </div>

                                    </td>                                
                                    <td>
                                        <div style={{width:"500px", height:"10px"}}>
                                        <h3 style = {{color: "#8B0000", marginLeft:"20px", marginTop:"10px", paddingTop:"20px"}}>{family.value}</h3>
                                        </div>
                                        
                                    </td>
                                </th>
                                </tr>               
                            </tbody>
                        </table>
                    )
                    
                })
            }

        </div>
        </>
    )
}

export default Bio;