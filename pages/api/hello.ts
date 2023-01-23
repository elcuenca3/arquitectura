import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const api = "http://localhost:3001/items";
    await fetch(api, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: req.body,
    });

    return res.status(200).json({ hola: "mundo" });
  }

  if(req.method == "GET"){
    const response = await fetch("http://localhost:3001/items",{
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const comments = await response.json
    return res.status(200).json(comments)
    
  }
  return res.status(400).json({ error: "no se encontro nada" });
};

export default handler;
