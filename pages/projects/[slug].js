import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Image from "next/image";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;
  max-width: 60vw;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const BigText = styled.span`
  font-size: 5rem;
  color: #465a69;
`;

const DescText = styled.span`
  color: black;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: #465a69;
  padding-top: 0.5rem;
`;

const SmallText = styled.span`
  color: grey;
  font-weight: 500rem;
  color: #465a69;
`;

const StoryBox = styled.div`
  padding-top: 2rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 2.5rem;
  text-decoration: auto;

  a {
    text-decoration: underline;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const Post = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Navbar />
      <PostContainer>
        <Heading>
          <SmallText>{post.date}</SmallText>
          <BigText>{post.title}</BigText>
          <DescText>{post.excerpt}</DescText>
        </Heading>
        {post.coverImage ? (
          <div>
            <StyledImage src={post.coverImage} width={"1000"} height={"800"} />
          </div>
        ) : null}
        <StoryBox dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostContainer>
      <Footer />
    </div>
  );
};
export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "ogImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
