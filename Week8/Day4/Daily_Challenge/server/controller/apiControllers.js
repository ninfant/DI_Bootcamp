export function sendMessage(req, res) {
  res.status(200).json({ message: "Hello From Express " });
}

export function RegisterInputData(req, res) {
  const { message } = req.body;
  console.log("Message received from de client:", message);
  res.json({
    message: `I received your POST request. This is what you sent me: ${message}`,
  });
}
