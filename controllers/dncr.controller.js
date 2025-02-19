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
        var defaultres = "BLOCKED";
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


export const DNCRcheckStatus = async (req,res) => {
    try {


if(req.rawHeaders.includes("X-Api-Key")&&req.rawHeaders.includes("a1c976b0966546239d43ac9b0e7cf521")){
            const {accountNumber} = req.body
    
           


//
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'SSESS02eed5dcf795cbe64ed62cfcb343cdd1=lIRUAqR9PtKC2RsxMx6UozxOmdgFWoIFApkIl9nx00egnFT7; TS01b9bb5e=012b7f183c1a3e41255bf5528bcb9e304edbebad662cd7063076897fee3c4d040ce822a9c0b7cb18c5ebb8cc1f7f1d77ce6ad02f44; BIGipServerb2cprod_443_pool=365179658.26395.0000; JSESSIONID=SFkXh1hLAiEQcIUPnWEYB48Hj7_hVGEhD5-zSI8pEPqwpiG966hj!-424276757; TS0144ff4c=012b7f183ca0316cd74c1a868d9eaba4a864ed52da5aba12a43f368600de9d14461fbb533b8bd9a1429d97c2678f1f9bc6aaa157c7814b708d379fcbfdc9e7a8e5b1f8240ac39c27c6fb99863fee8d7734dffa2f63497cef0539fc76b0f854f3ad3b4cd79a; userPrefLanguage=en_AE; API-cookie=!6vBeesVpIp6IBmmMPhWdf9p5McwR08FiFgLNeYnfjRP+J8hB9DoeMUqfxG4ccsPCPuuoY2PIQWqLsg==; TS01a4ba60=012b7f183cee18850fefc4627a03c93c5ac2f9615b386a89d2d0acf4b9f3306a8a050fcb4751ac6d499cf2c9a060b74d71bc04bae7; TS01bd30ab=012b7f183c1a3e41255bf5528bcb9e304edbebad662cd7063076897fee3c4d040ce822a9c0b7cb18c5ebb8cc1f7f1d77ce6ad02f44; portal_web=1739886207.548.30.170668|10e1668323d4bc2b95c368d3811756fd'
    },
    body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'scope': 'apioauth',
        'client_id': '25992a41c69ecaee983e87d672770b0e',
        'client_secret': '297ee09329c11cbb8facc765eca504a7'
    })
};

const response = await fetch("https://apihub.etisalat.ae:9443/etisalat/serviceapis/confidential/oauth2/token", options);
const tokenRes = await response.json();

const accessToken = tokenRes.access_token;


const json = JSON.stringify({ accountNumber: accountNumber, count: 1 });
const dictionary = JSON.parse(json);

const options1 = {
    method: 'POST',
    headers: {
        'clientID': '25992a41c69ecaee983e87d672770b0e',
        'Authorization': 'Bearer ' + accessToken,
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(dictionary)
};

const response1 = await fetch("https://apihub.etisalat.ae:9443/etisalat/serviceapis/dncr/v0/check", options1);
const DNCRresultBody = await response1.json();

const detailsArray = DNCRresultBody.details || [];
let status = "Not Found";

if (detailsArray.length !== 0) {
    for (const detail of detailsArray) {
        const detailjson = detail;
        status = detailjson.dncrStatus || status;
        
    }
}

if (status === "") {
    status = "Not Found";
} 
//


       

        var defaultres = "Not Found"
        var accounts = data.accounts;
        accounts.forEach(element => {
            if(element.accountNumber==accountNumber){
                defaultres = element.dncrStatus
                 
            }
         });
         return res.status(200).json({ status: status });
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
        {"accountNumber":"9325397754","dncrStatus":"BLOCKED"},
    ]
}
