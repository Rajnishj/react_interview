import React from "react";
import { comments } from "../../utils/data";
import Comment from "./Comment";
import CommentCss from "./CommentCss";
const Comments = () => {
  return (
    <div className="mt-6-mb-6">
      <div class="antialiased mx-auto max-w-screen-sm">
        <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
        {comments.map((item, index) => (
          // <CommentCss key={index} item={item} />
          <Comment key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
