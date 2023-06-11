import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "YOUR_API_KEY",
});

// create an instance of OpenAIApi class
const openai = new OpenAIApi(configuration);

// Hardcode prompt
const symptoms =  "Top 5 Flu Symptoms as a table"

// Invoke the API endpoint
openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: symptoms }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
});