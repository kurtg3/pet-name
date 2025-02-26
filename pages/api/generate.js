export default function handler(req, res) {
  if (req.method === 'POST') {
    const { animal, traits } = req.body;
    
    // Basic name generation logic
    const adjectives = ['Fluffy', 'Speedy', 'Cuddly', 'Brave', 'Smart'];
    const names = ['Buddy', 'Max', 'Charlie', 'Bella', 'Luna'];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    const petName = `${randomAdjective} ${randomName}`;
    
    res.status(200).json({ name: petName });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
