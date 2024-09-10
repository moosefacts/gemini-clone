

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const APIKey = "AIzaSyAOu_ZoKF9TnyYJz-vK5AIrM8OaCRcQpPg";
  const genAI = new GoogleGenerativeAI(APIKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chat = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  

  export default runChat;