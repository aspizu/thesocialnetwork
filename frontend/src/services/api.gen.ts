export const config = { apiPrefix: "/" };
async function callApi<T>(name: string, parameters: any): Promise<T> {
  const response = await fetch(`${config.apiPrefix}${name}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(parameters),
    credentials: 'include',
  });
  if (!response.ok) throw new Error(await response.text());
  return await response.json();
}

export async function hello(parameters: HelloParameters = {}):Promise<string>{
  return callApi<string>("hello", parameters);
}

export interface HelloParameters{}