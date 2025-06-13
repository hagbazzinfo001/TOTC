import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Bookmark from "../components/Bookmark";
import Pagination from "../components/Pagination";
import Related from "../components/Related";

function Blog() {
  return (
    <div>
      <style>
        {`
.bookmark-conEr {
         paddingInline: 80px;
        }          @media (max-width: 768px) {
                        .bookmark-conEr {
                            paddingInline: 30px;
                        }
                `}
      </style>
      <Nav />
      <div className="bookmark-conEr">
        <Related firstparagraph="Related Blog " />
        <div className="pagination">
          <Pagination />
        </div>
      </div>
      <h1>Blog Articles</h1> Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Officia, labore molestiae distinctio atque quasi deleniti placeat
      eveniet nam quas sint magnam maiores possimus nobis totam aliquid debitis
      expedita! Placeat, nostrum.
      <div style={{ marginBlock: "40px" }}>
        <Bookmark firstparagraph="Marketing Articles" />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
