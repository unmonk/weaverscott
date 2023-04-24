import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPosts, getAllProjects } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Project from "../interfaces/project";
import PostPreview from "../components/post-preview";
import Intro from "../components/intro";
import Testimonials from "../components/testimonials";

type Props = {
  allPosts: Post[];
  allProjects: Project[];
};

export default function Index({ allPosts, allProjects }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Scott Weaver | Software Engineer</title>
        </Head>
        <Container>
          <Intro />
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
            <div className="bg-base-100 shadow-sm pt-6 col-span-1 order-2 md:order-1 ">
              <h1 className="font-semibold text-3xl p-6 text-primary">
                Testimonials
              </h1>
              <Testimonials />
            </div>
            <div className="bg-base-100 shadow-sm p-6 md:col-span-2 order-1 md:order-2">
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
