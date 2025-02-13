let userData = [
    {
        id:0,
        name:"Sourav",
        address:"Himachal Pradesh",
    },
    {
        id:1,
        name:"Vishvas",
        address:"HARYANA",
    },
    {
        id:2,
        name:"Sushant",
        address:"Himachal Pradesh",
    },
    {
        id:3,
        name:"Taran",
        address:"Pehowa",
    },
    {
        id:4,
        name:"Toran",
        address:"Rohtak",
    },
]
app.get("/allusers",(req,res)=>{
    res.send(usersData);
})

app.get("/getuserbyId", (req,res)=>{
    const {id} =req.query;
    for( let i =0;i<usersData.length;i++){
        if(usersData[i].id==id){
            return res.send(usersData[i])
        }
    }
    res.send("User not found")
})
app.get("/adduser",(req,res)=>{
    const {id,name,address}=req.query;
    console.log(id,name,address);
    let newUser ={
        id:id,
        name:name,
        address:address  
    } 
    userData.push(newUser);
    res.send("user added successfully");
})