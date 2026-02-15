import Image from "next/image";
const teamMembers = [
  { id: 1, name: 'Jessica Lu', role: 'Co-President', img: '/imgs/jessica.png' },
  { id: 2, name: 'Hannah Cutler', role: 'Co-President', img: '/imgs/hannah.png' },
  { id: 3, name: 'Lana Wong', role: 'External VP', img: '/imgs/lana.png' },
  { id: 4, name: 'Riona Pampati', role: 'Internal VP', img: '/imgs/riona.png' },
  { id: 5, name: 'Palak Tandon', role: 'Treasurer', img: '/imgs/palak.png' },
  { id: 6, name: 'Karen Yuan', role: 'Secretary', img: '/imgs/karen.png' },
  { id: 7, name: 'Emily Lao', role: 'Marketing Chair', img: '/imgs/emily.png' },
  { id: 8, name: 'Varsha Narasiman', role: 'Operations Chair', img: '/imgs/varsha.png' },
  { id: 9, name: 'Lavinna Wu', role: 'Fundraising Chair', img: '/imgs/lavinna.png' },
  { id: 10, name: 'Saanvi Pabbichetty', role: 'Outreach Chair', img: '/imgs/saanvi.png' },
  { id: 11, name: 'Pavani', role: 'Freshman Rep', img: '/imgs/pavani.png' },
  { id: 12, name: 'Remy Wong', role: 'Tech Team Captain', img: '/imgs/remy.png' },
  { id: 13, name: 'Isabella Yang', role: 'Tech Team Lead', img: '/imgs/isabella.png' },
  { id: 14, name: 'Jasmin Lin', role: 'Tech Team Lead', img: '/imgs/jasmin.png' },
];

export default function Headshots() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {teamMembers.map((person) => (
        <div key={person.id} className="relative aspect-square">
          <Image
            src={person.img}
            alt={person.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-full object-cover"
          />
          <p className="text-center mt-2">{person.name}</p>
          <p className="text-center mt-2">{person.role}</p>
        </div>
      ))}
    </div>
  );
}