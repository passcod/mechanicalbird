process.env.NODE_ENV = process.env.NODE_ENV || 'development'
export const dev = process.env.NODE_ENV === 'development'

const root = process.cwd()
export { root }

const watches = []
export function watch (fn = false) {
  if (fn === false) {
    watches.forEach((fn) => fn())
  } else {
    watches.push(fn)
  }
}
