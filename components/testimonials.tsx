const data = [
  {
    name: "Dylan Lein-Hellios",
    date: "August 2022",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFshHeu69MNMg/profile-displayphoto-shrink_100_100/0/1628635637252?e=1687996800&v=beta&t=wtPypcDe4guFzak8kXPua4t-BUicqR8KTaXu3Qib4wo",
    text: `  Scott's mentorship was instrumental to starting my career as a
    software engineer. I've known Scott for many years, and I credit his
    guidance and encouragement with helping me finally make the leap to
    engineering. Be it through kind words and advice, or hopping
    directly on a call to help me troubleshoot a problem in my code, I
    have always been able to count on Scott. We shared some time at
    Olive, and even though he was not my direct manager, he always took
    time to help where he could. His patient and knowledgeable approach
    would be a boon to any team. Scott displayed outstanding skill in
    JavaScript, TypeScript, SQL, and Python, all while being a natural
    leader and mentor. I recommend Scott for any role requiring strong
    technical ability and leadership.`,
  },
  {
    name: "Ramon Grullon",
    date: "July 2020",
    image:
      "https://media.licdn.com/dms/image/D4E35AQHhBvVm2mncmg/profile-framedphoto-shrink_100_100/0/1681326105760?e=1682956800&v=beta&t=7TU3EXz2xgT81dkyNJH8sJoubplc4cRgpf3ubtIkqW4",
    text: ` Scott is an incredible developer who showed leadership and skill on
    a project we worked on together. Scott always found time to help
    mentor and teach to the entire team. His work on JavaScript, C#, and
    SQL were top notch and helped our project meet our deliverables. I
    would highly recommend Scott for any company looking for a highly
    skilled Full Stack Engineer with leadership.`,
  },
  {
    name: "Casey Peterson",
    date: "February 2018",
    image:
      "https://media.licdn.com/dms/image/C5103AQE-gcxXAJIArA/profile-displayphoto-shrink_100_100/0/1516876544728?e=1687996800&v=beta&t=778CqPiHN9xcRz-ua2QWQrmlpjMkzIwvFRn7jZhj52Q",
    text: `Scott was essential in providing Subject Matter Expertise, Lead Technical experience, and continued Mentorship for our team regarding a project that predicts to earn 75M within the next few years. He is extremely knowledgeable in Java, JavaScript, NodeJS, Express and other API service building architecture. Scott is a great colleague and will always strive for success while continuing to put the team's best interests first. `,
  },
  {
    name: "Aaron McGuinness",
    date: "Febraury 2018",
    image:
      "https://media.licdn.com/dms/image/C5603AQHueDmw-HihQQ/profile-displayphoto-shrink_100_100/0/1557750653609?e=1687996800&v=beta&t=RbPOORolrsmirEXTUsBnArGNZloA4PAuuDCcCYElQxA",
    text: `Scott has been a great mentor for me in my on boarding at my first software developer role. He has excellent skills in both front end and back end systems, which enables him to easily jump on any task or project and get work done efficiently `,
  },
];

import Testimonial from "./testimonial";

const Testimonials = () => {
  return (
    <div className="max-h-screen overflow-y-scroll scroll-m-0 scroll-p-0 m-0 scroll-bar">
      <div className="grid-cols-1">
        {data.map((testimonial, i) => (
          <Testimonial {...testimonial} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
