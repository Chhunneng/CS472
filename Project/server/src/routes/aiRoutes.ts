import express from "express"
import * as aiController from "../controllers/aiController"

const router = express.Router()

/**
 * @swagger
 * /ai/generate-description:
 *   post:
 *     summary: Generate a product description using AI
 *     description: Uses AI to generate a product description based on provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productName
 *               - category
 *             properties:
 *               productName:
 *                 type: string
 *               category:
 *                 type: string
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Generated description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 */
router.post("/generate-description", aiController.generateDescription)

/**
 * @swagger
 * /ai/analyze-sentiment:
 *   post:
 *     summary: Analyze review sentiment using AI
 *     description: Uses AI to analyze the sentiment of a review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - review
 *             properties:
 *               review:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sentiment analysis
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sentiment:
 *                   type: string
 *                   enum: [positive, neutral, negative]
 *                 score:
 *                   type: number
 *                 analysis:
 *                   type: string
 */
router.post("/analyze-sentiment", aiController.analyzeSentiment)

export default router
