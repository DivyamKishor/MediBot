import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || (import.meta.env?.VITE_GEMINI_API_KEY as string) || "";
const ai = new GoogleGenAI({ apiKey });

export async function analyzeVitals(vitals: { hr: number, spo2: number, temp: number, stress?: string }, patientData?: { age?: number, weight?: number, bloodGroup?: string }) {
  if (!apiKey) {
    return "AI analysis is currently unavailable (missing API key).";
  }

  const prompt = `
    As a medical AI assistant for MediBot, analyze these vitals briefly:
    HR: ${vitals.hr} BPM, SpO2: ${vitals.spo2}%, Temp: ${vitals.temp}°C, Stress: ${vitals.stress || 'Not calculated'}.
    Patient: ${patientData?.weight || 'Unknown'} kg, Blood Group: ${patientData?.bloodGroup || 'Unknown'}.
    
    Please provide a very short and sweet summary (max 2-3 sentences) including:
    1. Status/Concerns.
    2. Quick recommendation.
    
    Add a short disclaimer at the end: *AI-generated, not medical advice.*
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ parts: [{ text: prompt }] }],
    });

    return response.text;
  } catch (error) {
    console.error("Gemini AI error:", error);
    return "Failed to generate AI analysis.";
  }
}
