export default defineEventHandler(async (event) => {
    const { name } = getQuery(event)
    const { age } = await readBody(event)
    const { data } = await $fetch("https://jsonplaceholder.typicode.com/todos")
    return data
})