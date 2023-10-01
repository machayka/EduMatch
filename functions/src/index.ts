import * as functions from "firebase-functions";
import OpenAI from "openai";
import { FormSubmitValues } from "./formSubmit.models";

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

async function callGPT() {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: "Say this is a test" }],
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
  }: FormSubmitValues) => {
    try {
      functions.logger.debug(
        "Hello",
        additional,
        campus,
        financing,
        financingOther,
        practics,
        region,
        universityType
      );

      const response = await callGPT();

      functions.logger.info(response);
    } catch (error) {
      functions.logger.error("Błąd", error);
      throw new functions.https.HttpsError("internal", "Błąd");
    }
  }
);
