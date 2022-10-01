import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const teams = await prisma.team.findMany({
    orderBy: {
      score: 'desc',
    },
    where: {
      disqualified: false,
    },
  });
  res.status(200).json({ teams });
}
