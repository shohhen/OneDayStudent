import type { University } from '@/types'

export function calculateResults(
    finalAnswers: Record<string, string>,
    universities: University[]
): University[] {
    const scores: Record<string, number> = {}

    universities.forEach(uni => {
        scores[uni.id] = 0
        uni.tags.forEach(tag => {
            if (Object.values(finalAnswers).includes(tag)) {
                scores[uni.id]++
            }
        })
        if (uni.tags.includes(finalAnswers.field)) {
            scores[uni.id] += 2
        }
    })

    const sortedUniIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a])
    const topTwoIds = sortedUniIds.slice(0, 2)

    const finalRecommendations = topTwoIds.map(id =>
        universities.find(uni => uni.id === id)
    ).filter((uni): uni is University => uni !== undefined)

    return finalRecommendations
}