import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  &, &.light-mode {

   --gray-50: #f9fafb;
   --gray-100: #f3f4f6;
   --gray-200: #e5e7eb;
   --gray-300: #d1d5db;
   --gray-400: #9ca3af;
   --gray-500: #6b7280;
   --gray-600: #4b5563;
   --gray-700: #374151;
   --gray-800: #1f2937;
   --gray-900: #111827;
   --gray-950: #030712;

  }

  &.dark-mode {
    --gray-50: #030712;
    --gray-100: #111827;
    --gray-200: #1f2937;
    --gray-300: #374151;
    --gray-400: #4b5563;
    --gray-500: #6b7280;
    --gray-600: #9ca3af;
    --gray-700: #d1d5db;
    --gray-800: #e5e7eb;
    --gray-900: #f3f4f6;
    --gray-950: #f9fafb;
  }

   --blue-50: #eff6ff;
   --blue-100: #dbeafe;
   --blue-200: #bfdbfe;
   --blue-300: #93c5fd;
   --blue-400: #60a5fa;
   --blue-500: #3b82f6;
   --blue-600: #2563eb;
   --blue-700: #1d4ed8;
   --blue-800: #1e40af;
   --blue-900: #1e3a8a;
   --blue-950: #172554;

   --violet-50: #f5f3ff;
   --violet-100: #ede9fe;
   --violet-200: #ddd6fe;
   --violet-300: #c4b5fd;
   --violet-400: #a78bfa;
   --violet-500: #8b5cf6;
   --violet-600: #7c3aed;
   --violet-700: #6d28d9;
   --violet-800: #5b21b6;
   --violet-900: #4c1d95;
   --violet-950: #2e1065;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-family: roboto, sans-serif;
    background-color: var(--blue-100);
    color: var(--gray-800);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  a, button {
    cursor: pointer;
  }


  a:hover, button:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  }

  *:disabled {
    cursor: not-allowed;
  }


  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;
