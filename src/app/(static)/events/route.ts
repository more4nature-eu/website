import fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const events = JSON.parse(jsonData);

  const futureEvents = events.filter((event: { date: string }) => {
    const eventDate = new Date(event.date);
    return eventDate > new Date();
  });

  res.status(200).json(futureEvents);
}
