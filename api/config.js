// api/config.js
// সব API key এবং Firebase config একসাথে return করে
// Frontend এই একটি endpoint থেকেই সব নিয়ে নেয়

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  if (req.method === 'OPTIONS') return res.status(200).end();

  res.status(200).json({
    // Firebase config
    firebase: {
      apiKey:            process.env.FIREBASE_API_KEY,
      authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL:       process.env.FIREBASE_DATABASE_URL,
      projectId:         process.env.FIREBASE_PROJECT_ID,
      storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId:             process.env.FIREBASE_APP_ID,
    },
    // Groq API Keys — 4টি, rate limit হলে পরেরটায় যাবে
    groqKeys: [
      process.env.GROQ_API_KEY_1,
      process.env.GROQ_API_KEY_2,
      process.env.GROQ_API_KEY_3,
      process.env.GROQ_API_KEY_4,
    ].filter(Boolean),
    // Pixazo Image Generation
    pixazoKey: process.env.PIXAZO_API_KEY,
  });
};
