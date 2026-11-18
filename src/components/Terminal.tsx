/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, MessageSquare, Clock } from "lucide-react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { Story } from "../types";

const AUTHOR_MAX_LENGTH = 40;
const STORY_MIN_LENGTH = 3;
const STORY_MAX_LENGTH = 500;

function formatRelativeTime(date: Date | null): string {
  if (!date) return "Just now";
  const diffSeconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diffSeconds < 10) return "Just now";
  if (diffSeconds < 60) return `${diffSeconds}s ago`;
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Terminal() {
  const [author, setAuthor] = useState<string>("");
  const [storyText, setStoryText] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [asyncError, setAsyncError] = useState<Error | null>(null);

  useEffect(() => {
    const storiesRef = collection(db, "stories");
    const storiesQuery = query(
      storiesRef,
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(
      storiesQuery,
      (snapshot) => {
        const loadedStories: Story[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            author: typeof data.author === "string" ? data.author : "Anonymous",
            text: typeof data.text === "string" ? data.text : "",
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null,
          };
        });
        setStories(loadedStories);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        try {
          handleFirestoreError(error, OperationType.LIST, "stories");
        } catch (err) {
          setAsyncError(err instanceof Error ? err : new Error(String(err)));
        }
      }
    );

    return () => unsubscribe();
  }, []);

  if (asyncError) {
    throw asyncError;
  }

  const handleSubmitStory = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setSubmitted(false);

    const cleanText = storyText.trim().slice(0, STORY_MAX_LENGTH);
    const cleanAuthor = author.trim().slice(0, AUTHOR_MAX_LENGTH) || "Anonymous";

    if (cleanText.length < STORY_MIN_LENGTH) {
      setValidationError(`Please enter at least ${STORY_MIN_LENGTH} characters.`);
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, "stories"), {
        author: cleanAuthor,
        text: cleanText,
        createdAt: serverTimestamp(),
      });
      setStoryText("");
      setAuthor("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.CREATE, "stories");
      } catch (err) {
        setAsyncError(err instanceof Error ? err : new Error(String(err)));
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="terminal" className="relative bg-[#0A0A0B] px-6 md:px-16 lg:px-24 py-28 md:py-36">
      <div className="max-w-3xl mx-auto space-y-12">

        {/* Simple Story Submission Form */}
        <div className="border-[4px] border-[#454545] bg-[#0A0A0B] p-6 md:p-10 space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-display text-3xl md:text-4xl text-[#E2E2E2] tracking-tight font-extrabold uppercase">
              SHARE YOUR STORY
            </h2>
            <p className="font-mono text-xs md:text-sm text-[#6978a0] leading-relaxed">
              Submit your story below. Every story posted is displayed publicly on the wall below.
            </p>
          </div>

          <form onSubmit={handleSubmitStory} className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="story-author"
                className="font-mono text-xs text-[#6978a0] uppercase tracking-wider block font-bold"
              >
                NAME OR HANDLE (OPTIONAL)
              </label>
              <input
                id="story-author"
                type="text"
                disabled={submitting}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                maxLength={AUTHOR_MAX_LENGTH}
                placeholder="Anonymous"
                className="w-full bg-[#0F0F10] border-2 border-[#454545] focus:border-[#FF3B30] px-4 py-3 font-mono text-sm text-[#E2E2E2] focus:outline-none placeholder:text-[#454545] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="story-text"
                  className="font-mono text-xs text-[#E2E2E2] uppercase tracking-wider block font-bold"
                >
                  YOUR STORY
                </label>
                <span className="font-mono text-[10px] text-[#6978a0] tabular-nums">
                  {storyText.length}/{STORY_MAX_LENGTH}
                </span>
              </div>
              <textarea
                id="story-text"
                required
                disabled={submitting}
                value={storyText}
                onChange={(e) => {
                  setStoryText(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                maxLength={STORY_MAX_LENGTH}
                placeholder="Write your story here..."
                className="w-full bg-[#0F0F10] border-2 border-[#454545] focus:border-[#FF3B30] p-4 font-mono text-sm text-[#E2E2E2] h-32 focus:outline-none placeholder:text-[#454545] resize-none transition-colors"
              />
            </div>

            {validationError && (
              <p className="font-mono text-xs text-[#FF3B30]">{validationError}</p>
            )}

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 bg-emerald-950/20 border border-emerald-500/40 px-4 py-3 font-mono text-xs text-emerald-400"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your story has been posted to the wall.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={submitting || storyText.trim().length < STORY_MIN_LENGTH}
              className={`w-full text-display text-base md:text-lg py-4 transition-all duration-200 font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer select-none ${
                submitting || storyText.trim().length < STORY_MIN_LENGTH
                  ? "bg-[#454545] text-gray-500 cursor-not-allowed"
                  : "bg-[#FF3B30] hover:bg-[#CC2F26] text-[#0A0A0B]"
              }`}
            >
              <Send className="w-4 h-4" />
              {submitting ? "POSTING STORY..." : "POST STORY"}
            </button>
          </form>
        </div>

        {/* Public Story Wall - Always Visible */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#454545] pb-4">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-[#FF3B30]" />
              <h3 className="text-display text-xl md:text-2xl text-[#E2E2E2] font-extrabold uppercase tracking-tight">
                POSTED STORIES
              </h3>
            </div>
            <span className="font-mono text-xs text-[#6978a0] uppercase tracking-widest">
              {stories.length} {stories.length === 1 ? "STORY" : "STORIES"}
            </span>
          </div>

          {loading ? (
            <div className="border-2 border-[#454545] bg-[#0F0F10] p-8 text-center font-mono text-xs text-[#6978a0]">
              Loading stories...
            </div>
          ) : stories.length === 0 ? (
            <div className="border-2 border-dashed border-[#454545] bg-[#0F0F10]/60 p-8 text-center font-mono text-xs text-[#6978a0]">
              No stories posted yet. Be the first to share yours above.
            </div>
          ) : (
            <div className="space-y-4">
              {stories.map((story) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-2 border-[#454545] bg-[#0F0F10] p-5 md:p-6 space-y-3 hover:border-[#FF3B30]/60 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 font-mono text-xs">
                    <span className="text-[#FF3B30] font-bold uppercase tracking-wider truncate">
                      {story.author}
                    </span>
                    <span className="text-[#6978a0] flex items-center gap-1 shrink-0 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {formatRelativeTime(story.createdAt)}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-[#E2E2E2] leading-relaxed whitespace-pre-wrap break-words">
                    {story.text}
                  </p>
                </motion.article>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
