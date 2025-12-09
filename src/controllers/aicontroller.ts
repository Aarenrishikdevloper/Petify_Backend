import { Response, Request } from "express";
import OpenAI from "openai";

export const aiController = async (
 req: Request<{}, any, { prompt: string }>,
 res: Response,
) => {
 try {
  const { prompt } = req.body;
  const openai = new OpenAI({
   baseURL: "https://openrouter.ai/api/v1",
   apiKey: process.env.AI_API_KEY,
   defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
   },
  });
  const completion = await openai.chat.completions.create({
   model: "arcee-ai/trinity-mini:free",
   messages: [
    {
     role: "user",
     content: prompt,
    },
   ],
  });

  return res.status(200).json({ text: completion.choices[0].message });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ text: "Somethong Went Wrong" });
 }
};
