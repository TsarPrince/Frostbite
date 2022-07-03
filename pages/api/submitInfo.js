// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(`${req.method} request recieved`);
  console.log('Hello')
  if (req.method === 'POST') {
    console.log(req.body)
    res.status(200).json({ name: 'John Doe' })
  } else if (req.method === 'GET') {
    res.status(200).json({'nikal laude': 'https://o3hzv34b.api.sanity.io/v2021-06-07/data/export/production/'})
  }
}
