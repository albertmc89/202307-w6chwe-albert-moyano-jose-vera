/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_PEOPLE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
