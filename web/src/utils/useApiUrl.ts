export default (url: string) => {
    return import.meta.env.VITE_API_URL.replace(/[/\\]+$/, "") + "/" + url.replace(/^[/\\]+/, "")
}