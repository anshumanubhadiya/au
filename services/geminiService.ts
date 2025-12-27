import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini API client
// The API key must be provided via the process.env.API_KEY environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to guide the model's behavior
const SYSTEM_INSTRUCTION = `You are the virtual assistant for Apex Construction, a high-end construction and renovation company. 
Your goal is to assist website visitors by answering questions about our services (Residential Construction, Commercial Building, Renovations), 
providing general home improvement tips, and encouraging them to use the "Contact Us" form for quotes.
Be professional, concise, and helpful. Use an earthy, reliable tone. 
If asked about specific pricing, give a range but emphasize that a consultation is needed for an accurate quote.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my knowledge base. Please try again later or contact our office directly.";
  }
};
