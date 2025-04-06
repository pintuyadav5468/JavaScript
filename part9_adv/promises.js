function fetchData(){
            return new Promise((resolve , reject)  =>  {
                        setTimeout(() => {
                                    let sucess = true;
                                    if(sucess){
                                      resolve("data fetched successfully");

                                    }
                                    else{
                                        rejected("data fetching failed");
                                    }
                        }, 3000);
            });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

   
