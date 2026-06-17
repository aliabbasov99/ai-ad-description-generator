import 'dotenv/config'
import express from "express"
import cors from "cors"
import { GoogleGenAI } from '@google/genai'

const PORT = process.env.PORT || 2000
const app = express()

app.use(cors())
app.use(express.json())

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function askAi(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });
  return response.text
}

app.post("/generate-ad-text", async (req, res)=>{
    const { businessName, productInfo } = req.body 
    
    try {
            const prompt = `Sən Instagram reklam mətni yazan peşəkar bir copywriter və rəqəmsal marketinq mütəxəssisisən. 
Aşağıdakı biznes üçün yüksək dönüşüm (conversion) gətirəcək Instagram reklamı yaz.

Biznes adı: ${businessName}
Məhsul/Xidmət haqqında məlumat: ${productInfo}

Qaydalar:
- Reklam mətni cəlbedici, enerjili və səlis Azərbaycan dilində olmalıdır.
- Emoji istifadə et (vizual iyerarxiya yaratmaq üçün, amma yorucu olmasın).
- Mətni qısa və asan oxunan saxla (maksimum 100 söz).
- İnsanı dərhal cəlb edən, birbaşa müştərinin probleminə toxunan güclü başlanğıc (hook) yaz.
- Məhsulun quru xüsusiyyətlərini deyil, birbaşa müştəriyə qazandıracağı faydaları və emosional dəyəri vurğula.
- CTA (Call to Action) DİQQƏTİ: "İndi sifariş ver" kimi yavan ifadələrdən qətiyyən istifadə etmə! İzləyicidə aktuallıq (fomo), maraq və ya həyəcan yaradan, fərqli və yaradıcı bir cümlə qur (məsələn: "Sən də bu fərqi hiss etmək üçün dərhal DM-ə yaz!", "Məhdud fürsəti qaçırmadan bio-dakı linkə kliklə!", "Sualların var? Elə indi rəylərdə bizimlə bölüş!").
- HASHTAG DİQQƏTİ: Zəif izlənmə gətirən sıravi Azərbaycan dilli hashtaglərdən uzaq dur. Kəşfə (explore) düşmək üçün nişə uyğun, axtarış həcmi yüksək olan qlobal/beynəlxalq trend hashtaglərə üstünlük ver. Minimum 3, maksimum 6 hashtag olsun (qlobal və 1-2 çox hədəfli yerli hashtag qarışığı).

YALNIZ aşağıdakı JSON formatında cavab ver, başqa heç nə yazma:

VACIB: Cavabında yalnız xalis JSON olsun. \`\`\`json bloku, açıqlama,
və ya başqa heç nə yazma. Birinci simvol { olmalıdır.
{
  "aiDesc": "...Instagram reklam mətni buraya...",
  "cta": "...Yaradıcı və hərəkətə keçirici CTA mətni buraya...",
  "hashtags": "#globalHashtag1 #globalHashtag2 #yerliHashtag"
}`;

    let aiDataRaw = await askAi(prompt) // string halinda data
    aiDataRaw = aiDataRaw
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();       
     // cavabda json evvelinde ``` olmasi parse ederken problem yaradirdi
     // ``` leri sildik 

    const aiData = JSON.parse(aiDataRaw)

    res.json({
        success: true,
        aiData: aiData
    })
    } catch (error) {
        console.error("ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Reklam mətni yaradıla bilmədi."
        });
    }


})



app.listen(PORT, '0.0.0.0', ()=>{ console.log(`API is up at port ${PORT}`) })
