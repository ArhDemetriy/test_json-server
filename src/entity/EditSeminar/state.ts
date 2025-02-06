import { ISeminar } from '@/shared/type/Seminar'
import { EventPayload, createEvent, createStore, sample } from 'effector'

export const toEditSeminar = createEvent<ISeminar>()
export const $seminarToEdit = sample({
    clock: toEditSeminar,
    target: createStore<EventPayload<typeof toEditSeminar> | null>(null),
})
export const resetEditSeminar = createEvent()
$seminarToEdit.reset(resetEditSeminar)
