// @ts-expect-error Types don't exist
import "@fontsource-variable/inter"
// @ts-expect-error Types don't exist
import "@fontsource/cascadia-code"
// @ts-expect-error Types don't exist
import "@fontsource-variable/gelasio"

import "@/styles/index.css"

import {App} from "@/features/app"
import * as api from "@/services/api.gen.ts"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {StrictMode} from "react"
import {createRoot} from "react-dom/client"

api.config.apiPrefix = "/api/"

export const queryClient = new QueryClient()

const root = document.getElementById("root") as HTMLDivElement
createRoot(root).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
)
