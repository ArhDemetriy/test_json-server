import { fetchWith } from '@/shared/api/server'
import type { ISeminar } from '@/shared/type/Seminar'

type ISeminars = ISeminar[]
const SEMINARS_PATH = '/seminars'
export const deleteSeminarMethod = async (id: ISeminar['id']) =>
    fetchWith<ISeminars>({ method: 'DELETE', path: SEMINARS_PATH + `/${id}` })
