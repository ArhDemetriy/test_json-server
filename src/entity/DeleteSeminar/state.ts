import { ISeminar } from '@/shared/type/Seminar'
import { EventPayload, createEvent, createStore, sample } from 'effector'

export const toDeleteSeminar = createEvent<Pick<ISeminar, 'title' | 'id'>>()
export const $seminarToDelete = sample({
    clock: toDeleteSeminar,
    target: createStore<EventPayload<typeof toDeleteSeminar> | null>(null),
})
export const resetDeleteSeminar = createEvent()
$seminarToDelete.reset(resetDeleteSeminar)
