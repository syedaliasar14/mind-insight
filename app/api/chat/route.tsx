import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'
 
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})
 
export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      //stream: true,
      messages,
      temperature: 0.7,
      max_tokens: 300,
      top_p: 0.9,
      frequency_penalty: 0,
      presence_penalty: 0
    })
  
    //const stream = OpenAIStream(response)
    //return new StreamingTextResponse(stream)
    return new NextResponse(JSON.stringify(response), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'An error occurred during the request to OpenAI' }), { status: 500 });
  }
}
