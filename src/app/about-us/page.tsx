import Headshots from "../components/headshots";

export default function About() {
  return (
  <>
    <h1 className="m-5 p-1 text-black text-4xl">About</h1>
    <p className="m-5 p-1 text-black text-lg"> Our goal lies in empowering and informing students and educators to attain their potentials in higher levels of professional and educational development. </p>
    <p className="m-5 p-1 text-black">The Society of Women Engineers is a national non-profit, educational service organization. One of our goals is to inform students and educators of the opportunities open to all genders in the field of engineering. The society serves as an information center for gender minorities in engineering and encourages them to attain high levels of educational and professional achievement. At the collegiate level, our section works to create a lasting network among the various types of engineering students and to partake in outreach events that spread awareness and interest in our field. We hope to help our peers advance through their college careers, provide them resources and connections that they need to achieve their goals, and show young generations that they can aspire to be engineers. </p>
    <h3 className="m-5 p-1 text-black">Meet the Officers!</h3>
    <Headshots />
  </>
  )
  ;
}