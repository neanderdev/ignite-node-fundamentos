export function buildRoutePath(path) {
    const routeParameterRegex = /:([a-zA-Z]+)/g

    console.log(Array.from(path.matchAll(routeParameterRegex)))
}
