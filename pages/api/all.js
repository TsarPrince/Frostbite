export default function handler(req, res) {
  console.log(process.env.SENDGRID_API_KEY)
  res.status(200).json({ url: 'https://o3hzv34b.api.sanity.io/v2021-06-07/data/export/production/' })
}