const API_KEY = "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"
const API_URL = "https://api.openai.com/v1/chat/completions"


export const postToApi = async ({message}) => {

    const res = await fetch(API_URL, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`    
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}]

        })
        
    })

    if(!res.ok){
        console.log('Fetch Error')
    }


  return res.json()
}
