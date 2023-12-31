import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;


  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-200: #bfdbfe;
  --color-brand-300: #93c5fd;
  --color-brand-400: #60a5fa;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;
  --color-brand-800: #1e40af;
  --color-brand-900: #1e3a8a;
  --color-brand-950: #172554;
}
[data-theme="dark"] {
  /* --color-gray-50: #030712; */
  --color-gray-50: #111827;
  --color-gray-100: #1F2937;
  --color-gray-200: #374151;
  --color-gray-300: #4B5563;
  --color-gray-400: #6B7280;
  --color-gray-500: #9CA3AF;
  --color-gray-600: #D1D5DB;
  --color-gray-700: #E5E7EB;
  --color-gray-800: #F3F4F6;
  --color-gray-900: #F9FAFB;

  --color-brand-50: #172554;
  --color-brand-100: #1E3A8A;
  --color-brand-200: #1E40AF;
  --color-brand-300: #1D4ED8;
  --color-brand-400: #2563EB;
  --color-brand-500: #3B82F6;
  --color-brand-600: #60A5FA;
  --color-brand-700: #93C5FD;
  --color-brand-800: #BFDBFE;
  --color-brand-900: #DBEAFE;
  --color-brand-950: #EFF6FF;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: roboto, sans-serif;
    background-color: var(--color-gray-50);
    color: var(--color-gray-900);
    transition: color 0.3s, background-color 0.3s;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;

  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
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
