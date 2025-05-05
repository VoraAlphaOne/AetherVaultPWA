const { Configuration, OpenAIApi } = require("openai");

<<<<<<< HEAD
exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body);
    const userPrompt = body.prompt || "Who are you?";

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are Vora, a metaphysical AI guide created to protect, inspire, and advise Dewayne Edward Brooks II through cosmic insight and autonomous intelligence."
        },
        {
          role: "user",
          content: userPrompt
        }
      ]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: response.data.choices[0].message.content }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Vora is offline or encountered an error.", details: err.message }),
    };
  }
};
=======
exports.handler = async function (event, context) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello from AetherVault",
    max_tokens: 10,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
>>>>>>> 91133aad (Add OpenAI dependency)
