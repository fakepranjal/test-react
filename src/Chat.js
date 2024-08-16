import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';

export default function Chatbot() {
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  
  async function generateAnswer(){
    setAnswer("loading..");
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCMVDKwfRD9Y40tC_Qv6tCm-Qo2OAPIG7M",
      method:"post",
      data: {
        "contents":[
          {"parts":[{"text":question}]},
        ],
      },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <div className='chatpage'>
      <h1 className='chatbot-text'>ChatBot</h1>

      <textarea value={question} 
      onChange={(e)=>setQuestion(e.target.value)} 
      className='text-area' 
      rows={2} cols={80}>
      </textarea>
      <div className='resp-box'><pre>{Answer}</pre></div>

      <button className='ask-btn' onClick={generateAnswer}>Ask Question</button>
    </div>
  );
}
