export default function classJoiner(...classes) {
    return classes.filter(Boolean).join(' ')
}