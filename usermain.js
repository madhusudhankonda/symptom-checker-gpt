import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const openai = new OpenAIApi(configuration);

//Creating read interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
//Reading user input
rl.on('line', (line) => {
    
    line += " What are the top 5 symptoms of "+line
    console.log("Prompt: ", line);

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: line }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
  });
});
