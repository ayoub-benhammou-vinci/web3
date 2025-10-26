const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // --- USERS ---
  const ayoub = await prisma.user.create({
    data: {
      name: 'Ayoub',
      email: 'ayoub@example.com',
      bankAccount: 'BE1234567890'
    }
  })

  const sara = await prisma.user.create({
    data: {
      name: 'Sara',
      email: 'sara@example.com',
      bankAccount: 'BE0987654321'
    }
  })

  const hamza = await prisma.user.create({
    data: {
      name: 'Hamza',
      email: 'hamza@example.com'
    }
  })

  console.log('✅ Users created.')

  // --- EXPENSES ---
  const dinner = await prisma.expense.create({
    data: {
      description: 'Dinner at restaurant',
      amount: 75.5,
      payerId: ayoub.id,
      participants: {
        connect: [
          { id: ayoub.id },
          { id: sara.id },
          { id: hamza.id }
        ]
      }
    }
  })

  const groceries = await prisma.expense.create({
    data: {
      description: 'Groceries for the week',
      amount: 120,
      payerId: sara.id,
      participants: {
        connect: [
          { id: sara.id },
          { id: ayoub.id }
        ]
      }
    }
  })

  console.log('✅ Expenses created.')

  // --- TRANSFERS ---
  await prisma.transfer.create({
    data: {
      amount: 25,
      sourceId: hamza.id, // Hamza envoie 25€ à Ayoub
      targetId: ayoub.id
    }
  })

  await prisma.transfer.create({
    data: {
      amount: 40,
      sourceId: ayoub.id, // Ayoub envoie 40€ à Sara
      targetId: sara.id
    }
  })

  console.log('✅ Transfers created.')
  console.log('🌱 Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
