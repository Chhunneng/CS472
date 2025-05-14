import OpenAI from "openai"

// OpenAI configuration
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-api-key", // Replace with your actual API key
})
