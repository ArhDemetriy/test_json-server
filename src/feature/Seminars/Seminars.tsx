import { Column } from '@/entity/Column'
import { getSeminarsAction } from './api'
import { Seminar } from '@/entity/Seminar'
import { Suspense } from 'react'
import { DeleteSeminar } from '@/entity/DeleteSeminar'

export const Seminars = () => {
    return (
        <Suspense fallback={null}>
            <SeminarsFetch />
        </Suspense>
    )
}

const SeminarsFetch = async () => {
    const seminars = await getSeminarsAction()
    if (!seminars?.length) return null
    return (
        <div>
            <Column>
                {seminars.map(item => (
                    <Seminar
                        {...item}
                        key={item.id}
                    />
                ))}
            </Column>
            <DeleteSeminar />
        </div>
    )
}
