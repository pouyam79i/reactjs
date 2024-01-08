import ExpandableText from "./components/ExpandableText";

function App() {
  // use lorem100 to generate 100 random words
  return (
    <div>
      <ExpandableText maxChar={100}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        temporibus consequatur voluptatem laborum dicta quasi libero eos
        voluptates quibusdam. Facere explicabo quam nisi eveniet omnis voluptas
        enim ipsa, autem velit sint, expedita in accusamus a deserunt ad ex
        ullam. Fugiat nulla perspiciatis facere nobis animi dicta quisquam,
        saepe ipsa inventore, odio ut eveniet, eaque sit ducimus rem! Eius enim
        voluptas, non, quo magnam officiis aut voluptate aliquid iusto quibusdam
        voluptates. Dicta hic placeat recusandae quibusdam dolore iure, optio a
        quasi, nobis quisquam quam consequatur cupiditate voluptate saepe.
        Molestiae, soluta. Molestiae quia nobis magni consectetur sit libero
        nam, harum illum asperiores?
      </ExpandableText>
    </div>
  );
}

// Always export components
export default App;
