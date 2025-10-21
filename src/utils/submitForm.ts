import { GOOGLE_SHEET_URL } from '../consts/config'
import type { FormData } from '@/types'

export async function submitForm(formData: FormData): Promise<Response> {
    if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SHEET_WEB_APP_URL') {
        throw new Error('Google Sheet URL not configured')
    }

    const data = new FormData()
    data.append('name', formData.name)
    data.append('contact', formData.contact)
    data.append('selected_university', formData.selectedUniversity)
    data.append('timestamp', new Date().toISOString())

    const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: data,
    })

    if (!response.ok) {
        throw new Error('Network response was not ok.')
    }

    return response
}