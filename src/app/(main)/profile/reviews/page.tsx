"use client";
import "@/styles/sass/blog.scss";

export default function AuthorReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "MeganV.",
      avatar: "/images/avatars/avatar_02.jpg",
      product: "Miniverse - Hero Image Composer",
      timestamp: "5 Hours Ago",
      type: "good",
      content: "I’ve recently bought your theme and let me say it’s fantastic! I have a small question regarding the main files and how to install the theme. Could you help me? Thanks!",
    },
    {
      id: 2,
      name: "Cloud Templates",
      avatar: "/images/avatars/avatar_19.jpg",
      product: "Anime Party Flyer + Ticket",
      timestamp: "8 Hours Ago",
      type: "bad",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud exercitation.",
      reply: {
        name: "Odin_Design",
        avatar: "/images/avatars/avatar_09.jpg",
        timestamp: "2 Hours Ago",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud exercitation."
      }
    },
    {
      id: 3,
      name: "Haunted House",
      avatar: "/images/avatars/avatar_10.jpg",
      product: "Miniverse - Hero Image Composer",
      timestamp: "4 Months Ago",
      type: "good",
      content: "",
    },
    {
      id: 4,
      name: "Vynil Brush",
      avatar: "/images/avatars/avatar_11.jpg",
      product: "Death Machine Flyer Template",
      timestamp: "6 Months Ago",
      type: "good",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }
  ];

  return (
    <div className="author-reviews-page">
      <div className="headline simple primary">
        <h4>Customer Reviews (42)</h4>
      </div>

      <div className="comment-list">
        {reviews.map((review) => (
          <div key={review.id} className="comment-group">
            <div className="comment-wrap">
              <a href="#">
                <figure className="user-avatar medium">
                  <img src={review.avatar} alt={review.name} />
                </figure>
              </a>
              <div className="comment review">
                <p className="text-header">{review.name}</p>
                <span className="pin-tag primary">{review.product}</span>
                <p className="timestamp">{review.timestamp}</p>
                <a href="#" className="report">Report</a>
                
                <a href="#" className={`recommendation ${review.type} tooltip`} title={review.type === "good" ? "Recommended" : "Not Recommended"}>
                  <span className={review.type === "good" ? "icon-like" : "icon-dislike"}></span>
                </a>
                
                {review.content && <p>{review.content}</p>}
              </div>
            </div>

            {review.reply && (
              <div className="comment-wrap">
                <a href="#">
                  <figure className="user-avatar medium">
                    <img src={review.reply.avatar} alt={review.reply.name} />
                  </figure>
                </a>
                <div className="comment">
                  <p className="text-header">{review.reply.name}</p>
                  <span className="pin">Author</span>
                  <p className="timestamp">{review.reply.timestamp}</p>
                  <a href="#" className="report">Report</a>
                  <p>{review.reply.content}</p>
                </div>
              </div>
            )}
            <hr className="line-separator" />
          </div>
        ))}

        <div className="pager primary">
          <div className="pager-item"><p>1</p></div>
          <div className="pager-item active"><p>2</p></div>
          <div className="pager-item"><p>3</p></div>
          <div className="pager-item"><p>...</p></div>
          <div className="pager-item"><p>17</p></div>
        </div>
      </div>
    </div>
  );
}
