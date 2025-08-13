import * as api from "@/services/api.gen.ts"
import {useQuery} from "@tanstack/react-query"

export function App() {
    const query = useQuery({
        queryKey: ["hello"],
        queryFn: api.hello,
    })
    return (
        <div className="p-4">
            <pre className="text-mono text-xs">{JSON.stringify(query, null, 4)}</pre>
        </div>
    )
}
