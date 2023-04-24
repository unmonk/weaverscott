import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPosts, getAllProjects } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Project from "../interfaces/project";
import PostPreview from "../components/post-preview";

type Props = {
  allPosts: Post[];
  allProjects: Project[];
};

export default function Index({ allPosts, allProjects }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(allProjects);
  console.log(allPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>Scott Weaver | Software Engineer</title>
        </Head>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="md: col-span-2 flex flex-col justify-center">
              <div className="card bg-base-100 shadow-sm p-6">
                <h1 className="card-title font-semibold text-3xl p-6 text-primary">
                  Scott Weaver
                </h1>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras sit amet convallis nisi. Nulla posuere, nulla vitae
                    ultricies gravida, enim nisl gravida metus, at mattis odio
                    augue quis nisl. Nulla vitae lacus nec turpis vestibulum
                    eleifend vel vestibulum felis. Sed eu sapien eros. Sed
                    iaculis dolor sit amet orci placerat fermentum. Nulla dictum
                    tincidunt lectus non tristique. Integer egestas est leo, nec
                    vehicula lacus sollicitudin vitae. Integer id luctus nibh.
                    In pharetra felis a nisi tincidunt vehicula. Pellentesque
                    efficitur pretium quam. Cras vehicula arcu vel lacus
                    eleifend ultrices. Donec sollicitudin nulla volutpat quam
                    auctor, vel egestas dui ornare. Vivamus tincidunt non metus
                    eu ultricies. Maecenas mauris lectus, porttitor ut placerat
                    eu, venenatis at nunc. Nunc hendrerit, ipsum in venenatis
                    egestas, ligula quam commodo ipsum, ac convallis dolor nunc
                    eu metus. Pellentesque ut pellentesque felis, sit amet
                    ultrices diam. Aliquam mauris ex, sodales ac faucibus a,
                    ultrices id ante. Aenean porttitor iaculis diam, nec
                    dignissim arcu egestas eget. Integer convallis laoreet ex,
                    at mattis lectus porta sit amet. Donec eget tortor vitae
                    velit posuere aliquet. Integer ultricies feugiat elit,
                    malesuada porta massa vulputate nec. Sed vel nunc congue,
                    condimentum felis vitae, pellentesque erat. Mauris quis
                    pharetra libero. Vestibulum mattis, nulla at dignissim
                    aliquet, orci sem mollis arcu, in elementum ex nulla vel
                    eros. Cras id pulvinar est. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <ul className="list-disc mt-2">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Vivamus vestibulum dolor ac vestibulum tincidunt.</li>
                    <li>
                      Aenean sit amet enim elementum, accumsan erat a, fringilla
                      tortor.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-cols-1 object-cover">
              <img
                src="/assets/monk.png"
                className="hidden md:block z-20 max-w-sm"
                alt="monk"
              />
            </div>
          </div>
        </Container>
        <div className="hidden md:flex divider">
          <p className="italic text-xs text-current font-sans ">
            “When you’re good to others, you’re best to yourself.” - Benjamin
            Franklin
          </p>
        </div>
        {/* //Second Row  */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3  mt-2 gap-6">
            <div className="bg-base-100 shadow-sm p-6 col-span-2">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Recent Blogs
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {morePosts.map((post) => (
                  <PostPreview {...post} key={post.slug} />
                ))}
              </div>
            </div>
            <div className="col-span-1 bg-base-100 shadow-sm p-6">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Most Popular
              </h1>
              <div className="grid-cols-1 gap-3">
                <PostPreview {...heroPost} key={heroPost.slug} />
              </div>
            </div>
          </div>
        </Container>
        <div className="divider hidden md:flex">
          <p className="italic text-xs text-current font-sans ">
            “We cannot guarantee interesting and fun games just by using better
            technology and increasing the functions of the machines” - Hiroshi
            Yamauchi
          </p>
        </div>
        {/* Third Row */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-6">
            <div className="bg-base-100 shadow-sm pt-6 col-span-1 ">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Testimonials
              </h1>
              <div className="max-h-screen overflow-y-scroll scroll-m-0 scroll-p-0  m-0 p-1 scroll-bar">
                <div className="grid-cols-1">
                  <div className="chat chat-start mb-1">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="https://media.licdn.com/dms/image/C4E03AQFshHeu69MNMg/profile-displayphoto-shrink_100_100/0/1628635637252?e=1687996800&v=beta&t=wtPypcDe4guFzak8kXPua4t-BUicqR8KTaXu3Qib4wo" />
                      </div>
                    </div>
                    <div className="chat-header">Dylan Lein-Hellios</div>
                    <div className="chat-bubble">
                      Scott's mentorship was instrumental to starting my career
                      as a software engineer. I've known Scott for many years,
                      and I credit his guidance and encouragement with helping
                      me finally make the leap to engineering. Be it through
                      kind words and advice, or hopping directly on a call to
                      help me troubleshoot a problem in my code, I have always
                      been able to count on Scott. We shared some time at Olive,
                      and even though he was not my direct manager, he always
                      took time to help where he could. His patient and
                      knowledgeable approach would be a boon to any team. Scott
                      displayed outstanding skill in JavaScript, TypeScript,
                      SQL, and Python, all while being a natural leader and
                      mentor. I recommend Scott for any role requiring strong
                      technical ability and leadership.
                    </div>
                  </div>
                  <div className="chat chat-end mb-1">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="https://media.licdn.com/dms/image/D4E35AQHhBvVm2mncmg/profile-framedphoto-shrink_100_100/0/1681326105760?e=1682956800&v=beta&t=7TU3EXz2xgT81dkyNJH8sJoubplc4cRgpf3ubtIkqW4" />
                      </div>
                    </div>
                    <div className="chat-header">Ramon Grullon</div>
                    <div className="chat-bubble">
                      Scott is an incredible developer who showed leadership and
                      skill on a project we worked on together. Scott always
                      found time to help mentor and teach to the entire team.
                      His work on JavaScript, C#, and SQL were top notch and
                      helped our project meet our deliverables. I would highly
                      recommend Scott for any company looking for a highly
                      skilled Full Stack Engineer with leadership.
                    </div>
                  </div>
                </div>
                <div className="chat chat-start mb-1">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://media.licdn.com/dms/image/C4E03AQFshHeu69MNMg/profile-displayphoto-shrink_100_100/0/1628635637252?e=1687996800&v=beta&t=wtPypcDe4guFzak8kXPua4t-BUicqR8KTaXu3Qib4wo" />
                    </div>
                  </div>
                  <div className="chat-header">Dylan Lein-Hellios</div>
                  <div className="chat-bubble">
                    Scott's mentorship was instrumental to starting my career as
                    a software engineer. I've known Scott for many years, and I
                    credit his guidance and encouragement with helping me
                    finally make the leap to engineering. Be it through kind
                    words and advice, or hopping directly on a call to help me
                    troubleshoot a problem in my code, I have always been able
                    to count on Scott. We shared some time at Olive, and even
                    though he was not my direct manager, he always took time to
                    help where he could. His patient and knowledgeable approach
                    would be a boon to any team. Scott displayed outstanding
                    skill in JavaScript, TypeScript, SQL, and Python, all while
                    being a natural leader and mentor. I recommend Scott for any
                    role requiring strong technical ability and leadership.
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-base-100 shadow-sm p-6 md:col-span-2">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Recent Projects
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {morePosts.map((post) => (
                  <PostPreview {...post} key={post.slug} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts, allProjects },
  };
};
