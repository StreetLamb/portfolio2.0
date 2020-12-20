import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import markdownToHtml from "../lib/markdownToHtml";
import { getResume } from "../lib/api";
import styled from "styled-components";

const ResumeContainer = styled.div`
  display: flex:
  padding: 2rem;
  flex-direction: column;
  padding: 2rem;
  background: #bee1dc;
  color: #19646e;
`;

const Resume = ({ resume }) => {
  return (
    <div>
      <Navbar />
      <ResumeContainer dangerouslySetInnerHTML={{ __html: resume }} />
      <Footer />
    </div>
  );
};
export default Resume;

export async function getStaticProps() {
  const content = getResume();

  const resume = await markdownToHtml(content || "");
  console.log(resume);

  return {
    props: {
      resume,
    },
  };
}
