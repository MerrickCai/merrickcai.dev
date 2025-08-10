"use client";

import { toast } from "sonner";
import type { ActionState } from "@/app/comments/types/comments.types";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

import { createComment } from "@/app/comments/services/createComment";

const initialState: ActionState = {
  success: false,
  error: "",
  message: "",
};

export default function CommentForm() {
  const [state, formAction, isPending] = useActionState(createComment, initialState);

  useEffect(() => {
    toast.dismiss();
    if (state.success && state.message) {
      toast.success(state.message, {
        description: "Your comment has been posted successfully!",
        duration: 4000,
      });
    } else if (state.error) {
      toast.error("Failed to post comment", {
        description: state.error,
        duration: 5000,
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-4 sm:space-y-6">
      <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            disabled={isPending}
            className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-base text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={256}
            disabled={isPending}
            className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-base text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Comment *
        </label>
        <textarea
          id="comment"
          name="comment"
          required
          rows={4}
          maxLength={1000}
          disabled={isPending}
          className="w-full resize-none rounded-xl border border-gray-300 px-3 py-2.5 text-base text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
          placeholder="Write your comment here..."
        />
      </div>

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
    >
      <span className="relative flex items-center">
        {pending ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent sm:h-5 sm:w-5"></div>
        ) : (
          <PaperAirplaneIcon className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
        )}
        {pending ? "Posting..." : "Post Comment"}
      </span>
    </button>
  );
}
