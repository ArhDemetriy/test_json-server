import { fetchWith } from '@/shared/api/server'
import type { ISeminar } from '@/shared/type/Seminar'

const SEMINARS_PATH = '/seminars'

type IEditSeminar = Pick<ISeminar, 'id'> & Partial<Omit<ISeminar, 'id'>>

export const editSeminarMethod = async (body: IEditSeminar) =>
    fetchWith({
        method: 'PATCH',
        path: SEMINARS_PATH + `/${body.id}`,
        body: JSON.stringify(body),
    })
