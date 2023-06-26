// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.cookies);

  // vamos a poder ver las cookies en el llamado con axios
  res.status(200).json({
    name: 'John Doe',
    ...req.cookies
  })
}
