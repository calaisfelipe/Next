const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/chat/completions";

export const postToApi = async ( message ) => {

    if(message === ''){
        alert('Please enter a prompt')
        return
    }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      //stream: true,
    }),
  });

  if (!res.ok) {
    console.log("Fetch Error");
  }

  return res.json();
};
