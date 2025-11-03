
import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: `You are "Study Buddy," a friendly and helpful AI assistant for students of NIOS (National Institute of Open Schooling). 
    Your goal is to provide clear, concise, and encouraging answers to their questions about subjects, concepts, TMAs (Tutor Marked Assignments), and practical files. 
    Keep your tone supportive and easy to understand. Do not answer questions outside of the educational context.`,
  },
});


export const sendMessageToBot = async (history: Message[], newMessage: string): Promise<string> => {
    try {
        const chat: Chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            history: history.map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            })),
            config: {
                systemInstruction: `You are "Study Buddy," a friendly and helpful AI assistant for students of NIOS (National Institute of Open Schooling). Your goal is to provide clear, concise, and encouraging answers to their questions about subjects, concepts, TMAs (Tutor Marked Assignments), and practical files. Keep your tone supportive and easy to understand. Do not answer questions outside of the educational context.`,
            },
        });
        
        const response = await chat.sendMessage({ message: newMessage });
        return response.text;
    } catch (error) {
        console.error("Gemini API error:", error);
        return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
};
