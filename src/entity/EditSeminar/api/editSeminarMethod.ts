import { fetchWith } from '@/shared/api/server'
import type { ISeminar } from '@/shared/type/Seminar'

type ISeminars = ISeminar[]
const SEMINARS_PATH = '/seminars'
export const editSeminarMethod = async (id: ISeminar['id']) =>
    fetchWith<ISeminars>({ method: 'EDIT', path: SEMINARS_PATH + `/${id}` })
