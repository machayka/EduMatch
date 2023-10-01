import * as functions from "firebase-functions";
import OpenAI from "openai";
import { FormSubmitValues } from "./formSubmit.models";

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

async function callGPT(message: string) {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);

  return chatCompletion;
}

export const onFormSubmit = functions.https.onCall(
  async ({
    additional,
    campus,
    financing,
    financingOther,
    practics,
    region,
    universityType,
    language,
  }: FormSubmitValues) => {
    try {
      functions.logger.debug(
        additional,
        campus,
        financing,
        financingOther,
        practics,
        region,
        universityType
      );
      const financingOptions = financing.map((option) => option).join(", ");
      const regionOptions = region.map((option) => option).join(", ");
      const universityTypeOptions = universityType
        .map((option) => option)
        .join(", ");

      const responseLanguage =
        language === "pl" ?
          "Odpowiedz w języku polskim" :
          language === "en" ?
            "Respond in English" :
            "Unsupported language";

      const message = `
        Na podstawie poniższych informacji, proszę zasugeruj mi uczelnie, które najlepiej spełniają moje preferencje:
        - Dodatkowe informacje: ${additional}
        - jak wazny jest dobry kampus w skali od 1 do 5 (gdzie 5 to bardzo wazny a 1 to nieistotny) ${
  campus !== 1 ? "Tak" : "Nie"
}
        - Możliwości finansowania: ${financingOptions}
        - Inne opcje finansowania: ${financingOther}
        - jak wazne sa zajecia praktyczne w skali od 1 do 5: ${practics}
        - Preferowane regiony: ${regionOptions}
        - Typy uczelni: ${universityTypeOptions}
    
        Pytania:
        1. Które uczelnie w preferowanych regionach oferują najlepsze programy zgodne z moimi zainteresowaniami?
        
    
        Dziękuję za pomoc!
       ${responseLanguage}`;
      const response = await callGPT(message);

      const gptResponse = response.choices[0].message.content;
      functions.logger.info(gptResponse);

      return { response: gptResponse };
    } catch (error) {
      functions.logger.error("Błąd", error);
      throw new functions.https.HttpsError("internal", "Błąd");
    }
  }
);
