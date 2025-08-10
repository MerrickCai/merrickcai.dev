import { UserIcon, ClockIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import formatTimestamp from "@/lib/utils/formatTimestamp";
import { getComments } from "@/app/comments/services/getComments";

export default async function CommentList() {
  const comments = await getComments();

  if (comments.length === 0) {
    return (
      <div className="py-8 text-center sm:py-12">
        <ChatBubbleLeftIcon className="mx-auto mb-3 h-12 w-12 text-gray-400 sm:mb-4 sm:h-16 sm:w-16" />
        <h3 className="mb-2 text-base font-medium text-gray-900 sm:text-lg dark:text-white">No comments yet</h3>
        <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">Be the first to leave a comment!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-r-lg border-l-4 border-blue-500/30 bg-gray-50/50 p-3 transition-colors duration-200 hover:bg-gray-100/50 sm:rounded-r-xl sm:p-4 dark:bg-gray-700/30 dark:hover:bg-gray-600/30"
        >
          <div className="flex items-start space-x-2 sm:space-x-3">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 sm:h-8 sm:w-8 dark:bg-blue-400/10 dark:text-blue-400">
              <UserIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex flex-col gap-1 sm:mb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                <h3 className="truncate text-sm font-medium text-gray-900 sm:text-base dark:text-white">
                  {comment.name}
                </h3>
                <div className="flex flex-shrink-0 items-center text-xs text-gray-500 dark:text-gray-400">
                  <ClockIcon className="mr-1 h-3 w-3" />
                  {formatTimestamp(comment.createdAt, "en-US", "America/Los_Angeles")}
                </div>
              </div>
              <p className="text-sm leading-relaxed break-words whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {comment.comment}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
