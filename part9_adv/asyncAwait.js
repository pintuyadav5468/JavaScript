function fetchUseData(){
            return new Promise((resolve, reject) => 
            {
                        setTimeout(() => {
                                    resolve({name: "chaicode", url:"https/wikipedia.com"})
                        }, 3000);
            })
}

async function getUserData() {
            try{
                        console.log("fetching user data...");
                       const userData = await fetchUseData();
                       console.log("user data fetched sucesssfully");
                       


                       console.log("user data:", userData);
                        
            }
            catch(error){
              console.log("error fetching data");
              

            }
            
}

getUserData();
