import { NextApiRequest, NextApiResponse } from 'next.js';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    })
}