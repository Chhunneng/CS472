import { openai } from "../config/openai"
import type { DescriptionRequest, DescriptionResponse, SentimentRequest, SentimentResponse } from "../models/aiModel"

export async function generateDescription(data: DescriptionRequest): Promise<DescriptionResponse> {
  const { productName, category, features = [] } = data

  // Prepare prompt for AI
  let prompt = `Generate a compelling product description for a ${category} product called "${productName}".`

  if (features.length > 0) {
    prompt += ` Include these key features: ${features.join(", ")}.`
  }

  prompt += ` The description should be engaging, highlight benefits, and be around 2-3 sentences.`

  // Call OpenAI API
  const completion = await openai.chat.completions.create({
    model: "deepseek-chat",
    messages: [
      { role: "system", content: "You are a professional product copywriter." },
      { role: "user", content: prompt },
    ],
    max_tokens: 150,
  })

  const description = completion.choices[0]?.message?.content?.trim() ?? ""

  return { description }
}

export async function analyzeSentiment(data: SentimentRequest): Promise<SentimentResponse> {
  const { review } = data

  // Call OpenAI API
  const completion = await openai.chat.completions.create({
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content:
          'You are a sentiment analysis expert. Analyze the sentiment of the following review and respond with a JSON object containing "sentiment" (positive, neutral, or negative), "score" (a number between -1 and 1), and "analysis" (a brief explanation).',
      },
      { role: "user", content: review },
    ],
  })

  // Parse the response
  const responseText = completion.choices[0]?.message?.content?.trim() ?? ""
  let sentimentData: SentimentResponse

  try {
    // Try to parse JSON from the response
    sentimentData = JSON.parse(responseText)
  } catch (e) {
    // If parsing fails, create a basic response
    sentimentData = {
      sentiment: responseText.includes("positive")
        ? "positive"
        : responseText.includes("negative")
          ? "negative"
          : "neutral",
      score: 0,
      analysis: responseText,
    }
  }

  return sentimentData
}
