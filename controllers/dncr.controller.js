export const getAccounts = (req,res) => {
    try {
         if(req.rawHeaders.includes("X-Api-Key")&&req.rawHeaders.includes("a1c976b0966546239d43ac9b0e7cf521")){
        return res.status(200).json(data);
      }else{
        return res.status(401).json({error: "Unauthorized"});
      }
        
         
    } catch (error) {
        console.log(error)
        return  res.status(500).json({ error: "Internal Server Error" });
         
    }
   
}

export const checkStatus =  (req,res) => {
    try {
        if(req.rawHeaders.includes("X-Api-Key")&&req.rawHeaders.includes("a1c976b0966546239d43ac9b0e7cf521")){
        const {accountNumber} = req.body
        var defaultres = "Not Found"
        var accounts = data.accounts;
        accounts.forEach(element => {
            if(element.accountNumber==accountNumber){
                defaultres = element.dncrStatus
                 
            }
         });
         return res.status(200).json({ status: defaultres });
        }else{
            return res.status(401).json({error: "Unauthorized"});
        }
    } catch (error) {
        var errorString = error.toString()
        return  res.status(500).json({ error: errorString });
        
    }
    
}

var data = {
    "accounts":[
        {"accountNumber":"8208443448","dncrStatus":"UNBLOCKED"},
        {"accountNumber":"9765340654","dncrStatus":"BLOCKED"},
    ]
}