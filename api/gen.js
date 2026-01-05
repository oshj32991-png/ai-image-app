import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const body = JSON.parse(req.body);

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: body.prompt,
      size: "1024x1024"
    });

    res.status(200).json({
      url: result.data[0].url
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
