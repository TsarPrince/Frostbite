import Razorpay from 'razorpay'
import shortid from 'shortid'

export default async function handler(req, res) {
  const razorpay = new Razorpay({
    key_id: 'rzp_test_RgVUs08sl96CVM',
    key_secret: 'Z4056W6e7TG8ueGzLwyKwKSS'
  })
  const payment_capture = 1
  const amount = 499
  const currency = 'INR'
  const options = {
    "amount": amount * 100,
    "currency":currency,
    "receipt": shortid.generate(),
    "payment_capture":payment_capture
  }
  console.log(options)
  try {
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    })
  } catch (error) {
    console.log(error)
  }
  }