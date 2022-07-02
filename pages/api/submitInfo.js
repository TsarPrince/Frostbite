// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(`${req.method} request recieved`);

  if (req.method === 'POST') {  
    console.log(req.body)
    res.status(200).json({ name: 'John Doe' })
  } else {

  }
}
