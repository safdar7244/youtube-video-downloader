"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("1080p");
  const [format, setFormat] = useState("mp4");

  const handleDownload = () => {
    // Implement download logic
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full text-center p-6 bg-gray-800 shadow-md">
        <h1 className="text-4xl font-bold tracking-wide text-blue-400">
          YouTube Downloader
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Download your favorite videos effortlessly!
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-10 w-full px-6">
        {/* URL Input */}
        <div className="w-full max-w-2xl">
          <input
            type="text"
            placeholder="Paste YouTube URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-4 text-lg bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Quality Selector */}
        <div className="w-full max-w-2xl mt-6">
          <label htmlFor="quality" className="block text-gray-400 text-sm mb-2">
            Select Video Quality:
          </label>
          <select
            id="quality"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full p-3 text-lg bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="1080p">1080p (Full HD)</option>
            <option value="720p">720p (HD)</option>
            <option value="480p">480p (SD)</option>
            <option value="360p">360p (Low)</option>
            <option value="240p">240p (Very Low)</option>
          </select>
        </div>

        {/* Format Selector */}
        <div className="w-full max-w-2xl mt-6">
          <label htmlFor="format" className="block text-gray-400 text-sm mb-2">
            Select Format:
          </label>
          <select
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full p-3 text-lg bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="mp4">MP4</option>
            <option value="webm">WEBM</option>
            <option value="mp3">MP3 (Audio only)</option>
          </select>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-8 w-full max-w-md bg-blue-500 text-white py-3 rounded-lg font-semibold tracking-wide hover:bg-blue-600 transition-all duration-300"
        >
          Download
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full mt-10 text-center text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
