"use client";
import "@/styles/sass/blog.scss";

export default function AuthorMessagesPage() {
  const comments = [
    {
      id: 1,
      name: "MeganV.",
      avatar: "/images/avatars/avatar_02.jpg",
      purchased: true,
      timestamp: "5 Hours Ago",
      content: "I’ve recently bought your theme and let me say it’s fantastic! I have a small question regarding the main files and how to install the theme. Could you help me? Thanks!",
    },
    {
      id: 2,
      name: "Cloud Templates",
      avatar: "/images/avatars/avatar_19.jpg",
      purchased: false,
      timestamp: "8 Hours Ago",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 3,
      name: "Lucy Diamond",
      avatar: "/images/avatars/avatar_18.jpg",
      purchased: true,
      timestamp: "10 Hours Ago",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud exercitation.",
      replies: [
        {
          id: 4,
          name: "Odin_Design",
          avatar: "/images/avatars/avatar_09.jpg",
          author: true,
          timestamp: "2 Hours Ago",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud exercitation.",
        }
      ]
    }
  ];

  return (
    <div className="author-messages-page">
      <div className="headline simple primary">
        <h4>Message Board</h4>
      </div>

      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-group">
            <div className="comment-wrap">
              <a href="#">
                <figure className="user-avatar medium">
                  <img src={comment.avatar} alt={comment.name} />
                </figure>
              </a>
              <div className="comment">
                <p className="text-header">{comment.name}</p>
                {comment.purchased && <span className="pin greyed">Purchased</span>}
                <p className="timestamp">{comment.timestamp}</p>
                <a href="#" className="report">Report</a>
                <p>{comment.content}</p>
              </div>
            </div>
            
            {comment.replies?.map((reply) => (
              <div key={reply.id} className="comment-wrap">
                <a href="#">
                  <figure className="user-avatar medium">
                    <img src={reply.avatar} alt={reply.name} />
                  </figure>
                </a>
                <div className="comment">
                  <p className="text-header">{reply.name}</p>
                  {reply.author && <span className="pin">Author</span>}
                  <p className="timestamp">{reply.timestamp}</p>
                  <a href="#" className="report">Report</a>
                  <p>{reply.content}</p>
                </div>
              </div>
            ))}
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
        <div className="clearfix"></div>

        <hr className="line-separator" />
        <h3>Leave a Comment</h3>
        <div className="comment-wrap comment-reply">
          <figure className="user-avatar medium">
            <img src="/images/avatars/avatar_09.jpg" alt="author" />
          </figure>
          <form className="comment-reply-form">
            <textarea name="treply" placeholder="Write your comment here..."></textarea>
            <button className="button primary">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
