import { useState, useRef, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Add":
      return [action.blog, ...state];
    case "Remove":
      return state.filter((blog, index) => index != action.index);

    default:
      return [];
  }
}

//Blogging App using Hooks
export default function Blog() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [formdata, setFormdata] = useState({ title: "", content: "" });
  //const [blog, setBlog] = useState([]);
  const [blog, dispatch] = useReducer(reducer, []);

  const titleRef = useRef();

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    //setBlog([{ title: formdata.title, content: formdata.content }, ...blog]);
    dispatch({
      type: "Add",
      blog: { title: formdata.title, content: formdata.content },
    });

    setFormdata({ title: "", content: "" });
    titleRef.current.focus();
  }
  function handleDelete(index) {
    // const updatedBlog = blog.filter((_, i) => i !== index);
    // setBlog(updatedBlog);
    dispatch({
      type: "Remove",
      index: index,
    });
  }
  useEffect(() => {
    titleRef.current.focus(); // focus when component mounts
  }, []);
  useEffect(() => {
    if (blog.length) {
      console.log(blog.length && blog[0].title);
      document.title = blog[0].title;
    } else {
      document.title = "No blogs added";
    }
  }, [blog]);

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formdata.title}
              onChange={(e) => {
                setFormdata({ ...formdata, title: e.target.value });
              }}
              ref={titleRef}
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formdata.content}
              onChange={(e) => {
                setFormdata({ ...formdata, content: e.target.value });
              }}
              required
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blog.map((entry, index) => {
        return (
          <div key={index} className="blog">
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <div className="blog-btn">
              <button
                className="btn remove"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
