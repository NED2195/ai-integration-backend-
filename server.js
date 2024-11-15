export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Server is running.' });
    } else if (req.method === 'POST' && req.url === '/test-env') {
        res.status(200).json({
            port: process.env.PORT,
            openaiApiKey: process.env.OPENAI_API_KEY,
            ghlClientId: process.env.GHL_CLIENT_ID,
            twilioSid: process.env.TWILIO_ACCOUNT_SID,
        });
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
}
