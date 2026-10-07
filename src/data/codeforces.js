import { useEffect, useState } from 'react'
export const CF_HANDLE = 'El7abal'
// Live data from the public Codeforces API. Nothing is hardcoded: if the request
// fails, the UI simply omits the stats panel.
export function useCodeforces() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const c = new AbortController()
    fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`, { signal: c.signal })
      .then((r) => r.json())
      .then((j) => j.status === 'OK' && setUser(j.result[0]))
      .catch(() => {})
    return () => c.abort()
  }, [])
  return user
}
