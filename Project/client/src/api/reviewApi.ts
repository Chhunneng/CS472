import { get, post, put, del } from "./client"
import type { Review, SentimentAnalysis } from "../types"

export async function getReviews(productId: string): Promise<Review[]> {
  return get<Review[]>(`/products/${productId}/reviews`)
}

export async function addReview(
  productId: string,
  review: { author: string; rating: number; comment: string },
): Promise<Review> {
  return post<Review>(`/products/${productId}/reviews`, review)
}

export async function updateReview(
  productId: string,
  reviewId: string,
  review: { author: string; rating: number; comment: string },
): Promise<Review> {
  return put<Review>(`/products/${productId}/reviews/${reviewId}`, review)
}

export async function deleteReview(productId: string, reviewId: string): Promise<void> {
  return del(`/products/${productId}/reviews/${reviewId}`)
}

export async function analyzeSentiment(reviewText: string): Promise<SentimentAnalysis> {
  // const data = post<SentimentAnalysis>("/ai/analyze-sentiment", { review: reviewText });
  // console.log("======res from sentiment", data)
  return Promise.resolve({
    sentiment: "positive",
    score: 1,
    analysis: "good"
  })
  // return data;
}
