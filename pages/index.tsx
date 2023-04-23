import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPosts, getAllProjects } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Project from "../interfaces/project";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md: col-span-2">
              <div className="bg-base-00 shadow-md p-6">
                <h1 className="font-semibold text-3xl p-6 text-primary">
                  Scott Weaver
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet convallis nisi. Nulla posuere, nulla vitae ultricies
                  gravida, enim nisl gravida metus, at mattis odio augue quis
                  nisl. Nulla vitae lacus nec turpis vestibulum eleifend vel
                  vestibulum felis. Sed eu sapien eros. Sed iaculis dolor sit
                  amet orci placerat fermentum. Nulla dictum tincidunt lectus
                  non tristique. Integer egestas est leo, nec vehicula lacus
                  sollicitudin vitae. Integer id luctus nibh. In pharetra felis
                  a nisi tincidunt vehicula. Pellentesque efficitur pretium
                  quam. Cras vehicula arcu vel lacus eleifend ultrices. Donec
                  sollicitudin nulla volutpat quam auctor, vel egestas dui
                  ornare. Vivamus tincidunt non metus eu ultricies. Maecenas
                  mauris lectus, porttitor ut placerat eu, venenatis at nunc.
                  Nunc hendrerit, ipsum in venenatis egestas, ligula quam
                  commodo ipsum, ac convallis dolor nunc eu metus. Pellentesque
                  ut pellentesque felis, sit amet ultrices diam. Aliquam mauris
                  ex, sodales ac faucibus a, ultrices id ante. Aenean porttitor
                  iaculis diam, nec dignissim arcu egestas eget. Integer
                  convallis laoreet ex, at mattis lectus porta sit amet. Donec
                  eget tortor vitae velit posuere aliquet. Integer ultricies
                  feugiat elit, malesuada porta massa vulputate nec. Sed vel
                  nunc congue, condimentum felis vitae, pellentesque erat.
                  Mauris quis pharetra libero. Vestibulum mattis, nulla at
                  dignissim aliquet, orci sem mollis arcu, in elementum ex nulla
                  vel eros. Cras id pulvinar est. Lorem ipsum dolor sit amet,
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
            <img
              src="/assets/monk.png"
              className="hidden md:block object-cover grid-cols-1"
              alt="monk"
            />
          </div>

          {/* <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 p-1 mt-2">
            <div className="bg-base-100 shadow-md p-6 mx-2">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Recent Blogs
              </h1>
              <div>
                {allPosts.map((post) => (
                  <div key={post.slug} className="m-1">
                    <a href={`/posts/${post.slug}`}>
                      <h2 className="text-xl font-medium mb-1">{post.title}</h2>
                    </a>
                    <p className="m-2">{post.excerpt}</p>
                    <a className="link-primary" href={`/posts/${post.slug}`}>
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-base-100 shadow-md p-6 mx-2">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Most Popular
              </h1>
              <div>
                {allPosts.map((post) => (
                  <div key={post.slug} className="m-1">
                    <h2 className="text-xl font-medium mb-1">{post.title}</h2>
                    <p className="m-2">{post.excerpt}</p>
                    <a className="link-primary" href={`/posts/${post.slug}`}>
                      Read More
                    </a>
                  </div>
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
